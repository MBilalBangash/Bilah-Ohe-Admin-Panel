import React, { useState } from "react";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";
import avatarImage from "../assets/avatar.png";
import "./Navbar.css";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode"); 
  };

  return (
    <div className={`app-container ${darkMode ? "dark-mode" : ""} sticky top-0 `}>
      <nav className=" text-black p-4 flex justify-between items-center sticky top-0 shadow-md">
        <div className="text-xl font-semibold">Oriental Hope Education</div>

        <div className="flex items-center space-x-4 mr-6 gap-3">
          <button
            className="bg-gray-300 text-white p-2 rounded-full"
            onClick={toggleDarkMode}
          >
            {darkMode ? (
              <IoSunnySharp className=" text-black" />
            ) : (
              <IoMoonSharp className="text-black" />
            )}
          </button>

          <img
            src={avatarImage}
            alt="User Avatar"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={toggleDarkMode}
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
