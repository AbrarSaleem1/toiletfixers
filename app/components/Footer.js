import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <Link className="logo footer-logo" href="/">
              <span className="logo-icon">
                <i className="ph-fill ph-wrench"></i>
              </span>
              <span>
                Toilet <span style={{ color: "var(--accent)" }}>Fixers</span>
              </span>
            </Link>
            <p className="footer-desc">
              Toilet Fixers provides 24/7 residential toilet repair, emergency
              unclogging, leak diagnostics, and professional toilet replacement.
              Fast local service with upfront flat-rate pricing. Call
              833-845-0906 today!
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="footer-heading">Services</div>
            <ul>
              <li><Link href="/services/clogged-toilet-repair/">Clogged Toilet Repair</Link></li>
              <li><Link href="/services/toilet-leak-repair/">Toilet Leak Repair</Link></li>
              <li><Link href="/services/running-toilet-repair/">Running Toilet Repair</Link></li>
              <li><Link href="/services/flapper-and-fill-valve-replacement/">Flapper & Fill Valve</Link></li>
              <li><Link href="/services/emergency-toilet-repair/">Emergency Toilet Repair</Link></li>
              <li><Link href="/services/flange-repair/">Flange Repair</Link></li>
              <li><Link href="/services/commercial-toilet-repair/">Commercial Toilet Repair</Link></li>
              <li><Link href="/services/toilet-replacement/">Toilet Replacement</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="footer-heading">Company</div>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services/">All Services</Link></li>
              <li><Link href="/about/">About Us</Link></li>
              <li><Link href="/contact/">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <div className="footer-heading">24/7 Live Support</div>
            <ul>
              <li>
                <a href="tel:8338450906">
                  <i className="ph-fill ph-phone-call" style={{ marginRight: "0.4rem", color: "var(--accent)" }}></i>
                  833-845-0906
                </a>
              </li>
              <li style={{ color: "rgba(255,255,255,.7)", fontSize: ".9rem", marginTop: ".5rem" }}>
                Available 24/7/365 - Rapid Emergency Service
              </li>
              <li style={{ color: "rgba(255,255,255,.7)", fontSize: ".9rem", marginTop: ".5rem" }}>
                Licensed & Insured Plumbing Pros
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{
          marginTop: "2rem",
          paddingTop: "1.5rem",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          fontSize: "0.8rem",
          color: "rgba(255,255,255,0.5)",
          lineHeight: 1.6,
        }}>
          Disclaimer: Toilet Fixers provides residential and commercial toilet
          repair, emergency unclogging, leak diagnostics, and plumbing services.
          All diagnostics, repairs, and replacements are performed by licensed
          and insured plumbing technicians.
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © {year} Toilet Fixers. All rights reserved. &nbsp;·&nbsp;
          <Link href="/privacy-policy/" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>Privacy Policy</Link>
          &nbsp;·&nbsp;
          <Link href="/terms-of-service/" style={{ color: "rgba(255,255,255,.5)", textDecoration: "none" }}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
