import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Hair by Harinder",
  tagline: "Unisex salon for cuts, styling and keratin treatments.",
  category: "Unisex salon",
  schemaType: "HairSalon",
  area: "Brampton, ON",
  siteUrl: "https://hair-by-harinder-ca.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#c45aad" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Unisex salon in Brampton",
    headline: "Cuts, styling and treatments for him and her",
    subhead: "Hair by Harinder is a unisex salon in Brampton for men's haircuts, fades and beards, and women's styling, keratin, hair botox, smoothening and rebonding. Send a message, WhatsApp or call to book.",
    images: [
      { src: "/images/post-4.jpg", alt: "A fade haircut by Hair by Harinder", width: 720, height: 1280 },
      { src: "/images/post-9.jpg", alt: "A clean finish haircut by Hair by Harinder", width: 828, height: 1472 },
      { src: "/images/post-7.jpg", alt: "A fade in progress at Hair by Harinder", width: 720, height: 1280 },
    ],
    primaryCta: { label: "Book on WhatsApp", href: "https://wa.me/19052262278" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Unisex salon in Brampton",
    "Men's haircuts, fades and beard work",
    "Women's styling, keratin, hair botox, smoothening and rebonding",
    "Book by Instagram DM, WhatsApp or a call",
  ],

  about: {
    title: "Welcome to Hair by Harinder",
    body: [
      "Hair by Harinder is a unisex salon in Brampton, formerly Cutz and Chemical. The same hands now work under a new name, with services for him and her.",
      "For him, the salon offers haircuts, fades and beard work. For her, haircuts, styling, hair botox, keratin, smoothening and rebonding. Send a message on Instagram or WhatsApp, or call 905-226-2278, to book.",
    ],
    image: { src: "/images/post-4.jpg", alt: "A fade haircut by Hair by Harinder", width: 720, height: 1280 },
  },

  menu: {
    label: "Services",
    title: "Salon services",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message or call to ask about current pricing and to book a time.",
    groups: [
      {
        title: "For him",
        items: [
          { name: "Haircuts and fades" },
          { name: "Beard work" },
        ],
      },
      {
        title: "For her",
        items: [
          { name: "Haircuts and styling" },
          { name: "Hair botox" },
          { name: "Keratin" },
          { name: "Smoothening and rebonding" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-4.jpg", width: 720, height: 1280, alt: "A fade haircut by Hair by Harinder", caption: "A fresh fade", href: "https://www.instagram.com/reel/DeFx047tFiZ/" },
      { src: "/images/post-9.jpg", width: 828, height: 1472, alt: "A clean finish haircut by Hair by Harinder", caption: "A clean finish", href: "https://www.instagram.com/reel/DdqrsVbt0Fv/" },
      { src: "/images/post-7.jpg", width: 720, height: 1280, alt: "A fade in progress at Hair by Harinder", caption: "A new fade", href: "https://www.instagram.com/reel/Dd2BAz1pEfI/" },
      { src: "/images/post-3.jpg", width: 720, height: 1280, alt: "A client after a cut at Hair by Harinder", caption: "After a cut", href: "https://www.instagram.com/reel/DfXm52HJOX4/" },
      { src: "/images/post-5.jpg", width: 720, height: 1280, alt: "A haircut in the chair at Hair by Harinder", caption: "In the chair", href: "https://www.instagram.com/reel/Dd6L1QatgaE/" },
      { src: "/images/post-8.jpg", width: 720, height: 1280, alt: "A kids' haircut by Hair by Harinder", caption: "A kids' cut", href: "https://www.instagram.com/reel/Ddw2zGftJGo/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "hair_by_harinder",
    embeds: ["https://www.instagram.com/reel/DeFx047tFiZ/", "https://www.instagram.com/reel/DdqrsVbt0Fv/", "https://www.instagram.com/reel/Dd2BAz1pEfI/"],
  },

  order: {
    label: "How to book",
    title: "Book with a DM, WhatsApp or a call",
    intro: "Send a message on Instagram or WhatsApp, or call 905-226-2278, to book a chair in Brampton.",
    dmMessage: "Hi Hair by Harinder! I would like to book.\nPreferred date:\nService:",
    headerCtaLabel: "DM to book",
    links: [
      { label: "Book on WhatsApp", href: "https://wa.me/19052262278" },
      { label: "DM to book", href: "https://ig.me/m/hair_by_harinder" },
      { label: "Call 905-226-2278", href: "tel:+19052262278" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a message on Instagram or WhatsApp, or call 905-226-2278, to book." },
    { q: "Where is the salon?", a: "Hair by Harinder is a unisex salon in Brampton." },
    { q: "What services do you offer?", a: "For him: haircuts, fades and beard work. For her: haircuts, styling, hair botox, keratin, smoothening and rebonding." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Brampton, Ontario",
    phone: "905-226-2278",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/hair_by_harinder/" }],
  },

  seo: {
    title: "Hair by Harinder | Unisex salon in Brampton",
    description: "Unisex salon in Brampton for men's cuts, fades and beards, and women's styling, keratin, hair botox and smoothening. Book by DM, WhatsApp or 905-226-2278.",
    keywords: ["unisex salon Brampton", "Brampton barber", "Hair by Harinder"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
