/**
 * Centralized business facts and menu content for Famous Pizza Manhattan.
 *
 * NAP CONSISTENCY: every page must render name/address/phone from this
 * file, verbatim, so the site never drifts from:
 *   Famous Pizza
 *   1 E 28th St
 *   New York, NY 10016
 *   (646) 682-7856
 *
 * SOURCING RULES:
 * - name / address / phone / coordinates / category / Google rating (4.3):
 *   verified via the owner's Google Business Profile.
 * - orderUrl: verified Slice ordering destination.
 * - directionsUrl / mapsEmbedUrl: derived directly from the verified address.
 * - Weekly hours are NOT owner-confirmed. Do not hardcode a schedule
 *   anywhere on the site or in schema — always defer to liveHoursUrl.
 * - siteOrigin is the site's CURRENT live preview URL, used only so
 *   sitemap.xml/robots.txt are technically valid. It is NOT the final
 *   branded domain — update SITE_ORIGIN before real launch, and do not
 *   treat it as an owner-approved production URL.
 * - Featured item names/prices/descriptions and the "one block from
 *   Madison Square Park" line are carried over unchanged from the
 *   currently-live site. Not independently re-verified against the live
 *   Slice listing — see OWNER_VERIFICATION_NOTES below.
 */

export const SITE_ORIGIN = "https://famous-pizza-manhattan.justinsoperation.chatgpt.site";

export const BUSINESS = {
  name: "Famous Pizza",
  displayName: "Famous Pizza Manhattan",
  category: "Pizza restaurant",
  cuisine: "Pizza",
  addressLine1: "1 E 28th St",
  addressCity: "New York",
  addressRegion: "NY",
  addressPostalCode: "10016",
  address: "1 E 28th St, New York, NY 10016",
  phoneDisplay: "(646) 682-7856",
  phoneHref: "tel:+16466827856",
  phoneE164: "+16466827856",
  orderUrl: "https://www.orderfamouspizzamenu.com/",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=1+E+28th+St+New+York+NY+10016",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=1+E+28th+St+New+York+NY+10016&output=embed",
  // No dedicated hours page exists. Until the owner confirms current hours,
  // "live hours" always points to the verified Slice listing rather than a
  // hardcoded weekly schedule — on every page, and in JSON-LD.
  liveHoursUrl: "https://www.orderfamouspizzamenu.com/",
  coordinates: {
    latitude: 40.744636,
    longitude: -73.9868005,
  },
  // Verified from the Google Business Profile listing. No review COUNT is
  // shown anywhere, per the separate "count not visible" restriction.
  googleRating: 4.3,
} as const;

/**
 * Restaurant JSON-LD, limited to verified fields:
 * name, cuisine/category (via @type + servesCuisine), address, phone,
 * coordinates, ordering URL (as hasMenu, not as the business's own site).
 *
 * Deliberately OMITTED:
 * - `url` (final branded domain) — not yet decided by the owner. Do not
 *   fill this with SITE_ORIGIN or any guess; leave it out until launch.
 * - openingHours — not owner-confirmed.
 * - aggregateRating / review data — no verified review count exists.
 * - priceRange — not supplied by any verified source.
 */
export function buildRestaurantJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: BUSINESS.name,
    servesCuisine: BUSINESS.cuisine,
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.addressLine1,
      addressLocality: BUSINESS.addressCity,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.addressPostalCode,
      addressCountry: "US",
    },
    telephone: "+1-646-682-7856",
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.coordinates.latitude,
      longitude: BUSINESS.coordinates.longitude,
    },
    hasMenu: BUSINESS.orderUrl,
  };
}

export type FeaturedItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string | null;
  imageAlt: string;
  badge: string;
};

export const featuredItems: FeaturedItem[] = [
  {
    id: "cheese-pizza",
    name: "Cheese Pizza",
    description: "Classic tomato sauce and melted cheese.",
    price: "$19.99",
    image:
      "https://slice-menu-assets-prod.imgix.net/11868/1611020011_ab9bbe0970?fit=crop&h=720&w=720",
    imageAlt: "Whole cheese pizza with tomato sauce and melted mozzarella",
    badge: "House favorite",
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    description: "Classic cheese pizza topped with pepperoni.",
    price: "$23.99",
    image:
      "https://slice-menu-assets-prod.imgix.net/11868/1611020027_0d62f30af6?fit=crop&h=720&w=720",
    imageAlt: "Whole pepperoni pizza",
    badge: "Best seller",
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    description: "Tomato sauce, cheese, pineapple, and bacon.",
    price: "$23.99",
    image:
      "https://slice-menu-assets-prod.imgix.net/11868/1611020039_89fb1260b0?fit=crop&h=720&w=720",
    imageAlt: "Whole Hawaiian pizza with pineapple and bacon",
    badge: "Specialty pie",
  },
  {
    id: "garlic-knots",
    name: "Garlic Knots",
    description: "Baked knots with garlic, butter, parsley, and sauce.",
    price: "$4.25",
    image:
      "https://slice-menu-assets-prod.imgix.net/11868/1611020042_11b9bf96f4?fit=crop&h=720&w=720",
    imageAlt: "Basket of garlic knots with dipping sauce",
    badge: "Perfect side",
  },
  {
    id: "extra-cheese-pizza",
    name: "Extra Cheese Pizza",
    description: "Our classic pie with an extra layer of cheese.",
    price: "$23.99",
    // No distinct verified photo exists for this item yet. Never reuse the
    // Cheese Pizza photo here — render a branded placeholder instead.
    image: null,
    imageAlt: "",
    badge: "Cheese lover",
  },
];

export const SITE_NAV_LINKS: Array<{
  href: string;
  label: string;
  event: "menu_view" | "navigation_click";
}> = [
  { href: "/", label: "Home", event: "navigation_click" },
  { href: "/menu", label: "Menu", event: "menu_view" },
  { href: "/order", label: "Order", event: "navigation_click" },
  { href: "/location-hours", label: "Location & Hours", event: "navigation_click" },
  { href: "/contact", label: "Contact", event: "navigation_click" },
];

export const menuGroups = [
  {
    title: "Slice deals",
    items: [
      ["Cheese Pizza Slice Special", "$2.99"],
      ["2 Cheese Slices + Water", "$5.75"],
      ["2 Cheese Slices + Soda", "$6.75"],
    ],
  },
  {
    title: "Specialty pizza",
    items: [
      ["Ricotta Cheese Pizza", "$23.99"],
      ["BBQ Chicken Pizza", "$23.99"],
      ["Chicken & Broccoli Pizza", "$23.99"],
      ["Mix Vegetables Pizza", "$23.99"],
    ],
  },
  {
    title: "More favorites",
    items: [
      ["Mozzarella Sticks", "$5.00"],
      ["Pepperoni Roll", "$5.50"],
      ["Chicken Roll", "$9.00"],
      ["Beef Patty", "$4.00"],
      ["Beef Patty + Cheese & Pepperoni", "$5.75"],
    ],
  },
] as const;

/**
 * OWNER_VERIFICATION_NOTES — not resolved by code, flagged so they aren't lost:
 * 1. All prices above are carried over unchanged from the current live
 *    site's source, not re-checked against the live Slice listing.
 * 2. "One block from Madison Square Park" (used on the Home page) is
 *    pre-existing marketing copy, not sourced from a verified document.
 * 3. Item badges ("House favorite", "Best seller", etc.) are pre-existing
 *    marketing framing, not verified sales data.
 * 4. Exact customer entrance/unit at 1 E 28th St is still unconfirmed —
 *    see prior conversation re: shared-building tenants at this address.
 * 5. SITE_ORIGIN above is a live PREVIEW url, not the final branded domain.
 *    sitemap.xml/robots.txt must be regenerated once that's decided.
 */
