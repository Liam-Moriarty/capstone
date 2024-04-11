import Lottie from "lottie-react";
import feedingDog from "../../animationData/feedingDog.json";
import Button from "../../components/Button";
import PetsOutlinedIcon from "@mui/icons-material/PetsOutlined";

const Landing = () => {
  return (
    <section className="min-h-screen max-container flex lg:flex-row justify-between flex-col">
      <div className="relative flex lg:w-2/5 w-full flex-col justify-center items-start py-10 max-2xl:padding-x">
        <h1 className="dark:text-white-primary text-black-text lg:text-8xl text-4xl pt-20 font-poppins font-bold">
          Welcome to{" "}
          <span className="dark:text-cyber-blue text-black-text">Pet</span>{" "}
          Palace
        </h1>
        <p className="dark:text-white-primary text-black-text text-xl max-sm:text-base py-10 font-poppins mb-2 max-sm:leading-8 leading-9">
          Adopting a pet from Pets Palace, you're giving a deserving animal a
          loving home and saving a life.
        </p>
        <Button label="Adopt Now" iconURL={<PetsOutlinedIcon />} />
      </div>

      <div className="dark:bg-pale-blue bg-white-second flex lg:w-2/5 justify-center items-center py-10">
        <Lottie animationData={feedingDog} />
      </div>
    </section>
  );
};

export default Landing;
