import React, { useState } from "react";
import { Link } from "gatsby";

const Navbar = () => {
  //   const btn = document.querySelector("button.mobile-menu-button");
  //   const menu = document.querySelector(".mobile-menu");

  //   btn.addEventListener("click", () => {
  //     menu.classList.toggle("hidden");
  //   });
  const [mobileMenuClass, setMobileMenuClass] = useState("hidden");
  const handleToggleMenu = () => {
    setMobileMenuClass((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <nav className="fixed w-full z-10 top-0">
      <div
        className="
          w-full
          mx-auto
          flex flex-wrap
          items-center
          justify-between
          mt-0
          pt-4
          pb-2
          px-16
          bg-white
        "
      >
        <div className="pl-4">
          <Link
            class="
              text-gray-900 text-base
              no-underline
              hover:no-underline
              text-lg
              md:text-2xl"
            to="/"
          >
            Weronika Bern
          </Link>
        </div>
        <div className=" lg:flex lg:items-center lg:w-auto lg:block lg:mt-0 z-20">
          <ul className="list-reset flex justify-end flex-1 items-center">
            <li className="mr-3">
              <Link
                className="
                  inline-block
                  py-2
                  px-4
                  text-gray-600
                  hover:text-gray-900
                  font-bold
                  no-underline"
                to="/"
              >
                Portfolio
              </Link>
            </li>
            <li className="mr-3">
              <Link
                className="
                  inline-block
                  py-2
                  px-4 text-gray-600
                  hover:text-gray-900
                  font-bold
                  no-underline"
                to="/"
              >
                About
              </Link>
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button">
              <svg
                className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={handleToggleMenu}
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/*  Mobile menu button */}

      {/* <!-- mobile menu --> */}
      <div className={mobileMenuClass}>
        <ul className="">
          <li className="active">
            <a
              href="index.html"
              className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
            >
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
