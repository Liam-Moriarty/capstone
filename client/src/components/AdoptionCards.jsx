import { CardHeader, Button } from "./index";
import { useGetAllAdoptionQuery } from "../redux/api.js";

const AdoptionCards = () => {
  const { data: adoptionData, isLoading } = useGetAllAdoptionQuery();
  console.log("🚀 ~ AdoptionCards ~ adoptionData:", adoptionData);

  function toSentenceCase(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <div className="padding-x py-8 max-h-screen overflow-hidden overflow-y-scroll">
      {/* Search and Inputs */}
      <CardHeader />

      {/* Cards*/}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 py-10">
        {adoptionData && adoptionData.length > 0 ? (
          adoptionData.map((item) => (
            <div key={item._id} className="dark:bg-pale-blue">
              <div className="w-full h-auto">
                <img
                  src={item.image}
                  alt="img"
                  className="w-full h-[300px] bg-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start px-5 py-5">
                {/* NAME OF PET */}
                <h1
                  className="text-base font-poppins font-semibold dark:text-cyber-blue
              text-slate-blue"
                >
                  Name:
                  <span
                    className="text-base font-medium font-poppins dark:text-white-primary
                text-black-text"
                  >
                    {" "}
                    {toSentenceCase(item.name)}
                  </span>
                </h1>
                {/* DESCRIPTION OF PET */}
                <p
                  className="text-base font-poppins font-semibold dark:text-cyber-blue
              text-slate-blue"
                >
                  Age:
                  <span
                    className="text-base font-medium font-poppins dark:text-white-primary
                text-black-text"
                  >
                    {" "}
                    {item.age}
                  </span>
                </p>
                <p
                  className="text-base font-poppins font-semibold dark:text-cyber-blue
              text-slate-blue"
                >
                  Color:
                  <span
                    className="text-base font-medium font-poppins dark:text-white-primary
                text-black-text"
                  >
                    {" "}
                    {toSentenceCase(item.color)}
                  </span>
                </p>
                <p
                  className="text-base font-poppins font-semibold dark:text-cyber-blue
              text-slate-blue"
                >
                  Breed:
                  <span
                    className="text-base font-medium font-poppins dark:text-white-primary
                text-black-text"
                  >
                    {" "}
                    {toSentenceCase(item.breed)}
                  </span>
                </p>
                <p
                  className="text-base font-poppins font-semibold dark:text-cyber-blue
              text-slate-blue"
                >
                  Gender:
                  <span
                    className="text-base font-medium font-poppins dark:text-white-primary
                text-black-text"
                  >
                    {" "}
                    {toSentenceCase(item.gender)}
                  </span>
                </p>{" "}
                <p
                  className="text-base font-poppins font-semibold dark:text-cyber-blue
              text-slate-blue"
                >
                  Type:
                  <span
                    className="text-base font-medium font-poppins dark:text-white-primary
                text-black-text"
                  >
                    {" "}
                    {toSentenceCase(item.type)}
                  </span>
                </p>
                <div className="mt-2">
                  <Button
                    children="Adopt"
                    type="submit"
                    submit
                    className="mt-5 md:w-[8rem] w-full"
                  />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>
            {isLoading && (
              <p
                className="text-base font-medium font-poppins dark:text-white-primary
            text-black-text"
              >
                Loading...
              </p>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default AdoptionCards;
