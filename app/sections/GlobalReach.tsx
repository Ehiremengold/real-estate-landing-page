import Image from "next/image";
import { countries } from "../../public/assets/countries/export";

const GlobalReach = () => {
  return (
    <section className="container">
      <h1 className="text-2xl sm:text-4xl font-semibold text-center">
        We are available in many well-known countries
      </h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 mt-5 gap-4 place-content-center place-items-center">
        {countries.map((country, index) => {
          const { name, img } = country;
          return (
            <div className="relative" key={index}>
              <Image src={img} alt="country" />
              <span className="absolute top-8 left-1/2 transform -translate-x-1/2 font-medium">
                {name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GlobalReach;
