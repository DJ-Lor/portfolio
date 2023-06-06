import React from "react";
import Button from "./Button";

export default function Contact() {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 md:pt-24 md:pb-20" id="contact">
        <div className="md:text-left mb-24 md:pl-20" id="contact">
          <p className="text-purple text-3xl md:text-4xl font-bold mb-4 md:mb-6">
            Get in Touch
          </p>

          <span className="md:text-left">
            <p className="text-md lg:text-lg pb-3 md:pb-8">
              I am always up to connect, chat and expand my network. Whether it
              is is is is is is for a project need, collaboration or you just
              inbox is always open. I try to get back to messages within 48
              hours!{" "}
            </p>
          </span>
          <Button>Say Hello!</Button>
        </div>
        <div className="hidden md:flex md:justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-64 h-64 text-purple"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
            />
          </svg>
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
