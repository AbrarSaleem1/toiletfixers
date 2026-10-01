import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://toiletfixers.us"),
  title: {
    default: "Toilet Repair & Plumbing Services | Toilet Fixers",
    template: "%s | Toilet Fixers",
  },
  description:
    "Toilet Fixers provides 24/7 emergency toilet repair, unclogging & flat-rate pricing. Fast service for all toilet brands. Call 833-845-0906!",
  openGraph: {
    type: "website",
    siteName: "Toilet Fixers",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  icons: {
    icon: "/favicon.svg",
  },
  other: {
    "Content-Language": "en",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/fill/style.css"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/@phosphor-icons/web@2.0.3/src/bold/style.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
