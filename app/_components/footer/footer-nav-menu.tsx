import { FooterMenuItem } from "./footer-menu-item";

const MENU_OPTIONS = [
  {
    title: "Categories",
    subitems: [
      { text: "Men", url: "/men" },
      { text: "Women", url: "/women" },
      { text: "Kids", url: "/kids" },
      { text: "Beauty", url: "/beauty" },
    ],
  },
  {
    title: "Information",
    subitems: [
      { text: "About Us", url: "/" },
      { text: "Contact Us", url: "/" },
      { text: "Blog", url: "/" },
      { text: "FAQs", url: "/" },
    ],
  },
  {
    title: "Useful links",
    subitems: [
      { text: "Terms & Conditions", url: "/" },
      { text: "Returns & Exchanges", url: "/" },
      { text: "Shipping & Delivery", url: "/" },
      { text: "Privacy Policy", url: "/" },
    ],
  },
  {
    title: "Contact us",
    subitems: [
      { text: "Somewhere, Earth, World", url: "/" },
      { text: "+12 (345) 456 7890", url: "/" },
      { text: "All week 24/7", url: "/" },
      { text: "sneyder2328@gmail.com", url: "/" },
    ],
  },
];

export function FooterNavMenu() {
  return (
    <div className="bg-primaryMain py-8">
      <ul className="inner grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {MENU_OPTIONS.map((option) => (
          <FooterMenuItem key={option.title} {...option} />
        ))}
      </ul>
    </div>
  );
}
