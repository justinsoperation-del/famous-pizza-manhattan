import { business, hours, services, siteStatus } from "@/lib/site-config";
import { getFeaturedItems, getItemsByCategory, getOrderUrl, heroImage, menuItems } from "@/lib/menu-data";
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
            <h1>Famous Pizza</h1>
            <p className="hero-subline">New York Slices on East 28th Street</p>
            <p className="hero-lede">Whole pies, slices, pickup &amp; delivery in Manhattan.</p>
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
              src={heroImage.src}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
            />
            {heroImage.isStock && <span className="stock-tag">Stock photo</span>}
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
              {hours.hoursConfirmed ? "See hours" : hours.pendingLabel}
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
            { label: "Cheese", href: "#menu", id: "extra-cheese-pizza" },
            { label: "Pepperoni", href: "#menu", id: "pepperoni-pizza" },
            { label: "Hawaiian Pizza", href: "#menu", id: "hawaiian-pizza" },
          ].map((cat) => {
            const item = menuItems.find((i) => i.id === cat.id);
            return (
              <a key={cat.label} href={cat.href} className="pizza-strip-item">
                {item?.image ? (
                  <>
                    <img src={item.image} alt={item.imageAlt} loading="lazy" width={480} height={480} />
                    {item.isStockPhoto && <span className="stock-tag">Stock photo</span>}
                    <span>{cat.label}</span>
                  </>
                ) : (
                  <DemoPlaceholder label={cat.label} variant="square" />
                )}
              </a>
            );
          })}
        </section>

        {/* MENU HIGHLIGHTS */}
        <section className="section highlights" id="favorites">
          <h2>What are you having?</h2>
          <div className="highlights-grid">
            {featured.map((item) => (
              <a
                key={item.id}
                href={getOrderUrl(item)}
                className="highlight-card"
                data-menu-item={item.id}
              >
                {item.image ? (
                  <div className="highlight-card-photo">
                    <img src={item.image} alt={item.imageAlt} loading="lazy" width={720} height={560} />
                    {item.isStockPhoto && <span className="stock-tag">Stock photo</span>}
                  </div>
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
                      <a href={getOrderUrl(item)} className="menu-row">
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
            <>
              <img src={featured[1].image} alt={featured[1].imageAlt} loading="lazy" />
              {featured[1].isStockPhoto && <span className="stock-tag">Stock photo</span>}
            </>
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
              <>
                <img src={featured[2].image} alt={featured[2].imageAlt} loading="lazy" width={640} height={640} />
                {featured[2].isStockPhoto && <span className="stock-tag">Stock photo</span>}
              </>
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
                    {hours.hoursConfirmed ? "See hours" : hours.pendingLabel}
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

        {/* ABOUT */}
        <section className="section about" id="about">
          <h2>Famous Pizza on East 28th Street</h2>
          <p>
            A Manhattan neighborhood pizza shop serving New York slices, whole pies, and
            quick favorites. Order online for pickup or delivery, or stop in on East 28th
            Street.
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
