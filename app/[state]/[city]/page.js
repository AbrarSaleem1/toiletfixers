import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getState, formatCityName, isValidCity, getCitiesForState } from "../../../lib/locations";
import { SERVICES } from "../../../lib/services";

export async function generateMetadata({ params }) {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getState(stateSlug);
  if (!state || !isValidCity(stateSlug, citySlug)) {
    return { title: "Location Not Found | Toilet Fixers" };
  }

  const cityName = formatCityName(citySlug);

  return {
    title: `Toilet Repair ${cityName}, ${state.code} | Professional Toilet Repair`,
    description: `Need toilet repair in ${cityName}, ${state.code}? Fast 24/7 toilet unclogging, leak & running toilet repair for all makes. Call 833-845-0906!`,
    alternates: {
      canonical: `https://toiletfixers.us/${state.slug}/${citySlug}/`,
    },
    openGraph: {
      title: `Toilet Repair ${cityName}, ${state.code} | Professional Toilet Repair`,
      description: `Need toilet repair in ${cityName}, ${state.code}? Fast 24/7 toilet unclogging, leak & running toilet repair for all makes. Call 833-845-0906!`,
      url: `https://toiletfixers.us/${state.slug}/${citySlug}/`,
    },
  };
}

export default async function CityPage({ params }) {
  const { state: stateSlug, city: citySlug } = await params;
  const state = getState(stateSlug);

  if (!state || !isValidCity(stateSlug, citySlug)) {
    notFound();
  }

  const cityName = formatCityName(citySlug);
  const allCitiesInState = getCitiesForState(stateSlug);
  
  // Pick 14 nearby/related cities for internal linking
  const nearbyCities = allCitiesInState
    .filter((c) => c.slug !== citySlug)
    .slice(0, 14);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: `${state.name} Toilet Repair`, href: `/states/${state.slug}/` },
    { label: `Toilet Repair ${cityName}`, href: `/${state.slug}/${citySlug}/` },
  ];

  const cityFaqs = [
    {
      q: `Do you offer same-day toilet repair in ${cityName}, ${state.code}?`,
      a: `Yes! We provide same-day emergency toilet repair throughout ${cityName} and surrounding areas. Our local plumbers are on standby 24/7 to solve your toilet issues rapidly.`,
    },
    {
      q: `How quickly can a plumber reach my home in ${cityName}?`,
      a: `In most cases, an experienced licensed plumber can be at your door in ${cityName} within 45 to 90 minutes of your call.`,
    },
    {
      q: `What kinds of toilet repairs do you handle in ${cityName}?`,
      a: `We repair all toilet problems including severe clogs, overflowing bowls, broken flush valves, leaking wax seals, running toilets, wobbly flanges, and full toilet replacements.`,
    },
    {
      q: `Are your plumbers licensed and insured in ${state.name}?`,
      a: `Yes, all technicians in our network are fully licensed, background-checked, insured, and equipped with commercial-grade tools and parts.`,
    },
  ];

  const localSchema = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "Plumber"],
    name: `Toilet Fixers - ${cityName}, ${state.code}`,
    description: `Same day toilet repair, unclogging, leak detection, and plumbing services in ${cityName}, ${state.name}.`,
    url: `https://toiletfixers.us/${state.slug}/${citySlug}/`,
    telephone: "+18338450906",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: cityName,
      addressRegion: state.code,
      addressCountry: "US",
    },
    areaServed: {
      "@type": "City",
      name: `${cityName}, ${state.code}`,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cityFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      {/* Breadcrumbs */}
      <Breadcrumbs crumbs={breadcrumbs} />

      {/* ========== HERO (Competitor Theme with Exact Requested H1) ========== */}
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-indicator">
                <span className="pulse-ping"></span>
                <span className="pulse-core"></span>
              </span>
              <span>24/7 Priority Toilet Repair Active</span>
            </div>
            <div className="hero-eyebrow">
              <i className="ph-fill ph-wrench"></i>
              <span>Fast Toilet Repair in {cityName}, {state.code}</span>
            </div>
            <h1>
              Same Day Toilet Repair in <span className="highlight">{cityName}, {state.code}</span>
            </h1>
            <p className="hero-sub">
              Toilet Fixers provides homeowners in {cityName} with emergency toilet repair specialists who arrive with fully stocked trucks to diagnose clogged toilets, leaks, running valves, or faulty flanges on the first visit. We provide 24/7 emergency response — same-day service, flat-rate pricing, guaranteed performance.
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
                alt={`Professional toilet repair plumbing service in ${cityName}, ${state.code}`}
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
              <div className="feature-strip-label">Emergency Toilet Service in {cityName}</div>
            </div>
            <div className="feature-strip-item">
              <div className="feature-strip-num">All Makes</div>
              <div className="feature-strip-label">Residential & Commercial Toilets</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LOCAL INTRO SECTION ========== */}
      <section className="section local-intro" id="local-info" style={{ background: "#fff" }}>
        <div className="container">
          <div className="local-intro-grid">
            <div>
              <span className="badge">
                <i className="ph-fill ph-map-pin"></i> Serving {cityName}
              </span>
              <h2 style={{ marginTop: "1rem" }}>
                Toilet Repair &amp; Plumbing Services in {cityName}, {state.code}
              </h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, marginTop: "1rem" }}>
                When plumbing problems arise in your {cityName} home or commercial facility, having dependable, fast-responding toilet repair specialists is essential. Toilet Fixers provides fast, professional toilet diagnostics, emergency drain unclogging, and leak resolution across {cityName} and surrounding {state.name} communities.
              </p>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, marginTop: ".5rem", fontSize: ".97rem" }}>
                Our certified technicians arrive equipped with fully stocked service vehicles to diagnose fill valve failures, leaking wax rings, faulty flappers, cracked tanks, or broken floor flanges on the first visit. Whether you are dealing with an overflowing bowl at midnight or a subtle leak causing subfloor damage, we solve the problem cleanly and safely.
              </p>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, marginTop: ".5rem", fontSize: ".97rem" }}>
                Serving {cityName} with 24/7 emergency diagnostics and repair, we ensure your bathroom fixtures operate safely and efficiently. Backed by upfront flat-rate pricing and licensed plumbing specialists, we guarantee prompt response and complete peace of mind.
              </p>
              <div style={{ marginTop: "1.75rem" }}>
                <a href="tel:8338450906" className="btn btn-primary" style={{ minHeight: 48, padding: "0 1.75rem" }}>
                  <i className="ph-fill ph-phone-call"></i> Call Now: 833-845-0906
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SERVICES SECTION ========== */}
      <section className="section services-section" id="services" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-wrench"></i> What We Do
            </span>
            <h2>Complete Toilet &amp; Plumbing Services in {cityName}</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              From urgent emergency clogs to eco-friendly toilet replacements in {cityName} — we provide professional plumbing with licensed technicians equipped for same-day service.
            </p>
          </div>

          <div className="services-grid">
            {SERVICES.map((srv) => (
              <div className="service-card" key={srv.slug}>
                <div className="service-card-image">
                  <img
                    src={srv.image}
                    alt={`${srv.name} in ${cityName}, ${state.code} by Toilet Fixers`}
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
            <h2>Fast, Hassle-Free Toilet Service in {cityName}</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 540, margin: "0 auto" }}>
              When a toilet emergency strikes, you need immediate plumbing service. Our streamlined response process ensures our expert technicians arrive fast.
            </p>
          </div>
          <div className="steps-row" style={{ marginTop: "3.5rem" }}>
            {[
              {
                num: "1",
                title: "Call 833-845-0906",
                desc: `Speak to a live dispatcher 24/7 and schedule immediate dispatch to your ${cityName} address.`,
              },
              {
                num: "2",
                title: "On-Site Diagnosis",
                desc: "Your technician inspects the fixture, tests water flow, and pinpoints the exact failure point.",
              },
              {
                num: "3",
                title: "Upfront Pricing",
                desc: "You receive an all-inclusive flat rate before any repair begins. Zero surprise fees.",
              },
              {
                num: "4",
                title: "Expert Repair Done Right",
                desc: "We fix the leak, clear the line, or replace the parts on the spot, backed by our satisfaction warranty.",
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
            <h2>Why {cityName} Homeowners Choose Toilet Fixers</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              When your toilet fails, you need a prompt, professional team that diagnoses accurately and fixes the problem right the first time.
            </p>
          </div>

          <div className="why-grid" style={{ marginTop: "3rem" }}>
            {[
              {
                icon: "ph-fill ph-clock-afternoon",
                title: "24/7 Emergency Plumbing Service",
                desc: `Toilet emergencies strike without warning. Our emergency plumbing specialists in ${cityName} are operational 24/7, 365 days a year.`,
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
            <h2>Our Commitment to Every {cityName} Homeowner</h2>
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

      {/* ========== NEARBY CITIES IN STATE ========== */}
      {nearbyCities.length > 0 && (
        <section className="section nearby-section" style={{ background: "#fff" }}>
          <div className="container">
            <div className="text-center">
              <span className="badge">
                <i className="ph-fill ph-map-pin"></i> Coverage Area
              </span>
              <h2>Toilet &amp; Plumbing Repair Near {cityName}</h2>
              <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
                We also provide prompt toilet repair and plumbing services across neighboring communities in {state.name}.
              </p>
            </div>
            <div className="city-chips" style={{ marginTop: "2rem" }}>
              {nearbyCities.map((c) => (
                <Link
                  key={c.slug}
                  className="city-chip"
                  href={`/${state.slug}/${c.slug}/`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
              <Link href={`/states/${state.slug}/`} style={{ color: "var(--accent)", fontWeight: 600, textDecoration: "none", fontSize: "0.95rem" }}>
                View all cities in {state.name} →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* ========== FAQ SECTION ========== */}
      <section className="section faq-section" id="faq">
        <div className="container">
          <div className="text-center">
            <span className="badge badge-outline">
              <i className="ph-fill ph-question"></i> FAQ
            </span>
            <h2 style={{ color: "#fff" }}>Frequently Asked Questions in {cityName}, {state.code}</h2>
            <p style={{ color: "rgba(255,255,255,.8)", maxWidth: 600, margin: ".75rem auto 0" }}>
              Got questions about toilet repair in {cityName}? Here are the most common questions homeowners ask.
            </p>
          </div>
          <div className="faq-list">
            {cityFaqs.map((faq, i) => (
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
          <h2>Need Emergency Toilet Repair in {cityName}?</h2>
          <p>
            Plumbers standing by 24 hours a day, 7 days a week. Same-day service guaranteed.
          </p>
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
