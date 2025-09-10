const projects = [
  {
    title: "E-commerce Website 🛒",
    description:
      "A fully responsive e-commerce website with product listings, cart functionality, and smooth user experience.",
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Redux"],
    link: "https://main--mr51b1-ecommerce.netlify.app/",
  },
  {
    title:"Notes Manager 📝",
    description:"Note Manager, a productivity-focused web app that goes beyond basic note-taking by adding 'Speech-To-Text Support'.",
    tech:["React","Tailwind CSS"],
    link:"https://sibi-note-manager.netlify.app/",
  },
  {
    title: "Watch Store ⌚︎",
    description:
      "A stylish online watch store showcasing a variety of premium timepieces with interactive UI.",
    tech: ["React", "Bootstrap"],
    link: "https://dashing-kataifi-04178f.netlify.app/",
  },
  {
    title: "Music Player 🎵",
    description:
      "A lightweight music player app with play, pause, and seek functionality. Clean and minimal interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://sibi-05.github.io/MusicPlayer/",
  },
  {
    title: "Weather App 🌦️",
    description:
      "Get real-time weather updates for any city. Features include temperature, weather condition, and location search.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    link: "https://sibi-05.github.io/weather-app/",
  }
];

const Projects = () => (
  <div className="p-10 text-gray-800 max-w-5xl mx-auto">
    <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
    <p className="text-center mb-8 text-gray-600">
      Here are some of the projects I've built:
    </p>

    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[300px]"
        >
          <div>
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-black text-xs font-medium px-2.5 py-0.5 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-black border-2 w-32 text-center bg-transparent hover:bg-black hover:text-white transition px-1 py-2 rounded-xl mt-3"
          >
            Live Preview
          </a>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
