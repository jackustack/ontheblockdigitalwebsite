"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";
import citiesData from "@/data/cities.json";
import type { City } from "@/data/types";

const cities: City[] = citiesData.cities as City[];

interface CityComboboxProps {
  onSelect: (cityName: string, stateAbbr: string) => void;
}

function formatCity(city: City): string {
  return `${city.name}, ${city.state}`;
}

function getMatches(query: string): City[] {
  if (!query.trim()) return cities;
  const lower = query.toLowerCase();
  return cities.filter(
    (c) =>
      c.name.toLowerCase().includes(lower) ||
      c.state.toLowerCase().includes(lower) ||
      formatCity(c).toLowerCase().includes(lower)
  );
}

export function CityCombobox({ onSelect }: CityComboboxProps) {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  const matches = getMatches(query);

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    if (matches.length > 0 && query.trim()) {
      setIsOpen(true);
    } else if (!query.trim()) {
      setIsOpen(false);
    }
  }, [query, matches.length]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!isOpen) {
      if (e.key === "ArrowDown" && matches.length > 0) {
        setIsOpen(true);
        setActiveIndex(0);
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
          const city = matches[activeIndex];
          setQuery(formatCity(city));
          onSelect(city.name, city.state);
        }
        close();
        break;
      case "Escape":
        close();
        break;
    }
  }

  function handleSelect(city: City) {
    setQuery(formatCity(city));
    onSelect(city.name, city.state);
    close();
    inputRef.current?.focus();
  }

  const listboxId = "city-listbox";

  return (
    <div className="relative">
      <label htmlFor="city-input" className="block text-lg font-semibold text-primary mb-2">
        Where&apos;s your business located?
      </label>
      <input
        ref={inputRef}
        id="city-input"
        type="text"
        role="combobox"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        aria-controls={listboxId}
        aria-activedescendant={activeIndex >= 0 ? `city-option-${activeIndex}` : undefined}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onBlur={() => setTimeout(close, 200)}
        placeholder="e.g. Oakland, CA"
        className="w-full rounded-lg border-2 border-text/20 px-4 py-3 text-lg focus:border-accent focus:outline-none"
        autoComplete="off"
      />
      {isOpen && matches.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-10 mt-1 w-full rounded-lg border border-text/10 bg-bg shadow-lg"
        >
          {matches.map((city, index) => (
            <li
              key={city.slug}
              id={`city-option-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              className={`cursor-pointer px-4 py-3 text-lg ${
                index === activeIndex ? "bg-accent/10 text-primary" : "text-text"
              }`}
              onMouseDown={() => handleSelect(city)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {formatCity(city)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
