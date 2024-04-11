import Button from "./Button";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const CardHeader = () => {
  return (
    <div className="flex justify-between items center w-full">
      {/* Left Section */}
      <div className="flex justify-between items-center sm:gap-5 gap-2">
        <Button
          label="Cats"
          padding="py-2"
          text="text-sm"
          border="rounded-md"
        />
        <Button
          label="Dogs"
          padding="py-2"
          text="text-sm"
          border="rounded-md"
        />
      </div>
      {/* Right Section */}
      <div
        className="dark:bg-pale-blue bg-white-second flex justify-between max-sm:ml-2 
      pl-4 items-center rounded-md w-[18rem]"
      >
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent w-full placeholder:text-sm placeholder:font-medium placeholder:font-poppins 
      outline-none text-poppins text-sm font-medium"
        />
        <ion-icon
          name="search"
          style={{ color: "#685CFE", fontSize: "24px", cursor: "pointer" }}
        ></ion-icon>
      </div>
    </div>
  );
};

export default CardHeader;
