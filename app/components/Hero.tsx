import TabSwitcher from "./TabSwitcher";
import { images } from "../../public/assets/export";
import { icons } from "../../public/assets/icons/export";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const boxVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.5,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative container bg-sky rounded-xl flex flex-col md:flex-row h-[480px] overflow-hidden">
      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="z-30"
      >
        <h1 className="font-bold sm:text-6xl text-4xl leading-10 md:w-3/4 text-primary">
          Easy way to find a perfect property
        </h1>
        <p className="text-[#585981] md:text-2xl text-lg mt-7 sm:w-3/4">
          We provide a complete service for the sale, purchase or rental of real
          estate.
        </p>

        <motion.div
          variants={boxVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col mt-8 w-full md:w-4/5"
        >
          <TabSwitcher />
          <div className="relative rounded-lg bg-white bg-opacity-60 backdrop-blur-lg p-3 flex justify-between gap-1">
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Location</span>
              <div className="flex justify-between">
                <input
                  placeholder="Select your City"
                  className="text-xs bg-transparent text-gray-500 outline-none"
                />
                <button>
                  <Image
                    alt="search-icon"
                    className="cursor-pointer"
                    src={icons.location}
                  />
                </button>
              </div>
            </div>
            <hr className="bg-slate-300 h-12 w-[0.2] ml-2 mr-2" />
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Property Type</span>
              <div className="flex justify-between items-center relative space-x-7">
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  Choose Property Type
                </span>
                <select className="absolute w-full -left-2 bg-transparent text-xs text-gray-500 font-light outline-none">
                  <option value=""></option>
                  <option value="semi-detached">Semi-Detached</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="detached">Detached</option>
                </select>
              </div>
            </div>
            <hr className="bg-slate-400 h-12 w-[0.2] ml-5 mr-2" />
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Price Range</span>
              <div className="flex justify-between items-center relative space-x-7">
                <span className="text-xs text-gray-500 whitespace-nowrap">
                  Choose price range
                </span>
                <select className="absolute w-full -left-2 bg-transparent text-xs text-gray-500 font-light outline-none">
                  <option value=""></option>
                  <option value="0 - $100,000">0 - $100,000</option>
                  <option value="$100,000 - $250,000">
                    $100,000 - $250,000
                  </option>
                  <option value="$250,000 - $500,000">
                    $250,000 - $500,000
                  </option>
                  <option value="$500,000 and above">$500,000 and above</option>
                </select>
              </div>
            </div>

            <div className="hidden lg:block bg-secondary grid place-content-center rounded-lg py-2 px-6">
              <Image className="size-4" src={icons.search} alt="search-icon" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute right-0 bottom-0"
      >
        <Image src={images.hero} alt="hero-image" />
      </motion.div>
    </section>
  );
};

export default Hero;
