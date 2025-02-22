import { icons } from "@/public/assets/icons/export";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="container">
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-10">
        <div className="flex flex-col gap-7">
          {/* logo X name */}
          <div className="flex items-start space-x-4">
            <Image src={icons.logo} alt="logo" />
            <span className="font-poppins font-bold">NestHaven</span>
          </div>
          {/* lorem impsum text */}
          <p className="text-xs text-gray-600 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            sapiente
          </p>
          {/* social media - icons */}
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
          {/* all rights reserverd */}
          <span className="text-gray-600 font-light text-xs">
            &copy; 2025 . All rights reserved
          </span>
        </div>
        <div>
          <h2 className="font-medium">Take a tour</h2>
          <ul className="list-none space-y-4 mt-5">
            <li>Features</li>
            <li>Partners</li>
            <li>Pricing</li>
            <li>Product</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium">Our Company</h2>
          <ul className="list-none space-y-4 mt-5">
            <li>About Us</li>
            <li>Agents</li>
            <li>Blog</li>
            <li>Media</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium">Subscribe</h2>
          <p className="mt-5 text-sm font-light text-slate-600">
            Subscribe to get latest property, blog news from us
          </p>
<<<<<<< HEAD
          <div className="w-fit flex relative mt-5 ">
            <input className="font-light text-sm border px-2 py-2 rounded-xl outline-sky" placeholder="Email Address"></input>
            <div className="absolute flex rounded-full h-5 w-5 right-2.5 bottom-2.5 bg-secondary justify-center items-center">
=======
          <div className="flex relative mt-5">
            <input className="font-light text-sm border px-2 py-2 rounded-xl outline-sky" placeholder="Email Address"></input>
            <div className="absolute flex rounded-full h-5 w-5 right-0 bottom-2 bg-secondary justify-center items-center">
>>>>>>> 20f5669 (complete)
              <Image src={icons.angle} alt="angle-icon" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
