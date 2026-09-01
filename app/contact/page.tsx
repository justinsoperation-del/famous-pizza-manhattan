import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site";
import { OrderButton, TrackedLink } from "@/components/site-interactions";

export const metadata: Metadata = {
  title: "Contact Famous Pizza | Midtown Manhattan",
  description:
    "Contact Famous Pizza at 1 E 28th St, New York, NY 10016. Call, get directions, or order online.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="section contact-hero">
        <p className="eyebrow">Famous Pizza</p>
        <h1>Contact</h1>

        <div className="visit-details">
          <div>
            <span>Phone</span>
            <strong>{BUSINESS.phoneDisplay}</strong>
          </div>
          <div>
            <span>Address</span>
            <strong>{BUSINESS.address}</strong>
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
            href={BUSINESS.phoneHref}
            event="call_click"
            eventParams={{ location: "contact_page" }}
          >
            Call Now
          </TrackedLink>
          <TrackedLink
            className="button button-secondary"
            href={BUSINESS.directionsUrl}
            event="directions_click"
            eventParams={{ location: "contact_page" }}
          >
            Get Directions
          </TrackedLink>
          <OrderButton location="contact_page">Order Online</OrderButton>
        </div>
      </section>
    </main>
  );
}
