import React, { useRef, useEffect, useState } from "react";
import { DiJavascript } from "react-icons/di";
import { FaReact, FaBootstrap, FaNode, FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { FaPython } from "react-icons/fa";
import { SiRedux, SiMongodb, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const skills = [
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
  { icon: <DiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <FaPython className="text-blue-800" />, name: "Python" },
  { icon: <FaReact className="text-blue-500" />, name: "React.js" },
  { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
  { icon: <FaNode className="text-green-600" />, name: "Node.js" },
  { icon: <SiMongodb className="text-green-700" />, name: "MongoDB" },
  { icon: <GrMysql className="text-blue-800" />, name: "MySQL" },
  { icon: <FaBootstrap className="text-purple-700" />, name: "Bootstrap" },
  { icon: <RiTailwindCssFill className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <FaGitAlt className="text-orange-500" />, name: "Git" },
  { icon: <FaGithub className="text-gray-800" />, name: "GitHub" },
  { icon: <SiPostman className="text-orange-600" />, name: "Postman" },
  { icon: <VscVscode className="text-blue-500" />, name: "VS Code" },
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
       
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          observer.unobserve(entry.target);
        }
      },
      {
        root: null, 
        rootMargin: "0px",
        threshold: 0.1, 
      }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  // Function to determine animation class based on index
  const getAnimationClass = (idx) => {
    const animations = [
      "animate-slideInFromLeft",
      "animate-slideInFromTop",
      "animate-slideInFromRight",
      "animate-slideInFromBottom",
    ];
    // Cycle through animations, adding a delay
    return `${animations[idx % animations.length]} delay-[${idx * 75}ms]`;
  };

  return (
    <div ref={skillsRef} className="p-10 text-gray-800 max-w-5xl mx-auto overflow-hidden">
      <h1 className={`text-3xl font-bold mb-4 text-center ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>Skills</h1>
      <p className={`text-center mb-8 text-gray-600 ${isVisible ? 'animate-fadeIn delay-100' : 'opacity-0'}`}>
        These are the technologies and tools I work with:
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, idx) => (
          <div
            key={idx + 1}
            className={`flex flex-col items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition-shadow duration-300
              ${isVisible ? getAnimationClass(idx) : 'opacity-0'}
            `}
            style={{ animationDelay: `${idx * 75}ms` }} // Inline style for more precise delay
          >
            <div className="text-4xl mb-2">{skill.icon}</div>
            <p className="text-sm font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;