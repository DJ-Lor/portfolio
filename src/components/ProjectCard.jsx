/* eslint-disable react/prop-types */
import React from "react";
import Button from "./Button";

export default function ProjectCard({
  name,
  type,
  desc,
  stack,
  repo,
  url,
  img,
}) {
  const goUrl = (openUrl) => {
    window.open(openUrl, "_blank");
  };

  return (
    <div className="border-2 border:purple  overflow-hidden">
      <img
        src={img}
        alt="project-img"
        className="w-full h-36 md:h-96 cursor-pointer"
      />

      <div className="w-full p-4">
        <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          Name: {name}
        </h3>
        <h4 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
          Type: {type}
        </h4>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
          {stack.map((item) => (
            <span
              key={item}
              className="inline-block px-2 py-1 font-semibold border-2 border-l-4 bg-floral-white rounded-md mb-2 md:mb-3"
            >
              {item}
            </span>
          ))}
        </p>
        <p className="mb-2 md:mb-3 mt-2 md:mt-3">{desc}</p>
        <span>
          <Button onClick={goUrl(repo)}>Source Code</Button>
          <Button onClick={goUrl(url)}>Live</Button>
        </span>
      </div>
    </div>
  );
}
