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
  /**
   * Verified Slice product ID for this exact item, or omitted if none has been
   * confirmed yet. When present, every link to this item (featured card, food
   * image, menu row, "Order on Slice" button) opens the exact product page:
   * https://www.orderfamouspizzamenu.com/?product_id=ID
   * When absent, links safely fall back to the main ordering page. Do not guess
   * or invent an ID — only add one here once it's been manually verified.
   */
  sliceProductId?: string;
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
  image: "/images/owner/cheese-pizza.jpg",
  imageAlt: "Cheese pizza from Famous Pizza",
  isStockPhoto: false,
  featured: true,
  sliceProductId: "3144531",
},
  {
  id: "pepperoni-pizza",
  name: "Pepperoni Pizza",
  category: "Pizza",
  description: "Classic cheese pizza topped with pepperoni.",
  price: "$23.99",
  image: "/images/owner/pepperoni-pizza.jpg",
  imageAlt: "Pepperoni pizza from Famous Pizza",
  isStockPhoto: false,
  featured: true,
  sliceProductId: "3144570",
},
  {
  id: "hawaiian-pizza",
  name: "Hawaiian Pizza",
  category: "Specialty Pizza",
  description: "Tomato sauce, cheese, pineapple, and bacon.",
  price: "$23.99",
  image: "/images/owner/hawaiian-pizza.jpg",
  imageAlt: "Hawaiian pizza from Famous Pizza",
  isStockPhoto: false,
  featured: true,
  sliceProductId: "3144664",
},
    {
    id: "garlic-knots",
    name: "Garlic Knots",
    category: "Appetizers",
    description: "Baked knots with garlic, butter, parsley, and sauce.",
    price: "$4.25",
    image: "/images/owner/garlic-knots.jpg",
    imageAlt: "Garlic knots from Famous Pizza",
    featured: false,
    sliceProductId: "3144798",
  },
  {
    id: "extra-cheese-pizza",
    name: "Extra Cheese Pizza",
    category: "Pizza",
    description: "Classic cheese pizza with extra cheese.",
    price: "$23.99",
    image: "/images/owner/cheese-pizza.jpg",
    imageAlt: "Extra cheese pizza from Famous Pizza",
    isStockPhoto: false,
    featured: true,
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
    sliceProductId: "3296455", // verified manually by the owner
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
  },
  {
  id: "bbq-chicken-pizza",
  name: "BBQ Chicken Pizza",
  category: "Specialty Pizza",
  description: "See Slice for current description.",
  price: "$23.99",
  image: "/images/owner/bbq-chicken-pizza.jpg",
  imageAlt: "BBQ chicken pizza from Famous Pizza",
  featured: false,
  sliceProductId: "3144657",
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
    sliceProductId: "3144660", // verified manually by the owner
  },
  {
  id: "mix-vegetables-pizza",
  name: "Mix Vegetables Pizza",
  category: "Specialty Pizza",
  description: "See Slice for current description.",
  price: "$23.99",
  image: "/images/owner/veggie-pizza.jpg",
  imageAlt: "Mixed vegetable pizza from Famous Pizza",
  featured: false,
  sliceProductId: "3144661",
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
    sliceProductId: "3144799", // verified manually by the owner
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
    sliceProductId: "3144801", // verified manually by the owner
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
    sliceProductId: "3144809", // verified manually by the owner
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
    sliceProductId: "3144811", // verified manually by the owner
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
    sliceProductId: "3144817", // verified manually by the owner
  },
];

/**
 * Hero photo supplied/approved by Famous Pizza owner.
 */
export const heroImage = {
  src: "/images/owner/pepperoni-sausage-pizza.jpg",
  alt: "Pepperoni and sausage pizza from Famous Pizza",
  width: 1400,
  height: 1050,
  isStock: false,
};

export const categoryOrder = [
  "Pizza",
  "Specialty Pizza",
  "Slice Deals",
  "Appetizers",
  "Rolls",
] as const;

/**
 * Resolves the exact Slice URL for an item — the single place that decides
 * between a verified direct product link and the safe fallback. To add a newly
 * verified product ID later, just set `sliceProductId` on that item above;
 * every card/button/link using this helper updates automatically.
 */
export function getOrderUrl(item: MenuItem): string {
  return item.sliceProductId
    ? `${ORDER_URL}?product_id=${item.sliceProductId}`
    : ORDER_URL;
}

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
