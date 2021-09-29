import { Link } from "gatsby";
import React, { useState } from "react";
import { links } from "./navbar/links";
import MobileButton from "./navbar/mobileButton";

const Navbar = () => {
  const [mobileMenuClass, setMobileMenuClass] = useState("hidden");
  const handleToggleMenu = () => {
    setMobileMenuClass((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  return (
    <nav className="z-10 border-b-2 flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0">
        <Link
          className="
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
      <MobileButton handleToggleMenu={handleToggleMenu} />
      <div
        className={`${mobileMenuClass} w-full block md:flex md:items-center md:w-auto`}
      >
        {links.map((link) => {
          return (
            <Link
              key={link.name}
              className="
                block mt-4 md:inline-block md:mt-0 md:ml-4 text-gray-600 hover:text-gray-900 no-underline"
              to={link.to}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
