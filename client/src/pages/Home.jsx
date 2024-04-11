import { Accordion, Footer } from "../components/index";
import { About, Landing, AboutCards, PhotoCards } from "../sections/home/index";

const Home = () => {
  return (
    <>
      {/* HOME SECTION */}
      <Landing />

      {/* ABOUT SECTION */}
      <About />

      {/* CARDS SECTION */}
      <AboutCards />

      {/* PHOTOCARDS SECTION */}
      <PhotoCards />

      {/* ACCORDION COMPONENT */}
      <Accordion />

      {/* FOOTER COMPONENT*/}
      <Footer />
    </>
  );
};

export default Home;
