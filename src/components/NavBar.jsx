import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "contacts",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black/80 backdrop-blur-md fixed z-50">
      {/* made it fixed so the navbar doesn't flow when we swipe */}
      <div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Om
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 
            cursor-pointer font-medium text-white 
            hover:text-cyan-400 hover:scale-105 duration-200 capitalize transition-all"
          >
            <Link to={link} smooth duration="500">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul
          className="flex flex-col justify-center items-center absolute top-0
            left-0 w-full h-screen bg-black/95 backdrop-blur-lg text-white"
        >
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl hover:text-cyan-400 transition-colors"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration="500"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
