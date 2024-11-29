"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 text-white p-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-xl font-bold">My Website</div>

        {/* Burger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 bg-gray-700 rounded"
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex md:gap-4 md:items-center ml-auto absolute md:static top-16 right-0 w-full bg-gray-800 z-10 md:bg-transparent md:p-0 p-4`}
        >
          <li><a href="#home" className="block hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="block hover:text-gray-300">About</a></li>
          <li><a href="#services" className="block hover:text-gray-300">Services</a></li>
          <li><a href="#contact" className="block hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>

      {/* Responsive Content Layout */}
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Full width on all screens */}
        <div className="bg-red-500 w-full h-40 md:h-60 lg:h-80">
          Contrary to popular belief
        </div>

        {/* Medium screen adjustment */}
        <div className="bg-blue-500 w-full md:w-1/2 h-40 md:h-60 lg:h-80">
          Contrary to popular belief
        </div>
        <div className="bg-green-500 w-full md:w-1/2 h-40 md:h-60 lg:h-80">
          Contrary to popular belief
        </div>
      </div>
    </div>
  );
}
