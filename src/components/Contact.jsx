import React from "react";
import Button from "./Button";

export default function Contact() {
  return (
    <div className="md:text-center">
      <p className="text-purple text-3xl md:text-4xl font-bold mb-4 md:mb-1">
        Get in Touch
      </p>

      <span className="md:text-center">
        <p className="text-md lg:text-lg pb-3">
          I am always up to connect, chat and expand my network. Whether it is
          for a project need, collaboration or you just want to say hi, my inbox
          is always open. I try to get back to messages within 48 hours!.{" "}
        </p>
      </span>

      <Button>Say Hello!</Button>
    </div>
  );
}
