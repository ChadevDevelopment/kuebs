export type SiteConfig = typeof siteConfig;

export const WP_REST_BASE_URL =
  "";

export const siteConfig = {
  name: "Kuebs",
  description:
    "",
  keywords: [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ],
  url: "https://kuebs.vercel.app/",
  ogImage: "https://kuebs.vercel.app/og-image.jpg",
};

export const mainNav = [
// {
//   title: "Pages",
//   items: [
//     {
//       title: "About",
//       href: "/about",
//       items: [],
//     },
//     {
//       title: "Services",
//       href: "/services",
//       items: [],
//     },
//     {
//       title: "Pricing",
//       href: "/pricing",
//       items: [],
//     },
//     {
//       title: "Kontakt",
//       href: "/kontakt",
//       items: [],
//     },
//     {
//       title: "404",
//       href: "/page-404",
//       items: [],
//     },
//   ],
// }
  {
    title: "Über uns",
    href: "/ueberuns"
  },
  
  {
    title: "Dienstleistungen",
    items: [
      {
        title: "Geschäftskunden",
        href: "/geschaeftskunden",
        items: [],
      },
      {
        title: "Privatkunden",
        href: "/privatkunden",
        items: [],
      },
      // {
      //   title: "Home Consulting",
      //   href: "/consulting",
      //   items: [],
      // },
    ]
  },
  {
    title: "Preise",
    href: "/preise"
  },
  {
    title: "Kontakt",
    href: "/kontakt"
  }
] satisfies MainNavItem[];

export const footerNav2 = [
  {
    title: "Navigation",
    items: [
      {
        title: "Über uns",
        href: "/ueberuns",
        external: false,
      },
      {
        title: "Dienstleistungen",
        href: "/dienstleistungen",
        external: false,
      },
      {
        title: "Kontakt",
        href: "/kontakt",
        external: false,
      },
      {
        title: "Team",
        href: "/team",
        external: false,
      }
    ],
  },
  {
    title: "Support",
    items: [
      {
        title: "Datenschutz",
        href: "/datenschutz",
        external: false,
      },
      {
        title: "Impressum",
        href: "/impressum",
        external: false,
      },
    ],
  }
] satisfies FooterItem[];
