import React, { useState } from "react";
import Button from "./Button";
import { useAddNewAdoptionMutation } from "../redux/api";

const Form = () => {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  const [addNewAdoption] = useAddNewAdoptionMutation();

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !breed || !color || !gender || !age || !type) {
      setError("All fields are required!!");
      return;
    }

    try {
      await addNewAdoption({
        name,
        breed,
        color,
        gender,
        age,
        type,
        // image,
      });

      setName("");
      setBreed("");
      setColor("");
      setGender("");
      setAge("");
      setType("");
      // setImage("");
      setError("");
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <section className="max-container h-auto padding flex justify-center ">
      <form onSubmit={onSubmit} className="lg:w-3/4 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col">
            <label className="label">Name:</label>
            <input
              type="text"
              className="input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Age:</label>
            <input
              type="number"
              className="input"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols md:grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col">
            <label className="label">Color:</label>
            <input
              type="text"
              className="input"
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Breed:</label>
            <input
              type="text"
              className="input"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols md:grid-cols-2 gap-5 mb-5">
          <div className="flex flex-col">
            <label className="label">Gender:</label>
            <input
              type="text"
              className="input"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label className="label">Type:</label>
            <input
              type="text"
              className="input"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </div>
        </div>

        {/* <div>
          <label className="label">Send Image:</label>
          <input
            type="file"
            className="input"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div> */}

        <div className="flex justify-center items-center">
          <Button
            children="Submit"
            type="submit"
            submit
            className="my-10 md:w-[10rem]"
            onClick={onSubmit}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </section>
  );
};

export default Form;
