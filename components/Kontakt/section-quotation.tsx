"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Kontaktform from "./kontaktform";

const Kontakt = () => {
  return (
    <section className="relative bg-white py-16 before:absolute before:inset-0 before:z-[1] before:bg-foreground/75 lg:py-28">
      {/* <Image
        src="/images/quotation_form_bg.jpg"
        alt="free quotation"
        fill
        className="object-cover object-center"
      /> */}
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: 0.5,
          }}
        >
          <Kontaktform />
        </motion.div>
      </div>
    </section>
  );
};

export default Kontakt;
