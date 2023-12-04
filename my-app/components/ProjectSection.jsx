import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Original Portfolio",
    description: "My very first portfolio!",
    image: "/PortfolioProject1.png",
    gitUrl: "https://kristenroggero.com/",
  },
  {
    id: 1,
    title: "Blog Website",
    description: "Created for the love of crochet!",
    image: "/BlogProject1.png",
    gitUrl: "https://github.com/HazelWebDev/CrochetBlog",
  },
  {
    id: 1,
    title: "Image Slideshow",
    description: "A small example of the potential of JavaScript",
    image: "/ImageSlideShow.png",
    gitUrl: "https://codepen.io/B-Pensive/pen/abPGzGa",
  },
];

const ProjectSection = () => {
  return (
    <>
      <h2 className="text-4xl text-center font-bold text-primary mb-12 border-b border-secondary">
        Some of my projects
      </h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectSection;
