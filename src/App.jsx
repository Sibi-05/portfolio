import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Experience from "./pages/Experience";

const App = () => {
  return (
    <div>
      <Header />
       <Navbar />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />
      </div>
  );
};

export default App;