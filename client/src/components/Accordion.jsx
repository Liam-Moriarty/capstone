import { useState } from "react";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { accordionData } from "../constant";

const Accordion = () => {
  const [active, setActive] = useState(null);

  const toggleActive = (i) => {
    if (active === i) {
      return setActive(null);
    }

    setActive(i);
  };
  return (
    <>
      <section className="max-container max-2xl:padding-x flex justify-center bg-pale-blue mt-10 py-10">
        <div className="lg:w-3/5 w-full rounded-md shadow-3xl">
          <h1 className="text-3xl py-10 font-poppins text-cyber-blue text-center font-bold">
            Reasons to Adopt Cats and Dogs
          </h1>
          {accordionData.map((item, i) => (
            <div key={item.heading} className="py-2 px-7 w-full mb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleActive(i)}
              >
                <h1 className="text-lg font-poppins font-bold text-cyber-blue max-sm:text-base">
                  {item.heading}
                </h1>
                <span>
                  {active === i ? <RemoveOutlinedIcon /> : <AddOutlinedIcon />}
                </span>
              </div>

              <div
                className={`font-poppins text-base max-sm:text-sm text-white-primary h-auto pt-5 ${
                  active === i ? "block" : "hidden"
                }`}
              >
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Accordion;
