"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const accordionItems = [
  {
    title: "Lorem ipsum dolor sit amet?",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  },
  {
    title: "Lorem ipsum dolor sit amet?",
    content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
  },
];

const FAQ = () => {
  return (
    <section className="relative overflow-hidden dark:bg-transparent py-24 dark:bg-slate-900 lg:py-32">
      <div className="container">
        <div className="flex flex-wrap items-center justify-between lg:flex-nowrap">
          <div className="lg:w-[45%] lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              <h2>Häufig gestellte Fragen</h2>
              <p className="mb-8 text-lg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
              </p>
              <Accordion
                type="multiple"
                defaultValue={[accordionItems[0].title]}
                className="w-full"
              >
                {accordionItems?.map((item, index) => (
                  <AccordionItem key={index} value={item.title}>
                    <AccordionTrigger className="text-md">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {item.content}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <span className="mt-14 inline-block text-lg">
                Haben Sie Fragen?{" "}
                <a href="mailto:support@kuebs.com" className="text-primary">
                  support@kuebs.com
                </a>
              </span>
            </motion.div>
          </div>

          <div className="relative z-[1] mb-10 lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
              }}
            >
              {/* <Image
                src="/images/faq/faq.jpg"
                alt="faq"
                width={526}
                height={531}
                className="mb-8 inline-block rounded-xl"
              /> */}
              <div className="mt-12 md:flex md:space-x-8 lg:justify-end">
                <Image
                  src="/images/faq/faq.jpg"
                  alt="benefits"
                  width={320}
                  height={320}
                  className="mb-8 inline-block rounded-xl hidden md:block"
                />
                <div className="relative mb-8 max-w-[13.125rem] self-end rounded-xl bg-white bg-gradient-to-b from-secondary/70 to-quaternary/70 p-8 shadow-lg">
                  <span className="mb-4 block text-base font-semibold text-white">
                    Sed do eiusmod tempor.
                  </span>
                  <span className="mb-4 block text-3xl font-bold text-white">
                    7,000+
                  </span>
                  <span className="block text-base text-white">
                    Sed do eiusmod tempor.
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto max-w-xs self-start rounded-xl bg-white bg-gradient-to-l from-primary/70 to-tertiary/70 p-8 shadow-lg">
                  <div className="absolute right-8 top-8 rounded-full bg-white p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      className="fill-primary"
                    >
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path d="M4.406 14.523l3.402-3.402 2.828 2.829 3.157-3.157L12 9h5v5l-1.793-1.793-4.571 4.571-2.828-2.828-2.475 2.474a8 8 0 1 0-.927-1.9zm-1.538 1.558l-.01-.01.004-.004A9.965 9.965 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10c-4.07 0-7.57-2.43-9.132-5.919z"></path>
                    </svg>
                  </div>

                  <div className="text-left">
                    <span className="mb-4 block text-base font-semibold text-white">
                      Sed do eiusmod tempor.
                    </span>
                    <span className="mb-4 block text-3xl font-bold text-white">
                      $3.7B
                    </span>
                    <span className="block text-base text-white">
                      Sed do eiusmod tempor.
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
