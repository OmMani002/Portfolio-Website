import React from "react";
import CarGame from "../assets/projects/CarGame.png";
// import two from '../assets/projects/'
// import three from '../assets/projects/'
// import four from '../assets/projects/'
// import five from '../assets/projects/'

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: CarGame,
    },
    // },
    // {
    //     id:2,
    //     src: one
    // },
    // {
    //     id:3,
    //     src: one
    // },
    // {
    //     id:4,
    //     src: one
    // },
    // {
    //     id:5,
    //     src: one
    // }
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </p>
          <p className="py-4 text-xl text-gray-300">Some of my works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-lg shadow-gray-600/50 rounded-lg overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <img
                src={src}
                alt=""
                className="rounded-t-md duration-200 hover:scale-105 w-full h-48 object-cover"
              />
              <div className="flex items-center justify-center p-4 bg-black/50">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
