"use client";

import { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react";

interface CityComboboxProps {
  onSelect: (cityName: string, stateAbbr: string) => void;
}

interface CityPrediction {
  city: string;
  state: string;
}

function formatPrediction(p: CityPrediction): string {
  return `${p.city}, ${p.state}`;
}

export function CityCombobox({ onSelect }: CityComboboxProps) {
  const [query, setQuery] = useState("");
  const [predictions, setPredictions] = useState<CityPrediction[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const debounceRef = useRef<ReturnType<typeof setTimeout>>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, []);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    const trimmed = query.trim();
    if (trimmed.length < 2) {
      setPredictions([]);
      setIsOpen(false);
      return;
    }

    setIsLoading(true);

    debounceRef.current = setTimeout(async () => {
      try {
        const res = await fetch(`/api/places?q=${encodeURIComponent(trimmed)}`);
        if (!res.ok) {
          setPredictions([]);
          return;
        }
        const data = await res.json();
        const results: CityPrediction[] = data.predictions ?? [];
        setPredictions(results);
        setIsOpen(results.length > 0);
        setActiveIndex(-1);
      } catch {
        setPredictions([]);
      } finally {
        setIsLoading(false);
      }
    }, 300);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [query]);

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (!isOpen) {
      if (e.key === "ArrowDown" && predictions.length > 0) {
        setIsOpen(true);
        setActiveIndex(0);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % predictions.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + predictions.length) % predictions.length);
        break;
      case "Enter":
        e.preventDefault();
        if (activeIndex >= 0 && predictions[activeIndex]) {
          const p = predictions[activeIndex];
          setQuery(formatPrediction(p));
          onSelect(p.city, p.state);
        }
        close();
        break;
      case "Escape":
        close();
        break;
    }
  }

  function handleSelect(p: CityPrediction) {
    setQuery(formatPrediction(p));
    onSelect(p.city, p.state);
    close();
    inputRef.current?.focus();
  }

  const listboxId = "city-listbox";

  return (
    <div className="relative">
      <label htmlFor="city-input" className="block text-lg font-semibold text-primary mb-2">
        Where&apos;s your business located?
      </label>
      <div className="relative">
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
        {isLoading && (
          <span
            className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 animate-spin rounded-full border-2 border-text/20 border-t-accent"
            aria-hidden="true"
          />
        )}
      </div>
      {isOpen && predictions.length > 0 && (
        <ul
          id={listboxId}
          role="listbox"
          className="absolute z-10 mt-1 w-full rounded-lg border border-text/10 bg-bg shadow-lg"
        >
          {predictions.map((p, index) => (
            <li
              key={`${p.city}-${p.state}`}
              id={`city-option-${index}`}
              role="option"
              aria-selected={index === activeIndex}
              className={`cursor-pointer px-4 py-3 text-lg ${
                index === activeIndex ? "bg-accent/10 text-primary" : "text-text"
              }`}
              onMouseDown={() => handleSelect(p)}
              onMouseEnter={() => setActiveIndex(index)}
            >
              {formatPrediction(p)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
