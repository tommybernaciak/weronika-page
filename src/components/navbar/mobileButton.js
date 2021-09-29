import React from "react";

const MobileButton = ({ handleToggleMenu }) => {
  return (
    <div className="md:hidden flex items-center">
      <button className="outline-none mobile-menu-button">
        <svg
          className=" w-6 h-6 text-gray-600 hover:text-gray-900 "
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
  );
};

export default MobileButton;
