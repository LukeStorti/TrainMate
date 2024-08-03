"use client";
import { HEROPROGRAMDATA } from "@/constants";
import { Button } from "../ui/button";
import HeroProgram from "./HeroProgram";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MaxWidthWrapper from "../Global/MaxWidthWrapper";

const Hero = () => {
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % HEROPROGRAMDATA.length);
    }, 15000); // Change item every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <MaxWidthWrapper>
      <section className="w-full my-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center lg:items-start font-semibold tracking-wide text-4xl md:text-6xl my-4 sm:my-12 gap-3 w-full">
          <h1>Work Smarter</h1>
          <h1>Train Harder</h1>
          <h1>Achieve Your Best</h1>
          <div className="flex flex-col sm:items-start text-center">
            <p className="font-normal text-xl text-muted-foreground">Manage Training Programs</p>
            <p className="font-normal text-xl text-muted-foreground">Track Goals</p>
            <p className="font-normal text-xl text-muted-foreground">Transform Your Fitness</p>
          </div>
          <Button size="lg">Create Your Plan</Button>
        </div>
        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait">
            {HEROPROGRAMDATA.map(
              (item, index) =>
                index === visibleIndex && (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 150 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -150 }}
                    transition={{
                      opacity: { duration: 0.3 },
                      exit: { duration: 2, ease: "easeInOut" },
                    }}
                  >
                    <HeroProgram title={item.title} data={item.data} />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </section>
    </MaxWidthWrapper>
  );
};

export default Hero;
