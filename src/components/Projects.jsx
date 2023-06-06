import React from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projectsData = [
    {
      id: 1,
      category: "python",
      name: "Baby Food Tracker App",
      type: "Database & API Webserver Application",
      desc: "The Baby Solids Food Tracker API objective is to enable parents and carers to monitor and track the wide variety of solid foods they plan to introduce to their baby. This allows ease of tracking what has been tried, if the food is liked/disliked and if there are any allergic reactions present. As babies grow older, solid food becomes an essential addition to their diet in order to get enough nutrients for continued growth and development. We all know that parents and carers have their hands full and can use as much help available.",
      stack: ["python", "SQLAlchemy", "postgresql", "flask"],
      repo: "https://github.com/DJ-Lor/LoreliDejesus_T2A2",
      url: "",
      img: "/images/project-baby-app.png",
    },
    {
      id: 2,
      category: "react.js",
      name: "Wikisearch",
      type: "Search Engine",
      desc: "A simple search engine powered by Wikipedia API. The project helped solidify my understanding of React Hooks, State and Life Cycle in React components, API fetch, pagination and Tailwind CSS styling.",
      stack: ["react", "javascript", "tailwind css"],
      repo: "https://github.com/DJ-Lor/wikisearch",
      url: "",
      img: "/images/project-wikisearch.png",
    },
    // {
    //   id: 3,
    //   category: "mern stack - team project",
    //   name: "insert insert",
    //   type: "insert insert",
    //   desc: "The final project of the coding boot camp consists of team collaboration to create a full-stack web application. Insert.............. ",
    //   stack: ["express.js", "react.js", "mongoDB", "node.js", "tailwind css"],
    //   repo: "https://google.com",
    //   url: "https://google.com",
    //   img: "/images/project-stopwatch.png",
    // },
    {
      id: 4,
      category: "python",
      name: "RealSeller App",
      type: "Command Line Interface Application",
      desc: "The RealSeller app is designed to aid sellers working in the real estate industry. It comes with two (2) goals: (1) To manage their growing Client and Property lists and (2) To increase efficiency by automating the Client-to-Property match (and vice versa) based on requirements specified. With the overall objective of increasing seller profitability through the help of the app.",
      stack: ["python", "command line", "JSON"],
      repo: "https://github.com/DJ-Lor/LoreliDejesus_T1A3",
      url: "",
      img: "images/project-realestate.png",
    },
    {
      id: 5,
      category: "react.js",
      name: "React Stopwatch",
      type: "Stopwatch Application",
      desc: "The react stop watch was created with the aim of utilising the useState react hook and styled by using bootstrap buttons.",
      stack: ["react.js", "bootstrap"],
      repo: "https://github.com/DJ-Lor/stopwatch/tree/main",
      url: "",
      img: "/images/project-stopwatch.png",
    },
    {
      id: 6,
      category: "react.js",
      name: "Loreli Portfolio",
      type: "Personal Portfolio",
      desc: "The first project in my course was creating a website with only HTML5 and CSS3. Since then, my coding journey has evolved and I revamped my website using React.js and Tailwind CSS. What I would like visitors to take away is a clean, relevant and informative experience from my website. I am very excited with how this has presented. However, I do understand that my portfolio will continue to be a work-in-progress as I continue my learning journey in this field. I am aware that there is much room for improvement and this portfolio will continue to be under development.",
      stack: ["react.js", "tailwind css"],
      repo: "https://github.com/DJ-Lor/portfolio",
      url: "",
      img: "/images/project-portfolio.png",
    },
  ];

  return (
    <div className="pt-12 mb-36 mt-36" id="projects">
      <div className="flex-col flex flex-wrap mb-12 md:mb-8 text-left md:text-center">
        <p className="text-purple text-3xl md:text-4xl font-bold mb-4 md:mb-1">
          Selected Projects
        </p>

        <span className="md:text-center">
          <p className="text-md lg:text-lg md:mb-6">
            Sharing some of my favourite projects to date - looking forward to
            adding more soon.{" "}
          </p>
        </span>
      </div>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.name}
            id={project.id}
            category={project.category}
            name={project.name}
            type={project.type}
            desc={project.desc}
            stack={project.stack}
            repo={project.repo}
            url={project.url}
            img={project.img}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <a href="#contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-7 md:h-7 animate-bounce bg-purple/30 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
