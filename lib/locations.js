import statesData from "../data/states.json";
import citiesByStateData from "../data/citiesByState.json";

export function formatCityName(slug) {
  if (!slug) return "";
  return slug
    .split("-")
    .map((word) => {
      if (word.toLowerCase() === "st") return "St.";
      if (word.toLowerCase() === "mt") return "Mt.";
      if (word.toLowerCase() === "ft") return "Ft.";
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function getState(slug) {
  if (!slug) return null;
  const normalized = slug.toLowerCase();
  const info = statesData[normalized];
  if (!info) return null;
  return {
    slug: normalized,
    name: info.name,
    code: info.code,
  };
}

export function getAllStates() {
  return Object.entries(statesData).map(([slug, info]) => ({
    slug,
    name: info.name,
    code: info.code,
  }));
}

export function getCitiesForState(stateSlug) {
  if (!stateSlug) return [];
  const normalized = stateSlug.toLowerCase();
  const cities = citiesByStateData[normalized] || [];
  return cities.map((citySlug) => ({
    slug: citySlug,
    name: formatCityName(citySlug),
  }));
}

export function isValidCity(stateSlug, citySlug) {
  if (!stateSlug || !citySlug) return false;
  const cities = citiesByStateData[stateSlug.toLowerCase()];
  if (!cities) return false;
  return cities.includes(citySlug.toLowerCase());
}
