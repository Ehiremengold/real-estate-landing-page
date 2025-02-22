import Image from "next/image";
import { countries } from "../../public/assets/countries/export";
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
      ease: "easeOut"
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const GlobalReach = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.6, // Trigger when 60% of the section is visible
    triggerOnce: true
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
      <h1 className="text-2xl sm:text-4xl font-semibold text-center">
        We are available in many well-known countries
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-5 gap-4 place-content-center place-items-center">
        {countries.map((country, index) => {
          const { name, img } = country;
          return (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate={controls}
            >
              <Image src={img} alt={name} />
              <span className="absolute top-8 left-1/2 transform -translate-x-1/2 font-medium">
                {name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default GlobalReach;
