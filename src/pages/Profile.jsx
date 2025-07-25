import { FaChevronDown } from "react-icons/fa";
import ProcessingAnimation from "../components/OrbitAnimation";

const Profile = () => {
  const handleScroll = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="p-10 text-gray-800 max-w-4xl mx-auto relative">
      <div className="scale-150 mb-16">
        <ProcessingAnimation />
      </div>

      {/* 🔥 New Intro Section */}
      <div className="text-center mb-35">
        <h1 className="text-3xl font-bold mb-4">Hi 👋 , I'm Sibi ✨</h1>
        <p className="text-lg leading-relaxed max-w-2xl mx-auto">
          I am a web developer and backend developer with expertise in Node.js. I have experience in building scalable, secure, and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.
        </p>
        <div className="flex justify-center mt-8">
        <button
          onClick={handleScroll}
          className="animate-bounce text-gray-600 hover:text-black text-2xl"
          aria-label="Scroll Down"
        >
          <FaChevronDown />
        </button>
      </div>
      </div>

      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-40">
        <div className="col-span-1 flex justify-center">
          <img
            src="/sibi.jpeg"
            alt="Profile"
            className="rounded-full border-4 shadow-md w-48 h-48 object-cover"
          />
        </div>

        <div className="col-span-2">
          <h1 className="text-4xl font-extrabold mb-2 border-b border-gray-400 pb-1">
            Sibi P
          </h1>
          <p className="text-lg leading-relaxed mb-4">
            Passionate web developer with experience in building full-stack applications using React.js, Node.js, and Express. Eager to continue learning and contribute to real-world projects.
          </p>

          <div className="mb-4">
            <h2 className="text-xl font-semibold border-b border-gray-300 mb-2">
              Education
            </h2>
            <ul className="list-disc pl-5">
              <li>
                B.Sc in Computer Science - Sri Krishna Adithya College of Arts and Science (2022 - 2025) - 8.4{" "}
                <span className="text-xs rounded-3xl">CGPA</span>
              </li>
              <li>HSC - Sankar Ponnar Higher Secondary School</li>
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold border-b border-gray-300 mb-2">
              Interests
            </h2>
            <ul className="list-disc pl-5">
              <li>Web Development</li>
              <li>Frontend Development</li>
              <li>UI Designer</li>
              <li>Deployment</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
