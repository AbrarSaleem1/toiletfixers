import Layout from "../components/Layout";
import Breadcrumbs from "../components/Breadcrumbs";

export const metadata = {
  title: "Privacy Policy | Toilet Fixers",
  description: "Privacy Policy for Toilet Fixers. Learn how we handle information responsibly.",
  alternates: { canonical: "https://toiletfixers.us/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Privacy Policy", href: "/privacy-policy/" },
  ];

  return (
    <Layout>
      <Breadcrumbs crumbs={breadcrumbs} />

      <section className="page-header">
        <div className="container">
          <span className="badge badge-outline" style={{ marginBottom: "1rem" }}>
            <i className="ph-fill ph-shield-check"></i> Legal Information
          </span>
          <h1>Privacy Policy</h1>
          <p>Last updated: October 2026</p>
        </div>
      </section>

      <section className="section" style={{ background: "#fff" }}>
        <div className="container" style={{ maxWidth: 800 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem", lineHeight: 1.8, fontSize: "1.02rem" }}>
            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>1. Information We Collect</h2>
              <p style={{ color: "var(--text-light)" }}>
                When you contact Toilet Fixers by telephone, we collect information necessary to coordinate your plumbing service request, including your name, service address, telephone number, and the nature of your toilet repair problem.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>2. How We Use Your Information</h2>
              <p style={{ color: "var(--text-light)" }}>
                We use the information you provide solely to connect you with an independent licensed plumbing contractor in your local service area, facilitate dispatch communication, and ensure high-quality customer service delivery.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>3. Data Protection &amp; Sharing</h2>
              <p style={{ color: "var(--text-light)" }}>
                We do not sell, rent, or trade your personal information to third parties for marketing purposes. Your contact information is shared only with the assigned technician or dispatch provider to fulfill your requested plumbing repair.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>4. Telephone Call Recording</h2>
              <p style={{ color: "var(--text-light)" }}>
                Calls made to our phone numbers may be recorded or monitored for quality assurance, safety, and training purposes.
              </p>
            </section>

            <section>
              <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>5. Contact Information</h2>
              <p style={{ color: "var(--text-light)" }}>
                If you have questions regarding this Privacy Policy, please reach out to us at 833-845-0906.
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
