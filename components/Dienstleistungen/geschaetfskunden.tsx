"use client";

import { motion } from "framer-motion";
import IconBox from "../icon-box";

export const iconBoxes = [
  {
    icon: "/images/icons/icon3.svg",
    title: "Erstellung von Buchhaltungen",
    description: 
      "Wir übernehmen die komplette Buchhaltung für Ihr Unternehmen, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
  },
  {
    icon: "/images/icons/icon3.svg",
    title: "Führung der Personaladministration",
    description: 
      "Wir kümmern uns um die Personaladministration, inklusive Einstellung und Verwaltung Ihrer Mitarbeiter."
  },
  {
    icon: "/images/icons/icon3.svg",
    title: "Lohn- und Vertragsverwaltung",
    description: 
    "Wir erstellen und verwalten Ihre Lohnabrechnungen und Arbeitsverträge effizient und zuverlässig."
  },
  {
    icon: "/images/icons/icon3.svg",
    title: "MWST-Beratung",
    description: 
      "Unsere Experten beraten Sie umfassend zu allen Fragen rund um die Mehrwertsteuer und unterstützen bei der Einhaltung der Vorschriften."
  },
  {
    icon: "/images/icons/icon3.svg",
    title: "Revisionsarbeiten",
    description: 
      "Wir führen gründliche Revisionsarbeiten durch, um die Korrektheit und Ordnungsmäßigkeit Ihrer Geschäftsunterlagen sicherzustellen."
  },
  {
    icon: "/images/icons/icon3.svg",
    title: "Betreibungs- und Konkursverfahren",
    description: 
      "Wir unterstützen Sie professionell bei Betreibungs- und Konkursverfahren, um Ihre Interessen umfassend und effektiv zu wahren."
  },
  {
    icon: "/images/icons/icon3.svg",
    title: "Allgemeine Unternehmensberatung",
    description: 
      "Unsere Beratung hilft Ihnen, strategische Entscheidungen zu treffen und Ihr Unternehmen erfolgreich zu führen."
  },
  {
    icon: "/images/icons/icon3.svg",
    title: "Gründung von Gesellschaften",
    description: 
      "Wir begleiten Sie bei der Gründung von Gesellschaften und sorgen für einen reibungslosen Ablauf des Prozesses."
  },
  {
    icon: "/images/icons/icon3.svg",
    title: "Liquidations- und Konkursverfahren",
    description: 
      "Wir bieten umfassende Unterstützung bei Liquidations- und Konkursverfahren, um eine geordnete Abwicklung zu gewährleisten."
  }
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

const GeschaeftsKunden = ({ noTitle }: { noTitle?: boolean }) => {
  return (
    <section className="py-16 lg:pt-2">
      <div className="container">
        {/* {!noTitle && (
          <div className="flex justify-center">
            <div className="text-center lg:w-3/5">
              <h2 className="mb-12">
                Do you want to{" "}
                <span className="text-primary">generate more traffic</span> to
                your website? We know the solution.
              </h2>
            </div>
          </div>
        )} */}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-10">
          {iconBoxes.map((iconBox, index) => {
            return (
              <motion.div
                key={iconBox.title}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                }}
                custom={index}
              >
                <IconBox iconBox={iconBox} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GeschaeftsKunden;
