import { Title, Form, Footer, FormDetails } from "../components";

const Rescue = () => {
  return (
    <section className="max-container min-h-screen padding-t">
      {/* PAGE TITLE */}
      <Title
        title="Adoption Form"
        description="  “Embark on a Journey of Love and Companionship - Open Your Heart and
        Home to a Furry Friend in Need. By Choosing Adoption, You’re Not Just
        Saving a Life, You’re Completing Your Family. Every Whisker, Wag, and
        Purr is a Story Waiting to Unfold. Adopt a Pet, Gain a Friend, and
        Change Both Your Worlds Forever!”"
      />

      {/* FORMS */}
      <Form />

      {/* FORM DETAILS */}
      {/* <FormDetails /> */}

      {/* FOOTER TITLE */}
      <Footer />
    </section>
  );
};

export default Rescue;

// flex justify-center items-center
