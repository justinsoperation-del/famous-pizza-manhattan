import { business } from "./site-config";

export type MenuItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  /** Verified price string, or null when unverified — render "See current price" on Slice. */
  price?: string | null;
slicePrice?: string | null;
mediumPrice?: string | null;
largePrice?: string | null;
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
    slicePrice: "$2.50",
    mediumPrice: "$14.99",
    largePrice: "$16.99",
    image: "/images/owner/cheese-pizza.jpg",
    imageAlt: "Cheese pizza from Famous Pizza",
    isStockPhoto: false,
    featured: true,
    sliceProductId: "3144531",
  },
  {
    id: "extra-cheese-pizza",
    name: "Extra Cheese Pizza",
    category: "Pizza",
    description: "Classic cheese pizza with extra cheese.",
    slicePrice: "$2.99",
    mediumPrice: "$18.99",
    largePrice: "$22.99",
    image: "/images/owner/extra-cheese-pizza.jpg",
    imageAlt: "Extra cheese pizza from Famous Pizza",
    isStockPhoto: false,
    featured: true,
  },
  {
    id: "pepperoni-pizza",
    name: "Pepperoni Pizza",
    category: "Pizza",
    description: "Classic cheese pizza topped with pepperoni.",
    slicePrice: "$2.99",
    mediumPrice: "$18.99",
    largePrice: "$22.99",
    image: "/images/owner/pepperoni-pizza.jpg",
    imageAlt: "Pepperoni pizza from Famous Pizza",
    isStockPhoto: false,
    featured: true,
    sliceProductId: "3144570",
  },
  {
    id: "broccoli-pizza",
    name: "Broccoli Pizza",
    category: "Pizza",
    description: "Pizza topped with broccoli.",
    slicePrice: "$3.50",
    mediumPrice: "$18.99",
    largePrice: "$22.99",
    image: null,
    imageAlt: "Broccoli pizza",
    featured: false,
  },
  {
    id: "spinach-pizza",
    name: "Spinach Pizza",
    category: "Pizza",
    description: "Pizza topped with spinach.",
    slicePrice: "$3.50",
    mediumPrice: "$18.99",
    largePrice: "$22.99",
    image: null,
    imageAlt: "Spinach pizza",
    featured: false,
  },
  {
    id: "mushroom-pizza",
    name: "Mushroom Pizza",
    category: "Pizza",
    description: "Pizza topped with mushrooms.",
    slicePrice: "$3.75",
    mediumPrice: "$18.99",
    largePrice: "$22.99",
    image: "/images/owner/mushroom-pizza.jpg",
    imageAlt: "Mushroom pizza from Famous Pizza",
    featured: false,
  },
  {
    id: "pineapple-pizza",
    name: "Pineapple Pizza",
    category: "Pizza",
    description: "Pizza topped with pineapple.",
    slicePrice: "$3.75",
    mediumPrice: "$16.99",
    largePrice: "$22.99",
    image: null,
    imageAlt: "Pineapple pizza",
    featured: false,
  },
  {
    id: "fresh-pepper-onion",
    name: "Fresh Pepper & Onion Pizza",
    category: "Pizza",
    description: "Pizza topped with fresh peppers and onions.",
    slicePrice: "$3.50",
    mediumPrice: "$18.99",
    largePrice: "$22.99",
    image: null,
    imageAlt: "Fresh pepper and onion pizza",
    featured: false,
  },
  {
    id: "sausage-pizza",
    name: "Sausage Pizza",
    category: "Pizza",
    description: "Pizza topped with sausage.",
    slicePrice: "$3.50",
    mediumPrice: "$18.99",
    largePrice: "$22.99",
    image: null,
    imageAlt: "Sausage pizza",
    featured: false,
  },
  {
    id: "black-olives-pizza",
    name: "Black Olives Pizza",
    category: "Pizza",
    description: "Pizza topped with black olives.",
    slicePrice: "$3.50",
    mediumPrice: "$18.99",
    largePrice: "$22.99",
    image: null,
    imageAlt: "Black olives pizza",
    featured: false,
  },
  {
    id: "ricotta-pizza",
    name: "Ricotta Cheese Pizza",
    category: "Pizza",
    description: "Pizza topped with ricotta cheese.",
    slicePrice: "$3.75",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: null,
    imageAlt: "Ricotta cheese pizza",
    featured: false,
    sliceProductId: "3296455",
  },
  {
    id: "chicken-pizza",
    name: "Chicken Pizza",
    category: "Specialty Pizza",
    description: "Pizza topped with chicken.",
    slicePrice: "$3.99",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: "/images/owner/chicken-pizza-01.jpg",
    imageAlt: "Chicken pizza from Famous Pizza",
    featured: false,
  },
  {
    id: "bbq-chicken-pizza",
    name: "BBQ Chicken Pizza",
    category: "Specialty Pizza",
    description: "Pizza topped with BBQ chicken.",
    slicePrice: "$3.99",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: "/images/owner/bbq-chicken-pizza.jpg",
    imageAlt: "BBQ chicken pizza from Famous Pizza",
    featured: false,
    sliceProductId: "3144657",
  },
  {
    id: "buffalo-chicken-pizza",
    name: "Buffalo Chicken Pizza",
    category: "Specialty Pizza",
    description: "Pizza topped with buffalo chicken.",
    slicePrice: "$3.99",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: "/images/owner/chicken-pizza-02.jpg",
    imageAlt: "Buffalo chicken pizza from Famous Pizza",
    featured: false,
  },
  {
    id: "chicken-broccoli-pizza",
    name: "Chicken & Broccoli Pizza",
    category: "Specialty Pizza",
    description: "Pizza topped with chicken and broccoli.",
    slicePrice: "$3.99",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: null,
    imageAlt: "Chicken and broccoli pizza",
    featured: false,
    sliceProductId: "3144660",
  },
  {
    id: "chicken-bacon-ranch",
    name: "Chicken Bacon Ranch Pizza",
    category: "Specialty Pizza",
    description: "Chicken, bacon, and ranch.",
    slicePrice: "$3.99",
    mediumPrice: "$22.99",
    largePrice: "$24.99",
    image: "/images/owner/chicken-ranch-pizza.jpg",
    imageAlt: "Chicken bacon ranch pizza from Famous Pizza",
    featured: false,
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    category: "Specialty Pizza",
    description: "Tomato sauce, cheese, pineapple, and bacon.",
    slicePrice: "$3.99",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: "/images/owner/hawaiian-pizza.jpg",
    imageAlt: "Hawaiian pizza from Famous Pizza",
    isStockPhoto: false,
    featured: true,
    sliceProductId: "3144664",
  },
  {
    id: "sausage-pepperoni-pizza",
    name: "Sausage & Pepperoni Pizza",
    category: "Specialty Pizza",
    description: "Pizza topped with sausage and pepperoni.",
    slicePrice: "$3.99",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: "/images/owner/pepperoni-sausage-pizza.jpg",
    imageAlt: "Sausage and pepperoni pizza from Famous Pizza",
    featured: false,
  },
  {
    id: "mix-vegetables-pizza",
    name: "Mix Vegetable Pizza",
    category: "Specialty Pizza",
    description: "Pizza topped with mixed vegetables.",
    slicePrice: "$3.99",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: "/images/owner/veggie-pizza.jpg",
    imageAlt: "Mixed vegetable pizza from Famous Pizza",
    featured: false,
    sliceProductId: "3144661",
  },
  {
    id: "ricotta-pepperoni-pizza",
    name: "Ricotta & Pepperoni Pizza",
    category: "Specialty Pizza",
    description: "Ricotta cheese and pepperoni.",
    slicePrice: "$3.99",
    mediumPrice: "$22.99",
    largePrice: "$24.99",
    image: null,
    imageAlt: "Ricotta and pepperoni pizza",
    featured: false,
  },

  // Additional specialty pizzas from owner's current menu
  {
    id: "fresh-mozzarella",
    name: "Fresh Mozzarella Pizza",
    category: "Specialty Pizza",
    description: "Pizza made with fresh mozzarella.",
    slicePrice: "$3.99",
    mediumPrice: "$22.99",
    largePrice: "$24.99",
    image: null,
    imageAlt: "Fresh mozzarella pizza",
    featured: false,
  },
  {
    id: "jalapeno-pepperoni",
    name: "Jalapeño & Pepperoni Pizza",
    category: "Specialty Pizza",
    description: "Jalapeño and pepperoni.",
    slicePrice: "$3.99",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: null,
    imageAlt: "Jalapeño and pepperoni pizza",
    featured: false,
  },
  {
    id: "mushroom-broccoli",
    name: "Mushroom & Broccoli Pizza",
    category: "Specialty Pizza",
    description: "Mushroom and broccoli.",
    slicePrice: "$3.99",
    mediumPrice: "$20.99",
    largePrice: "$23.99",
    image: null,
    imageAlt: "Mushroom and broccoli pizza",
    featured: false,
  },
  {
    id: "extra-pepperoni",
    name: "Extra Pepperoni Pizza",
    category: "Specialty Pizza",
    description: "Pizza with extra pepperoni.",
    slicePrice: "$3.99",
    mediumPrice: "$22.99",
    largePrice: "$25.99",
    image: "/images/owner/pepperoni-pizza.jpg",
    imageAlt: "Extra pepperoni pizza from Famous Pizza",
    featured: false,
  },
  {
    id: "meat-lovers",
    name: "Meat Lovers Pizza",
    category: "Specialty Pizza",
    description: "Loaded with assorted meats.",
    slicePrice: "$4.49",
    mediumPrice: "$24.99",
    largePrice: "$25.99",
    image: "/images/owner/meat-lovers-pizza.jpg",
    imageAlt: "Meat lovers pizza from Famous Pizza",
    featured: false,
  },
  {
    id: "buffalo-chicken-ranch",
    name: "Buffalo Chicken Ranch Pizza",
    category: "Specialty Pizza",
    description: "Buffalo chicken with ranch.",
    slicePrice: "$3.99",
    mediumPrice: "$22.99",
    largePrice: "$24.99",
    image: null,
    imageAlt: "Buffalo chicken ranch pizza",
    featured: false,
  },
  {
    id: "mushroom-pepperoni",
    name: "Mushroom & Pepperoni Pizza",
    category: "Specialty Pizza",
    description: "Mushroom and pepperoni.",
    slicePrice: "$3.99",
    mediumPrice: null,
    largePrice: null,
    image: null,
    imageAlt: "Mushroom and pepperoni pizza",
    featured: false,
  },
  {
    id: "pineapple-pepperoni",
    name: "Pineapple & Pepperoni Pizza",
    category: "Specialty Pizza",
    description: "Pineapple and pepperoni.",
    slicePrice: "$3.99",
    mediumPrice: null,
    largePrice: null,
    image: null,
    imageAlt: "Pineapple and pepperoni pizza",
    featured: false,
  },
  {
    id: "meatball-pepperoni",
    name: "Meatball & Pepperoni Pizza",
    category: "Specialty Pizza",
    description: "Meatball and pepperoni.",
    slicePrice: "$3.99",
    mediumPrice: null,
    largePrice: null,
    image: null,
    imageAlt: "Meatball and pepperoni pizza",
    featured: false,
  },
  {
    id: "pepperoni-bacon",
    name: "Pepperoni & Bacon Pizza",
    category: "Specialty Pizza",
    description: "Pepperoni and bacon.",
    slicePrice: "$3.99",
    mediumPrice: null,
    largePrice: null,
    image: null,
    imageAlt: "Pepperoni and bacon pizza",
    featured: false,
  },

  // SIDES / ROLLS — owner's latest text prices
  {
    id: "garlic-knots",
    name: "Garlic Knots — 5 Pieces",
    category: "Sides",
    description: "Five baked garlic knots.",
    price: "$2.50",
    image: "/images/owner/garlic-knots.jpg",
    imageAlt: "Garlic knots from Famous Pizza",
    featured: false,
    sliceProductId: "3144798",
  },
  {
    id: "pepperoni-roll",
    name: "Pepperoni Roll",
    category: "Sides",
    description: "Baked pepperoni roll.",
    price: "$2.50",
    image: null,
    imageAlt: "Pepperoni roll",
    featured: false,
    sliceProductId: "3144801",
  },
  {
  id: "brownie",
  name: "Brownie",
  category: "Sides",
  description: "Chocolate brownie.",
  price: "$3.75",
  image: "/images/owner/brownies.jpg",
  imageAlt: "Brownies from Famous Pizza",
  featured: false,
},
  {
    id: "beef-patty",
    name: "Beef Patty",
    category: "Sides",
    description: "Beef patty.",
    price: "$3.75",
    image: "/images/owner/beef-patties.jpg",
    imageAlt: "Beef patties from Famous Pizza",
    featured: false,
    sliceProductId: "3144811",
  },
  {
    id: "beef-patty-cheese",
    name: "Beef Patty + Cheese",
    category: "Sides",
    description: "Beef patty with cheese.",
    price: "$4.75",
    image: "/images/owner/beef-patties.jpg",
    imageAlt: "Beef patty with cheese",
    featured: false,
  },
  {
    id: "beef-patty-cheese-pepperoni",
    name: "Beef Patty + Cheese & Pepperoni",
    category: "Sides",
    description: "Beef patty with cheese and pepperoni.",
    price: "$5.75",
    image: "/images/owner/beef-patties.jpg",
    imageAlt: "Beef patty with cheese and pepperoni",
    featured: false,
    sliceProductId: "3144817",
  },
  {
    id: "chicken-roll",
    name: "Chicken Roll",
    category: "Sides",
    description: "Baked chicken roll.",
    price: "$6.99",
    image: null,
    imageAlt: "Chicken roll",
    featured: false,
    sliceProductId: "3144809",
  },
  {
    id: "mozzarella-sticks",
    name: "Mozzarella Sticks — 5 Pieces",
    category: "Sides",
    description: "Five mozzarella sticks.",
    price: "$3.99",
    image: null,
    imageAlt: "Mozzarella sticks",
    featured: false,
       sliceProductId: "3144799",
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
  "Sides",
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
