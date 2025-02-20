import Image from "next/image";
import { images } from "@/public/assets/export";
const FindYour = () => {
  return (
    <section className="container">
      <div className="relative bg-sky rounded-xl md:p-16 p-8 flex md:flex-row flex-col justify-between items-center">
        <div className="z-10 sm:w-3/4 md:w-2/3 flex flex-col gap-5 max-md:justify-center max-md:text-center max-md:items-center">
          <h1 className="font-semibold md:text-6xl text-4xl">
            Find Your Best Real Estate
          </h1>
          <p className="text-[#585981] text-lg md:w-2/3">
            We provide a complete service for the sale, purchase or rental of
            real estate.
          </p>
          <button className="uppercase bg-secondary text-white font-medium px-8 py-3 rounded-lg w-fit sm:text-xl whitespace-nowrap text-sm">
            Contact Us
          </button>
        </div>
        {/* <div> */}
          <Image
            src={images.findYour}
            alt="find-you-hero"
            className="place-items-end object-cover absolute right-0 bottom-0 lg:block hidden"
          />
        {/* </div> */}
      </div>
    </section>
  );
};
export default FindYour;
