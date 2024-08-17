// src/components/Header.js
import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaDatabase,
  FaInfoCircle,
  FaClipboardCheck,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-gradient-to-b from-blue-600 to-blue-400 dark:from-blue-800 dark:to-blue-600 text-white dark:text-gray-300 py-4 shadow-lg m-4 rounded">
      <nav className="container mx-auto flex flex-col md:flex-row justify-between items-center  ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center text-lg font-semibold px-3 py-2 rounded transition-transform transform duration-300 ${
              isActive
                ? "bg-blue-500 dark:bg-blue-800 ring-2 ring-blue-300 dark:ring-blue-500 ring-opacity-50 shadow-lg shadow-blue-500/50 dark:shadow-blue-700/50"
                : "hover:scale-110 dark:hover:bg-blue-700 hover:text-gray-100 dark:hover:text-gray-100"
            }`
          }
        >
          <FaHome className="h-5 w-5 mr-2" />
          Live
        </NavLink>
        <NavLink
          to="/database"
          className={({ isActive }) =>
            `flex items-center text-lg font-semibold px-3 py-2 rounded transition-transform transform duration-300 ${
              isActive
                ? "bg-blue-500 dark:bg-blue-800 ring-2 ring-blue-300 dark:ring-blue-500 ring-opacity-50 shadow-lg shadow-blue-500/50 dark:shadow-blue-700/50"
                : "hover:scale-110 dark:hover:bg-blue-700 hover:text-gray-100 dark:hover:text-gray-100"
            }`
          }
        >
          <FaDatabase className="h-5 w-5 mr-2" />
          Database
        </NavLink>
        <NavLink
          to="/details"
          className={({ isActive }) =>
            `flex items-center text-lg font-semibold px-3 py-2 rounded transition-transform transform duration-300 ${
              isActive
                ? "bg-blue-500 dark:bg-blue-800 ring-2 ring-blue-300 dark:ring-blue-500 ring-opacity-50 shadow-lg shadow-blue-500/50 dark:shadow-blue-700/50"
                : "hover:scale-110 dark:hover:bg-blue-700 hover:text-gray-100 dark:hover:text-gray-100"
            }`
          }
        >
          <FaInfoCircle className="h-5 w-5 mr-2" />
          Details
        </NavLink>
        <NavLink
          to="/ListCheck"
          className={({ isActive }) =>
            `flex items-center text-lg font-semibold px-3 py-2 rounded transition-transform transform duration-300 ${
              isActive
                ? "bg-blue-500 dark:bg-blue-800 ring-2 ring-blue-300 dark:ring-blue-500 ring-opacity-50 shadow-lg shadow-blue-500/50 dark:shadow-blue-700/50"
                : "hover:scale-110 dark:hover:bg-blue-700 hover:text-gray-100 dark:hover:text-gray-100"
            }`
          }
        >
          <FaClipboardCheck className="h-5 w-5 mr-2" />
          ListCheck
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
