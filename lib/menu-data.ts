import { business } from "./site-config";

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  /** Verified price string, or null when unverified — render "See current price" on Slice. */
  price: string | null;
  /**
   * Real, verified photo URL for this exact item, or null.
   * Only set this when the photo is confirmed to depict THIS item — never borrow
   * a neighboring item's photo to fill a gap. Null renders the branded placeholder.
   */
  image: string | null;
  imageAlt: string;
  featured: boolean;
  orderUrl: string;
  badge?: string;
};

const ORDER_URL = business.orderUrl;

// Photos below are the restaurant's own verified Slice listing photography, carried
// over from the current live site — each URL was already confirmed to match its
// specific item. No stock or borrowed photography is used for real menu items.
export const menuItems: MenuItem[] = [
  {
    id: "cheese-pizza",
    name: "Cheese Pizza",
    category: "Pizza",
    description: "Classic tomato sauce and melted cheese.",
    price: "$19.99",
    image:
      "https://slice-menu-assets-prod.imgix.net/11868/1611020011_ab9bbe0970?fit=crop&h=900&w=900&sat=8&con=6&sharp=15",
    imageAlt: "Whole cheese pizza with melted mozzarella from Famous Pizza",
    featured: true,
    orderUrl: ORDER_URL,
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    category: "Pizza",
    description: "Classic cheese pizza topped with pepperoni.",
    price: "$23.99",
    image:
      "https://slice-menu-assets-prod.imgix.net/11868/1611020027_0d62f30af6?fit=crop&h=900&w=900",
    imageAlt: "Pepperoni pizza from Famous Pizza",
    featured: true,
    orderUrl: ORDER_URL,
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    category: "Specialty Pizza",
    description: "Tomato sauce, cheese, pineapple, and bacon.",
    price: "$23.99",
    image: null, // real photo flagged as too weak/unappetizing for display — kept text-only in the Menu until a stronger photo is available
    imageAlt: "Hawaiian pizza — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "garlic-knots",
    name: "Garlic Knots",
    category: "Appetizers",
    description: "Baked knots with garlic, butter, parsley, and sauce.",
    price: "$4.25",
    image: null, // real photo flagged as too weak for display — kept text-only in the Menu until a stronger photo is available
    imageAlt: "Garlic knots — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "extra-cheese-pizza",
    name: "Extra Cheese Pizza",
    category: "Pizza",
    description: "Our classic pie with an extra layer of cheese.",
    price: "$23.99",
    image:
      "https://slice-menu-assets-prod.imgix.net/11868/1611020036_ab9bbe0970?fit=crop&h=900&w=900&sat=8&con=6&sharp=15",
    imageAlt: "Extra cheese pizza from Famous Pizza",
    featured: true,
    orderUrl: ORDER_URL,
  },
  {
    id: "ricotta-pizza",
    name: "Ricotta Cheese Pizza",
    category: "Specialty Pizza",
    description: "See Slice for current description.",
    price: "$23.99",
    image: null, // no usable photo — branded placeholder if ever shown, text-only in the Menu for now
    imageAlt: "Ricotta cheese pizza — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "slice-special",
    name: "Cheese Pizza Slice Special",
    category: "Slice Deals",
    description: "See Slice for current description.",
    price: "$2.99",
    image: null,
    imageAlt: "Cheese pizza slice special — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "two-slices-water",
    name: "2 Cheese Slices + Water",
    category: "Slice Deals",
    description: "See Slice for current description.",
    price: "$5.75",
    image: null,
    imageAlt: "Two cheese slices with water — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "two-slices-soda",
    name: "2 Cheese Slices + Soda",
    category: "Slice Deals",
    description: "See Slice for current description.",
    price: "$6.75",
    image: null,
    imageAlt: "Two cheese slices with soda — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Chicken Pizza",
    category: "Specialty Pizza",
    description: "See Slice for current description.",
    price: "$23.99",
    image: null,
    imageAlt: "BBQ chicken pizza — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "chicken-broccoli-pizza",
    name: "Chicken & Broccoli Pizza",
    category: "Specialty Pizza",
    description: "See Slice for current description.",
    price: "$23.99",
    image: null,
    imageAlt: "Chicken and broccoli pizza — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "mix-vegetables-pizza",
    name: "Mix Vegetables Pizza",
    category: "Specialty Pizza",
    description: "See Slice for current description.",
    price: "$23.99",
    image: null,
    imageAlt: "Mixed vegetable pizza — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "mozzarella-sticks",
    name: "Mozzarella Sticks",
    category: "Appetizers",
    description: "See Slice for current description.",
    price: "$5.00",
    image: null,
    imageAlt: "Mozzarella sticks — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "pepperoni-roll",
    name: "Pepperoni Roll",
    category: "Rolls",
    description: "See Slice for current description.",
    price: "$5.50",
    image: null,
    imageAlt: "Pepperoni roll — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "chicken-roll",
    name: "Chicken Roll",
    category: "Rolls",
    description: "See Slice for current description.",
    price: "$9.00",
    image: null,
    imageAlt: "Chicken roll — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "beef-patty",
    name: "Beef Patty",
    category: "Rolls",
    description: "See Slice for current description.",
    price: "$4.00",
    image: null,
    imageAlt: "Beef patty — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
  {
    id: "beef-patty-cheese-pepperoni",
    name: "Beef Patty + Cheese & Pepperoni",
    category: "Rolls",
    description: "See Slice for current description.",
    price: "$5.75",
    image: null,
    imageAlt: "Beef patty with cheese and pepperoni — photo pending",
    featured: false,
    orderUrl: ORDER_URL,
  },
];

/**
 * Dedicated hero crop — the restaurant's own verified Slice photography (Pepperoni),
 * requested from the CDN at a wider aspect ratio so the whole pie reads clearly
 * instead of being tightly cropped by a square source image forced into a tall
 * frame. Clean crop only — no saturation/contrast boost, so the food reads natural.
 * Chosen over the Cheese photo because its color/topping contrast holds up better
 * at hero size. Real, verified restaurant photography — no stock imagery.
 */
export const heroImage = {
  src: "https://slice-menu-assets-prod.imgix.net/11868/1611020027_0d62f30af6?fit=crop&w=1400&h=1050&crop=entropy",
  alt: "Pepperoni pizza with melted cheese from Famous Pizza",
  width: 1400,
  height: 1050,
};

export const categoryOrder = [
  "Pizza",
  "Specialty Pizza",
  "Slice Deals",
  "Appetizers",
  "Rolls",
] as const;

export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter((item) => item.featured);
}

export function getItemsByCategory(): { category: string; items: MenuItem[] }[] {
  return categoryOrder
    .map((category) => ({
      category,
      items: menuItems.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);
}

/** Items still missing owner-approved photography — feeds the photo/content gap report. */
export function getItemsMissingPhotos(): MenuItem[] {
  return menuItems.filter((item) => item.image === null);
}
