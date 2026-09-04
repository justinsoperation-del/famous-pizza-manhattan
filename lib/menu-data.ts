import { business } from "./site-config";

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  /** Verified price string, or null when unverified — render "See current price" on Slice. */
  price: string | null;
  /**
   * Photo URL for this exact item, or null. Null renders no image at all in the
   * image sections (kept text-only) — never a giant blank placeholder tile.
   */
  image: string | null;
  imageAlt: string;
  /**
   * True only when `image` is a licensed stock photo standing in for a genuinely
   * weak/missing real photo (not Famous Pizza's own food). Tagged "Stock photo"
   * wherever it renders and must be swapped for owner-approved photography before
   * public launch. Omit/false for the restaurant's own verified Slice photography.
   */
  isStockPhoto?: boolean;
  featured: boolean;
  orderUrl: string;
  badge?: string;
};

const ORDER_URL = business.orderUrl;

// Photos below are the restaurant's own verified Slice listing photography unless
// marked isStockPhoto, carried over from the current live site — each URL was
// already confirmed to match its specific item.
export const menuItems: MenuItem[] = [
  {
    id: "cheese-pizza",
    name: "Cheese Pizza",
    category: "Pizza",
    description: "Classic tomato sauce and melted cheese.",
    price: "$19.99",
    // STOCK PHOTO — the real Slice photo for this item looked weak/low-resolution
    // at display size. Licensed stock photography that clearly matches the dish
    // (a plain cheese slice), not Famous Pizza's own food. Free to use under the
    // Unsplash License (unsplash.com/license). Photo by Liam Nguyen:
    // unsplash.com/photos/person-holding-sliced-pizza-with-cheese-0pwaiR0whA8
    // Replace with owner-approved photography before public launch.
    image:
      "https://images.unsplash.com/photo-1616141215340-34b0e7c661c8?fit=crop&w=900&h=900&q=80&auto=format",
    imageAlt: "Cheese pizza slice (stock photo)",
    isStockPhoto: true,
    featured: true,
    orderUrl: ORDER_URL,
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    category: "Pizza",
    description: "Classic cheese pizza topped with pepperoni.",
    price: "$23.99",
    // STOCK PHOTO — the real Slice photo for this item looked weak/low-resolution
    // at display size. Licensed stock photography that clearly matches the dish,
    // not Famous Pizza's own food. Free to use under the Unsplash License
    // (unsplash.com/license). Photo by amirali mirhashemian:
    // unsplash.com/photos/pepperoni-pizza-on-a-wooden-tray-w1iMfs6yxuo
    // Replace with owner-approved photography before public launch.
    image:
      "https://images.unsplash.com/photo-1564128442383-9201fcc740eb?fit=crop&w=900&h=900&q=80&auto=format",
    imageAlt: "Pepperoni pizza on a wooden tray (stock photo)",
    isStockPhoto: true,
    featured: true,
    orderUrl: ORDER_URL,
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    category: "Specialty Pizza",
    description: "Tomato sauce, cheese, pineapple, and bacon.",
    price: "$23.99",
    // STOCK PHOTO — the real Slice photo for this item was too weak to use. This is
    // licensed stock photography that closely matches the dish, not Famous Pizza's
    // own food. Free to use under the Unsplash License (unsplash.com/license).
    // Photo by bckfwd: unsplash.com/photos/baked-hawaiian-pizza-vc7DjXSry7g
    // Replace with owner-approved photography before public launch.
    image:
      "https://images.unsplash.com/photo-1562835155-a7c2a225e97d?fit=crop&w=900&h=900&q=80&auto=format",
    imageAlt: "Baked Hawaiian pizza with pineapple (stock photo)",
    isStockPhoto: true,
    featured: true,
    orderUrl: ORDER_URL,
  },
  {
    id: "garlic-knots",
    name: "Garlic Knots",
    category: "Appetizers",
    description: "Baked knots with garlic, butter, parsley, and sauce.",
    price: "$4.25",
    image: null, // no attractive real or stock match found — kept text-only in the Menu
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
    // Kept as the restaurant's real Slice photo (enhanced: sat/con/sharp) rather than
    // swapped for stock — "extra cheese" has no distinct visual identity from a
    // regular cheese pizza, and no stock photo could be confidently confirmed to
    // depict this specific dish without ambiguity, per the "don't use a stock photo
    // that doesn't clearly match" rule.
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
 * Hero photo — STOCK PHOTO, not Famous Pizza's own food. Chosen as the single
 * strongest, most appetizing image on the site: close, warm-lit pepperoni pizza
 * with melted cheese and a browned crust. Distinct from the Pepperoni Pizza card's
 * photo below to avoid repeating the same image in two places on the page. Free to
 * use under the Unsplash License (unsplash.com/license). Photo by Jonas Kakaroto:
 * unsplash.com/photos/pepperoni-pizza-BHdZZQWrcwM
 * Replace with owner-approved photography before public launch.
 */
export const heroImage = {
  src: "https://images.unsplash.com/photo-1576458087875-4d52fc51e013?fit=crop&w=1400&h=1050&q=80&auto=format",
  alt: "Close-up of pepperoni pizza with melted cheese (stock photo)",
  width: 1400,
  height: 1050,
  isStock: true,
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
