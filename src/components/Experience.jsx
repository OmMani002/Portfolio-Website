import React from "react";

const Experience = () => {
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
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full min-h-screen py-2"
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

        {/* Technical Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Technical Skills
          </h3>
          <div className="grid gap-6">
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                Frontend
              </h4>
              <p className="text-gray-300 text-sm">
                React.js, Next.js, HTML5, CSS3, Tailwind CSS, JavaScript (ES6+),
                TypeScript, WordPress
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                Backend & APIs
              </h4>
              <p className="text-gray-300 text-sm">
                Node.js, Express.js, RESTful APIs, JSON
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                Databases
              </h4>
              <p className="text-gray-300 text-sm">
                PostgreSQL, MySQL, MongoDB, Redis
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                Testing & Tools
              </h4>
              <p className="text-gray-300 text-sm">
                Jest, Mocha, Git, GitHub, Docker, Jira, Supabase
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                Core Concepts
              </h4>
              <p className="text-gray-300 text-sm">
                Web Fundamentals, Agile Practices, Debugging, Performance
                Optimization
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                Additional Skills
              </h4>
              <p className="text-gray-300 text-sm">
                Agile Methodologies, Stripe, Zod, Drag-and-Drop UI, UX Research
              </p>
            </div>
            <div className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                Coding Platform
              </h4>
              <a
                href="https://www.geeksforgeeks.org/user/maniom002/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
              >
                GeeksforGeeks - GFG
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
