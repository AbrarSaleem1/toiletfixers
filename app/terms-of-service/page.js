import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Terms of Service | Toilet Fixers",
  description: "Terms of Service for Toilet Fixers plumbing dispatch and repair network.",
  alternates: { canonical: "https://toiletfixers.us/terms-of-service/" },
};

export default function TermsOfServicePage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Terms of Service", href: "/terms-of-service/" },
  ];

  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />

      <section className="page-header">
        <div className="container">
          <span className="badge badge-outline" style={{ marginBottom: "1rem" }}>
            <i className="ph-fill ph-file-text"></i> Legal Agreement
          </span>
          <h1>Terms of Service</h1>
          <p>Last updated: October 2026</p>
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", lineHeight: 1.8, fontSize: "1.02rem" }}>
            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>1. Referral &amp; Dispatch Service</h2>
              <p style={{ color: "var(--text-light)" }}>
                Toilet Fixers operates as a nationwide plumbing referral and dispatch coordination service. We connect consumers with independent local plumbing contractors. Independent contractors are responsible for providing licensing, insurance, and performance warranties for services rendered.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>2. Upfront Estimates &amp; Authorizations</h2>
              <p style={{ color: "var(--text-light)" }}>
                All pricing quotes provided on-site are established directly between the property owner and the service technician. Work begins only after the customer approves the written quote and scope of repair.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>3. Limitation of Liability</h2>
              <p style={{ color: "var(--text-light)" }}>
                Toilet Fixers shall not be liable for any indirect, incidental, or consequential damages resulting from work performed by third-party contracted plumbers. Each independent contractor maintains their own commercial general liability coverage.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>4. Modifications to Terms</h2>
              <p style={{ color: "var(--text-light)" }}>
                We reserve the right to modify these terms at any time. Continued use of our referral services constitutes agreement to any updated terms.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
