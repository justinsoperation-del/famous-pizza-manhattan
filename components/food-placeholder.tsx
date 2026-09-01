/**
 * Branded placeholder shown when no accurately-matched, owner-approved
 * photo exists yet for an item. Never used to stand in for a different
 * item's real photo.
 */
export function FoodPlaceholder(props: { label: string }) {
  return (
    <div className="food-placeholder" role="img" aria-label={props.label + " — photo coming soon"}>
      <span className="food-placeholder-mark">F</span>
      <span className="food-placeholder-text">Photo coming soon</span>
    </div>
  );
}
