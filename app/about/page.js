import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "About Us | Toilet Fixers",
  description:
    "Learn about Toilet Fixers — nationwide leaders in fast, transparent, same-day toilet repair and residential plumbing solutions. Call 833-845-0906!",
  alternates: { canonical: "https://toiletfixers.us/about/" },
};

export default function AboutPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about/" },
  ];

  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />

      <section className="page-header">
        <div className="container">
          <span className="badge badge-outline" style={{ marginBottom: "1rem" }}>
            <i className="ph-fill ph-info"></i> About Our Company
          </span>
          <h1>About Toilet Fixers</h1>
          <p>
            Your trusted nationwide partner for fast, dependable, same-day toilet repair and 24/7 plumbing dispatch.
          </p>
          <div className="page-header-dispatch">
            <span>24/7 Priority Emergency Line:</span>
            <a href="tel:8338450906">
              <i className="ph-fill ph-phone-call"></i> 833-845-0906
            </a>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 880 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div>
              <span className="badge">
                <i className="ph-fill ph-target"></i> Our Mission
              </span>
              <h2 style={{ marginTop: "0.75rem" }}>Reliable Plumbing When You Need It Most</h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.05rem", marginTop: "1rem" }}>
                At Toilet Fixers, our mission is simple: to eliminate the stress, delays, and surprise costs associated with unexpected plumbing breakdowns. A broken toilet is an urgent issue that disrupts your home, threatens hygiene, and can cause costly water damage to flooring and ceilings.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem", margin: "1rem 0" }}>
              <div className="why-card">
                <div className="why-icon-box">
                  <i className="ph-fill ph-timer"></i>
                </div>
                <div>
                  <h3>Same-Day Dispatch</h3>
                  <p>Our network of local certified plumbers arrives within rapid windows to solve problems fast.</p>
                </div>
              </div>
              <div className="why-card">
                <div className="why-icon-box">
                  <i className="ph-fill ph-tag"></i>
                </div>
                <div>
                  <h3>Flat-Rate Pricing</h3>
                  <p>Clear, written estimates before work begins with zero hidden surcharges or surprise travel fees.</p>
                </div>
              </div>
              <div className="why-card">
                <div className="why-icon-box">
                  <i className="ph-fill ph-shield-check"></i>
                </div>
                <div>
                  <h3>Guaranteed Work</h3>
                  <p>Every repair is completed with commercial-grade OEM parts and backed by a satisfaction warranty.</p>
                </div>
              </div>
            </div>

            <div>
              <span className="badge">
                <i className="ph-fill ph-wrench"></i> Specialized Focus
              </span>
              <h2 style={{ marginTop: "0.75rem" }}>Why We Specialize in Toilets</h2>
              <p style={{ color: "var(--text-light)", lineHeight: 1.8, fontSize: "1.05rem", marginTop: "1rem" }}>
                Toilets are the hardest-working fixtures in any home or business, handling thousands of flush cycles each year. By concentrating our service network on toilet diagnostics, flappers, fill valves, heavy drain unclogging, wax seal replacements, and complete fixture installations, our plumbers arrive with the exact specialized parts and heavy augers required to complete 95% of repairs on the very first visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Need Emergency Toilet Service?</h2>
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
