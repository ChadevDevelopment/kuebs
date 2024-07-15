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
  {
    title: "Home",
    items: [
      // {
      //   title: "Home Marketing",
      //   href: "/",
      //   items: [],
      // },
      // {
      //   title: "Home SEO Agency",
      //   href: "/seo-agency",
      //   items: [],
      // },
      // {
      //   title: "Home Consulting",
      //   href: "/consulting",
      //   items: [],
      // },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        title: "About",
        href: "/about",
        items: [],
      },
      {
        title: "Services",
        href: "/services",
        items: [],
      },
      {
        title: "Pricing",
        href: "/pricing",
        items: [],
      },
      {
        title: "Kontakt",
        href: "/kontakt",
        items: [],
      },
      {
        title: "404",
        href: "/page-404",
        items: [],
      },
    ],
  },
  {
    title: "Projects",
    items: [
      {
        title: "Projects Listing",
        href: "/projects",
        items: [],
      },
      {
        title: "Single Project",
        href: "/projects/rocking-the-rank-1-in-the-events-industry",
        items: [],
      },
    ],
  },
  {
    title: "Blog",
    items: [
      {
        title: "Blog Listing",
        href: "/posts",
        items: [],
      },
      {
        title: "Single Post",
        href: "/posts/effective-marketing-for-start-ups",
        items: [],
      },
    ],
  },
  {
    title: "Docs",
    href: "/docs",
  },
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
        href: "#",
        external: false,
      }
    ],
  },
  {
    title: "Quick Links",
    items: [
      {
        title: "Marketing Strategy",
        href: "#",
        external: false,
      },
      {
        title: "Keyword Research Explained",
        href: "#",
        external: false,
      },
      {
        title: "Why SEO Matters",
        href: "#",
        external: false,
      },
      {
        title: "Google Ads",
        href: "#",
        external: false,
      },
    ],
  }
] satisfies FooterItem[];
