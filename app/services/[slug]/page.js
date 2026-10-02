import Layout from "../../components/Layout";
import Breadcrumbs from "../../components/Breadcrumbs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, getService } from "../../../lib/services";

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service Not Found | Toilet Fixers" };

  return {
    title: `${service.title} | Toilet Fixers`,
    description: `${service.shortDesc} Fast same-day service. Call 833-845-0906!`,
    alternates: {
      canonical: `https://toiletfixers.us/services/${service.slug}/`,
    },
    openGraph: {
      title: `${service.title} | Toilet Fixers`,
      description: service.shortDesc,
      url: `https://toiletfixers.us/services/${service.slug}/`,
    },
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: service.name, href: `/services/${service.slug}/` },
  ];

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  const faqItems = [
    {
      q: `How quickly can a plumber arrive for ${service.name}?`,
      a: "Our dispatchers route local licensed technicians immediately. In most metropolitan and suburban areas, a fully equipped technician arrives within 45 to 90 minutes.",
    },
    {
      q: "How much does toilet repair usually cost?",
      a: "We offer upfront, flat-rate pricing with zero hidden surcharges. Our technician will thoroughly inspect your fixture and provide an exact, written estimate before any work begins.",
    },
    {
      q: "Do your plumbers carry parts for all toilet brands?",
      a: "Yes. Our service trucks are stocked with OEM and heavy-duty universal parts for Kohler, American Standard, Toto, Mansfield, Gerber, Sterling, Glacier Bay, and modern dual-flush systems.",
    },
    {
      q: "Is emergency service available after hours and on weekends?",
      a: "Absolutely. Toilet Fixers operates 24 hours a day, 7 days a week, 365 days a year. Call 833-845-0906 anytime for rapid service.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Breadcrumbs crumbs={breadcrumbs} />

      {/* ========== HERO (Competitor Theme) ========== */}
      <section className="hero">
        <div className="hero-bg-grid" aria-hidden="true"></div>
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-status-pill">
              <span className="pulse-indicator">
                <span className="pulse-ping"></span>
                <span className="pulse-core"></span>
              </span>
              <span>24/7 Priority Plumbing Service Active</span>
            </div>
            <div className="hero-eyebrow">
              <i className="ph-fill ph-wrench"></i>
              <span>Professional Toilet Repair</span>
            </div>
            <h1>
              Professional <span className="highlight">{service.name}</span>
            </h1>
            <p className="hero-sub">{service.fullDesc}</p>
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
                <span>All Services</span>
                <i className="ph-bold ph-arrow-right"></i>
              </Link>
            </div>
          </div>

          <div className="hero-media">
            <div className="hero-card-frame">
              <img
                src={service.image}
                alt={service.imageAlt}
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
              <div className="feature-strip-label">Emergency Plumbing Hotline</div>
            </div>
            <div className="feature-strip-item">
              <div className="feature-strip-num">All Makes</div>
              <div className="feature-strip-label">Residential & Commercial Toilets</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== DETAILS SECTION ========== */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            <div
              style={{
                background: "var(--surface)",
                padding: "2.5rem 2rem",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="badge">
                <i className="ph-fill ph-check-circle"></i> Service Coverage
              </span>
              <h3 style={{ fontSize: "1.4rem", margin: "1rem 0" }}>What&apos;s Included</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {service.features.map((feat, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.95rem" }}>
                    <i className="ph-bold ph-check" style={{ color: "var(--accent)", marginTop: "4px" }}></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              style={{
                background: "var(--surface)",
                padding: "2.5rem 2rem",
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
              }}
            >
              <span className="badge" style={{ background: "rgba(234, 88, 12, 0.1)", color: "#ea580c", borderColor: "rgba(234, 88, 12, 0.2)" }}>
                <i className="ph-fill ph-warning-diamond"></i> Warning Signs
              </span>
              <h3 style={{ fontSize: "1.4rem", margin: "1rem 0" }}>Common Symptoms</h3>
              <ul style={{ listStyle: "none", paddingLeft: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                {service.symptoms.map((symp, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.95rem" }}>
                    <i className="ph-bold ph-arrow-right" style={{ color: "#ea580c", marginTop: "4px" }}></i>
                    <span>{symp}</span>
                  </li>
                ))}
              </ul>
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
            <h2>How We Repair Your Toilet</h2>
          </div>
          <div className="steps-row" style={{ marginTop: "3.5rem" }}>
            <div className="step-item">
              <div className="step-num">01</div>
              <h3>Comprehensive Inspection</h3>
              <p>Technician checks water pressure, shutoff valve integrity, tank mechanics, and bowl drainage.</p>
            </div>
            <div className="step-item">
              <div className="step-num">02</div>
              <h3>Clear Written Quote</h3>
              <p>You receive an upfront flat-rate price with no hidden fees before any wrench touches your plumbing.</p>
            </div>
            <div className="step-item">
              <div className="step-num">03</div>
              <h3>Expert Precision Repair</h3>
              <p>We replace worn seals, install commercial-grade components, and test multiple flush cycles.</p>
            </div>
            <div className="step-item">
              <div className="step-num">04</div>
              <h3>Clean-Up &amp; Guarantee</h3>
              <p>The workspace is sanitized, leak-tested under pressure, and backed by our full warranty.</p>
            </div>
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
            <h2 style={{ color: "#fff" }}>Answers About {service.name}</h2>
          </div>
          <div className="faq-list">
            {faqItems.map((item, idx) => (
              <details className="faq-item" key={idx} open={idx === 0 || undefined}>
                <summary className="faq-question">
                  <span>{item.q}</span>
                  <div className="faq-icon">
                    <i className="ph-bold ph-plus"></i>
                  </div>
                </summary>
                <div className="faq-answer" style={{ maxHeight: "none" }}>
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ========== OTHER SERVICES CHIPS ========== */}
      <section className="section" style={{ background: "#fff" }}>
        <div className="container">
          <div className="text-center">
            <span className="badge">
              <i className="ph-fill ph-wrench"></i> More Solutions
            </span>
            <h2>Other Toilet Repair Services</h2>
          </div>
          <div className="city-chips" style={{ marginTop: "2rem", maxHeight: "none", overflow: "visible" }}>
            {otherServices.map((s) => (
              <Link key={s.slug} className="city-chip" href={`/services/${s.slug}/`}>
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready For Fast, Professional Toilet Service?</h2>
          <p>Local licensed technicians ready for same-day dispatch.</p>
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
