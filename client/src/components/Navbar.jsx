import { Link } from "react-router-dom";
import { navLinks } from "../constant/index.js";
import { useState } from "react";

import logo from "../assets/logo.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <header className="max-2xl:padding-x absolute z-10 w-full">
      <nav className="flex max-container justify-between items-center">
        <img src={logo} alt="logo" className="w-[90px] h-[90px]" />
        <ul className="flex gap-4 max-lg:hidden">
          {navLinks.map((link) => (
            <Link
              className="py-4 px-9 no-underline font-bold font-poppins text-lg text-white-primary flex items-center justify-between"
              key={link.label}
              to={link.path}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </ul>
        <button className="lg:hidden outline-none" onClick={toggleMenu}>
          {open ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
