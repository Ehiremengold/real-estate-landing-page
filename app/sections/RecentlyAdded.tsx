import Image from "next/image";
import houses from "../../public/assets/houses/export";
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const RecentlyAdded = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.6, // Trigger when 60% of the section is visible
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
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl sm:text-4xl font-semibold">Recently Added</h1>
        <p className="text-secondary font-semibold">See all</p>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {houses.map((house, index) => {
          const {
            img,
            street_name,
            bedrooms,
            price,
            garages,
            builder_name,
            square_meters,
          } = house;
          return (
            <motion.div
              key={index}
              className="rounded-xl border flex p-3 gap-5"
              variants={cardVariants}
              custom={index}
              initial="hidden"
              animate={controls}
            >
              <div>
                <Image alt="house image" src={img} className="object-cover" />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="font-semibold text-lg md:text-2xl">
                  {street_name}
                </h2>
                <div className="mt-5 text-base text-tertiary gap-5 flex-wrap flex items-center">
                  <span className="whitespace-nowrap">
                    {bedrooms} Bedroom(s)
                  </span>
                  <span className="whitespace-nowrap">{square_meters}M</span>
                  <span className="whitespace-nowrap">{garages} Garage(s)</span>
                </div>

                <div className="text-tertiary mt-5 flex gap-4 justify-between items-center flex-wrap">
                  <span className="text-sm">
                    Posted by&nbsp;
                    {builder_name}
                  </span>

                  <span className="bg-tertiary py-1 px-4 rounded-xl text-white">
                    ${price}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
};

export default RecentlyAdded;
