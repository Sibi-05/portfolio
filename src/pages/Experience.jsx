import React from "react";
import { LuMapPin } from "react-icons/lu";
import { FcApproval } from "react-icons/fc";
import { FaMapSigns } from "react-icons/fa";


const experiences = [
  {
    title: "Undergraduate Student",
    company: "Sri Krishna Adithya College of Arts and Science",
    duration: "Aug 2022 – May 2025",
    description:
      "B.Sc in Computer Science with a focus on web development and backend technologies. Gained foundational knowledge in programming, algorithms, and software engineering principles.With a CGPA of 8.4",
  },
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
    duration: "Present",
    description:
      "Currently seeking new challenges in web development. Passionate about building innovative solutions and eager to contribute to impactful projects.",
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
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-28 ">
        {experiences.map((exp, index) => {
  const isLeft = index % 2 === 0;
  const isLast = index === experiences.length - 1; // check if last

  return (
    <div
      key={index}
      className={`relative flex flex-col md:flex-row ${
        isLeft ? "md:justify-start mr-26" : "md:justify-end ml-26"
      } items-center`}
    >
      <div
        className={`md:w-1/2 p-4 sm:p-6 rounded-xl border-4 border-b-emerald-400 shadow-lg bg-black ${
          isLeft ? "md:mr-26 text-right" : "md:ml-26 text-left"
        }`}
      >
        <h3 className="text-lg sm:text-xl font-semibold text-yellow-300">
          {exp.title}
        </h3>
        <p className="text-xs sm:text-sm text-white">{exp.company}</p>
        <p className="text-[10px] sm:text-xs text-gray-400 mb-2">
          {exp.duration}
        </p>
        <p className="text-xs sm:text-sm text-white">{exp.description}</p>
      </div>

      {/* Marker Icon */}
      {isLast ? (
        // Show "processing" icon for last one
        <FaMapSigns
          className="absolute left-1/2 transform -translate-x-1/2 text-amber-700 z-10 border-2 border-white animate-bounce"
          size={36}
          style={{ background: "black", borderRadius: "50%", padding: "3px" }}
        />
      ) : (
        // Show success icon for completed ones
        <FcApproval
          className="absolute left-1/2 transform -translate-x-1/2 z-10 border-2 border-white"
          size={36}
          style={{ background: "black", borderRadius: "50%", padding: "3px" }}
        />
      )}
    </div>
  );
})}

      </div>
    </div>
  );
};

export default Experience;

