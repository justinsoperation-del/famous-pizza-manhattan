import type { Metadata } from "next";
import "./globals.css";
import { business, hours, siteStatus } from "@/lib/site-config";

// PENDING — replace with the final branded production domain before public launch.
const SITE_URL = "https://famous-pizza-manhattan.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Famous Pizza | East 28th Street, Manhattan",
  description:
    "Famous Pizza at 1 E 28th St in Manhattan. Browse pizza, specialty pies and quick favorites, then order pickup or delivery online.",
  alternates: {
    canonical: "/",
  },
  robots: siteStatus.isPrivateDemo
    ? { index: false, follow: false }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Famous Pizza | East 28th Street, Manhattan",
    description:
      "New York slices, whole pies and neighborhood favorites at 1 E 28th St, Manhattan.",
    url: SITE_URL,
    siteName: "Famous Pizza",
  },
  twitter: {
    card: "summary_large_image",
    title: "Famous Pizza | East 28th Street, Manhattan",
    description:
      "New York slices, whole pies and neighborhood favorites at 1 E 28th St, Manhattan.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  servesCuisine: "Pizza",
  url: SITE_URL,
  telephone: business.phone.display,
  hasMenu: business.orderUrl,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: business.address.city,
    addressRegion: business.address.state,
    postalCode: business.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: business.coordinates.lat,
    longitude: business.coordinates.lng,
  },
  // Hours intentionally omitted from structured data until hours.hoursConfirmed is true —
  // do not publish openingHoursSpecification from the unconfirmed `hours.schedule` list.
  ...(hours.hoursConfirmed
    ? {
        openingHoursSpecification: hours.schedule.map((d) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: d.day,
          opens: d.open,
          closes: d.close,
        })),
      }
    : {}),
  // No aggregateRating / review data included — none has been independently verified.
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
