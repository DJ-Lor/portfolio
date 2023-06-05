import React from "react";
import Footer from "../components/Footer";
import Introduction from "../components/Introduction";
import JokeGenerator from "../components/JokeGenerator";
import AboutMeAccordion from "../components/AboutMeAccordion";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="font-google px-10">
      <Introduction />
      <JokeGenerator />
      <AboutMeAccordion />
      <Projects />
      <Footer />
    </div>
  );
}
