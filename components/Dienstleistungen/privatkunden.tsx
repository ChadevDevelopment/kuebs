"use client";

import { motion } from "framer-motion";
import IconBox from "../icon-box";

export const iconBoxes = [
  {
    icon: "/images/icons/icon7.svg",
    title: "Beratung, Erstellung und Optimierung der Steuererklärung",
    description: 
      "Wir beraten Sie umfassend, erstellen und optimieren Ihre Steuererklärung, um Ihre Steuerlast zu minimieren."
  },
  {
    icon: "/images/icons/icon8.svg",
    title: "Sämtliche Versicherungsangelegenheiten",
    description: 
      "Wir übernehmen die Verwaltung und Optimierung Ihrer Versicherungen, um den bestmöglichen Schutz zu gewährleisten."
  },
  {
    icon: "/images/icons/icon6.svg",
    title: "Arbeitsrecht und Mietrecht",
    description: 
      "Wir beraten Sie in Fragen des Arbeitsrechts, Mietrechts und bei Scheidungen, um Ihre rechtlichen Interessen zu schützen."
  },
  {
    icon: "/images/icons/icon3.svg",
    title: "Administrative Angelegenheiten",
    description: 
      "Wir kümmern uns um alle administrativen Aufgaben, damit Sie sich auf Ihr Kerngeschäft konzentrieren können."
  },
  {
    icon: "/images/icons/icon5.svg",
    title: "Betreibungs- und Konkursverfahren",
    description: 
      "Wir unterstützen Sie professionell bei Betreibungs- und Konkursverfahren, um Ihre Interessen umfassend zu wahren."
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

const PrivatKunden = ({ noTitle }: { noTitle?: boolean }) => {
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

export default PrivatKunden;
