"use client";
import { motion } from "framer-motion";
import IconBox from "../icon-box";

export const iconBoxes = [
  {
    icon: "/images/icons/medical-research-6506_05214fe4-cb2e-4171-ac03-72168bf2981b.svg",
    title: "Erstellung und Führung von Buchhaltungen",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    icon: "/images/icons/edit-document-4191_913956ad-aac3-4d29-b4ef-061756334d24.svg",
    title: "Führung der Personaladministration",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    icon: "/images/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Erstellung von Lohnabrechnungen, Arbeitsverträgen, Deklarationen",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    icon: "/images/icons/edit-document-4191_913956ad-aac3-4d29-b4ef-061756334d24.svg",
    title: "MWST-Beratung",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    icon: "/images/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Revisionsarbeiten",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    icon: "/images/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Schuldensanierung, Betreibungs- und Konkursverfahren",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    icon: "/images/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Revisionsarbeiten",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    icon: "/images/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Allgemeine Unternehmensberatung",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    icon: "/images/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Gründung und Umwandlung von Gesellschaften",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    icon: "/images/icons/currency-2634_d41cd9f8-1db2-4236-b082-94568e599e40.svg",
    title: "Liquidations- und Konkursverfahren",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
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

const SectionIconBoxes = ({ noTitle }: { noTitle?: boolean }) => {
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

export default SectionIconBoxes;
