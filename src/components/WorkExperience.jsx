import React from 'react';

const WorkExperience = () => {
  const experienceDetails = [
    {
      logo: "briefcase-outline",
      position: "Software Developer Intern",
      company: "Eviden-Atos Business",
      duration: "27 Jan, 2025 - Present",
      skills: [
        "C#",
        ".NET Core",
        "Blazor",
        "Microsoft Azure",
        "MS SQL Server",
        "Generative AI",
        "LLMs",
        "AI Agents"
      ],
      projects: [
        {
          title: "Foreign Travel Request (FTR) Management System",
          description:
            "Developed a 3-tier web application to streamline visa processing for employees traveling abroad for work. Implemented SOLID principles and clean coding techniques using C# and .NET Core. Integrated MS SQL Server for secure and efficient database management. Automated multi-department approval workflows, reducing manual intervention and improving transparency."
        },
        {
          title: "AI-Powered Smart Chatbot for Enterprise Support",
          description:
            "Developed an AI-driven chatbot using Generative AI, LLMs, and knowledge-based retrieval to provide intelligent customer support. Enabled conversational AI to assist customers with troubleshooting and query resolution."
        }
      ]
    }
  ];

  return (
    <div id="experience" className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
        My <span className="text-cyan-600">Experience</span>
      </h3>
      <p className="text-lg text-center font-normal">Here's what I've been working on recently.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {experienceDetails.map((exp, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-6">
            <div className="flex items-center mb-3">
              <ion-icon name={exp.logo} class="text-primary text-xl mr-2" />
              <div className="text-xl font-semibold text-gray-800">{exp.position}</div>
            </div>
            <div className="text-base text-gray-500 mb-1">{exp.company}</div>
            <div className="text-base text-gray-500 mb-3">{exp.duration}</div>

            <div className="mb-4">
              <strong className="text-gray-700">Key Skills:</strong>
              <ul className="list-disc list-inside ml-4 text-gray-600">
                {exp.skills.map((skill, idx) => (
                  <li key={idx}>{skill}</li>
                ))}
              </ul>
            </div>

            <div>
              {exp.projects.map((proj, projIndex) => (
                <div key={projIndex} className="mb-4">
                  <h4 className="text-lg font-medium text-gray-700">{proj.title}</h4>
                  <p className="text-gray-700">{proj.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
