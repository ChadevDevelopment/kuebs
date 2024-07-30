"use client";

import { motion } from "framer-motion";
import IconBox from "./icon-box-modal";
import SectionTitle from "../sections/section-title";

export const iconBoxes = [
  {
    icon: "/images/icons/icon2.svg",
    title: "Wir handeln proaktiv",
    description:
      "Wir informieren Sie proaktiv und frühzeitig über bevorstehende Herausforderungen, damit Sie optimal auf alle Entwicklungen reagieren können.",
  },
  {
    icon: "/images/icons/icon2.svg",
    title: "Sie sparen Kosten",
    description:
      "Unsere maßgeschneiderten Dienstleistungen für Vermögensverwalter sind bedarfsgerecht und deutlich kosteneffizienter als jede interne Lösung.",
  },
  {
    icon: "/images/icons/icon2.svg",
    title: "Wir kümmern uns darum für Sie",
    description:
      "Wir übernehmen vollständig Ihre Compliance-, Risk- und Legal-Angelegenheiten, damit Sie sich zu 100% auf Ihre Kunden konzentrieren können.",
  },
  {
    icon: "/images/icons/icon2.svg",
    title: "Wir sind unabhängig",
    description:
      "... ist ein unabhängiges Unternehmen. Wir achten und fördern Ihre Unabhängigkeit und Souveränität indem wir maßgeschneiderte Lösungen anbieten.",
  },
  {
    icon: "/images/icons/icon2.svg",
    title: "Wir kennen Ihr Geschäft",
    description:
      "Wir verstehen die Herausforderungen der Vermögensverwalter aus erster Hand und haben uns auf dieses Kundensegment spezialisiert.",
  },
  {
    icon: "/images/icons/icon2.svg",
    title: "Wir sind Ihr zuverlässiger Partner",
    description:
      "Unser Team steht Ihnen als verlässlicher und langfristiger Partner zur Seite, um Mehrwert zu schaffen und Wettbewerbsvorteile zu erzielen.",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Vorteile = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="pb-10 pt-16 lg:pb-20 py-24 dark:bg-slate-900 dark:bg-none lg:pt-24">
      <div className="container">
        {!noTitle && (
          <SectionTitle
            subtitle="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
            sectionClasses="mx-auto max-w-xl text-center mb-12"
            titleClasses="mb-3 text-center"
            subtitleClasses="text-md font-small"
          >
            Sechs gute Gründe, um mit uns zusammenzuarbeiten
          </SectionTitle>
        )}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox
                  iconBox={iconBox}
                  className="py-7 shadow-none before:hidden"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Vorteile;
