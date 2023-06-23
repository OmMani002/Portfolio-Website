import React from 'react';
import CarGame from '../assets/projects/CarGame.png';
// import two from '../assets/projects/'
// import three from '../assets/projects/'
// import four from '../assets/projects/'
// import five from '../assets/projects/'

const Portfolio = () => {

    const portfolios = [
        {
            id:CarGame,
            src: "https://ommani02.itch.io/track-o-treat"
        }
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
    ]  
  return (
    <div name="portfolio" className="bg-gradient-to-b from-cyan-800 to-green-400 w-full text-black md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                    Portfolio
                </p>
                <p className="py-6">Some of my works</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {
                portfolios.map(({id, src}) => (
                    <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <img src={src} alt='' 
                    className="rounded-md duration-200 hover:scale-105"/>    
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </div>
                </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio;