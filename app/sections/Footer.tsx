import { icons } from "@/public/assets/icons/export";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="container">
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-24">
        <div className="flex flex-col gap-4">
          {/* logo X name */}
          <div className="flex items-start space-x-4">
            <Image src={icons.logo} alt="logo" />
            <span className="font-poppins font-bold">
              NestHaven <br />{" "}
              <span className="text-sm text-gray-600 font-light whitespace-nowrap">
                bringing hospitality
              </span>{" "}
            </span>
          </div>
          {/* lorem impsum text */}

          {/* social media - icons */}

          {/* all rights reserverd */}
        </div>
        <div>
          <h2 className="font-medium">Take a tour</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium">Our Company</h2>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium">Subscribe</h2>
          <p className="text-sm font-light text-slate-600">
            Subscribe to get latest property, blog news from us
          </p>
          <div className="flex">
            <input></input>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Footer;
