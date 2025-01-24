import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "./Themecontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const RoleSelection = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleRoleSelection = (role) => {
    sessionStorage.setItem("role", role);
    redirectToHomePage(role);
  };

  const redirectToHomePage = (role) => {
    navigate(role === "student" ? "/studenthome" : "/educatorhome");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 2 } },
  };

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen px-4 ${
        theme === "light"
          ? "bg-gradient-to-r from-yellow-100 to-white text-black"
          : "bg-gradient-to-r  from-black to-gray-700 text-gold"
      }`}
    >
      {/* Light/Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`absolute top-4 right-4 px-4 py-2 rounded-full font-bold ${
          theme === "light" ? "bg-orange-500 text-white" : "bg-gray-800 text-white"
        }`}
      >
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
      </button>

      {/* Logo and Text */}
      <div className="flex items-center text-orange-400 text-6xl font-bold mb-8">
        <img
          src="/images/Edusphere logo.png"
          alt="Edusphere Logo"
          className="w-20 h-15 mr-4"
        />
        <span>Edusphere</span>
      </div>

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center w-full gap-8 mb-8">
        {/* Educator Card */}
        <motion.div
          className="bg-gradient-to-r from-yellow-400 to-yellow-100 text-gold dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-6 w-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-custom hover:z-10"
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <img
            src="/images/educator.jpg"
            alt="Educator"
            className="w-full h-48 rounded-md mb-4 object-cover"
            onClick={() => handleRoleSelection("educator")}
          />
          <h2 className="text-2xl font-bold mb-2 text-slate-950">Educator</h2>
          <p className="text-lg text-black dark:text-gray-300">
            <strong>Share your knowledge</strong>
            <br />
            As an Educator, you can guide students, create content, and foster
            learning in a blockchain-based system.
          </p>
          <button
            className="mt-4 bg-gradient-to-r from-orange-400 to-orange-300 text-black px-6 py-3 text-lg font-bold rounded-full shadow-lg w-full transform transition-transform duration-300 hover:scale-110 hover:border-4 hover:border-orange-500"
            onClick={() => handleRoleSelection("educator")}
          >
            I am Educator
          </button>
        </motion.div>

        {/* Student Card */}
        <motion.div
          className="bg-gradient-to-r from-yellow-400 to-yellow-100 text-gold dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-6 w-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-custom hover:z-10 "
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <img
            src="/images/student.jpg"
            alt="Student"
            className="w-full h-48 rounded-md mb-4 object-cover"
            onClick={() => handleRoleSelection("student")}
          />
          <h2 className="text-2xl font-bold mb-2 text-slate-950">Student</h2>
          <p className="text-lg text-black dark:text-gray-300">
            <strong>Learn and grow</strong>
            <br />
            As a Student, you can access courses, gain new skills, and interact
            with an innovative educational community.
          </p>
          <button
            className="mt-4 bg-gradient-to-r from-orange-400 to-orange-300 text-black px-6 py-3 text-lg font-bold rounded-full shadow-lg w-full transform transition-transform duration-300 hover:scale-110 hover:border-4 hover:border-orange-500"
            onClick={() => handleRoleSelection("student")}
          >
            I am Student
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default RoleSelection;
