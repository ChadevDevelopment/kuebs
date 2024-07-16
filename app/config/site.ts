export type SiteConfig = typeof siteConfig;

export const WP_REST_BASE_URL =
  "https://wordpress-597675-3975829.cloudwaysapps.com/wp-json/wp/v2";

export const siteConfig = {
  name: "Kuebs",
  description:
    "Kuebs is the Next.js 14 web application powered by headless WordPress.",
  keywords: [
    "Next.js 14",
    "React",
    "Headless WordPress",
    "Tailwind CSS",
    "Server Components",
    "Server Actions",
    "Marketing",
    "SEO",
    "Digital Agency",
  ],
  url: "https://kuebs.vercel.app/",
  ogImage: "https://kuebs.vercel.app/og-image.jpg",
};

export const mainNav = [
  // {
  //   title: "Home",
  //   items: [
  //     // {
  //     //   title: "Home Marketing",
  //     //   href: "/",
  //     //   items: [],
  //     // },
  //     // {
  //     //   title: "Home SEO Agency",
  //     //   href: "/seo-agency",
  //     //   items: [],
  //     // },
  //     // {
  //     //   title: "Home Consulting",
  //     //   href: "/consulting",
  //     //   items: [],
  //     // },
  //   ],
  // },
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
    title: "Services",
    href: "/services"
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
        href: "#",
        external: false,
      },
      {
        title: "Service",
        href: "#",
        external: false,
      },
      {
        title: "Kontakt",
        href: "#",
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
        href: "#",
        external: false,
      },
      {
        title: "Impressum",
        href: "#",
        external: false,
      },
    ],
  }
] satisfies FooterItem[];
