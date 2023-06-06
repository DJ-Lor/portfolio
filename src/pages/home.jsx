import React from "react";
import Introduction from "../components/Introduction";
import AboutMeAccordion from "../components/AboutMeAccordion";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import DevTools from "../components/DevTools";
import IntroCallToAction from "../components/IntroCallToAction";

export default function Home() {
  return (
    <div className="font-google px-10 md:px-40 lg:px-40">
      <Introduction />
      <IntroCallToAction />
      <AboutMeAccordion />
      <DevTools />
      <Projects />
      <Contact />
    </div>
  );
}
