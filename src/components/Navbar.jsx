import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="text-black text-center mt-4">
      <div className="flex flex-wrap justify-center gap-4 text-lg font-medium ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black w-20 font-semibold border-2 rounded-2xl" : "text-black w-20 font-semibold border-2 rounded-2xl"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "text-black w-20 font-semibold border-2 rounded-2xl" : "text-black w-20 font-semibold border-2 rounded-2xl"
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-black w-22 font-semibold border-2 rounded-2xl" : "text-black w-22 font-semibold border-2 rounded-2xl"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? "text-black w-30 font-semibold border-2 rounded-2xl" : "text-black w-30 font-semibold border-2 rounded-2xl"
          }
        >
          Experience
        </NavLink>

        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "text-black w-22 font-semibold border-2 rounded-2xl" : "text-black w-22 font-semibold border-2 rounded-2xl"
          }
        >
          Resume
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;