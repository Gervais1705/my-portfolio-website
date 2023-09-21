import React from "react";
import linkedin from "../assets/socials/linkedin.png";
import instagram from "../assets/socials/instagram.png";
import dribbble from "../assets/socials/dribbble.png";
import email from "../assets/socials/sms.png";

const Footer = () => {
  return (
    <div className="md:px-10 px-7 mt-24">
      <div className="text-white opacity-50 flex flex-col md:flex-row justify-between items-center my-5">
        <p>@ Copyright 2023 | Gervais Yameogo</p>
        <p className="hidden sm:block">Frontend  Developer</p>
        <p className="hidden sm:block">UI Designer</p>
        <p className="hidden sm:block">React Developer</p>
        <p className="hidden sm:block">Designed by @Gervais</p>
      </div>
      {/* social media */}
      <div className="flex mb-5 justify-center md:justify-start ">
        <a
          href="https://www.linkedin.com/in//"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          className="ml-4"
          href="https://github.com/zarmo17"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:gervaisyameogo17@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={dribbble} alt="" />
        </a>
        <a
          className="ml-4"
          href="mailto:anpch@example.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={email} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
