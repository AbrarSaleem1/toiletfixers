import { getState, getAllStates } from "../../lib/locations";

export function generateStaticParams() {
  return getAllStates().map((st) => ({
    state: st.slug,
  }));
}

export default async function StateRedirectPage({ params }) {
  const { state } = await params;
  const stateObj = getState(state);
  const target = stateObj ? `/states/${stateObj.slug}/` : "/";

  return (
    <html lang="en">
      <head>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
        <link rel="canonical" href={`https://toiletfixers.us${target}`} />
        <title>Redirecting...</title>
      </head>
      <body>
        <p>Redirecting to <a href={target}>{target}</a>...</p>
      </body>
    </html>
  );
}
