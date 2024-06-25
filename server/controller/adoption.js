import Adoption from "../model/adoptionSchema.js";

export const getAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.find().sort({ createdAt: -1 });
    res.status(200).json(adoption);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const sendAdoption = async (req, res) => {
  const { name, age, color, breed, gender, type } = req.body;
  try {
    const adoption = await Adoption.create({
      name,
      age,
      color,
      breed,
      gender,
      type,
      // image,
    });
    res.status(200).json(adoption);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
