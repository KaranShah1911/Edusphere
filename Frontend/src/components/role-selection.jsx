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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10, duration: 1 },
    },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" },
  };

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen px-4 space-y-8 ${
        theme === "light"
          ? "bg-gradient-to-r from-orange-400 to-gray-700 text-black"
          : "bg-gradient-to-r from-gray-900 to-gray-700 text-white"
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
      <div className="flex items-center text-6xl font-bold mb-8">
        <img
          src="/images/Edusphere logo.png"
          alt="Edusphere Logo"
          className="w-12 h-12 mr-4"
        />
        <span>Edusphere</span>
      </div>

      {/* Role Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Educator Card */}
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <img
            src="/images/educator.jpg"
            alt="Educator"
            className="w-48 h-32 rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Educator</h2>
          <p className="text-center text-sm leading-relaxed mb-4">
            <strong>Share your knowledge:</strong> Guide students, create content, and foster learning in a blockchain-based system.
          </p>
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-full font-bold shadow-md hover:bg-gray-100"
            onClick={() => handleRoleSelection("educator")}
          >
            I am Educator
          </button>
        </motion.div>

        {/* Student Card */}
        <motion.div
          className="bg-gradient-to-r from-green-500 to-green-400 text-white rounded-lg shadow-lg p-6 flex flex-col items-center"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <img
            src="/images/student.jpg"
            alt="Student"
            className="w-48 h-32 rounded-lg mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Student</h2>
          <p className="text-center text-sm leading-relaxed mb-4">
            <strong>Learn and grow:</strong> Access courses, gain new skills, and interact with an innovative educational community.
          </p>
          <button
            className="bg-white text-green-500 px-4 py-2 rounded-full font-bold shadow-md hover:bg-gray-100"
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
