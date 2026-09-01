import type { Metadata } from "next";
import { BUSINESS, featuredItems } from "@/lib/site";
import { OrderButton, TrackedLink } from "@/components/site-interactions";
import { FoodPlaceholder } from "@/components/food-placeholder";

export const metadata: Metadata = {
  title: "Famous Pizza | New York Pizza in Midtown Manhattan",
  description:
    "Famous Pizza at 1 E 28th St, Midtown Manhattan, near Madison Square Park. Order online, call, or get directions.",
};

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">New York slices · open late</p>
          <h1>Famous Pizza — New York Pizza in Midtown Manhattan</h1>
          <p className="hero-lede">
            Hot pizza, specialty pies, and quick favorites at {BUSINESS.address}, one block from
            Madison Square Park.
          </p>
          {BUSINESS.googleRating ? (
            <p className="rating-line">{BUSINESS.googleRating}★ on Google</p>
          ) : null}
          <div className="hero-actions">
            <OrderButton location="hero">Order Online</OrderButton>
            <TrackedLink
              className="button button-secondary"
              href={BUSINESS.phoneHref}
              event="call_click"
              eventParams={{ location: "hero" }}
            >
              Call Now
            </TrackedLink>
            <TrackedLink
              className="button button-secondary"
              href={BUSINESS.directionsUrl}
              event="directions_click"
              eventParams={{ location: "hero" }}
            >
              Get Directions
            </TrackedLink>
          </div>
          <div className="quick-facts" aria-label="Restaurant details">
            <span>{BUSINESS.addressLine1}</span>
            <span>Open late</span>
            <span>Pickup &amp; delivery</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="https://slice-menu-assets-prod.imgix.net/11868/1611020011_ab9bbe0970?fit=crop&h=1000&w=900"
            alt="Fresh cheese pizza from Famous Pizza"
            width={900}
            height={1000}
          />
        </div>
      </section>

      <section className="section favorites" id="favorites">
        <div className="section-heading">
          <div>
            <p className="eyebrow">See what sounds good</p>
            <h2>Start with a favorite.</h2>
          </div>
          <p>
            A photo-first look at a few of Famous Pizza&rsquo;s items. See the full menu with
            every category and price on the <a href="/menu">Menu page</a>.
          </p>
        </div>

        <div className="food-grid">
          {featuredItems.map((item) => (
            <TrackedLink
              className="food-card"
              href={BUSINESS.orderUrl}
              key={item.id}
              event="menu_item_click"
              eventParams={{ item: item.id }}
            >
              <div className="food-image-wrap">
                {item.image ? (
                  <img src={item.image} alt={item.imageAlt} loading="lazy" width={720} height={720} />
                ) : (
                  <FoodPlaceholder label={item.name}></FoodPlaceholder>
                )}
                <span>{item.badge}</span>
              </div>
              <div className="food-card-copy">
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <strong>{item.price}</strong>
              </div>
            </TrackedLink>
          ))}
        </div>
      </section>

      <section className="section location-teaser" id="visit">
        <h2>One block from Madison Square Park</h2>
        <p>
          Famous Pizza is located at {BUSINESS.address}, in Midtown Manhattan near Madison Square
          Park. See the full address, directions, and live hours on the{" "}
          <a href="/location-hours">Location &amp; Hours page</a>.
        </p>
        <div className="hero-actions">
          <TrackedLink
            className="button button-primary"
            href={BUSINESS.directionsUrl}
            event="directions_click"
            eventParams={{ location: "home_visit" }}
          >
            Get Directions <span aria-hidden="true">↗</span>
          </TrackedLink>
          <a className="button button-secondary" href="/location-hours">
            Location &amp; Hours
          </a>
        </div>
      </section>
    </main>
  );
}
