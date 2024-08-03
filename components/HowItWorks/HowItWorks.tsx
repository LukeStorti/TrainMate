"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HOWITWORKS } from "@/constants";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";
import HowItWorksCards from "./HowItWorksCards";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const HowItWorks: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section className="w-full bg-muted mt-28 py-16">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col items-center my-4">
          <h2 className="text-4xl md:text-6xl font-semibold">How It Works</h2>
          <p className="text-muted-foreground mt-2">
            <span className="font-semibold">Set</span> and{" "}
            <span className="font-semibold">Achieve</span> Your Goals: Establish fitness goals and
            track your progress towards <span className="font-semibold">achieving</span> them
          </p>
        </div>
        <motion.div
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-4 my-12 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {HOWITWORKS.map((item) => (
            <motion.div key={item.step} variants={itemVariants}>
              <HowItWorksCards step={item.step} title={item.title} description={item.description} />
            </motion.div>
          ))}
          <div ref={ref} className="mt-28" />
        </motion.div>
      </MaxWidthWrapper>
    </section>
  );
};

export default HowItWorks;
