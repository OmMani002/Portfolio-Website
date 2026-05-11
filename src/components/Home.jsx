import React from "react";
import myImage from "../assets/profile.jpg";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full 
    bg-gradient-to-br from-gray-900 via-black to-gray-800"
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full 
        px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white mb-4">
            I'm a{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Front-End Developer
            </span>
          </h2>
          <p className="text-gray-300 py-4 max-w-md leading-relaxed">
            I have 6 months of experience in building and designing webpages.
            Currently, I love to work on web applications using technologies
            like ReactJS, Tailwind CSS, etc.
          </p>

          <div className="flex gap-4">
            <Link
              to="portfolio"
              smooth
              duration={500}
              size={50}
              className="group text-white w-fit px-6 py-3 my-2 flex
                    items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to-blue-500 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdArrowRight size={35} className="ml-1" />
              </span>
            </Link>
            {/* <a
              href="/Resume-Om.pdf"
              download
              className="text-white w-fit px-6 py-3 my-2 flex
                    items-center rounded-md bg-gradient-to-r
                    from-purple-500 to-pink-500 cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Resume
              <span className="ml-2">
                <MdArrowRight size={35} className="rotate-90" />
              </span>
            </a> */}
          </div>
        </div>
        <div>
          <div>
            <img
              src={myImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
