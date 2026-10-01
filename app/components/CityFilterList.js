"use client";
import { useState, useMemo } from "react";
import Link from "next/link";

export default function CityFilterList({ cities = [], stateSlug, stateName }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!query.trim()) return cities;
    const q = query.toLowerCase().trim();
    return cities.filter((c) => c.name.toLowerCase().includes(q) || c.slug.includes(q));
  }, [cities, query]);

  return (
    <div>
      {/* Search Input matching competitor style */}
      <div className="city-search-container">
        <div style={{ position: "relative" }}>
          <i
            className="ph-bold ph-magnifying-glass"
            style={{
              position: "absolute",
              left: "1.1rem",
              top: "50%",
              transform: "translateY(-50%)",
              color: "var(--accent)",
              fontSize: "1.2rem",
            }}
          ></i>
          <input
            type="text"
            className="city-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search your city in ${stateName}...`}
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              style={{
                position: "absolute",
                right: "1.1rem",
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "var(--text-light)",
                cursor: "pointer",
                fontSize: "1rem",
              }}
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div style={{ textAlign: "center", marginBottom: "1rem", fontSize: "0.9rem", color: "var(--text-light)" }}>
        Showing <strong>{filtered.length}</strong> of {cities.length} service locations in {stateName}
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "2.5rem", background: "var(--surface)", borderRadius: "var(--radius)" }}>
          <p style={{ margin: 0, color: "var(--text-main)" }}>
            No cities found matching &quot;{query}&quot;. Call our 24/7 hotline directly at{" "}
            <a href="tel:8338450906" style={{ color: "var(--accent)", fontWeight: 700 }}>
              833-845-0906
            </a>{" "}
            for immediate dispatch anywhere in {stateName}.
          </p>
        </div>
      ) : (
        <div className="city-chips">
          {filtered.map((city) => (
            <Link
              key={city.slug}
              className="city-chip"
              href={`/${stateSlug}/${city.slug}/`}
            >
              {city.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
