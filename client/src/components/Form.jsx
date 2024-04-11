import React, { useState } from "react";
import Button from "./Button";

const Form = () => {
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [health, setHealth] = useState("");
  const [behavior, setBehavior] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  return (
    <section className="flex justify-center items-center flex-col padding-x">
      {/* HEADER */}
      <h1 className="text-3xl dark:text-cyber-blue text-slate-blue font-poppins font-bold mb-5">
        RESCUE FORM
      </h1>

      {/* FORMS */}
      <form action="" className="md:columns-2">
        {/* IMG */}
        <div>
          <img src="" alt="" />
        </div>

        {/* INPUTS */}

        {/* PHYSICAL DESCRIPTION */}

        <div className="flex justify-start flex-col gap-2">
          <h2 className="text-base dark:text-white-primary text-black-text font-poppins font-bold">
            PHYSICAL DESCRIPTION:
          </h2>

          <div className="w-full dark:bg-pale-blue bg-white-second flex justify-center items-center pl-5">
            <label className="label">Breed:</label>
            <input
              type="text"
              onChange={(e) => setBreed(e.target.value)}
              value={breed}
              className="input"
            />
          </div>

          <div className="w-full dark:bg-pale-blue bg-white-second flex justify-center items-center pl-5">
            <label className="label">Color:</label>
            <input
              type="text"
              onChange={(e) => setColor(e.target.value)}
              value={color}
              className="input"
            />
          </div>

          <div className="w-full dark:bg-pale-blue bg-white-second flex justify-center items-center pl-5">
            <label className="label">Size:</label>
            <input
              type="text"
              onChange={(e) => setSize(e.target.value)}
              value={size}
              className="input"
            />
          </div>

          <div className="w-full dark:bg-pale-blue bg-white-second flex justify-center items-center pl-5">
            <label className="label">Gender:</label>
            <input
              type="text"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
              className="input"
            />
          </div>

          <div className="w-full dark:bg-pale-blue bg-white-second flex justify-center items-center pl-5">
            <label className="label w-full">Age:</label>
            <input
              type="text"
              onChange={(e) => setAge(e.target.value)}
              value={age}
              className="input"
            />
          </div>

          <div className="w-full dark:bg-pale-blue bg-white-second flex justify-center items-center pl-5">
            <label className="label">Type:</label>
            <input
              type="text"
              onChange={(e) => setType(e.target.value)}
              value={type}
              className="input"
            />
          </div>
        </div>

        {/* HEALTH STATUS */}

        <div className="break-after-column">
          <h2 className="text-base dark:text-white-primary text-black-text font-poppins font-bold">
            HEALTH STATUS:
          </h2>
          <textarea
            name=""
            id=""
            placeholder="Enter here!"
            onChange={(e) => setHealth(e.target.value)}
            value={health}
            className="w-full outline-none dark:bg-pale-blue bg-white-second text-base font-poppins font-medium p-2"
          ></textarea>
        </div>

        {/* BEHAVIORAL OBSERVATION */}
        <div>
          <h2 className="text-base dark:text-white-primary text-black-text font-poppins font-bold">
            BEHAVIORAL OBSERVATION:
          </h2>
          <textarea
            name=""
            id=""
            placeholder="Enter here!"
            onChange={(e) => setBehavior(e.target.value)}
            value={behavior}
            className="w-full outline-none dark:bg-pale-blue bg-white-second text-base font-poppins font-medium p-2"
          ></textarea>
        </div>

        {/* FOUND LOCATION */}
        <div>
          <h2 className="text-base dark:text-white-primary text-black-text font-poppins font-bold">
            FOUND LOCATION:
          </h2>
          <textarea
            name=""
            id=""
            placeholder="Enter here!"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="w-full outline-none dark:bg-pale-blue bg-white-second text-base font-poppins font-medium p-2"
          ></textarea>
        </div>

        {/* YOUR CONTACT INFORMATION */}
        <div className="flex justify-start flex-col gap-2">
          <h2 className="text-base dark:text-white-primary text-black-text font-poppins font-bold">
            CONTACT INFORMATION:
          </h2>
          <div className="w-full dark:bg-pale-blue bg-white-second flex justify-center items-center pl-5">
            <label className="label">Email:</label>
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="input"
            />
          </div>

          <div className="w-full dark:bg-pale-blue bg-white-second flex justify-center items-center pl-5">
            <label className="label">Phone:</label>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              className="input"
            />
          </div>

          {/* BUTTONS */}
          <div className="flex flex-col justify-center items-center gap-3">
            <Button
              label="Add Image"
              padding="py-2"
              text="text-sm"
              border="rounded-md"
              color="bg-pale-blue"
            />

            <Button
              label="Submit"
              padding="py-2"
              text="text-sm"
              border="rounded-md"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Form;
