import React from "react";
import { useTheme } from "../context/themeContext";

const ToggleMode = () => {
  const { mode, toggleTheme } = useTheme();

  const toggleSwitch = () => {
    toggleTheme();
  };

  return (
    <div
      onClick={toggleSwitch}
      style={{ cursor: "pointer" }}
      className="fixed sm:bottom-10 sm:right-20 bottom-5 right-10 z-[999] flex justify-center items-center 
      dark:bg-pale-blue bg-white-second rounded-full sm:p-5 p-3"
    >
      {mode === "light" ? (
        <ion-icon
          name="sunny"
          style={{ color: "#685CFE", fontSize: "24px" }}
        ></ion-icon>
      ) : (
        <ion-icon
          name="moon"
          style={{ color: "#685CFE", fontSize: "24px" }}
        ></ion-icon>
      )}
    </div>
  );
};

export default ToggleMode;
