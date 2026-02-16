"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";
import industriesData from "@/data/industries.json";
import type { Industry } from "@/data/types";

const industries: Industry[] = industriesData.industries as Industry[];

interface IndustryComboboxProps {
  onSelect: (value: string) => void;
}

function getMatches(query: string): Industry[] {
  if (!query.trim()) return [];
  const lower = query.toLowerCase();
  return industries.filter(
    (i) =>
      i.name.toLowerCase().includes(lower) ||
      i.aliases.some((a) => a.toLowerCase().includes(lower))
  );
}

export function IndustryCombobox({ onSelect }: IndustryComboboxProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const matches = getMatches(query);

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    if (matches.length > 0 && query.trim()) {
      setIsOpen(true);
    } else {
      close();
    }
  }, [query, matches.length, close]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!isOpen) {
      if (e.key === "ArrowDown" && matches.length > 0) {
        setIsOpen(true);
        setActiveIndex(0);
        e.preventDefault();
      }
      if (e.key === "Enter" && query.trim()) {
        onSelect(query.trim());
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % matches.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + matches.length) % matches.length);
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && matches[activeIndex]) {
          setQuery(matches[activeIndex].name);
          onSelect(matches[activeIndex].name);
        } else if (query.trim()) {
          onSelect(query.trim());
        }
        close();
        break;
      case "Escape":
        close();
        break;
    }
  }

  function handleSelect(industry: Industry) {
    setQuery(industry.name);
    onSelect(industry.name);
    close();
    inputRef.current?.focus();
  }

  const listboxId = "industry-listbox";

  return (
    <div className="relative">
      <label htmlFor="industry-input" className="block text-lg font-semibold text-primary mb-2">
        What type of business do you run?
      </label>
      <input
        ref={inputRef}
        id="industry-input"
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={activeIndex >= 0 ? `industry-option-${activeIndex}` : undefined}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(close, 200)}
        placeholder="e.g. Restaurant, Plumber, Dentist..."
        className="w-full rounded-lg border-2 border-text/20 px-4 py-3 text-lg focus:border-accent focus:outline-none"
        autoComplete="off"
      />
      {isOpen && matches.length > 0 && (
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          className="absolute z-10 mt-1 w-full rounded-lg border border-text/10 bg-bg shadow-lg"
        >
          {matches.map((industry, index) => (
            <li
              key={industry.slug}
              id={`industry-option-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              className={`cursor-pointer px-4 py-3 text-lg ${
                index === activeIndex ? "bg-accent/10 text-primary" : "text-text"
              }`}
              onMouseDown={() => handleSelect(industry)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {industry.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
