"use client"
import Image from "next/image";
import { images } from "@/public/assets/export";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const FindYour = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.6, // Trigger when 60% is visible
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      className="container"
    >
      <div className="relative bg-sky rounded-xl md:p-16 p-8 flex md:flex-row flex-col justify-between items-center">
        <div className="z-10 sm:w-3/4 md:w-2/3 flex flex-col gap-5 max-md:justify-center max-md:text-center max-md:items-center">
          <motion.h1
            variants={contentVariants}
            custom={0}
            initial="hidden"
            animate={controls}
            className="font-semibold md:text-6xl text-4xl"
          >
            Find Your Best Real Estate
          </motion.h1>
          <motion.p
            variants={contentVariants}
            custom={1}
            initial="hidden"
            animate={controls}
            className="text-[#585981] text-lg md:w-2/3"
          >
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </motion.p>
          <motion.button
            variants={contentVariants}
            custom={2}
            initial="hidden"
            animate={controls}
            className="uppercase bg-secondary text-white font-medium px-8 py-3 rounded-lg w-fit sm:text-xl whitespace-nowrap text-sm"
          >
            Contact Us
          </motion.button>
        </div>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={controls}
          className="place-items-end object-cover absolute right-0 bottom-0 lg:block hidden"
        >
          <Image src={images.findYour} alt="find-you-hero" />
        </motion.div>
      </div>
    </motion.section>
  );
};
export default FindYour;
