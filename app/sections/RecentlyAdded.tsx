import Image from "next/image";
import houses from "../../public/assets/houses/export";

const RecentlyAdded = () => {
  return (
    <section className="container">
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
            <div key={index} className={`rounded-xl border flex p-3 gap-5`}>
              <div>
                <Image
                  alt="house image"
                  src={img}
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col justify-between">
                <h2 className="font-semibold text-lg md:text-2xl">{street_name}</h2>
                <div className="mt-5 text-base text-tertiary gap-5 flex-wrap flex items-center ">
                  <span className="whitespace-nowrap">
                    {bedrooms} Bedroom(s)
                  </span>
                  <span className="whitespace-nowrap">{square_meters}M</span>
                  <span className="whitespace-nowrap">{garages} Garage(s)</span>
                </div>

                <div className="text-tertiary mt-5 flex gap-4  justify-between items-center flex-wrap">
                  <span className="text-sm">
                    Posted by&nbsp;
                    {builder_name}
                  </span>

                  <span className="bg-tertiary py-1 px-4 rounded-xl text-white">
                    ${price}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default RecentlyAdded;
