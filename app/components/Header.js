"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut",
  "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois",
  "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
  "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
  "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
  "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Split states into 4 columns
  const colSize = Math.ceil(STATES.length / 4);
  const cols = [
    STATES.slice(0, colSize),
    STATES.slice(colSize, colSize * 2),
    STATES.slice(colSize * 2, colSize * 3),
    STATES.slice(colSize * 3),
  ];

  return (
    <header id="site-header" className={scrolled ? "scrolled" : ""}>
      <div className="header-inner">
        <Link className="logo" href="/">
          <span className="logo-icon">
            <i className="ph-fill ph-wrench"></i>
          </span>
          <span>
            Toilet <span className="logo-text-accent">Fixers</span>
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="nav-links">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <button aria-haspopup="true" aria-expanded="false" style={{ cursor: "pointer" }}>
                Service Areas <i className="ph-bold ph-caret-down" style={{ marginLeft: 4 }}></i>
              </button>
              <div className="dropdown" role="region">
                <ul style={{ padding: "0.5rem", minWidth: "620px" }}>
                  <li style={{ padding: 0 }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.75rem", padding: "0.5rem" }}>
                      {cols.map((col, ci) => (
                        <div key={ci} style={{ display: "flex", flexDirection: "column" }}>
                          {col.map((state) => (
                            <Link
                              key={state}
                              href={`/states/${slugify(state)}/`}
                              style={{ padding: "0.4rem 0.5rem", fontSize: "0.85rem", display: "block", borderRadius: "6px" }}
                            >
                              {state}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <Link href="/services/">Services</Link>
            </li>
            <li>
              <Link href="/about/">About Us</Link>
            </li>
            <li>
              <Link href="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a href="tel:8338450906" className="btn btn-primary hide-mobile">
            <i className="ph-fill ph-phone-call"></i> 833-845-0906
          </a>
          <button
            className={`hamburger ${menuOpen ? "active" : ""}`}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <nav className={`mobile-nav ${menuOpen ? "open" : ""}`} aria-label="Mobile navigation">
        <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link href="/services/" onClick={() => setMenuOpen(false)}>All Services</Link>
        <Link href="/services/clogged-toilet-repair/" onClick={() => setMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.95rem" }}>
          - Clogged Toilet Repair
        </Link>
        <Link href="/services/toilet-leak-repair/" onClick={() => setMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.95rem" }}>
          - Toilet Leak Repair
        </Link>
        <Link href="/services/running-toilet-repair/" onClick={() => setMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.95rem" }}>
          - Running Toilet Repair
        </Link>
        <Link href="/services/flapper-fill-valve-replacement/" onClick={() => setMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.95rem" }}>
          - Flapper & Fill Valve Replacement
        </Link>
        <Link href="/services/emergency-toilet-repair/" onClick={() => setMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.95rem" }}>
          - Emergency Toilet Repair
        </Link>
        <Link href="/services/flange-repair/" onClick={() => setMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.95rem" }}>
          - Flange Repair
        </Link>
        <Link href="/services/commercial-toilet-repair/" onClick={() => setMenuOpen(false)} style={{ paddingLeft: "1.5rem", fontSize: "0.95rem" }}>
          - Commercial Toilet Repair
        </Link>
        <Link href="/about/" onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link href="/contact/" onClick={() => setMenuOpen(false)}>Contact</Link>
        <a
          href="tel:8338450906"
          style={{ color: "var(--accent)", fontWeight: 700, marginTop: "0.5rem" }}
        >
          <i className="ph-fill ph-phone-call"></i> Call: 833-845-0906
        </a>
      </nav>
    </header>
  );
}
