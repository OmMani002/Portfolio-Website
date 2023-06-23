import React from 'react'
import myImage from '../assets/profile.jpg';
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full 
    bg-gradient-to-b from-cyan-800 to-green-400">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full 
        px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    I'm a Front-End Developer
                </h2>
                <p className="text-black py-4 max-w-md">
                    I have a 6 months of experience in building and designing webpages.
                    Currently, I love to work on web applications using technologies like
                    ReactJS, Tailwind CSS, etc.
                </p>

                <div>
                    <Link to="portfolio" smooth duration={500} size= {50} className="group text-white w-fit px-6 py-3 my-2 flex
                    items-center rounded-md bg-gradient-to-r
                    from-cyan-500 to to-blue-500 cursor-pointer">
                        Projects
                        <span className="group-hover:rotate-90 duration-300">
                        <MdArrowRight size={35} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={myImage} alt="my profile" 
                className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>
        </div>
    </div>
  )
}

export default Home;