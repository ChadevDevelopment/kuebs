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
  {
    title: "Über uns",
    href: "/ueberuns"
  },
  
  {
    title: "Dienstleistungen",
    href: "/dienstleistungen",
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
