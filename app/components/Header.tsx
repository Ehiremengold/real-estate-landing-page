"use client";

import { icons } from "@/public/assets/icons/export";
import Image from "next/image";
import MenuIcon from "./MenuIcon";
import CloseMenuIcon from "./CloseMenuIcon";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Hero from "./Hero";

// Animation Variants
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const menuVariants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.3
    }
  })
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header className="container !mt-0">
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="flex items-center justify-between space-x-14 text-sm md:text-base"
      >
        <div className="flex items-center space-x-4 flex-1">
          <Image src={icons.logo} alt="logo" />
          <span className="font-poppins font-bold">NestHaven</span>
        </div>

        <ul className="hidden md:flex space-x-10 uppercase tracking-wide font-[400] text-primary">
          {["Home", "Properties", "Agents", "Blog"].map((item, index) => (
            <motion.li
              key={item}
              variants={itemVariants}
              custom={index}
              initial="hidden"
              animate="visible"
            >
              {item}
            </motion.li>
          ))}
        </ul>

        <button
          className="hidden md:block border-2 border-secondary text-secondary
        py-1 px-5  whitespace-nowrap rounded-xl font-medium"
        >
          LOG IN
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block md:hidden"
        >
          <MenuIcon />
        </button>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed bg-primary top-0 right-0 z-50 w-4/5 h-screen overflow-hidden"
          >
            <button
              className="absolute left-10 top-10"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <CloseMenuIcon />
            </button>
            <nav className="flex flex-col items-center justify-center space-y-20">
              <ul className="flex flex-col items-center space-y-6 text-white uppercase font-semibold mt-20">
                {["Home", "Properties", "Agents", "Blog"].map((item, index) => (
                  <motion.li
                    key={item}
                    variants={itemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                variants={itemVariants}
                custom={4}
                initial="hidden"
                animate="visible"
                className="border-2 border-secondary text-secondary py-1 px-5 whitespace-nowrap rounded-lg font-medium"
              >
                LOG IN
              </motion.button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <Hero />
    </header>
  );
};
export default Header;
