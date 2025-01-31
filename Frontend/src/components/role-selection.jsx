// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import { useTheme } from "./Themecontext";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

// const RoleSelection = () => {
//   const navigate = useNavigate();
//   const { theme, toggleTheme } = useTheme();

//   const handleRoleSelection = (role) => {
//     sessionStorage.setItem("role", role);
//     redirectToHomePage(role);
//   };

//   const redirectToHomePage = (role) => {
//     navigate(role === "student" ? "/studenthome" : "/educatorhome");
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, y: -50 },
//     visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 2 } },
//   };

//   return (
//     <div
//       className={`flex flex-col justify-center items-center min-h-screen px-4 ${
//         theme === "dark"
//           ? "bg-gradient-to-r from-yellow-100 to-white text-black"
//           : "bg-gradient-to-r  from-black to-gray-700 text-gold"
//       }`}
//     >
//       {/* dark/Dark Mode Toggle Button */}
//       <button
//         onClick={toggleTheme}
//         className={`absolute top-4 right-4 px-4 py-2 rounded-full font-bold ${
//           theme === "dark" ? "bg-orange-500 text-white" : "bg-gray-800 text-white"
//         }`}
//       >
//         <FontAwesomeIcon icon={theme === "dark" ? faMoon : faSun} />
//       </button>

//       {/* Logo and Text */}
//       <div className="flex items-center text-orange-400 text-6xl font-bold mb-8">
//         <img
//           src="/images/Edusphere logo.png"
//           alt="Edusphere Logo"
//           className="w-20 h-15 mr-4"
//         />
//         <span>Edusphere</span>
//       </div>

//       {/* Cards Section */}
//       <div className="flex flex-wrap justify-center w-full gap-8 mb-8">
//         {/* Educator Card */}
//         <motion.div
//           className="bg-gradient-to-r from-yellow-400 to-yellow-100 text-gold dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-6 w-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-custom hover:z-10"
//           initial="hidden"
//           animate="visible"
//           variants={cardVariants}
//         >
//           <img
//             src="/images/educator.jpg"
//             alt="Educator"
//             className="w-full h-48 rounded-md mb-4 object-cover"
//             onClick={() => handleRoleSelection("educator")}
//           />
//           <h2 className="text-2xl font-bold mb-2 text-slate-950">Educator</h2>
//           <p className="text-lg text-black dark:text-black">
//             <strong>Share your knowledge</strong>
//             <br />
//             As an Educator, you can guide students, create content, and foster
//             learning in a blockchain-based system.
//           </p>
//           <button
//             className="mt-4 bg-gradient-to-r from-orange-400 to-orange-300 text-black px-6 py-3 text-lg font-bold rounded-full shadow-lg w-full transform transition-transform duration-300 hover:scale-110 hover:border-4 hover:border-orange-500"
//             onClick={() => handleRoleSelection("educator")}
//           >
//             I am Educator
//           </button>
//         </motion.div>

//         {/* Student Card */}
//         <motion.div
//           className="bg-gradient-to-r from-yellow-400 to-yellow-100 text-gold dark:bg-gray-800 dark:text-white rounded-lg shadow-lg p-6 w-96 transform transition-transform duration-300 hover:scale-105 hover:shadow-custom hover:z-10 "
//           initial="hidden"
//           animate="visible"
//           variants={cardVariants}
//         >
//           <img
//             src="/images/student.jpg"
//             alt="Student"
//             className="w-full h-48 rounded-md mb-4 object-cover"
//             onClick={() => handleRoleSelection("student")}
//           />
//           <h2 className="text-2xl font-bold mb-2 text-slate-950">Student</h2>
//           <p className="text-lg text-black dark:text-black">
//             <strong>Learn and grow</strong>
//             <br />
//             As a Student, you can access courses, gain new skills, and interact
//             with an innovative educational community.
//           </p>
//           <button
//             className="mt-4 bg-gradient-to-r from-orange-400 to-orange-300 text-black px-6 py-3 text-lg font-bold rounded-full shadow-lg w-full transform transition-transform duration-300 hover:scale-110 hover:border-4 hover:border-orange-500"
//             onClick={() => handleRoleSelection("student")}
//           >
//             I am Student
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default RoleSelection;
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "./Themecontext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faChalkboardTeacher, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import { useThemeStore } from "../store/themeStore";


const RoleSelection = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const handleRoleSelection = (role) => {
    localStorage.setItem("role", role);
    navigate(role === "student" ? "/studenthome" : "/educatorhome");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 0.8 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
    tap: { scale: 0.95 }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen px-4 relative overflow-hidden ${
        theme === "dark"
          ? "bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50"
          : "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
      }`}
    >
      {/* Animated Background Elements */}
      <motion.div
        className="absolute -top-32 -left-32 w-64 h-64 bg-gradient-to-r from-amber-400 to-orange-300 rounded-full blur-3xl opacity-20"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
     

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex  items-center gap-4 mb-4 z-10"
      >
        <img
          src="/images/Edusphere logo.png"
          alt="Edusphere Logo"
          className="w-20 h-18 mb-4 drop-shadow-lg"
        />
        <h1 className="text-5xl font-bold bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">
          Edusphere
        </h1>
       </motion.div>
        <p className="mt-2 text-lg text-center text-amber-400 dark:text-gray-800 mb-8">
          Select your role to begin the transformative learning experience
        </p>
      

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-12 mb-18 w-full max-w-6xl px-4 z-10">
        {/* Educator Card */}
        <motion.div
  className={`w-96 p-8 rounded-3xl shadow-2xl backdrop-blur-lg ${
    theme === "dark"
      ? "bg-white/80 border border-amber-100"
      : "bg-gray-800/90 border border-gray-600" // Increased background opacity
  }`}

          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <div className="flex flex-col items-center">
            <div className="w-full aspect-video mb-6 rounded-2xl overflow-hidden relative group">
              <img
                src="/images/educator.jpg"
                alt="Educator"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                className="absolute bottom-4 left-4 text-3xl text-amber-400"
              />
            </div>
            <h2 className={`text-2xl font-bold mb-3 text-gray-800 dark:text-amber-100  ${
                theme === "dark"
                  ? " text-black hover:shadow-lg hover:shadow-amber-100"
                  : " text-white hover:shadow-lg hover:shadow-amber-900/30"
              }`} >
              Educator
            </h2>
            <p className={`text-center mb-6 text-gray-600 dark:text-white  ${
                theme === "dark"
                  ? " text-black hover:shadow-lg hover:shadow-amber-100"
                  : " text-slate-300 hover:shadow-lg hover:shadow-amber-900/30"
              }`} >
              Empower learners with your expertise. Create, guide, and inspire in our
              decentralized educational ecosystem.
            </p>
            <motion.button
              className={`w-full py-3 rounded-xl font-semibold transition-all ${
                theme === "dark"
                  ? "bg-gradient-to-r from-amber-500 to-orange-400 text-white hover:shadow-lg hover:shadow-amber-100"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 hover:shadow-lg hover:shadow-amber-900/30"
              }`}
              // whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleRoleSelection("educator")}
            >
              Continue as Educator
            </motion.button>
          </div>
        </motion.div>

        {/* Student Card */}
        <motion.div
  className={`w-96 p-8 rounded-3xl shadow-2xl backdrop-blur-lg ${
    theme === "dark"
      ? "bg-white/80 border border-amber-100"
      : "bg-gray-800/90 border border-gray-600" // Increased background opacity
  }`}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          whileTap="tap"
        >
          <div className="flex flex-col items-center">
            <div className="w-full aspect-video mb-6 rounded-2xl overflow-hidden relative group">
              <img
                src="/images/student.jpg"
                alt="Student"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <FontAwesomeIcon
                icon={faUserGraduate}
                className="absolute bottom-4 left-4 text-3xl text-amber-400"
              />
            </div>
            <h2 className={`text-2xl font-bold mb-3 text-gray-800 dark:text-amber-100  ${
                theme === "dark"
                  ? " text-black hover:shadow-lg hover:shadow-amber-100"
                  : " text-white hover:shadow-lg hover:shadow-amber-900/30"
              }`} >
              Student
            </h2>
            <p className={`text-center mb-6 text-gray-600 dark:text-white  ${
                theme === "dark"
                  ? " text-black hover:shadow-lg "
                  : " text-slate-300 hover:shadow-lg "
              }`} >
              Embark on your learning journey. Access verified courses, build your
              decentralized portfolio, and grow with peers.
            </p>
            <motion.button
              className={`w-full py-3 rounded-xl font-semibold transition-all ${
                theme === "dark"
                  ? "bg-gradient-to-r from-amber-500 to-orange-400 text-white hover:shadow-lg hover:shadow-amber-100"
                  : "bg-gradient-to-r from-amber-500 to-orange-500 text-gray-900 hover:shadow-lg hover:shadow-amber-900/30"
              }`}
              // whileHover={{ scale: 1.02 }}
              // whileTap={{ scale: 0.98 }}
              onClick={() => handleRoleSelection("student")}
            >
              Continue as Student
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Additional Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-amber-500/10 to-transparent z-0" />
    </div>
  );
};

export default RoleSelection;