import { Link } from "react-router-dom";
import { navLinks } from "../constant/index";
import { useState } from "react";
import { logo } from "../assets/logo/index.js";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute max-2xl:padding-x z-10 w-full">
      <nav className="flex max-container justify-between items-center">
        <img src={logo} alt="logo" className="w-[90px] h-[90px]" />
        <ul className="flex gap-4 max-lg:hidden">
          {navLinks.map((link) => (
            <Link
              className="py-4 px-9 no-underline font-bold font-poppins text-lg text-white-primary flex items-center justify-between"
              key={link.label}
              to={link.path}
            >
              {link.icons}
              {link.label}
            </Link>
          ))}
        </ul>
        <button
          className="lg:hidden outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <CloseOutlinedIcon /> : <MenuOutlinedIcon />}
        </button>

        <nav className="absolute left-0 top-[90px] h-auto w-full">
          {open && (
            <ul className="flex items-center flex-col bg-primary gap-4 max-sm:h-screen">
              {navLinks.map((link) => (
                <Link
                  className="py-6 no-underline font-bold font-poppins text-lg text-white-primary border-b"
                  key={link.label}
                  to={link.path}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          )}
        </nav>
      </nav>
    </header>
  );
};

export default Navbar;
