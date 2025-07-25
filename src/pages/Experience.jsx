import React from "react";
import { LuMapPin } from "react-icons/lu";

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Neuro Nest AI",
    duration: "Apr 2025 – Jul 2025",
    description:
      "Built and deployed full-stack web apps using React, Node.js, and MongoDB. Collaborated on real-world AI projects.",
  },
  {
    title: "Next Journey",
    company: "Open to Opportunities",
    duration: "Future",
    description:
      "Actively looking to bring impact through my growing full-stack skills and passion for AI-driven apps.",
  },
];

const Experience = () => {
  return (
    <div className="relative bg-transparent py-20 px-4 sm:px-8 overflow-hidden">
      <h2 className="text-4xl font-bold text-center mb-20 text-gray-800">
        My Journey
      </h2>

      {/* Road Background */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-20 sm:w-24 bg-black z-0">
        {/* Side white lines */}
        <div className="absolute left-1 top-0 w-1 h-full bg-white" />
        <div
  className="absolute left-1/2 top-0 w-1 h-full -translate-x-1/2"
  style={{
    backgroundImage:
      "repeating-linear-gradient(to bottom, white 0px, white 12px, transparent 12px, transparent 24px)",
  }}
/>
        <div className="absolute right-1 top-0 w-1 h-full bg-white" />
        {/* Dashed center line */}
        <div className="absolute left-1/2 top-0 w-0.5 h-full -translate-x-1/2 bg-[repeating-linear-gradient(to-bottom,white_0_10px,transparent_10px,transparent_20px)]" />
      </div>

      {/* Timeline items */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-28">
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row ${
                isLeft ? "md:justify-start" : "md:justify-end"
              } items-center`}
            >
              <div
                className={`md:w-1/2 p-6 rounded-xl border-4 border-b-emerald-400 shadow-lg  bg-black ${
                  isLeft ? "md:mr-24 text-right" : "md:ml-24 text-left"
                }`}
              >
                <h3 className="text-xl font-semibold text-yellow-300">
                  {exp.title}
                </h3>
                <p className="text-sm text-white">{exp.company}</p>
                <p className="text-xs text-gray-400 mb-2">{exp.duration}</p>
                <p className="text-white text-sm">{exp.description}</p>
              </div>

              {/* Connector line to center */}
              <div className="absolute w-1 h-24 bg-indigo-600 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-0" />

              {/* Dot Marker */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-indigo-600 border-4 border-white rounded-full z-10 shadow-md" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
