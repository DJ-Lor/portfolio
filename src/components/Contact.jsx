import React from "react";
import Button from "./Button";

export default function Contact() {
  const goContact = () => {
    window.open("mailto:dejesus.loreli@gmail.com", "_blank");
  };
  return (
    <div className="bg-floral-white p-4">
      <div className="md:grid md:grid-cols-2 md:pt-24 md:pb-20" id="contact">
        <div className="md:text-left mb-24 md:pl-20 ">
          <p className="text-purple text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Get in Touch
          </p>

          <span className="md:text-left">
            <p className="text-md lg:text-lg pb-3 md:pb-8">
              I am always up to connect, chat and expand my network. Whether it
              is for a project need, collaboration or you just to connect, my
              inbox is always open. I try to get back to messages within 48
              hours!✨{" "}
            </p>
          </span>
          <Button onClick={() => goContact()}>Say Hello!</Button>
        </div>
        <div className="hidden md:flex md:justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/profile-loreli-desk.png`}
            alt="profile-loreli"
            className="h-64 w-64 rounded-full md:ml-10 md:mr-12"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <a href="#nav">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:w-7 md:h-7 animate-bounce bg-purple/30 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </a>
        <p className="text-xs">Back to Top</p>
      </div>
    </div>
  );
}
