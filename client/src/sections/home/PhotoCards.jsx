import { cardPhoto } from "../../constant";

const PhotoCards = () => {
  return (
    <section className="max-container mt-10 flex items-center justify-center gap-4 max-xl:flex-col max-xl:padding-x">
      {cardPhoto.map((item, i) => (
        <img
          key={i}
          src={item.imageURL}
          alt="photo cards"
          className="w-[400px] h-[350px] bg-center object-cover rounded-3xl shadow-2xl "
        />
      ))}
    </section>
  );
};

export default PhotoCards;
