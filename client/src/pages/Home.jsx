import Accordion from "../components/Accordion";
import PhotoCards from "../home-section/PhotoCards";
import { About, Landing, AboutCards, Footer } from "../home-section/index";

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
