import mongoose from "mongoose";

export const AdoptionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    // image: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

const Adoption = mongoose.model("Adoption", AdoptionSchema);
export default Adoption;
