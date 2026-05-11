import React from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      institution: "VIT Bhopal University",
      location: "Bhopal, Madhya Pradesh",
      degree: "B.Tech CSE with Specialization in Gaming Technology",
      period: "Oct 2024",
      details: "Major: Computer Science; Minors: Gaming Technology",
    },
  ];

  const certifications = [
    {
      id: 1,
      name: "Introduction to Data Analytics",
      issuer: "Coursera",
      date: "Jan 2025",
      link: "https://www.coursera.org/account/accomplishments/verify/F50BGQH5AMK2?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      id: 2,
      name: "Meta Front-End Developers Professional Certificate",
      issuer: "Coursera",
      date: "Jun 2023",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/UVEPKKM92U82?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=prof",
    },
  ];

  return (
    <div
      name="education"
      className="bg-gradient-to-br from-gray-900 via-black to-gray-800 w-full min-h-screen py-2"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-cyan-500 p-2 inline bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Education & Certifications
          </p>
          <p className="py-6 text-xl text-gray-300">
            My academic background and professional certifications
          </p>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Education
          </h3>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h4>
                    <p className="text-cyan-400 font-medium">
                      {edu.institution}
                    </p>
                    <p className="text-gray-400 text-sm">{edu.location}</p>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
            Certifications
          </h3>
          <div className="grid gap-6">
            {certifications.map((cert) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
