import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileActions from "@/components/MobileActions";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.siteOrigin),
  title: { default: "Famous Pizza NYC | Pizza on E 28th St", template: "%s | Famous Pizza NYC" },
  description: "Famous Pizza at 1 E 28th St in Midtown Manhattan. Browse the menu, order online, call, and get directions.",
  openGraph: { title: "Famous Pizza NYC", description: "New York pizza in Midtown Manhattan at 1 E 28th St.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: SITE.name,
    address: { "@type": "PostalAddress", streetAddress: "1 E 28th St", addressLocality: "New York", addressRegion: "NY", postalCode: "10016", addressCountry: "US" },
    telephone: "+1-646-682-7856",
    servesCuisine: ["Pizza", "Italian"],
    sameAs: [SITE.orderUrl],
  };
  return <html lang="en"><body><Header/><main>{children}</main><Footer/><MobileActions/><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /></body></html>;
}
