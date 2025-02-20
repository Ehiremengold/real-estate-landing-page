import TabSwitcher from "./TabSwitcher";
import { images } from "../../public/assets/export";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative container  bg-sky rounded-xl flex flex-col md:flex-row h-[480px] ">
      <div className="z-30">
        <h1 className="font-bold sm:text-6xl text-4xl leading-10 md:w-3/4 text-primary">
          Easy way to find a perfect property
        </h1>
        <p className="text-[#585981] md:text-2xl text-lg mt-7 sm:w-3/4">
          We provide a complete service for the sale, purchase or rental of real
          estate.
        </p>

        <div className="flex flex-col mt-8 w-full md:w-3/4">
          <TabSwitcher />
          <div className="relative rounded-lg  bg-white bg-opacity-60 backdrop-blur-lg p-8"></div>
        </div>
      </div>
      <Image
        src={images.hero}
        alt="hero-image"
        className="absolute right-0 bottom-0"
      />
    </section>
  );
};
export default Hero;
