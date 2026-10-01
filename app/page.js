import Layout from "./components/Layout";
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

export const metadata = {
  title: "Toilet Repair & Plumbing Services | Toilet Fixers",
  description:
    "Toilet Fixers provides 24/7 emergency toilet repair, unclogging & flat-rate pricing. Fast service for all toilet brands. Call 833-845-0906!",
  alternates: { canonical: "https://toiletfixers.us/" },
  openGraph: {
    title: "Toilet Repair & Plumbing Services | Toilet Fixers",
    description: "Toilet Fixers provides 24/7 emergency toilet repair, unclogging & flat-rate pricing. Fast service for all toilet brands. Call 833-845-0906!",
    url: "https://toiletfixers.us/",
  },
};

export default function HomePage() {
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness", "Plumber"],
    name: "Toilet Fixers",
    description: "24/7 emergency toilet repair, replacement, and plumbing services. Rapid response, expert diagnostics, and upfront flat-rate pricing for all toilet makes and models.",
    url: "https://toiletfixers.us/",
    telephone: "+18338450906",
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "United States" },
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00", closes: "23:59"
    }]
  };

  const schemaFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know if my toilet needs professional repair?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Common signs include constant running, water pooling at the base, weak or incomplete flushing, gurgling sounds, and frequent clogs. If basic plunging doesn't resolve the issue, professional diagnosis is essential to prevent water damage and higher utility bills."
        }
      },
      {
        "@type": "Question",
        name: "Why does my toilet keep running after flushing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A continuously running toilet is typically caused by a worn flapper valve that no longer creates a proper seal, a faulty fill valve that doesn't shut off at the correct water level, or a misadjusted float. Left unrepaired, a running toilet can waste over 200 gallons of water per day."
        }
      },
      {
        "@type": "Question",
        name: "What causes a toilet to leak at the base?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A toilet leaking at the base is almost always caused by a failed wax ring seal or a cracked toilet flange. This allows sewer water to seep onto the bathroom floor with each flush, creating water damage and potential mold growth. Professional flange and wax ring replacement is the standard repair."
        }
      },
      {
        "@type": "Question",
        name: "When should I repair vs. replace my toilet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If your toilet is under 15 years old with a single issue like a flapper or fill valve, repair is cost-effective. However, if your toilet has hairline cracks in the porcelain, requires frequent repairs, or is an older model using 3.5+ gallons per flush, replacing with a modern 1.28 GPF high-efficiency toilet saves water and money long-term."
        }
      },
      {
        "@type": "Question",
        name: "Do you provide emergency toilet repair services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Toilet Fixers provides 24/7 emergency toilet repair for overflowing toilets, severe clogs, and active leaks. Our plumbing technicians respond immediately - day, night, weekends, or holidays - to prevent water damage to your home."
        }
      }
    ]
  };

  return (
    <Layout>
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }} />

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
              <span>24/7 Emergency Toilet Repair & Plumbing</span>
            </div>
            <h1>
              Toilet Repair &amp; <span className="highlight">Plumbing Services</span>
              <br />24/7 Emergency Service
            </h1>
            <p className="hero-sub">
              Toilet overflowing, constantly running, leaking at the base, or
              refusing to flush? Toilet Fixers provides professional same-day
              plumbing diagnostics, 24/7 emergency repairs, flat-rate pricing,
              and guaranteed results across all major toilet brands.
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
                alt="Professional licensed plumber servicing residential toilet fixture in modern home"
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

      {/* ========== PROCESS SECTION ========== */}
      <section className="section process-section" id="how-it-works">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-list-numbers"></i> Our Process
            </span>
            <h2>From Your Call to a Fixed Toilet in 4 Steps</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 540, margin: "0 auto" }}>
              When a toilet emergency strikes, you need immediate plumbing service.
              Our streamlined response process ensures our expert technicians arrive fast.
            </p>
          </div>
          <div className="steps-row" style={{ marginTop: "3.5rem" }}>
            {[
              {
                num: "1",
                title: "Call 24/7 Service Hotline",
                desc: "Dial 833-845-0906 anytime. Our customer support team answers around the clock with zero hold time to schedule your toilet repair service.",
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
                title: "Toilet Fixed & Fully Tested",
                desc: "Your toilet is repaired to code, flush performance and leak-free operation are verified, and reliable function is restored to your bathroom.",
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
      <section className="section" id="services" style={{ background: "var(--white)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-wrench"></i> Our Plumbing Services
            </span>
            <h2>Complete Toilet Repair & Plumbing Services Near You</h2>
            <p className="sub">
              From urgent overflowing toilets to complete toilet replacements - we
              provide professional plumbing repairs with licensed technicians
              equipped for same-day service.
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                icon: "ph-fill ph-funnel",
                title: "Clogged Toilet Repair & Unclogging",
                desc: "Professional unclogging services for severely blocked toilets that a plunger can't fix. We use commercial-grade augers and hydro-jetting to clear stubborn clogs, tree root intrusions, and mineral buildup.",
                href: "/services/clogged-toilet-repair/",
                image: "/images/toilet/clogged_toilet.jpg",
                imageAlt: "Professional plumbing technician using heavy-duty auger snake to clear clogged toilet drain",
              },
              {
                icon: "ph-fill ph-drop",
                title: "Toilet Leak Repair",
                desc: "Expert diagnosis and repair of toilet leaks at the base, tank-to-bowl connection, supply line, and internal valve seals. Stop water damage and mold growth before it spreads.",
                href: "/services/toilet-leak-repair/",
                image: "/images/toilet/toilet_leak.jpg",
                imageAlt: "Licensed plumber inspecting base wax ring and shutoff water valve toilet leak",
              },
              {
                icon: "ph-fill ph-arrows-clockwise",
                title: "Running Toilet Repair",
                desc: "A running toilet wastes up to 200 gallons per day. Our technicians diagnose and replace worn flappers, faulty fill valves, and misadjusted floats to stop the waste immediately.",
                href: "/services/running-toilet-repair/",
                image: "/images/toilet/running_toilet.jpg",
                imageAlt: "Plumbing specialist adjusting fill valve and float arm to fix continuously running toilet",
              },
              {
                icon: "ph-fill ph-gear-six",
                title: "Flapper & Fill Valve Replacement",
                desc: "Precision replacement of worn toilet flappers, fill valves, flush valves, and internal tank components. We carry universal and OEM parts for all major toilet brands.",
                href: "/services/flapper-and-fill-valve-replacement/",
                image: "/images/toilet/flapper_valve.jpg",
                imageAlt: "Hands of plumber replacing red silicone flapper and durable fill valve inside toilet tank",
              },
              {
                icon: "ph-fill ph-siren",
                title: "Emergency Toilet Repair",
                desc: "Overflowing toilet at 2 AM? Dial our emergency line for rapid priority service. Our technicians arrive ready to stop flooding, clear severe blockages, and restore safe operation without delay.",
                href: "/services/emergency-toilet-repair/",
                image: "/images/toilet/emergency_toilet.jpg",
                imageAlt: "24/7 Emergency toilet repair technician fixing overflowing toilet leak",
              },
              {
                icon: "ph-fill ph-nut",
                title: "Flange Repair",
                desc: "Broken or corroded toilet flanges cause rocking, leaking, and sewer gas odors. We remove the toilet, replace the damaged flange and wax ring, and reset the toilet level and leak-free.",
                href: "/services/flange-repair/",
                image: "/images/toilet/toilet_replacement.jpg",
                imageAlt: "Plumber repairing broken toilet flange and installing new wax ring seal on bathroom floor",
              },
              {
                icon: "ph-fill ph-buildings",
                title: "Commercial Toilet Repair",
                desc: "Fast commercial toilet repair for offices, restaurants, retail stores, and public facilities. We service commercial flush valves, pressure-assist systems, and ADA-compliant fixtures.",
                href: "/services/commercial-toilet-repair/",
                image: "/images/toilet/commercial_toilet.jpg",
                imageAlt: "Commercial plumbing technician servicing restroom Sloan flushometer valve and fixtures",
              },
            ].map((service) => (
              <div className="service-card" key={service.title}>
                <div className="service-card-image">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    width={400}
                    height={250}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="service-card-content">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <Link className="learn-more" href={service.href}>
                    Learn More <i className="ph-bold ph-arrow-right" style={{ fontSize: "1rem" }}></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Extra CTA Box */}
          <div style={{
            marginTop: "2.5rem",
            background: "linear-gradient(135deg, var(--primary-dark), var(--primary))",
            borderRadius: "var(--radius)",
            padding: "2.5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            boxShadow: "var(--shadow-md)",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.1)",
          }}>
            <h3 style={{ color: "#fff", fontSize: "1.35rem", marginBottom: ".75rem" }}>
              <i className="ph-fill ph-question" style={{ color: "var(--accent)", marginRight: ".5rem" }}></i>
              Toilet Issue We Didn&apos;t List?
            </h3>
            <p style={{
              color: "rgba(255,255,255,.8)",
              fontSize: "1rem",
              maxWidth: 620,
              marginBottom: "1.75rem",
              lineHeight: 1.7,
            }}>
              No toilet problem is too complex or unusual. From phantom flushing
              and cracked porcelain to complete sewer line backups, call our
              service line to speak with a plumbing specialist right now.
            </p>
            <a href="tel:8338450906" className="btn btn-primary" style={{ minHeight: 52, padding: "0 2.25rem" }}>
              <i className="ph-fill ph-phone-call"></i> Call 24/7: 833-845-0906
            </a>
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
            <p style={{ color: "var(--text-light)", maxWidth: 580, margin: ".75rem auto 0" }}>
              When your toilet fails, you need a prompt, professional team that
              diagnoses accurately and fixes the problem right the first time.
            </p>
          </div>

          <div className="why-grid" style={{ marginTop: "3rem" }}>
            {[
              {
                icon: "ph-fill ph-clock-afternoon",
                title: "24/7 Emergency Plumbing Service",
                desc: "Toilet emergencies strike without warning. Our emergency plumbing specialists are operational 24/7, 365 days a year, responding promptly to your home when you need help most.",
              },
              {
                icon: "ph-fill ph-tag",
                title: "Upfront Written Pricing",
                desc: "You receive a complete diagnostic report and an upfront, flat-rate quote before any repair begins. The price you approve is the price you pay - with zero hidden fees.",
              },
              {
                icon: "ph-fill ph-graduation-cap",
                title: "All Major Toilet Brands",
                desc: "Our technicians service and repair all major toilet manufacturers, including TOTO, Kohler, American Standard, Gerber, Mansfield, Glacier Bay, and Delta.",
              },
              {
                icon: "ph-fill ph-shield-check",
                title: "Guaranteed Leak-Free Repairs",
                desc: "Every toilet repair concludes with comprehensive leak testing, proper flush performance verification, and a satisfaction guarantee on all workmanship.",
              },
              {
                icon: "ph-fill ph-truck",
                title: "Fully Stocked Service Vans",
                desc: "Our service vehicles carry common OEM plumbing components - flappers, fill valves, wax rings, flanges, and supply lines - for fast, single-visit repairs.",
              },
              {
                icon: "ph-fill ph-star-four",
                title: "Licensed Plumbing Specialists",
                desc: "Our team consists of licensed, certified, and insured plumbing specialists who know local plumbing codes and residential systems inside and out.",
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

      {/* ========== STATES SECTION ========== */}
      <section className="section states-section" id="states">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-map-trifold"></i> Nationwide Coverage
            </span>
            <h2>Find Toilet Fixers in Your State</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 600, margin: ".75rem auto 0" }}>
              We provide professional toilet repair and plumbing services
              nationwide. Choose your state to find our local plumbing
              specialists in your community.
            </p>
          </div>
          <div className="state-chips">
            {STATES.map((state) => (
              <Link key={state} className="state-chip" href={`/states/${slugify(state)}/`}>
                {state}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== MAP SECTION ========== */}
      <section className="section map-section">
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-map-pin"></i> Coverage Map
            </span>
            <h2>Our Service Area</h2>
          </div>
          <div className="area-map">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              src="https://maps.google.com/maps?q=United%20States&t=&z=4&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              title="Toilet repair service area map for United States"
            ></iframe>
          </div>
        </div>
      </section>

      {/* ========== SERVICE STANDARDS ========== */}
      <section className="section" id="service-standards" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-certificate"></i> Service Standards
            </span>
            <h2>Our Commitment to Every Homeowner</h2>
            <p style={{ color: "var(--text-light)", maxWidth: 620, margin: ".75rem auto 0" }}>
              We believe in honest diagnostics, respectful service, and
              transparent pricing. Here is what you can depend on every time a
              plumbing technician arrives at your door.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
            marginTop: "3rem",
          }}>
            {[
              {
                icon: "ph-fill ph-clock-countdown",
                title: "Prompt Response & Clear Arrival Windows",
                desc: "We respect your schedule. Our support team provides real-time updates and accurate arrival windows so you are never left waiting with a broken toilet.",
              },
              {
                icon: "ph-fill ph-file-text",
                title: "Detailed Diagnostic Walkthrough",
                desc: "Before any work begins, your technician inspects the flush mechanism, seals, supply lines, and drain connections, explaining the root cause clearly in plain English.",
              },
              {
                icon: "ph-fill ph-currency-dollar",
                title: "Firm Upfront Pricing Guarantee",
                desc: "No hidden diagnostic surprises or surprise after-hours fees. You receive a firm flat-rate quote and must approve the price before any repair commences.",
              },
              {
                icon: "ph-fill ph-shield-check",
                title: "Leak-Free & Flush Performance Check",
                desc: "Your safety is non-negotiable. Every toilet repair concludes with comprehensive leak testing, flush performance verification, and proper water level calibration.",
              },
            ].map((standard) => (
              <div className="review-card" key={standard.title} style={{ display: "flex", flexDirection: "column", gap: "1rem", background: "#fff" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 10,
                  background: "var(--primary)", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.5rem",
                }}>
                  <i className={standard.icon}></i>
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "var(--dark)", margin: 0 }}>{standard.title}</h3>
                <p style={{ color: "var(--text-light)", fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>
                  {standard.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <FAQSection />
    </Layout>
  );
}

/* FAQ Client Component (for accordion toggle) */
function FAQSection() {
  return <FAQClient />;
}

function FAQClient() {
  "use client";
  const faqs = [
    {
      q: "How do I know if my toilet needs professional repair?",
      a: "Common signs include constant running, water pooling at the base, weak or incomplete flushing, gurgling sounds, and frequent clogs. If basic plunging doesn't resolve the issue, professional diagnosis is essential to prevent water damage and higher utility bills.",
    },
    {
      q: "Why does my toilet keep running after flushing?",
      a: "A continuously running toilet is typically caused by a worn flapper valve that no longer creates a proper seal, a faulty fill valve that doesn't shut off at the correct water level, or a misadjusted float. Left unrepaired, a running toilet can waste over 200 gallons of water per day.",
    },
    {
      q: "What causes a toilet to leak at the base?",
      a: "A toilet leaking at the base is almost always caused by a failed wax ring seal or a cracked toilet flange. This allows sewer water to seep onto the bathroom floor with each flush, creating water damage and potential mold growth. Professional flange and wax ring replacement is the standard repair.",
    },
    {
      q: "When should I repair vs. replace my toilet?",
      a: "If your toilet is under 15 years old with a single issue like a flapper or fill valve, repair is cost-effective. However, if your toilet has hairline cracks in the porcelain, requires frequent repairs, or is an older model using 3.5+ gallons per flush, replacing with a modern 1.28 GPF high-efficiency toilet saves water and money long-term.",
    },
    {
      q: "Do you provide emergency toilet repair services?",
      a: "Yes, Toilet Fixers provides 24/7 emergency toilet repair for overflowing toilets, severe clogs, and active leaks. Our plumbing technicians respond immediately - day, night, weekends, or holidays - to prevent water damage to your home.",
    },
  ];

  return (
    <section className="section faq-section" id="faq">
      <div className="container">
        <div className="text-center">
          <span className="badge badge-outline">
            <i className="ph-fill ph-question"></i> FAQ
          </span>
          <h2 style={{ color: "#fff" }}>Frequently Asked Questions</h2>
          <p style={{ color: "rgba(255,255,255,.8)", maxWidth: 600, margin: ".75rem auto 0" }}>
            Got questions about your toilet or plumbing system? Here are the
            most common questions homeowners ask before booking a service call.
          </p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, defaultOpen = false }) {
  "use client";
  return (
    <details className="faq-item" open={defaultOpen || undefined}>
      <summary className="faq-question">
        <span>{question}</span>
        <div className="faq-icon">
          <i className="ph-bold ph-plus"></i>
        </div>
      </summary>
      <div className="faq-answer" style={{ maxHeight: "none" }}>
        <p>{answer}</p>
      </div>
    </details>
  );
}
