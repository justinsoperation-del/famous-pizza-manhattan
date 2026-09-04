/**
 * DEMO IMAGE PLACEHOLDER
 *
 * Used anywhere a real, verified Famous Pizza photograph is not yet available.
 * This intentionally renders branded illustration + a visible "DEMO IMAGE" tag
 * rather than a photograph, so nobody can mistake it for the restaurant's actual
 * food or storefront. Swap the parent item's `image` field in lib/menu-data.ts
 * (or lib/site-config.ts for the hero/exterior) once a real photo is approved —
 * no layout or component changes are needed.
 */
export function DemoPlaceholder({
  label,
  variant = "square",
}: {
  label: string;
  variant?: "square" | "wide" | "hero";
}) {
  return (
    <div className={`demo-placeholder demo-placeholder--${variant}`} role="img" aria-label={`${label} — photo pending owner approval`}>
      <svg width="64" height="64" viewBox="0 0 120 120" aria-hidden="true" focusable="false">
        <circle cx="60" cy="60" r="46" className="dp-crust" />
        <circle cx="60" cy="60" r="38" className="dp-sauce" />
        <circle cx="44" cy="50" r="5" className="dp-topping" />
        <circle cx="68" cy="42" r="5" className="dp-topping" />
        <circle cx="72" cy="68" r="5" className="dp-topping" />
        <circle cx="48" cy="74" r="5" className="dp-topping" />
      </svg>
      <span className="demo-placeholder-name" aria-hidden="true">{label}</span>
      <span className="demo-placeholder-tag">Demo image</span>
    </div>
  );
}
