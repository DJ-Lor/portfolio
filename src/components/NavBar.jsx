import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function NavBar() {
  const [hamburger, setHamburger] = useState("menu");
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [logoAppear, setLogoAppear] = useState(true);

  function onToggleMenu() {
    if (hamburger === "menu") {
      setHamburger("close");
      setToggleDropDown(true);
      setLogoAppear(false);
    } else {
      setHamburger("menu");
      setToggleDropDown(false);
      setLogoAppear(true);
    }
  }

  return (
    <div className="h-64 w-full" id="nav">
      <div className="font-google text-xl mt-10">
        <header className="bg-white">
          <nav className="py-4 sm:px4">
            {/* Navigation Container */}
            <div className="w-[90%] mx-auto flex wrap items-center justify-between">
              {/* Logo */}
              <div className={`${logoAppear ? "" : "hidden"}`}>
                <Link to="/" className="flex items-center cursor-pointer">
                  <Button />
                </Link>
              </div>

              {/* Mobile Menu Bar */}
              <button type="button" className="md:hidden">
                <ion-icon
                  onClick={onToggleMenu}
                  name={hamburger}
                  className="cursor-pointer md:hidden"
                  style={{ fontSize: "3rem" }}
                />
              </button>

              {/* Navigation Item Menu */}
              <div
                className={`duration-400 md:static absolute md:bg-white bg-purple/30 md:min-h-fit min-h-[20vh] left-0 ${
                  toggleDropDown ? "top-[9%]" : "top-[-100%]"
                } md:w-auto w-full flex item-center px-8 py-6`}
              >
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6">
                  <li>
                    <a
                      href="#about-me"
                      className="uppercase text-black hover:underline hover:text-purple"
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      href="#projects"
                      className="uppercase text-black hover:underline hover:text-purple"
                    >
                      Projects
                    </a>
                  </li>

                  <li>
                    <a
                      href="#contact"
                      className="uppercase text-black hover:underline hover:text-purple"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
}
