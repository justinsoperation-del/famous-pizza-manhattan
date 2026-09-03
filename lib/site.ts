export const SITE = {
  name: "Famous Pizza",
  address: "1 E 28th St, New York, NY 10016",
  shortAddress: "1 E 28th St · New York, NY 10016",
  phone: "(646) 682-7856",
  tel: "tel:+16466827856",
  orderUrl: "https://slicelife.com/restaurants/ny/new-york/10016/99-cents-famous-pizza/menu",
  directionsUrl: "https://www.google.com/maps/search/?api=1&query=Famous%20Pizza%2C%201%20E%2028th%20St%2C%20New%20York%2C%20NY%2010016",
  mapEmbedUrl: "https://www.google.com/maps?q=Famous+Pizza%2C+1+E+28th+St%2C+New+York%2C+NY+10016&output=embed",
  siteOrigin: process.env.NEXT_PUBLIC_SITE_URL || "https://famous-pizza-manhattan.vercel.app",
  heroImage: "https://slice-menu-assets-prod.imgix.net/11868/1611020027_0d62f30af6?fit=crop&h=1200&w=1200",
  rating: "4.3",
};export const BUSINESS = SITE;

export const NAV = [
  ["Home", "/"],
  ["Menu", "/menu"],
  ["Order", "/order"],
  ["Location & Hours", "/location-hours"],
  ["Contact", "/contact"],
] as const;export const SITE_NAV_LINKS = NAV;

export const MENU = {
  specials: [
    { name: "Cheese Pizza Slice Special", desc: "Current online slice special.", price: "$2.99" },
    { name: "Two Cheese Slices + Can of Soda", desc: "Quick combo for a Midtown lunch or late-night stop.", price: "$6.75" },
    { name: "Two Cheese Slices + Water", desc: "Two slices with bottled water.", price: "$5.75" },
  ],
  pizza: [
    { name: "Cheese Pizza", desc: "Tomato sauce and classic cheese.", price: "$19.99" },
  ],
  specialty: [
    { name: "Pepperoni Pizza", desc: "Classic cheese and pepperoni.", price: "$23.99" },
    { name: "Extra Cheese Pizza", desc: "Topped with extra cheese.", price: "$23.99" },
    { name: "Hawaiian Pizza", desc: "Tomato sauce, cheese, pineapple, and bacon.", price: "$23.99" },
    { name: "Black Olives Pizza", desc: "Classic pizza topped with black olives.", price: "$23.99" },
    { name: "BBQ Chicken Pizza", desc: "BBQ sauce, mozzarella, and chicken.", price: "$23.99" },
    { name: "Chicken & Broccoli Pizza", desc: "Classic cheese, chicken, and broccoli.", price: "$23.99" },
    { name: "Ricotta Cheese Pizza", desc: "Classic pizza with ricotta cheese.", price: "$23.99" },
    { name: "Mushrooms Pizza", desc: "Classic pizza topped with mushrooms.", price: "$23.99" },
    { name: "Mix Vegetables Pizza", desc: "Mushrooms, tomatoes, green peppers, onions, and olives.", price: "$23.99" },
  ],
  appetizers: [
    { name: "Garlic Knots", desc: "Baked knots with butter, garlic, parsley, and a side of sauce.", price: "$4.25" },
    { name: "Mozzarella Sticks", desc: "Crispy fried cheese sticks with a side of sauce.", price: "$5.00" },
    { name: "Pepperoni Roll", desc: "Pepperoni pizza rolled and baked.", price: "$5.50" },
    { name: "Chicken Roll", desc: "Breaded chicken, tomato sauce, and mozzarella.", price: "$9.00" },
    { name: "Beef Patty", desc: "Flaky pastry filled with seasoned beef.", price: "$4.00" },
    { name: "Beef Patty with Cheese & Pepperoni", desc: "Seasoned beef patty with cheese and pepperoni.", price: "$5.75" },
  ],
  beverages: [
    { name: "Soda", desc: "Cold soda.", price: "$1.99" },
    { name: "Arizona Iced Tea", desc: "Iced tea.", price: "$1.99" },
    { name: "Snapple", desc: "Assorted flavors.", price: "$2.49" },
    { name: "Gatorade", desc: "Assorted flavors.", price: "$2.49" },
    { name: "Red Bull", desc: "Energy drink.", price: "$3.49" },
    { name: "Monster", desc: "Energy drink.", price: "$2.50" },
    { name: "Vitamin Water", desc: "Assorted flavors.", price: "$2.49" },
    { name: "Water", desc: "Bottled water.", price: "$2.49" },
  ],
};
