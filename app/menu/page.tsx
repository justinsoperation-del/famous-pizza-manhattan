import type { Metadata } from "next";
import { BUSINESS, featuredItems, menuGroups } from "@/lib/site";
import { OrderButton, TrackedLink } from "@/components/site-interactions";
import { FoodPlaceholder } from "@/components/food-placeholder";

export const metadata: Metadata = {
  title: "Famous Pizza Menu | Pizza, Slices & More in NYC",
  description:
    "Browse the full Famous Pizza menu — pizzas, slices, and more at 1 E 28th St in Midtown Manhattan. Order online through Slice.",
};

export default function MenuPage() {
  return (
    <main>
      <section className="section menu-hero">
        <p className="eyebrow">Famous Pizza</p>
        <h1>Menu</h1>
        <p className="hero-lede">
          Everything below reflects Famous Pizza&rsquo;s current Slice listing. Tap any item, or
          the button below, to order online.
        </p>
        <OrderButton location="menu_page_top">Order Online</OrderButton>
      </section>

      <section className="section favorites" aria-labelledby="menu-favorites-heading">
        <h2 id="menu-favorites-heading">Pizzas</h2>
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

      <section className="menu-section">
        <div className="section menu-inner">
          <div className="menu-intro">
            <h2>More to order</h2>
            <p>
              From a quick slice to a full specialty pie, order exactly what fits the moment on
              Slice.
            </p>
            <OrderButton location="menu_page_categories">Order Online</OrderButton>
          </div>

          <div className="menu-groups">
            {menuGroups.map((group) => (
              <article className="menu-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((entry) => (
                    <li key={entry[0]}>
                      <span>{entry[0]}</span>
                      <strong>{entry[1]}</strong>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section menu-footer-cta">
        <h2>Ready to order?</h2>
        <p>All ordering, customization, delivery, and pickup selection happens on Slice.</p>
        <OrderButton location="menu_page_bottom">Order Online</OrderButton>
      </section>
    </main>
  );
}
