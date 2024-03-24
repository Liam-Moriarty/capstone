import React from "react";
import { footerLinks, socialMedia } from "../constant";
import { copyRight, logo } from "../assets/logo/index.js";

const Footer = () => {
  return (
    <footer className="max-container flex items-center mt-10 max-2xl:padding-x">
      <div className="grid grid-cols-1 w-full">
        {/* HEADER */}
        <div className="flex justify-between w-full items-center">
          <img src={logo} alt="logo" className="w-[90px] h-[90px]" />
          <h1 className="text-base text-cyber-blue font-semibold font-poppins">
            Pet's Connect
          </h1>
        </div>

        {/* LINKS */}
        <div className="grid max-md:grid-cols-1 max-lg:grid-cols-2 grid-cols-4 gap-4">
          {/* SOCIAL */}
          <div className="p-4">
            <h1 className="text-base text-cyber-blue font-semibold font-poppins">
              Our Socials
            </h1>
            <div className="flex justify-start items-center gap-5 mt-5">
              {socialMedia.map((social) => (
                <div className="flex justify-center items-center bg-white-primary rounded-full w-12 h-12">
                  <img
                    src={social.src}
                    alt={social.alt}
                    width={24}
                    height={24}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* FOOTER LINKS */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex flex-col p-4">
              <h1 className="text-base text-cyber-blue font-semibold font-poppins">
                {section.title}
              </h1>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="text-base text-white-primary font-poppins font-normal"
                    key={link.label}
                  >
                    <a href={link.link}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* COPYRIGHT */}
        <div className="flex items-center">
          <div className="w-full py-12 border-t border-white-primary">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center gap-2">
                <img
                  src={copyRight}
                  alt="copy right"
                  width={20}
                  height={20}
                  className="rounded-full m-0"
                />
                <p>Copyright. All rights reserved.</p>
              </div>
              <div>
                <p>Terms & Conditions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
