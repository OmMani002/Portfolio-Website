import React from 'react';
import html5 from "../assets/svg icons/html5.svg";
import css from "../assets/svg icons/css.svg";
import javascript from "../assets/svg icons/javascript.svg";
import react from "../assets/svg icons/react.svg";
import tailwind from "../assets/svg icons/tailwind.svg";
import github from "../assets/svg icons/github.svg";
import unity from "../assets/svg icons/unity.svg";
import blender from "../assets/svg icons/blender.svg";
import figma from "../assets/svg icons/figma.svg";
import android from "../assets/svg icons/android.svg";


const Experience = () => {

    const tools = [
        {
            id: 1,
            src: html5,
            title: 'HTML',
            style: 'shadow-orange-600'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'Javascript',
            style: 'shadow-yellow-700'
        },
        {
            id: 4,
            src: react,
            title: 'React',
            style: 'shadow-sky-400'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },
        {
            id: 7,
            src: unity,
            title: 'Unity Engine',
            style: 'shadow-white'
        },
        {
            id: 8,
            src: blender,
            title: 'Blender',
            style: 'shadow-orange-500'
        },
        {
            id: 9,
            src: figma,
            title: 'Figma',
            style: 'shadow-yellow-500'
        },
        {
            id: 10,
            src: android,
            title: 'Android Studio',
            style: 'shadow-green-500'
        }
    ]
  return (
    <div name="experience" className="bg-gradient-to-b from-black via-black to-gray-800
     w-full h-screen">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"> Experience</p>
                <p className="py-6">These are the technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                
                {
                    tools.map(({id, src, title, style}) => (
                        <div key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-10 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience;