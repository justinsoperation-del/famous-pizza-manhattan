import { business, hours, services, siteStatus } from "@/lib/site-config";
import { getFeaturedItems, getItemsByCategory } from "@/lib/menu-data";
import { DemoPlaceholder } from "@/components/DemoPlaceholder";
import { SiteHeader } from "@/components/SiteHeader";
import { MobileActionBar } from "@/components/MobileActionBar";
import { TrackedLink } from "@/components/TrackedLink";

const featured = getFeaturedItems();
const categories = getItemsByCategory();

export default function Home() {
  return (
    <>
      {siteStatus.isPrivateDemo && (
        <div className="demo-banner" role="note">
          Private owner-review demo — not the live public site. Images marked
          &ldquo;Demo image&rdquo; are placeholders pending owner-approved photography.
        </div>
      )}

      <SiteHeader />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-copy">
            <p className="hero-eyebrow">East 28th Street · Manhattan</p>
            <h1>Famous Pizza</h1>
            <p className="hero-lede">
              New York slices, whole pies and neighborhood favorites.
            </p>
            <div className="hero-actions">
              <TrackedLink
                className="button button-primary"
                href={business.orderUrl}
                event="order_online_click"
                payload={{ source: "hero" }}
              >
                Order online
              </TrackedLink>
              <a className="button button-secondary" href="#menu">
                View menu
              </a>
            </div>
            <div className="hero-meta">
              <span>{business.address.full}</span>
              <span className="hero-meta-links">
                <TrackedLink
                  href={business.directionsUrl}
                  event="directions_click"
                  payload={{ source: "hero" }}
                >
                  Directions
                </TrackedLink>
                <span aria-hidden="true">·</span>
                <TrackedLink href={business.phone.href} event="call_click" payload={{ source: "hero" }}>
                  Call
                </TrackedLink>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <img
              src={featured[0]?.image ?? undefined}
              alt={featured[0]?.imageAlt ?? "Famous Pizza cheese pizza"}
              width={900}
              height={1000}
            />
          </div>
        </section>

        {/* QUICK INFO STRIP */}
        <section className="info-strip" aria-label="Restaurant details">
          <div>
            <span className="info-label">Address</span>
            <strong>{business.address.full}</strong>
          </div>
          <div>
            <span className="info-label">Phone</span>
            <TrackedLink href={business.phone.href} event="call_click" payload={{ source: "info_strip" }}>
              {business.phone.display}
            </TrackedLink>
          </div>
          <div>
            <span className="info-label">Hours</span>
            <TrackedLink
              href={hours.liveHoursUrl}
              event="hours_click"
              payload={{ source: "info_strip", confirmed: hours.hoursConfirmed }}
            >
              {hours.hoursConfirmed ? "See hours" : "See today's live hours"}
            </TrackedLink>
          </div>
          {(services.takeout || services.delivery) && (
            <div>
              <span className="info-label">Available</span>
              <strong>
                {[services.takeout && "Pickup", services.delivery && "Delivery"]
                  .filter(Boolean)
                  .join(" · ")}
              </strong>
            </div>
          )}
        </section>

        {/* PIZZA STRIP — visual category entrances */}
        <section className="pizza-strip" aria-label="Menu categories">
          {[
            { label: "Cheese", href: "#menu", image: featured.find((i) => i.id === "cheese-pizza")?.image },
            { label: "Pepperoni", href: "#menu", image: featured.find((i) => i.id === "pepperoni-pizza")?.image },
            { label: "Specialty", href: "#menu", image: featured.find((i) => i.id === "hawaiian-pizza")?.image },
          ].map((cat) => (
            <a key={cat.label} href={cat.href} className="pizza-strip-item">
              {cat.image ? (
                <img src={cat.image} alt={`${cat.label} pizza`} loading="lazy" width={480} height={480} />
              ) : (
                <DemoPlaceholder label={cat.label} variant="square" />
              )}
              <span>{cat.label}</span>
            </a>
          ))}
        </section>

        {/* MENU HIGHLIGHTS */}
        <section className="section highlights" id="favorites">
          <h2>What are you having?</h2>
          <div className="highlights-grid">
            {featured.map((item, i) => (
              <a
                key={item.id}
                href={item.orderUrl}
                className={`highlight-card ${i === 0 ? "highlight-card--wide" : ""}`}
                data-menu-item={item.id}
              >
                {item.image ? (
                  <img src={item.image} alt={item.imageAlt} loading="lazy" width={720} height={560} />
                ) : (
                  <DemoPlaceholder label={item.name} variant="wide" />
                )}
                <div className="highlight-card-copy">
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="highlight-card-footer">
                    <strong>{item.price ?? "See current price"}</strong>
                    <span className="order-arrow">Order on Slice</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FULL MENU */}
        <section className="menu-section" id="menu">
          <div className="menu-intro">
            <h2>The menu</h2>
            <p>
              Browse what&rsquo;s available, then complete your order through Famous
              Pizza&rsquo;s existing ordering provider, Slice.
            </p>
            <TrackedLink
              className="button button-primary"
              href={business.orderUrl}
              event="order_online_click"
              payload={{ source: "menu_intro" }}
            >
              Order online
            </TrackedLink>
          </div>

          <div className="menu-categories">
            {categories.map((group) => (
              <article className="menu-category" key={group.category}>
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <a href={item.orderUrl} className="menu-row">
                        <span className="menu-row-name">
                          {item.name}
                          {item.badge && <span className="menu-badge">{item.badge}</span>}
                        </span>
                        <span className="menu-row-dots" aria-hidden="true" />
                        <span className="menu-row-price">{item.price ?? "See price"}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="menu-footnote">
            Prices reflect the most recent verified snapshot from Slice and may change.
            Full customization, cart, and checkout happen on Slice.
          </p>
        </section>

        {/* CINEMATIC MOMENT */}
        <section className="food-moment">
          {featured[1]?.image ? (
            <img src={featured[1].image} alt={featured[1].imageAlt} loading="lazy" />
          ) : (
            <DemoPlaceholder label="Grab a slice" variant="hero" />
          )}
          <div className="food-moment-copy">
            <h2>Grab a slice</h2>
            <p>{business.neighborhood}</p>
            <a className="button button-secondary light" href="#menu">
              View menu
            </a>
          </div>
        </section>

        {/* ORDER */}
        <section className="order-section section" id="order">
          <div className="order-visual">
            {featured[2]?.image ? (
              <img src={featured[2].image} alt={featured[2].imageAlt} loading="lazy" width={640} height={640} />
            ) : (
              <DemoPlaceholder label="Order" variant="square" />
            )}
          </div>
          <div className="order-copy">
            <h2>Pickup or delivery</h2>
            <p>
              Browse the current menu and complete your order through Famous
              Pizza&rsquo;s existing ordering provider.
            </p>
            <TrackedLink
              className="button button-primary"
              href={business.orderUrl}
              event="order_online_click"
              payload={{ source: "order_section" }}
            >
              Order online
            </TrackedLink>
            <p className="order-fineprint">
              Online checkout and payment are handled by the restaurant&rsquo;s ordering
              provider, Slice.
            </p>
          </div>
        </section>

        {/* VISIT */}
        <section className="section visit" id="visit">
          <div className="visit-card">
            <p className="hero-eyebrow">Find us on 28th</p>
            <h2>One block from Madison Square Park.</h2>
            <p className="address">{business.address.full}</p>
            <div className="visit-details">
              <div>
                <span>Hours</span>
                <strong>
                  <TrackedLink href={hours.liveHoursUrl} event="hours_click" payload={{ source: "visit" }}>
                    {hours.hoursConfirmed ? "See hours" : "Hours to be confirmed — see live hours"}
                  </TrackedLink>
                </strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>{business.phone.display}</strong>
              </div>
            </div>
            <div className="hero-actions">
              <TrackedLink
                className="button button-primary"
                href={business.directionsUrl}
                event="directions_click"
                payload={{ source: "visit" }}
              >
                Directions
              </TrackedLink>
              <TrackedLink
                className="button button-secondary light"
                href={business.phone.href}
                event="call_click"
                payload={{ source: "visit" }}
              >
                Call
              </TrackedLink>
            </div>
          </div>
          <div className="map-art" role="img" aria-label="Stylized map showing Famous Pizza one block from Madison Square Park on East 28th Street">
            <div className="avenue avenue-one" />
            <div className="avenue avenue-two" />
            <div className="street street-one" />
            <div className="street street-two" />
            <div className="park">MADISON<br />SQUARE<br />PARK</div>
            <div className="pin"><span>F</span></div>
            <p className="map-label">E 28TH ST</p>
          </div>
        </section>

        {/* PHOTO GRID */}
        <section className="photo-grid" aria-label="Photo gallery">
          {[
            { id: "cheese-pizza", size: "lg" },
            { id: "pepperoni-pizza", size: "sm" },
            { id: "hawaiian-pizza", size: "sm" },
            { id: "garlic-knots", size: "md" },
            { id: "extra-cheese-pizza", size: "md" },
          ].map((slot) => {
            const item = featured.find((f) => f.id === slot.id);
            return (
              <div className={`photo-grid-item photo-grid-item--${slot.size}`} key={slot.id}>
                {item?.image ? (
                  <img src={item.image} alt={item.imageAlt} loading="lazy" />
                ) : (
                  <DemoPlaceholder label={item?.name ?? slot.id} variant="square" />
                )}
              </div>
            );
          })}
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <p className="hero-eyebrow">Famous Pizza</p>
          <h2>East 28th Street</h2>
          <p>
            A neighborhood pizza shop serving New York slices, whole pies and quick
            favorites in Manhattan.
          </p>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="brand-word">FAMOUS</span>
            <span className="brand-sub">PIZZA · MANHATTAN</span>
          </div>
          <div className="footer-col">
            <h4>Visit</h4>
            <p>{business.address.full}</p>
          </div>
          <div className="footer-col">
            <h4>Explore</h4>
            <a href="#menu">Menu</a>
            <a href="#order">Order</a>
            <a href="#visit">Visit</a>
            <a href={business.phone.href}>Contact</a>
          </div>
          <div className="footer-col">
            <h4>Order</h4>
            {services.takeout && <span>Pickup</span>}
            {services.delivery && <span>Delivery</span>}
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={business.phone.href}>{business.phone.display}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Famous Pizza. All rights reserved.</p>
          {siteStatus.isPrivateDemo && (
            <p className="footer-demo-note">
              Private demonstration prepared for Famous Pizza. Not yet the restaurant&rsquo;s
              official public website.
            </p>
          )}
        </div>
      </footer>

      <MobileActionBar />
    </>
  );
}
