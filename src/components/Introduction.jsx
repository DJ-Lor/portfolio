import { React } from "react";
import Button from "./Button";
// eslint-disable-next-line react/prop-types
export default function Introduction() {
  const onButtonClickPdfDownload = () => {
    fetch("public/Fullstack Developer CV - Loreli De Jesus.pdf").then(
      (response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);
          const alink = document.createElement("a");
          alink.href = fileURL;
          alink.download =
            "public/Fullstack Developer CV - Loreli De Jesus.pdf";
          alink.click();
        });
      }
    );
  };
  return (
    <div>
      <span className="">
        <div className="flex-col flex flex-wrap mb-6 md:mb-8 text-left md:text-center pb-36 md:grid-col-5">
          <p className="text-purple text-3xl md:text-4xl font-bold mb-4 md:mb-1">
            Hello, I&apos;m Loreli De Jesus
          </p>

          <span className="md:text-center">
            <p className="text-md lg:text-lg">
              Junior Full Stack Developer & Digital Marketer.{" "}
            </p>
          </span>
          <span className="md:flex md:justify-center pt-8 md:pt-12 mb-48 text-left">
            <a href="#projects">
              <Button>view my work → </Button>
            </a>
            <Button onClick={onButtonClickPdfDownload}>
              download my cv →{" "}
            </Button>
          </span>
          <div className="flex justify-center">
            <a href="#about-me">
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
      </span>
    </div>
  );
}
