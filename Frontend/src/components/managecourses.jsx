import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import { FaChevronDown } from "react-icons/fa";
import { FiUser, FiBook, FiCopy } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from "../store/themeStore";
import { useWallet } from "../context/WalletProvider";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ManageCourses = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { walletAddress, walletConnected, connectWallet } = useWallet();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
  const [courses, setCourses] = useState([]);

  const dropdownRef = useRef(null);

  const handleWalletClick = () => {
    console.log("Wallet Address:", walletAddress);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };

  const [filterStatus, setFilterStatus] = useState("all");

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);


  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  useEffect(() => {
    const fetchCourses = async () => {
      try {

        // Get token from cookies
        const cookie = document.cookie.split("; ").find(row => row.startsWith("admin="));

        if (!cookie) throw new Error("Admin is not logged in");

        const token = cookie.split("=")[1];

        // Make the GET request using Axios
        const response = await axios.get("http://localhost:3000/admin/get-courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Handle response
        if (response.status != 200) {
          alert(response.error);
        } else {
          // const data = response.json;
          console.log(response)
          toast.success(response.data.message);
          console.log(response.data.courses);
          setCourses(response.data.courses);
        }

      } catch (error) {
        console.error("Failed to fetch courses:", error);
        toast.error(error.response?.data?.error || "Something went wrong");
      }
    };

    fetchCourses();
  }, []);

  const handleDeleteCourse = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      const cookie = document.cookie.split("; ").find(row => row.startsWith("admin="));
      if (!cookie) throw new Error("Admin is not logged in");
      const token = cookie.split("=")[1];
      // console.log("Token:", token);
      console.log(id)
      try {
        const response = await axios.post("http://localhost:3000/admin/delete-course", {
          courseid: id
        },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status !== 200) {
          alert(response.data.error);
        } else {
          alert(response.data.message);
          setCourses(response.data.courses);
        }
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"}`}>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>

      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">
          <img
            src="/images/Edusphere logo.png"
            alt="Logo"
            className="w-12 h-12 rounded-full shadow-lg"
          />

          <h1 className="text-4xl font-bold ">Edusphere</h1>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex space-x-8">
            <Link
              to="/educatorhome"
              className="group relative text-lg font-medium hover:text-amber-500 transition-colors"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/createcourses"
              className="group relative text-lg font-medium hover:text-amber-500 transition-colors"
            >
              Create Courses
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Wallet Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`flex items-center gap-2 px-4 py-2 rounded-full ${walletConnected ?
                'bg-emerald-500/20 text-emerald-400' :
                'bg-amber-500 hover:bg-amber-600 text-white'
              } transition-colors`}
            onClick={walletConnected ? handleWalletClick : connectWallet}
          >
            {walletConnected ? (
              <>
                <span className="hidden sm:inline">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </span>
                <FiCopy
                  className="hover:text-amber-400 transition-colors"
                  onClick={copyToClipboard}
                  data-tooltip-id="copy-tooltip"
                />
              </>
            ) : (
              <>
                <span>Connect Wallet</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1.323l3.954.99a1 1 0 01.686.828L15.667 8H17a1 1 0 110 2h-1.333l-.012.082a5 5 0 01-4.245 4.245L11 14.667V17a1 1 0 11-2 0v-2.333l-.082-.012a5 5 0 01-4.245-4.245L4.333 10H3a1 1 0 110-2h1.333l.027-.86a1 1 0 01.686-.827L9 4.323V3a1 1 0 011-1z" />
                </svg>
              </>
            )}
          </motion.button>

          {/* Theme toggle */}
          <button className="dark-mode-toggle text-3xl" onClick={toggleTheme}>
            {isDarkMode ? "🌙" : "☀️"}
          </button>

          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`text-lg bg-gradient-to-r from-amber-500 to-amber-300 text-black py-2 px-4 rounded-full ${walletAddress ? "" : "cursor-not-allowed opacity-50"
                }`}
              disabled={!walletAddress}
            >
              ☰
            </button>
            <AnimatePresence>
              {dropdownOpen && walletAddress && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className={`absolute right-0 mt-2 w-64 origin-top-right rounded-xl shadow-xl backdrop-blur-lg ${isDarkMode
                      ? "bg-gray-800/95 border border-gray-700"
                      : "bg-white/95 border border-amber-100"
                    } z-50`}
                >
                  <div className="p-2 space-y-1">
                    <Link
                      to={walletAddress ? "/signup" : "#"}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${walletAddress
                          ? "hover:bg-amber-500/10"
                          : "opacity-50 cursor-not-allowed"
                        }`}
                    >
                      <FiUser className="text-amber-500" />
                      <span>Add Details</span>
                    </Link>


                    <Link
                      to="/managecourses"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                    >
                      <FiBook className="text-amber-500" />
                      <span>Manage Courses</span>
                    </Link>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <div className="border-b-4 border-gold"></div>

      <div className="container mx-auto p-6">
        < div className={`filter-container mb-4  ${isDarkMode ? "text-gray-200 " : "text-gray-200 "}`}>

          <FaChevronDown className={`absolute right-3 top-3 transition-colors duration-300 ${isDarkMode ? "text-gray-400" : "text-gray-300"
            }`} />


        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={course._id}
              className={`animate-fade-in-up p-6 rounded-xl transition-all duration-300 ${isDarkMode
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-white hover:bg-gray-50 text-black"
                } shadow-lg transform hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >

              <img src={"https://gateway.pinata.cloud/ipfs/" + course.course_image} alt={course.title} />
              <h3 className="text-xl font-bold mb-4">{course.title}</h3>
              <h3 className="text-small mb-4">{course.description.slice(0, 100) + "..."}</h3>
              {/* Course content */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => handleDeleteCourse(course._id)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${isDarkMode
                      ? "bg-red-600 hover:bg-red-700"
                      : "bg-red-500 hover:bg-red-600"
                    } text-black transform hover:scale-105 active:scale-95`}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageCourses;