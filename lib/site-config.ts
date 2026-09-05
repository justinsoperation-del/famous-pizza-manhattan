/**
 * SITE CONFIG — single source of truth for business facts.
 *
 * FACT-LOCK POLICY:
 *  - Fields marked VERIFIED come from the owner's Google Business Profile / Slice listing.
 *  - Fields marked PENDING are shown to visitors as "pending" or omitted, and must be
 *    confirmed by the owner before this goes live publicly. Do not silently promote a
 *    PENDING field to displayed fact — change the value AND the status together.
 */

export const siteStatus = {
  /** Public production site approved by the owner. */
  isPrivateDemo: false,
} as const;

export const business = {
  name: "Famous Pizza",
  legalName: null as string | null, // PENDING — exact registered/legal business name needed for any future health-inspection lookup or legal footer text.
  neighborhood: "East 28th Street, Manhattan",
  category: "Pizza restaurant",

  address: {
    line1: "1 E 28th St",
    city: "New York",
    state: "NY",
    zip: "10016",
    full: "1 E 28th St, New York, NY 10016", // VERIFIED — Google Business Profile
  },

  // VERIFIED — Google Business Profile
  phone: {
    display: "(646) 682-7856",
    href: "tel:+16466827856",
  },

  // VERIFIED — official Slice checkout, per implementation rules. All order actions must land here.
  orderUrl: "https://www.orderfamouspizzamenu.com/",

  // Points to the business by NAME + address so Google Maps resolves the actual
  // Famous Pizza listing pin rather than a bare street-address pin (which, per the
  // owner-review notes, can land on a neighboring storefront). A permanent Google
  // Place ID from the owner's Business Profile "Share" link would be even more
  // precise — see openOwnerDecisions.
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=Famous+Pizza+1+E+28th+St+New+York+NY+10016",

  // PENDING — Google Street View for this address currently shows a UPS Store, not an
  // obviously identifiable pizzeria storefront. Do not publish an exterior photo or specific
  // entrance/unit instructions until the owner confirms the exact customer entrance.
  storefrontConfirmed: false,
  entranceNotes: null as string | null,

  coordinates: {
    lat: 40.744636,
    lng: -73.9868005,
  },
} as const;

/**
 * HOURS — captured from the Slice listing at time of build. NOT confirmed by the owner.
 * Keep centralized here so a single edit updates every place hours appear. Until
 * `hoursConfirmed` is true, the UI should link to Slice's live hours instead of
 * asserting these as fact.
 */
export const hours = {
  hoursConfirmed: false, // PENDING owner confirmation
  liveHoursUrl: "https://www.orderfamouspizzamenu.com/",
  /** Single approved label for the unconfirmed-hours state — use everywhere hours are shown. */
  pendingLabel: "See current ordering hours",
  schedule: [
    { day: "Monday", open: "9:00 AM", close: "2:00 AM" },
    { day: "Tuesday", open: "9:00 AM", close: "2:00 AM" },
    { day: "Wednesday", open: "9:00 AM", close: "2:00 AM" },
    { day: "Thursday", open: "9:00 AM", close: "2:00 AM" },
    { day: "Friday", open: "9:00 AM", close: "4:00 AM" },
    { day: "Saturday", open: "9:00 AM", close: "4:00 AM" },
    { day: "Sunday", open: "9:00 AM", close: "2:00 AM" },
  ],
} as const;

/**
 * Services confirmed as available. Do not add a service here (e.g. "curbside pickup")
 * without independent verification — the generic Slice partner description mentions
 * promotional/unverified claims that should not be copied onto the branded site.
 */
export const services = {
  takeout: true, // VERIFIED — Google Business Profile
  delivery: true, // VERIFIED — Google Business Profile
  onlineOrdering: true, // VERIFIED — Google Business Profile
} as const;

/**
 * Anything still explicitly unverified, for the owner-decision report.
 * Keep this list in sync with what the UI actually needs signed off.
 */
export const openOwnerDecisions = [
  "Confirm current hours (Slice shows 9am–2am Sun–Thu, 9am–4am Fri–Sat) before publishing them as fact.",
  "Confirm the exact customer entrance/unit at 1 E 28th St — Street View shows a UPS Store, not a visible pizzeria storefront.",
  "Provide the exact legal/registered business name for any future NYC health-inspection lookup (current search returned no match).",
  "Approve or reject using orderfamouspizzamenu.com as the long-term branded order destination vs. a different Slice URL.",
  "Provide a permanent Google Place ID / Business Profile share link for Directions, for maximum precision beyond the current name+address query.",
  "Decide whether/when to replace the Google Business Profile website field with the new branded domain.",
  "Supply owner-approved photography for every item currently marked DEMO IMAGE.",
  "Confirm which menu categories/items are current — Slice may have changed items or prices since this snapshot.",
  "Confirm which drinks/beverages are actually sold before launch — none are currently listed on the site since no verified beverage lineup/prices were available; do not assume the Slice listing's beverage section is current.",
  "Approve or replace the stock/demo food photography (hero + Cheese, Pepperoni, Hawaiian Pizza cards) with real, owner-approved photography before public launch.",
];
