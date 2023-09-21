import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Movie Streaming",
      description:
        "A movie streaming app to search any movie, see rating and overview.",
      photo: "/src/assets/projects/movie.jpg",
    },
    {
      title: "ToDo List",
      description:
        "A ToDo app  for entering and managing your daily tasks .",
      photo: "/src/assets/projects/ToDo.jpg",
    },
    {
      title: "E-Commerce",
      description:
        "This is a e-commerce app for shopping.",
      photo: "/src/assets/projects/e-com.jpg",
    },
  ];
  
const PrimaryButton = ({ text, link }) => (
  <a href={link} className="primary-button">
    {text}
  </a>
);

const SecondaryButton = ({ text, link }) => (
  <a href={link} className="secondary-button">
    {text}
  </a>
);
  return (
    <div className="md:px-10 px-7 my-8" id="projects">
      <h1 className="text-primary font-semibold text-3xl mt-16">
        Featured projects:
      </h1>
      <p className="my-3 text-white md:w-3/4 leading-[2]">
        I have worked on many projects over the course of being a Web Developer,
        here are a few of my live, real-world projects
      </p>
      {/* featured projects */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="flex flex-col shadow-sm md:w-[343px] bg-[#31313F] p-4 rounded"
            >
              <a
                href={project.photo}
                target="_blank"
                rel="noreferrer"
                className="mb-4"
              >
                <img src={project.photo} alt={project.title} />
              </a>
              <h3 className="text-primary font-semibold text-lg">
                {project.title}
              </h3>
              <p className=" text-white mt-1">{project.description}</p>
              <div className="mt-5">
                <button className="btn transition-all duration-500 bg-primary py-2 px-6 rounded text-white hover:bg-white hover:text-primary">
                <PrimaryButton text="GitHub" link="https://github.com/zarmo17" />
                   
                </button>
                <button className="btn outline py-1.5 px-9 rounded border-none ml-5 text-white ">
                <SecondaryButton text="Demo" link="https://your-demo-link.com" />
                
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
