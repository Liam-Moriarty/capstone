import React from "react";
import { aboutBG2 } from "../assets/images";

export const About = () => {
  return (
    <section className="max-container min-h-screen flex xl:flex-row-reverse flex-col justify-between max-xl:justify-center">
      <div className="flex flex-col xl:w-2/5 w-full justify-center items-center max-2xl:padding-x">
        <h1 className=" xl:text-8xl text-white-primary text-[3rem] pt-20 font-poppins font-bold">
          About <span className="text-cyber-blue">Pets</span> Connect
        </h1>
        <p className="text-white-primary text-xl max-sm:text-base py-10 font-poppins mb-2 sm:leading-8">
          Welcome to Pets Connect, where furry companions find their forever
          homes! At Pets Connect, we're dedicated to facilitating the adoption
          and rescue of cats and dogs, uniting them with loving families across
          the globe. Our platform serves as a bridge between compassionate
          adopters and deserving animals in need.
        </p>
      </div>
      <div className="flex xl:w-2/5 justify-center items-center bg-pale-blue px-10 py-10 xl:rounded-lg">
        <img
          src={aboutBG2}
          alt="about background"
          className="w-[400px] h-[350px] rounded-3xl object-cover shadow-3xl"
        />
      </div>
    </section>
  );
};
