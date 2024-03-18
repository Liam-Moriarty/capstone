import aboutBG2 from "../assets/aboutBG2.png";
import { aboutCard } from "../constant";

const About = () => {
  return (
    <>
      {/* ABOUT SECTION */}
      <div className="max-container min-h-screen flex xl:flex-row flex-col justify-between max-xl:justify-center">
        <div className="flex flex-col xl:w-2/5 w-full justify-center items-center max-2xl:padding-x pt-10">
          <h1 className=" xl:text-8xl text-white-primary text-[3rem] pt-20 font-poppins font-bold">
            About <span className="text-cyber-blue">Pets</span> Connect
          </h1>
          <p className="text-white-primary text-xl max-sm:text-base py-10 font-poppins mb-2 sm:leading-8">
            Welcome to Pets Connect, where furry companions find their forever
            homes! At Pets Connect, we're dedicated to facilitating the adoption
            and rescue of cats and dogs, uniting them with loving families
            across the globe. Our platform serves as a bridge between
            compassionate adopters and deserving animals in need.
          </p>
        </div>
        <div className="flex xl:w-2/5 justify-center items-center bg-pale-blue px-10 py-10">
          <img
            src={aboutBG2}
            alt="about background"
            className="w-[400px] h-[350px] rounded-3xl object-cover shadow-3xl"
          />
        </div>
      </div>

      {/* 2ND SECTION */}
      <div className="max-container flex justify-center flex-wrap gap-9 py-10 bg-pale-blue mt-10 padding-x">
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
      </div>
    </>
  );
};

export default About;
