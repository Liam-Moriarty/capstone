import { Title, AdoptionCards, Footer } from "../components";

const Adoption = () => {
  return (
    <section className="max-container min-h-screen padding-t">
      {/* PAGE TITLE */}
      <Title
        title="Adopt and Save a Life"
        description="  “Embark on a Journey of Love and Companionship - Open Your Heart and
        Home to a Furry Friend in Need. By Choosing Adoption, You’re Not Just
        Saving a Life, You’re Completing Your Family. Every Whisker, Wag, and
        Purr is a Story Waiting to Unfold. Adopt a Pet, Gain a Friend, and
        Change Both Your Worlds Forever!”"
      />

      {/* ADOPTION CARDS */}
      <AdoptionCards />

      {/* FOOTER */}
      <Footer />
    </section>
  );
};

export default Adoption;
