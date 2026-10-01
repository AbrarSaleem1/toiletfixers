import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";
import Link from "next/link";
import { SERVICES } from "../../lib/services";

export const metadata = {
  title: "Professional Toilet Repair Services | Toilet Fixers",
  description:
    "Explore our complete range of toilet repair services: clogged toilet unclogging, leak repair, running toilet diagnostics, flange repairs, and emergency service. Call 833-845-0906!",
  alternates: { canonical: "https://toiletfixers.us/services/" },
  openGraph: {
    title: "Professional Toilet Repair Services | Toilet Fixers",
    description:
      "Explore our complete range of toilet repair services: clogged toilet unclogging, leak repair, running toilet diagnostics, flange repairs, and emergency service. Call 833-845-0906!",
    url: "https://toiletfixers.us/services/",
  },
};

export default function ServicesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
  ];

  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />

      {/* ========== HERO ========== */}
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-indicator">
                <span className="pulse-ping"></span>
                <span className="pulse-core"></span>
              </span>
              <span>24/7 Priority Toilet Repair Service Active</span>
            </div>
            <div className="hero-eyebrow">
              <i className="ph-fill ph-wrench"></i>
              <span>Professional Plumbing Solutions</span>
            </div>
            <h1>
              Complete <span className="highlight">Toilet Repair</span>
              <br />&amp; Plumbing Services
            </h1>
            <p className="hero-sub">
              From midnight toilet overflows and stubborn clogs to silent tank leaks and wobbly flanges, our licensed plumbers arrive equipped to solve your toilet problem on the first visit. Upfront pricing, fast dispatch, guaranteed results.
            </p>
            <div className="hero-actions">
              <a href="tel:8338450906" className="hero-call-btn" id="hero-call-btn">
                <div className="hero-call-icon">
                  <i className="ph-fill ph-phone-call"></i>
                </div>
                <div className="hero-call-text">
                  <span className="hero-call-label">Call 24/7 Service</span>
                  <span className="hero-call-number">833-845-0906</span>
                </div>
              </a>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-card-frame">
              <img
                src="/images/toilet/hero_toilet.jpg"
                alt="Complete toilet repair and plumbing services"
                width={900}
                height={650}
                loading="eager"
                decoding="async"
                className="hero-main-img"
              />
              <div className="hero-same-day-badge">
                <i className="ph-fill ph-lightning"></i>
                <span>Same Day Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURE STRIP ========== */}
      <section className="feature-strip">
        <div className="container">
          <div className="feature-strip-grid feature-strip-grid-2">
            <div className="feature-strip-item">
              <div className="feature-strip-num">24/7</div>
              <div className="feature-strip-label">Emergency Toilet Repair Service</div>
            </div>
            <div className="feature-strip-item">
              <div className="feature-strip-num">All Makes</div>
              <div className="feature-strip-label">Residential & Commercial Toilets</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES GRID ========== */}
      <section className="section services-section" id="services" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-wrench"></i> What We Do
            </span>
            <h2>Our Specialized Toilet Repair Solutions</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              Explore our comprehensive range of residential and commercial toilet services below.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((srv) => (
              <div className="service-card" key={srv.slug}>
                <div className="service-card-image">
                  <img
                    src={srv.image}
                    alt={`${srv.name} by Toilet Fixers`}
                    width={400}
                    height={250}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="service-card-content">
                  <div className="service-icon">
                    <i className={`ph-fill ${srv.icon}`}></i>
                  </div>
                  <h3>{srv.name}</h3>
                  <p>{srv.shortDesc}</p>
                  <Link className="learn-more" href={`/services/${srv.slug}/`}>
                    <span>Learn More</span>
                    <i className="ph-bold ph-arrow-right"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="section process-section" id="how-it-works">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-list-numbers"></i> Our Process
            </span>
            <h2>From Your Call to a Fixed Toilet in 4 Steps</h2>
          </div>
          <div className="steps-row" style={{ marginTop: "3.5rem" }}>
            {[
              {
                num: "1",
                title: "Call 24/7 Service Hotline",
                desc: "Dial 833-845-0906 anytime. Our customer support team answers around the clock with zero hold time.",
              },
              {
                num: "2",
                title: "Technician Arrives Promptly",
                desc: "A licensed plumbing technician arrives at your home, equipped with diagnostic tools and common replacement parts.",
              },
              {
                num: "3",
                title: "Comprehensive Diagnosis & Quote",
                desc: "Your technician inspects the flush mechanism, seals, and drain lines, then provides an upfront flat-rate quote.",
              },
              {
                num: "4",
                title: "Same-Day Professional Repair",
                desc: "Repairs are completed immediately with commercial-grade parts. We test the flush and leave the area clean.",
              },
            ].map((step) => (
              <div className="step-item" key={step.num}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WHY US SECTION ========== */}
      <section className="section why-section" id="why-us">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-shield-check"></i> Why Choose Us
            </span>
            <h2>Why Homeowners Choose Toilet Fixers</h2>
          </div>

          <div className="why-grid" style={{ marginTop: "3rem" }}>
            {[
              {
                icon: "ph-fill ph-clock-afternoon",
                title: "24/7 Emergency Service",
                desc: "Operational 24/7, 365 days a year. Rapid response when you need help most.",
              },
              {
                icon: "ph-fill ph-tag",
                title: "Upfront Written Pricing",
                desc: "Transparent flat-rate quotes before any work begins. Zero hidden fees.",
              },
              {
                icon: "ph-fill ph-graduation-cap",
                title: "All Major Toilet Brands",
                desc: "Expert repairs for Kohler, Toto, American Standard, Gerber, and Mansfield.",
              },
              {
                icon: "ph-fill ph-shield-check",
                title: "Guaranteed Leak-Free",
                desc: "Every repair is pressure-tested and backed by our full workmanship warranty.",
              },
            ].map((item) => (
              <div className="why-card" key={item.title}>
                <div className="why-icon-box">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <h2>Need Immediate Toilet Service?</h2>
          <p>Technicians are standing by 24 hours a day, 7 days a week.</p>
          <div className="cta-actions">
            <a href="tel:8338450906" className="btn btn-primary" style={{ background: "#fff", color: "var(--primary-dark)", fontWeight: 700, minHeight: 52, padding: "0 2rem", fontSize: "1.05rem" }}>
              <i className="ph-fill ph-phone-call" style={{ color: "var(--accent)" }}></i> Call Now: 833-845-0906
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
