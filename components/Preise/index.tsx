"use client";

import { Button } from "../ui/button";

export const pricingTables = [
  {
    title: "Standard",
    currency: "",
    price: "Gratis",
    term: "",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    ctaText: "Start",
    featured: false,
  },
  {
    title: "Business",
    currency: "CHF",
    price: "19.99",
    term: "/ monatlich",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    ctaText: "Start",
    featured: true,
  },
  {
    title: "Premium",
    currency: "CHF",
    price: "29.99",
    term: "/ monatlich",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
    ctaText: "Start",
    featured: false,
  },
];

const Preise = () => {
  const handleClick = (index: number) => {
    console.log(index);
  };

  return (
    <section className="pt-1 pb-24 lg:pt-1 lg:pb-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {pricingTables.map(
            (
              { title, currency, price, term, description, ctaText, featured },
              index,
            ) => (
              <div
                key={index}
                className={`${
                  featured ? "shadow-lg before:w-full" : "before:w-0"
                } hover-shadow z-[1] overflow-hidden rounded-md bg-white px-10 py-12 before:absolute before:left-0 before:top-0 before:block before:h-[.3125rem] before:bg-secondary before:transition-all before:duration-200 hover:before:w-full dark:bg-slate-800`}
              >
                {title && <h3 className="mb-2 text-md">{title}</h3>}
                {currency || price || term ? (
                  <div className="mb-4 text-foreground dark:text-white">
                    {currency && (
                      <span className="mr-1 mt-3 inline-block align-top text-2xl">
                        {currency}
                      </span>
                    )}
                    {price && (
                      <span className="text-4xl font-bold tracking-tighter md:text-6xl lg:text-7xl">
                        {price}
                      </span>
                    )}
                    {term && (
                      <span className="ml-1.5 inline-block text-xl text-slate-400">
                        {term}
                      </span>
                    )}
                  </div>
                ) : null}
                {description && <p className="mb-8 font-bold">{description}</p>}
                {ctaText && (
                  <Button
                    className="w-40"
                    size="lg"
                    onClick={() => handleClick(index)}
                  >
                    {ctaText}
                  </Button>
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Preise;
