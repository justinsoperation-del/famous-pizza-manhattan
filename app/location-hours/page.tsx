import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site";
import { OrderButton, TrackedLink } from "@/components/site-interactions";

export const metadata: Metadata = {
  title: "Famous Pizza on E 28th St | Midtown Manhattan Pizza",
  description:
    "Find Famous Pizza at 1 E 28th St, New York, NY 10016 — one block from Madison Square Park in Midtown Manhattan. Get directions, hours, and contact info.",
};

export default function LocationHoursPage() {
  return (
    <main>
      <section className="section location-hero">
        <p className="eyebrow">Famous Pizza</p>
        <h1>Location &amp; Hours</h1>
        <p className="hero-lede">
          Famous Pizza is located at {BUSINESS.address}, in the NoMad section of Midtown
          Manhattan, one block from Madison Square Park.
        </p>

        <div className="visit-details">
          <div>
            <span>Address</span>
            <strong>{BUSINESS.address}</strong>
          </div>
          <div>
            <span>Phone</span>
            <strong>{BUSINESS.phoneDisplay}</strong>
          </div>
          <div>
            <span>Hours</span>
            <strong>
              <a href={BUSINESS.liveHoursUrl}>See today&rsquo;s live hours on Slice ↗</a>
            </strong>
          </div>
        </div>

        <div className="hero-actions">
          <TrackedLink
            className="button button-primary"
            href={BUSINESS.directionsUrl}
            event="directions_click"
            eventParams={{ location: "location_hours_page" }}
          >
            Get Directions <span aria-hidden="true">↗</span>
          </TrackedLink>
          <TrackedLink
            className="button button-secondary"
            href={BUSINESS.phoneHref}
            event="call_click"
            eventParams={{ location: "location_hours_page" }}
          >
            Call Now
          </TrackedLink>
          <OrderButton location="location_hours_page">Order Online</OrderButton>
        </div>
      </section>

      <section className="section map-section">
        <h2>Find us</h2>
        <div className="map-embed-wrap">
          <iframe
            src={BUSINESS.mapsEmbedUrl}
            title={"Map showing " + BUSINESS.name + " at " + BUSINESS.address}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="map-fallback-text">
          Famous Pizza, {BUSINESS.address} — one block from Madison Square Park in the NoMad
          neighborhood of Midtown Manhattan.{" "}
          <a href={BUSINESS.directionsUrl}>Open in Google Maps ↗</a>
        </p>
      </section>
    </main>
  );
}
