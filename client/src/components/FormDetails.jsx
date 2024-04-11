import { data } from "../data/data";
import { CardHeader } from "./index";

const FormDetails = () => {
  return (
    <section className="padding-x py-8 max-h-screen overflow-hidden overflow-y-scroll mt-10">
      <CardHeader />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex justify-center items-center flex-col"
          >
            <div className="w-full h-auto">
              <img
                src={item.imgURL}
                alt={item.name}
                className="w-full h-[300px] bg-center object-cover"
              />
            </div>
            <div className="px-4">
              <p className="text-base dark:text-white-primary text-black-text font-poppins font-bold">
                TIMESTAMP
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FormDetails;
