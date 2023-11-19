import React from "react";

export default function DevTools() {
  const devTools = [
    {
      name: "Studio",
      img: "https://www.cdnlogo.com/logos/g/71/google-data-studio.svg",
    },
    {
      name: "Analytics",
      img: "https://www.cdnlogo.com/logos/g/82/google-analytics.svg",
    },
    {
      name: "",
      img: `${process.env.PUBLIC_URL}/images/datorama.png`,
    },
    {
      name: "Python",
      icon: "devicon-python-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Postgresql",
      icon: "devicon-postgresql-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    },
    {
      name: "Javascript",
      icon: "devicon-javascript-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "ReactJS",
      icon: "devicon-react-original",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg",
    },
    {
      name: "Tailwind",
      icon: "devicon-tailwindcss-original-wordmark",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    },
    {
      name: "CSS3",
      icon: "devicon-css3-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "HTML5",
      icon: "devicon-html5-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "Express",
      icon: "devicon-express-original",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Node",
      icon: "devicon-nodejs-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Flask",
      icon: "devicon-flask-original",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
    {
      name: "SQLAlchemy",
      icon: "devicon-sqlalchemy-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg",
    },
    {
      name: "Jest",
      icon: "devicon-jest-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "Pytest",
      icon: "devicon-pytest-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg",
    },
    {
      name: "Vscode",
      icon: "devicon-vscode-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Jira",
      icon: "devicon-jira-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
    },
    {
      name: "Trello",
      icon: "devicon-trello-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg",
    },
    // {
    //   name: "Bootstrap",
    //   icon: "devicon-bootstrap-plain",
    //   img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    // },
    {
      name: "Canva",
      icon: "devicon-canva-original",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg",
    },
    {
      name: "Salesforce",
      icon: "devicon-salesforce-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    },
    {
      name: "Facebook",
      icon: "devicon-facebook-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg",
    },
    {
      name: "Google",
      icon: "devicon-google-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    },
    {
      name: "Linkedin",
      icon: "devicon-linkedin-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    },
    {
      name: "Slack",
      icon: "devicon-slack-plain",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg",
    },
  ];

  return (
    <div className="pt-12" id="dev-tools">
      <div className="relative font-google flex-col flex md:items-center flex-wrap">
        <p className="relative text-purple md:text-4xl text-2xl font-bold">
          My Tech Toolbox
        </p>
        <p className="pt-2 pb-4">
          The skills, tools and technologies I use bringing products to life🧰{" "}
        </p>
      </div>

      <div className="relative flex flex-wrap items-center justify-center mt-12">
        {devTools.map((dev) => (
          <div
            className="relative w-28 h-28 md:w-40 md:h-40 flex items-center flex-col text-purple/80"
            key={dev.name}
          >
            {/* <i
              className={`${dev.icon ? dev.icon : dev.img} text-xl md:text-5xl`}
            /> */}
            {dev.icon ? (
              <i className={`${dev.icon} text-xl md:text-5xl`} />
            ) : (
              <div className="h-[30%] w-full">
                <img
                  src={dev.img}
                  alt={dev.name}
                  className="h-full w-full object-contain brightness-50"
                />
              </div>
            )}
            <h2>{dev.name}</h2>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <a href="#projects">
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
