type Item = { name: string; desc: string; price: string };
export default function MenuList({ title, eyebrow, items }: { title: string; eyebrow?: string; items: Item[] }) {
  return <section className="menu-section">
    <div className="menu-section-head">
      <div>{eyebrow && <div className="eyebrow">{eyebrow}</div>}<h2>{title}</h2></div>
      <span className="menu-count">{items.length} items</span>
    </div>
    <div className="menu-list">
      {items.map((item) => <article className="menu-item" key={item.name}>
        <div><h3>{item.name}</h3><p>{item.desc}</p></div><strong>{item.price}</strong>
      </article>)}
    </div>
  </section>;
}
