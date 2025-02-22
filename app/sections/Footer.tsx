import { icons } from "@/public/assets/icons/export";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.2
    }
  }
};

const columnVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Footer = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.6, // Trigger when 60% is visible
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
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-10">
        <motion.div variants={columnVariants} className="flex flex-col gap-7">
          <div className="flex items-start space-x-4">
            <Image src={icons.logo} alt="logo" />
            <span className="font-poppins font-bold">NestHaven</span>
          </div>
          <p className="text-xs text-gray-600 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sapiente
          </p>
          <div className="flex items-center gap-5">
            <Link href="#">
              <Image src={icons.facebook} alt="facebook-icon" />
            </Link>
            <Link href="#">
              <Image src={icons.twitter} alt="twitter-icon" />
            </Link>
            <Link href="#">
              <Image src={icons.instagram} alt="instagram-icon" />
            </Link>
            <Link href="#">
              <Image src={icons.linkedin} alt="linkedin-icon" />
            </Link>
          </div>
          <span className="text-gray-600 font-light text-xs">
            &copy; 2025 . All rights reserved
          </span>
        </motion.div>
        <motion.div variants={columnVariants}>
          <h2 className="font-medium">Take a tour</h2>
          <ul className="list-none space-y-4 mt-5">
            <li>Features</li>
            <li>Partners</li>
            <li>Pricing</li>
            <li>Product</li>
            <li>Support</li>
          </ul>
        </motion.div>
        <motion.div variants={columnVariants}>
          <h2 className="font-medium">Our Company</h2>
          <ul className="list-none space-y-4 mt-5">
            <li>About Us</li>
            <li>Agents</li>
            <li>Blog</li>
            <li>Media</li>
            <li>Contact Us</li>
          </ul>
        </motion.div>
        <motion.div variants={columnVariants}>
          <h2 className="font-medium">Subscribe</h2>
          <p className="mt-5 text-sm font-light text-slate-600">
            Subscribe to get the latest property, blog news from us
          </p>
          <div className="w-fit flex relative mt-5 ">
            <input
              className="font-light text-sm border px-2 py-2 rounded-xl outline-sky"
              placeholder="Email Address"
            />
            <div className="absolute flex rounded-full h-5 w-5 right-2.5 bottom-2.5 bg-secondary justify-center items-center">
              <Image src={icons.angle} alt="angle-icon" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
export default Footer;
