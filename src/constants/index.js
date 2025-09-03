import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#products", label: "منتجات" },
  { href: "#about-us", label: "تعرف إلينا" },
  { href: "#contact-us", label: "تواصل معنا" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "100+", label: "علامة" },
  { value: "10+", label: "متجر" },
  { value: "100k+", label: "زبون" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Fashion Insulation 10kv",
    price: "$27.54",
  },
  {
    imgURL: shoe5,
    name: "Genuine Leather",
    price: "$30.20",
  },
  {
    imgURL: shoe6,
    name: "Snowy boots",
    price: "$20.20",
  },
  {
    imgURL: shoe7,
    name: "Winter Chelsea Boots",
    price: "43.83",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "شحن مجاني",
    subtext: "استمتع بالتسوق السلس مع خدمة الشحن المجانية لدينا.",
  },
  {
    imgURL: shieldTick,
    label: "دفع امن",
    subtext: "استمتع بمعاملات خالية من الخطر مع خيارات الدفع الآمنة لدينا.",
  },
  {
    imgURL: support,
    label: "يسرنا مساعدتك",
    subtext:
      "فريقنا المتفاني موجود هنا لمساعدتك في كل خطوة حتى وصول المنتج الي بيتك.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "حمدي فواز",
    rating: 4.5,
    feedback: "الاهتمام بالتفاصيل وجودة المنتج فاق توقعاتي. ينصح به بشده!",
  },
  {
    imgURL: customer2,
    customerName: "سارة أحمد",
    rating: 4.5,
    feedback:
      "المنتج لم يلبي توقعاتي فحسب، بل تجاوزها أيضًا. سأكون بالتأكيد عميلاً دائما!",
  },
];

export const footerLinks = [
  {
    title: "منتجات",
    links: [
      { name: "Revoun Force 1", link: "/" },
      { name: "Revoun Max 1", link: "/" },
      { name: "Revoun leather 1", link: "/" },
      { name: "Revoun Force 2", link: "/" },
      { name: "Revoun Waffle Racer", link: "/" },
      { name: "Revoun Cortez", link: "/" },
    ],
  },
  {
    title: "مساعدة",
    links: [
      { name: "تعرف إلينا", link: "/" },
      { name: "أسئلة وأجوبة", link: "/" },
      { name: "وظائف", link: "/" },
      { name: "بنود الخصوصية", link: "/" },
      { name: "بنود الدفع", link: "/" },
    ],
  },
  {
    title: "تواصل معنا",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
