import { getAllStates } from "../lib/locations";
import { SERVICES } from "../lib/services";
import citiesByStateData from "../data/citiesByState.json";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://toiletfixers.us";

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacy-policy/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-of-service/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];

  const serviceRoutes = SERVICES.map((s) => ({
    url: `${baseUrl}/services/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const stateRoutes = getAllStates().map((st) => ({
    url: `${baseUrl}/states/${st.slug}/`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const cityRoutes = [];
  for (const [stateSlug, cities] of Object.entries(citiesByStateData)) {
    for (const citySlug of cities) {
      cityRoutes.push({
        url: `${baseUrl}/${stateSlug}/${citySlug}/`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return [...staticRoutes, ...serviceRoutes, ...stateRoutes, ...cityRoutes];
}

