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
    <div>
      <div className="border border-dashed" />
      <div className="grid md:grid-cols-2 mb-10 p-5">
        <div className="col-span-2 md:col-span-1 md:row-span-2 mb-4">
          <img
            src={img}
            alt="project-img"
            className="object-cover h-80 w-full rounded opacity-80"
          />
        </div>
        <div className="col-span-2 md:col-span-1 md:px-5">
          <h3 className="text-lg md:text-xl mb-4 font-semibold text-purple">
            {name}
          </h3>
          <h4 className="text-lg md:text-xl mb-4 font-semibold">
            Type: {type}
          </h4>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white ">
            {stack.map((item) => (
              <span
                key={item}
                className="inline-block px-2 py-1 font-semibold border-2 border-l-4 bg-floral-white rounded-md mb-2 md:mb-3 uppercase"
              >
                {item}
              </span>
            ))}
          </p>
        </div>
        <div className="row-span-2 col-span-2">
          <p className="mb-2 md:mb-3 mt-2 md:mt-3 text-md lg:text-lg">{desc}</p>
          <span>
            <Button onClick={() => goUrl(repo)}>Source Code</Button>
            {url ? <Button onClick={() => goUrl(url)}>Live</Button> : null}
          </span>
        </div>
      </div>
    </div>
  );
}
