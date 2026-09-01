import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { BUSINESS, SITE_ORIGIN, SITE_NAV_LINKS, buildRestaurantJsonLd } from "@/lib/site";
import {
  OrderButton,
  TrackedLink,
  MobileNav,
  MobileActionBar,
} from "@/components/site-interactions";

const DEFAULT_TITLE = "Famous Pizza | New York Pizza in Midtown Manhattan";
const DEFAULT_DESCRIPTION =
  "Famous Pizza at 1 E 28th St in Midtown Manhattan, near Madison Square Park. Order online, call, or get directions.";
const SHARE_IMAGE =
  "https://slice-menu-assets-prod.imgix.net/11868/1611020011_ab9bbe0970?fit=crop&h=630&w=1200";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Famous Pizza",
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    siteName: "Famous Pizza",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: SHARE_IMAGE,
        width: 1200,
        height: 630,
        alt: "Whole cheese pizza from Famous Pizza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
  robots: {
    // Demo site: kept indexable-by-structure so it's ready to go, but see
    // the demo disclosure banner below — this is not yet the owner-approved
    // live site and should not be submitted to Search Console until it is.
    index: true,
    follow: true,
  },
};

export default function RootLayout(props: { children: React.ReactNode }) {
  const jsonLdString = JSON.stringify(buildRestaurantJsonLd());

  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="Famous Pizza home">
            <span className="brand-mark">F</span>
            <span>
              <strong>FAMOUS</strong>
              <small>PIZZA · MANHATTAN</small>
            </span>
          </Link>

          <nav aria-label="Main navigation" className="desktop-nav">
            {SITE_NAV_LINKS.map((link) => (
              <TrackedLink
                key={link.href}
                href={link.href}
                event={link.event}
                eventParams={{ target: link.label }}
              >
                {link.label}
              </TrackedLink>
            ))}
          </nav>

          <div className="header-actions">
            <OrderButton className="header-order" location="header">
              Order Online
            </OrderButton>
            <MobileNav></MobileNav>
          </div>
        </header>

        {props.children}

        <footer>
          <div className="brand footer-brand">
            <span className="brand-mark">F</span>
            <span>
              <strong>FAMOUS</strong>
              <small>PIZZA · MANHATTAN</small>
            </span>
          </div>
          <p>{BUSINESS.address}</p>
          <div>
            <TrackedLink href={BUSINESS.phoneHref} event="call_click" eventParams={{ location: "footer" }}>
              Call
            </TrackedLink>
            <TrackedLink href={BUSINESS.directionsUrl} event="directions_click" eventParams={{ location: "footer" }}>
              Directions
            </TrackedLink>
            <TrackedLink href={BUSINESS.orderUrl} event="order_online_click" eventParams={{ location: "footer" }}>
              Order Online
            </TrackedLink>
          </div>
        </footer>

        {/* Small, unobtrusive demo disclosure — remove only once the owner
            approves this site for public launch. */}
        <p className="demo-disclosure">
          This is a demonstration website prepared for Famous Pizza and has not yet been approved for launch.
        </p>

        {/* Reserves space so the fixed mobile bar never overlaps content. */}
        <div className="mobile-action-bar-spacer" aria-hidden="true"></div>
        <MobileActionBar></MobileActionBar>

        <script
          type="application/ld+json"
          // Restaurant structured data limited to owner-verified fields only.
          dangerouslySetInnerHTML={{ __html: jsonLdString }}
        ></script>
      </body>
    </html>
  );
}
