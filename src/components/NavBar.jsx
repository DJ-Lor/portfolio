import React, { useState } from "react";
import GameParent from "./GameParent";

export default function NavBar() {
  const [hamburger, setHamburger] = useState("menu");
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [logoAppear, setLogoAppear] = useState(true);
  // eslint-disable-next-line no-unused-vars
  const [clickLogo, setClickLogo] = useState(false);

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

  function onClickLogo() {
    setClickLogo(!clickLogo);
  }

  return (
    <div>
      <div className="h-64 w-full" id="nav">
        <div className="font-google text-xl mt-10">
          <header className="bg-white">
            <nav className="py-4 sm:px4">
              {/* Navigation Container */}
              <div className="w-[90%] mx-auto flex wrap items-center justify-between">
                {/* Logo */}
                <div className={`${logoAppear ? "" : "hidden"}`}>
                  <button
                    type="button"
                    className="flex items-center cursor-pointer"
                    onClick={onClickLogo}
                  >
                    <div className="transition-transform duration-300 transform hover:scale-150">
                      <img
                        src={`${process.env.PUBLIC_URL}/images/profile-loreli.png`}
                        alt="profile-loreli"
                        className="h-24 w-24 rounded-full md:ml-10 md:mr-12 animate-pulse"
                      />
                    </div>
                  </button>
                </div>
                {/* Pass clickLogo as prop to Introduction component */}
                {/* Mobile Menu Bar */}
                <button type="button" className="md:hidden z-20">
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
                  <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-6 pt-4">
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
      <div
        className={`fixed top-0 w-screen h-screen bg-purple z-10 ${
          clickLogo ? "" : "hidden"
        }`}
        id="game"
      >
        <button type="button" className="absolute right-10 top-10">
          <ion-icon
            onClick={onClickLogo}
            name="close"
            className="cursor-pointer bg-floral-white"
            style={{ fontSize: "3rem", color: "floralwhite" }}
          />
        </button>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <GameParent />
        </div>
      </div>
    </div>
  );
}
