import { NavLink } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";   // Profile
import { TbBulb } from "react-icons/tb";             // Skills
import { VscProject } from "react-icons/vsc";        // Projects
import { MdWork } from "react-icons/md";             // Experience
import { HiDocumentText } from "react-icons/hi";     // Resume

const Navbar = () => {
  return (
    <nav className="text-black text-center mt-4">
      <div className="flex flex-wrap justify-center gap-4 text-lg font-medium">
        
        {/* Profile */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center justify-center gap-2 px-4 text-black font-semibold border-2 rounded-2xl ${
              isActive ? "bg-black text-white shadow-2xs" : ""
            }`
          }
        >
          <BsFillPersonFill size={22} />
          <p className="hidden sm:block">Profile</p>
        </NavLink>

        {/* Skills */}
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            `flex items-center justify-center gap-2 px-4  text-black font-semibold border-2 rounded-2xl ${
              isActive ? "bg-black text-white shadow-2xs" : ""
            }`
          }
        >
          <TbBulb size={22} />
          <p className="hidden sm:block">Skills</p>
        </NavLink>

        {/* Projects */}
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex items-center justify-center gap-2 px-4 text-black font-semibold border-2 rounded-2xl ${
              isActive ? "bg-black text-white shadow-2xs" : ""
            }`
          }
        >
          <VscProject size={22} />
          <p className="hidden sm:block">Projects</p>
        </NavLink>

        {/* Experience */}
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            `flex items-center justify-center gap-2 px-4 text-black font-semibold border-2 rounded-2xl ${
              isActive ? "bg-black text-white shadow-2xs" : ""
            }`
          }
        >
          <MdWork size={22} />
          <p className="hidden sm:block">Experience</p>
        </NavLink>

        {/* Resume */}
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            `flex items-center justify-center gap-2 px-4 text-black font-semibold border-2 rounded-2xl ${
              isActive ? "bg-black text-white shadow-2xs" : ""
            }`
          }
        >
          <HiDocumentText size={22} />
          <p className="hidden sm:block">Resume</p>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;



