import React, { useState } from "react";
import Button from "./Button";
import { useAddNewAdoptionMutation } from "../redux/api";
import { defaultImage } from "../assets/images";
import imageCompression from "browser-image-compression";

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

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 1024,
      useWebWorker: true,
    };

    try {
      const compressedFile = await imageCompression(file, options);
      const reader = new FileReader();
      reader.readAsDataURL(compressedFile);
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.onerror = (error) => {
        console.log("Error", error);
      };
    } catch (error) {
      console.log("Error during image compression", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!name || !breed || !color || !gender || !age || !type || !image) {
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
        image,
      });

      setName("");
      setBreed("");
      setColor("");
      setGender("");
      setAge("");
      setType("");
      setImage("");
      setError("");
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  return (
    <section className="max-container h-auto flex padding-x justify-center ">
      <form onSubmit={onSubmit} className="lg:w-3/4 w-full">
        <div className="flex justify-center items-center mb-5">
          <img
            src={image === "" ? defaultImage : image}
            alt="image"
            className="w-[10rem] h-[10rem] border-2 border-slate-blue dark:border-cyber-blue rounded-full object-cover"
          />
        </div>

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

        <div>
          <label className="label">Send Image:</label>
          <input type="file" className="input" onChange={handleImage} />
        </div>

        <div className="flex justify-center items-center">
          <Button
            children="Submit"
            type="submit"
            submit
            className="mt-10 md:w-[10rem]"
            onClick={onSubmit}
          />
        </div>
        {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      </form>
    </section>
  );
};

export default Form;
