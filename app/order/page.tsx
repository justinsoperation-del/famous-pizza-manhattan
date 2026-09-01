import type { Metadata } from "next";
import { BUSINESS } from "@/lib/site";
import { OrderButton, TrackedLink } from "@/components/site-interactions";

export const metadata: Metadata = {
  title: "Order Online | Famous Pizza",
  description:
    "Order Famous Pizza online through Slice, or call 1 E 28th St in Midtown Manhattan directly.",
};

export default function OrderPage() {
  return (
    <main>
      <section className="section order-hero">
        <p className="eyebrow">Famous Pizza</p>
        <h1>Order Online</h1>
        <p className="hero-lede">
          Famous Pizza takes online orders through Slice. Tapping the button below sends you
          straight to Famous Pizza&rsquo;s official Slice ordering page, where you can choose
          pickup or delivery, customize items, and check out securely.
        </p>
        <div className="hero-actions">
          <OrderButton location="order_page">Order Online</OrderButton>
          <TrackedLink
            className="button button-secondary"
            href={BUSINESS.phoneHref}
            event="call_click"
            eventParams={{ location: "order_page" }}
          >
            Call to Order
          </TrackedLink>
        </div>
      </section>

      <section className="section order-details">
        <h2>How it works</h2>
        <ul className="plain-list">
          <li>Tap Order Online to open Famous Pizza&rsquo;s Slice ordering page.</li>
          <li>Choose pickup or delivery and build your order there.</li>
          <li>All customization, cart management, and payment happen on Slice, not this site.</li>
          <li>Prefer to order by phone? Call {BUSINESS.phoneDisplay} directly.</li>
        </ul>

        <h2>Address</h2>
        <p>{BUSINESS.address}</p>
        <TrackedLink
          className="button button-secondary"
          href={BUSINESS.directionsUrl}
          event="directions_click"
          eventParams={{ location: "order_page" }}
        >
          Get Directions
        </TrackedLink>
      </section>
    </main>
  );
}
