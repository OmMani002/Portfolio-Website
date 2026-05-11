import React from "react";
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
      title: "HTML",
      style: "shadow-orange-600",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-700",
    },
    {
      id: 4,
      src: react,
      title: "React",
      style: "shadow-sky-400",
    },
    // {
    //     id: 5,
    //     // eslint-disable-next-line no-undef
    //     src: nextJs,
    //     title: 'Next JS',
    //     style: 'shadow-sky-400',
    // },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 6,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: unity,
      title: "Unity Engine",
      style: "shadow-white",
    },
    {
      id: 8,
      src: blender,
      title: "Blender",
      style: "shadow-orange-500",
    },
    {
      id: 9,
      src: figma,
      title: "Figma",
      style: "shadow-yellow-500",
    },
    {
      id: 10,
      src: android,
      title: "Android Studio",
      style: "shadow-green-500",
    },
  ];
  const workExperience = [
    {
      id: 1,
      title: "Front-End Developer Consultant",
      company: "EtherLabz",
      period: "Jun 2025 – Present",
      responsibilities: [
        "Built and maintained scalable front-end applications using React, Next.js, ES6+, HTML, CSS, and Tailwind CSS.",
        "Developed clean, reusable UI components following modern design patterns and best practices.",
        "Integrated and consumed RESTful APIs, ensuring reliable data flow and system consistency.",
        "Improved UI performance, responsiveness, and cross-device compatibility.",
        "Collaborated with product, design, and backend teams in an Agile environment to deliver features end-to-end.",
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer (Intern)",
      company: "Metaverse Ventures Pvt. Ltd.",
      period: "Jan 2024 – Apr 2024",
      responsibilities: [
        "Developed full-stack features using React, TypeScript, Node.js, Express, and SQL/NoSQL databases.",
        "Implemented scheduling, email, and workflow modules with a focus on performance and usability.",
        "Wrote unit and integration tests using Jest and Mocha to ensure reliability and maintainability.",
        "Participated in sprint planning, code reviews, and iterative releases.",
      ],
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full min-h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Experience
          </p>
          <p className="py-6 text-xl text-gray-300">
            Work History & Technologies
          </p>
        </div>

        {/* Work Experience Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Work History
          </h3>
          <div className="space-y-8">
            {workExperience.map((exp) => (
              <div
                key={exp.id}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {exp.title}
                    </h4>
                    <p className="text-cyan-400 font-medium">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {exp.responsibilities.map((resp, index) => (
                    <li key={index} className="text-sm leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Technologies I've Worked With
          </h3>
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {tools.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-lg hover:scale-105 duration-500 py-2 rounded-lg bg-black/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-cyan-500/30 transition-all ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4 font-semibold">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
