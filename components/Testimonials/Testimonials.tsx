"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TESTIMONIALS } from "@/constants";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";
import TestimonialCard from "./TestimonialCard";

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

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <MaxWidthWrapper>
      <section className="w-full flex flex-col items-center my-12">
        <div className="w-full flex flex-col items-center my-4">
          <h2 className="text-4xl md:text-6xl font-semibold">Testimonials</h2>
          <p className="text-muted-foreground mt-2">
            Hear from our users about how <span className="font-semibold">TrainMate</span> has
            helped them <span className="font-semibold">achieve</span> their fitness goals and{" "}
            <span className="font-semibold">transform</span> their lives.
          </p>
        </div>
        <motion.div
          className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 my-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {TESTIMONIALS.map((item) => (
            <motion.div key={item.name} variants={itemVariants}>
              <TestimonialCard
                name={item.name}
                description={item.description}
                image={item.image}
                stars={item.stars}
              />
            </motion.div>
          ))}
        </motion.div>
        <div ref={ref} />
      </section>
    </MaxWidthWrapper>
  );
};

export default Testimonials;
