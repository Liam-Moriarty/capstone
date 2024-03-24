import React from "react";
import { aboutCard } from "../constant";

const AboutCards = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9 py-10 bg-pale-blue mt-10 padding-x">
      {aboutCard.map((card, key) => (
        <div
          key={key}
          className="sm:w-[400px] w-full flex flex-col py-10 px-7 justify-center items-center rounded-lg shadow-3xl bg-pale-blue"
        >
          <h1 className="font-poppins font-bold text-lg text-cyber-blue">
            {card.title}
          </h1>
          <p className="font-poppins font-semibold text-base mt-10">
            {card.descript}
          </p>
        </div>
      ))}
    </section>
  );
};

export default AboutCards;
