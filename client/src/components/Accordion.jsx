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
      <section className="max-container max-2xl:padding-x flex justify-center mt-10 py-10">
        <div className="lg:w-3/5 w-full rounded-md dark:bg-pale-blue bg-white-second shadow-2xl">
          <h1 className="text-3xl py-10 font-poppins dark:text-cyber-blue text-slate-blue text-center font-bold">
            Reasons to Adopt Cats and Dogs
          </h1>
          {accordionData.map((item, i) => (
            <div key={item.heading} className="py-2 px-7 w-full mb-2">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleActive(i)}
              >
                <h1 className="text-lg font-poppins font-bold dark:text-cyber-blue text-slate-blue max-sm:text-base">
                  {item.heading}
                </h1>
                <span className="dark:text-white-primary text-black-text">
                  {active === i ? (
                    <ion-icon
                      name="remove"
                      style={{ color: "#685CFE", fontSize: "24px" }}
                    ></ion-icon>
                  ) : (
                    <ion-icon
                      name="add"
                      style={{ color: "#685CFE", fontSize: "24px" }}
                    ></ion-icon>
                  )}
                </span>
              </div>

              <div
                className={`font-poppins text-base max-sm:text-sm dark:text-white-primary text-black-text h-auto pt-5 ${
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
