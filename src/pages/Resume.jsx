import { useState, useEffect } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../assets/Sibi_Resume.pdf";


function Resume() {

  return (
    <div className="relative w-full min-h-screen bg-transparent py-10 px-4 ">

      <div className="flex justify-center mb-5">
       <img
          src="/Ressume.png"
          alt="Profile"
          className=" border-2 shadow-md w-110 h-150 object-fit rounded-xl"
        />
      </div>

      <div className="flex justify-center">
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          <AiOutlineDownload className="mr-2 text-xl" />
          Download CV
        </a>
      </div>
    </div>
  );
}

export default Resume;
