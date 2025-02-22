import TabSwitcher from "./TabSwitcher";
import { images } from "../../public/assets/export";
import { icons } from "../../public/assets/icons/export";
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

        <div className="flex flex-col mt-8 w-full md:w-4/5">
          <TabSwitcher />
          <div className="relative rounded-lg  bg-white bg-opacity-60 backdrop-blur-lg p-3 flex  justify-between gap-1">
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
                <span className="text-xs text-gray-500 whitespace-nowrap">Choose Property Type</span>
                <select
                  name=""
                  className="absolute w-full -left-2 bg-transparent text-xs text-gray-500 font-light outline-none"
                  id=""
                >
                  <option value=""></option>
                  <option value="">Semi-Detached</option>
                  <option value="">Bungalow</option>
                  <option value="">Detached</option>
                </select>
              </div>
            </div>
            <hr className="bg-slate-400 h-12 w-[0.2] ml-5 mr-2" />
            <div className="flex flex-col gap-2">
              <span className="text-sm font-medium">Price Range</span>
              <input
                  placeholder="Choose Price Range"
                  className="text-xs bg-transparent text-gray-500 outline-none"
                />
              <p className="text-xs text-gray-500"></p>
            </div>

            <hr />
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
            <div className="bg-secondary grid place-content-center rounded-lg py-2 px-6">
              <Image className="size-4" src={icons.search} alt="search-icon" />
            </div>
          </div>
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
