import React from "react";
import Services from "./Services";
import ruler from '../../src/assets/icons/ruler-pen.png';
import code from '../../src/assets/icons/code.png';
import android from '../assets/icons/android.png';
import react from '../../src/assets/icons/React-icon.png';


const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
    { name: "MOBILE DEVELOPMENT", image: "/src/assets/icons/android.png" },
    {
      name: "React App",
      image: "/src/assets/icons/React-icon.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Hi, my name is Gervais, i am a Front End web developer, UI
        designer, and Mobile developer. I have honed my skills in Web
        Development and advance i have core understanding of advance UI design
        principles. Here are the major skills i have.
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">+</div>
        <p className="text-white text-2xl md:ml-5">
          I am Specialized in building apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      <Services/>
    </div>
  );
};

export default About;
