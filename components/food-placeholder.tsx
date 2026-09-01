/**
 * Clean text/category card shown when no accurately-matched, owner-approved
 * photo exists yet for an item. This is deliberate, presentable content —
 * not an apologetic "missing image" placeholder — so it never reads as a
 * broken or empty card next to the real photos around it.
 */
export function FoodPlaceholder(props: { label: string }) {
  return (
    <div className="food-textcard">
      <span className="food-textcard-mark">F</span>
      <span className="food-textcard-label">{props.label}</span>
    </div>
  );
}
