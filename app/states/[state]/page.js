import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import CityFilterList from "../../components/CityFilterList";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getState, getCitiesForState } from "../../../lib/locations";
import { SERVICES } from "../../../lib/services";

export async function generateMetadata({ params }) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);
  if (!state) return { title: "Location Not Found | Toilet Fixers" };

  return {
    title: `Toilet Repair ${state.name} | Emergency Toilet Plumbers`,
    description: `Need toilet repair in ${state.name}? 24/7 toilet unclogging, leak detection & fast repairs across ${state.code}. Call 833-845-0906!`,
    alternates: {
      canonical: `https://toiletfixers.us/states/${state.slug}/`,
    },
    openGraph: {
      title: `Toilet Repair ${state.name} | Emergency Toilet Plumbers`,
      description: `Need toilet repair in ${state.name}? 24/7 toilet unclogging, leak detection & fast repairs across ${state.code}. Call 833-845-0906!`,
      url: `https://toiletfixers.us/states/${state.slug}/`,
    },
  };
}

export default async function StatePage({ params }) {
  const { state: stateSlug } = await params;
  const state = getState(stateSlug);

  if (!state) {
    notFound();
  }

  const cities = getCitiesForState(stateSlug);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: `${state.name} Toilet Repair`, href: `/states/${state.slug}/` },
  ];

  const stateFaqs = [
    {
      q: `Do you provide 24/7 emergency toilet repair across ${state.name}?`,
      a: `Yes, Toilet Fixers provides round-the-clock emergency plumbing response across all counties and cities in ${state.name}. Call 833-845-0906 anytime for immediate dispatch.`,
    },
    {
      q: `How quickly can a plumber reach my home in ${state.name}?`,
      a: `With our network of local plumbers stationed throughout ${state.name}, an emergency technician typically arrives within 45 to 90 minutes.`,
    },
    {
      q: `What toilet brands do you repair in ${state.name}?`,
      a: `Our technicians carry parts for all major brands including Kohler, American Standard, Toto, Mansfield, Gerber, Sterling, Glacier Bay, and modern wall-hung or dual-flush toilets.`,
    },
    {
      q: `Do you charge extra for weekend or night calls in ${state.name}?`,
      a: `We provide clear, upfront flat-rate pricing before work begins, with no unexpected fees or surprise surcharges.`,
    },
  ];

  const stateSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "Plumber"],
    name: `Toilet Fixers - ${state.name}`,
    description: `Same day toilet repair, unclogging, leak repair, and plumbing services across ${state.name}.`,
    url: `https://toiletfixers.us/states/${state.slug}/`,
    telephone: "+18338450906",
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: state.name,
    },
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stateSchema) }}
      />
      
      {/* Breadcrumbs matching competitor style */}
      <Breadcrumbs crumbs={breadcrumbs} />

      {/* ========== HERO (Identical to Competitor) ========== */}
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
              <span>Fast Toilet Repair in {state.name}</span>
            </div>
            <h1>
              Same Day Toilet Repair in <span className="highlight">{state.name}</span>
              <br />24/7 Emergency Service
            </h1>
            <p className="hero-sub">
              Toilet overflowing, constantly running, leaking at the base, or refusing to flush? Toilet Fixers provides fast, professional same-day plumbing diagnostics, 24/7 emergency repairs, flat-rate pricing, and guaranteed results across all major toilet brands in {state.name}.
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
              <Link className="hero-secondary-btn" id="hero-services-btn" href="/services/">
                <span>View Services</span>
                <i className="ph-bold ph-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-card-frame">
              <img
                src="/images/toilet/hero_toilet.jpg"
                alt={`Professional plumber servicing residential toilet fixture in ${state.name}`}
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

      {/* ========== CITIES SECTION ========== */}
      <section className="section" id="cities" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-map-pin"></i> Coverage Area
            </span>
            <h2>Toilet Repair Services Across {state.name}</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              Toilet Fixers provides reliable toilet repair, unclogging, and plumbing diagnostics throughout {state.name}. Select your city below to check local technician availability, pricing guidelines, and service details.
            </p>
          </div>

          <CityFilterList
            cities={cities}
            stateSlug={state.slug}
            stateName={state.name}
          />
        </div>
      </section>

      {/* ========== PROCESS SECTION ========== */}
      <section className="section process-section" id="how-it-works">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-list-numbers"></i> Our Process
            </span>
            <h2>From Your Call to a Fixed Toilet in {state.name}</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 540, margin: "0 auto" }}>
              When a toilet emergency strikes, you need immediate plumbing service. Our streamlined response process ensures our expert technicians arrive fast.
            </p>
          </div>
          <div className="steps-row" style={{ marginTop: "3.5rem" }}>
            {[
              {
                num: "1",
                title: "Call 24/7 Service Hotline",
                desc: `Dial 833-845-0906 anytime. Our customer support team answers around the clock with zero hold time to schedule your ${state.name} toilet repair service.`,
              },
              {
                num: "2",
                title: "Technician Arrives Promptly",
                desc: "A licensed plumbing technician arrives at your home, equipped with advanced diagnostic equipment and common replacement components.",
              },
              {
                num: "3",
                title: "Comprehensive Diagnosis & Quote",
                desc: "Your technician inspects the flush valve, flapper, wax ring, fill valve, flange, and supply line, then provides a written flat-rate quote before any work starts.",
              },
              {
                num: "4",
                title: "Same-Day Professional Repair",
                desc: "With your approval, the repair is completed immediately. The technician tests the flush, inspects for hidden leaks, and leaves the work area completely clean.",
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

      {/* ========== SERVICES SECTION ========== */}
      <section className="section services-section" id="services">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-wrench"></i> What We Do
            </span>
            <h2>Complete Toilet & Plumbing Services in {state.name}</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              From emergency unclogging to wax ring replacements and modern high-efficiency toilet installations, our certified plumbers handle it all.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((srv) => (
              <div className="service-card" key={srv.slug}>
                <div className="service-card-image">
                  <img
                    src={srv.image}
                    alt={`${srv.name} in ${state.name} by Toilet Fixers`}
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

      {/* ========== WHY US SECTION ========== */}
      <section className="section why-section" id="why-us">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-shield-check"></i> Why Choose Us
            </span>
            <h2>Why {state.name} Homeowners Choose Toilet Fixers</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              When your toilet fails, you need a prompt, professional team that diagnoses accurately and fixes the problem right the first time.
            </p>
          </div>

          <div className="why-grid" style={{ marginTop: "3rem" }}>
            {[
              {
                icon: "ph-fill ph-clock-afternoon",
                title: "24/7 Emergency Plumbing Service",
                desc: `Toilet emergencies strike without warning. Our emergency plumbing specialists in ${state.name} are operational 24/7, 365 days a year.`,
              },
              {
                icon: "ph-fill ph-tag",
                title: "Upfront Written Pricing",
                desc: "You receive a complete diagnostic report and an upfront, flat-rate quote before any repair begins. The price you approve is the price you pay.",
              },
              {
                icon: "ph-fill ph-graduation-cap",
                title: "All Major Toilet Brands",
                desc: "Our technicians service all major toilet manufacturers: TOTO, Kohler, American Standard, Gerber, Mansfield, Glacier Bay, and Delta.",
              },
              {
                icon: "ph-fill ph-shield-check",
                title: "Guaranteed Leak-Free Repairs",
                desc: "Every repair concludes with comprehensive leak testing, flush verification, and a satisfaction guarantee on all workmanship.",
              },
              {
                icon: "ph-fill ph-truck",
                title: "Fully Stocked Service Vans",
                desc: "Our service vehicles carry common OEM components - flappers, fill valves, wax rings, flanges, and supply lines - for fast, single-visit repairs.",
              },
              {
                icon: "ph-fill ph-star-four",
                title: "Licensed Plumbing Specialists",
                desc: `Our team consists of licensed, certified, and insured plumbing specialists who know ${state.name} plumbing codes inside and out.`,
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

      {/* ========== SERVICE STANDARDS ========== */}
      <section className="section reviews-section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-certificate"></i> Service Standards
            </span>
            <h2>Our Commitment to Every {state.name} Homeowner</h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
              marginTop: "3rem",
            }}
          >
            {[
              {
                icon: "ph-fill ph-clock-countdown",
                title: "Prompt Response & Clear Arrival Windows",
                desc: "We respect your schedule. Our support team provides real-time updates and accurate arrival windows so you are never left waiting.",
              },
              {
                icon: "ph-fill ph-file-text",
                title: "Detailed Diagnostic Walkthrough",
                desc: "Before any work begins, your technician inspects the flush mechanism, seals, supply lines, and drain connections, explaining the root cause clearly.",
              },
              {
                icon: "ph-fill ph-currency-dollar",
                title: "Firm Upfront Pricing Guarantee",
                desc: "No hidden diagnostic surprises or surprise after-hours fees. You receive a firm flat-rate quote before any repair commences.",
              },
              {
                icon: "ph-fill ph-shield-check",
                title: "Leak-Free & Flush Performance Check",
                desc: "Your safety is non-negotiable. Every toilet repair concludes with comprehensive leak testing and proper water level calibration.",
              },
            ].map((standard) => (
              <div
                className="review-card"
                key={standard.title}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  background: "#fff",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: "var(--primary)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  <i className={standard.icon}></i>
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "var(--dark)", margin: 0 }}>
                  {standard.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-light)",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {standard.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="text-center">
            <span className="badge badge-outline">
              <i className="ph-fill ph-question"></i> FAQ
            </span>
            <h2 style={{ color: "#fff" }}>Frequently Asked Questions in {state.name}</h2>
            <p style={{ color: "rgba(255,255,255,.8)", maxWidth: 600, margin: ".75rem auto 0" }}>
              Got questions about toilet repair in {state.name}? Here are the most common questions homeowners ask.
            </p>
          </div>
          <div className="faq-list">
            {stateFaqs.map((faq, i) => (
              <details className="faq-item" key={i} open={i === 0 || undefined}>
                <summary className="faq-question">
                  <span>{faq.q}</span>
                  <div className="faq-icon">
                    <i className="ph-bold ph-plus"></i>
                  </div>
                </summary>
                <div className="faq-answer" style={{ maxHeight: "none" }}>
                  <p>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <h2>Toilet Repair &amp; Plumbing in {state.name} — 24/7</h2>
          <p>
            Emergency toilet leaks, severe clogs, or running valves? Our local plumbers across {state.name} are ready to dispatch immediately.
          </p>
          <div className="cta-actions">
            <a href="tel:8338450906" className="btn btn-primary" style={{ background: "#fff", color: "var(--primary-dark)", fontWeight: 700, minHeight: 52, padding: "0 2rem", fontSize: "1.05rem" }}>
              <i className="ph-fill ph-phone-call" style={{ color: "var(--accent)" }}></i> Call 24/7: 833-845-0906
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
