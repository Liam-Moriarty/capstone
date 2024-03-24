import Lottie from "lottie-react";
import feedingDog from "../animationData/feedingDog.json";
import Button from "../components/Button";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

const Landing = () => {
  return (
    <section className="min-h-screen max-container flex lg:flex-row justify-between flex-col">
      <div className="relative flex lg:w-2/5 w-full flex-col justify-center items-start py-10 max-2xl:padding-x">
        <h1 className="text-white-primary lg:text-8xl text-[2.5rem] pt-20 font-poppins font-bold">
          Welcome to <span className="text-cyber-blue">Pets</span> Connect
        </h1>
        <p className="text-white-primary text-xl max-sm:text-base py-10 font-poppins mb-2 max-sm:leading-8 leading-9">
          Adopting a pet from Pets Connect, you're giving a deserving animal a
          loving home and saving a life.
        </p>
        <Button label="Adopt Now" iconURL={<PetsOutlinedIcon />} />
      </div>

      <div className="bg-pale-blue flex lg:w-2/5 justify-center items-center py-10">
        <Lottie animationData={feedingDog} />
      </div>
    </section>
  );
};

export default Landing;
