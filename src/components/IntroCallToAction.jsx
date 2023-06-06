import React from "react";
import Button from "./Button";

export default function IntroCallToAction() {
  return (
    <span className="md:flex md:justify-center mb-96 text-left">
      <Button>view my work → </Button>
      <Button>download my cv → </Button>
    </span>
  );
}
