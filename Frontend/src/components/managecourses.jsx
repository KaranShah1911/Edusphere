// import React, { useState, useEffect } from "react";
// import { ethers } from "ethers";
// import { FaSun, FaMoon } from "react-icons/fa"; // Importing sun and moon icons

// const ManageCourses = () => {
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [courses, setCourses] = useState([
//     {
//       id: 1,
//       title: "React Basics",
//       status: "published",
//       enrollments: 120,
//       averageRating: 4.5,
//       completionRate: 90,
//       engagementTrend: "High",
//     },
//     {
//       id: 2,
//       title: "Advanced JavaScript",
//       status: "draft",
//       enrollments: 80,
//       averageRating: 4.7,
//       completionRate: 85,
//       engagementTrend: "Medium",
//     },
//     {
//       id: 3,
//       title: "Web Development Bootcamp",
//       status: "archived",
//       enrollments: 200,
//       averageRating: 4.8,
//       completionRate: 95,
//       engagementTrend: "High",
//     },
//   ]);
  // const [filterStatus, setFilterStatus] = useState("all");
  // const [walletAddress, setWalletAddress] = useState(null);
  // const [menuOpen, setMenuOpen] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

  // const handleDeleteCourse = (id) => {
  //   const confirmDelete = window.confirm("Are you sure you want to delete this course?");
  //   if (confirmDelete) {
  //     setCourses(courses.filter((course) => course.id !== id));
  //   }
  // };

  // const filteredCourses = courses.filter(
  //   (course) => filterStatus === "all" || course.status === filterStatus
  // );

  // const handleConnectWallet = async () => {
  //   if (window.ethereum) {
  //     try {
  //       const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
  //       setWalletAddress(accounts[0]);
  //     } catch (error) {
  //       console.error("Error connecting to MetaMask:", error);
  //     }
  //   } else {
  //     alert("Please install MetaMask!");
  //   }
  // };

  // const handleMenuToggle = () => {
  //   setMenuOpen(!menuOpen);
  // };

  // useEffect(() => {
  //   document.body.classList.toggle("dark", isDarkMode);
  // }, [isDarkMode]);

//   return (
//     <div className={`manage-courses ${isDarkMode ? "dark" : 'bg-white'} ' bg-black`}>
//       <nav className={`navbar flex justify-between items-center p-4 ${isDarkMode ? "bg-gradient-to-r from-black to-indigo-500 text-white" : "bg-gradient-to-r from-black to-indigo-500 text-white"}`}>
//         <div className="logo flex items-center">
//           <img src="/images/Edusphere logo.png" alt="Edusphere Logo" className="w-16 h-auto mr-2 " />
//           <span className="text-4xl text-orange-400">Edusphere</span>
//         </div>
//         <div className="nav-links flex space-x-3 items-center">
//           <a href="#" className="hover:text-gray-200 text-orange-400">Home</a>
//           <a href="#" className="hover:text-gray-200 text-orange-400">Create Courses</a>
//           <a href="#" className="hover:text-gray-200 text-orange-400">Manage Courses</a>
//           <button
//             className="connect-wallet bg-blue-600 hover:bg-blue-700 text-orange-400 px-4 py-2 rounded-full"
//             onClick={handleConnectWallet}
//           >
//             {walletAddress ? `Wallet: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
//           </button>
          
//           {/* 9 dots menu */}
//           <div className="menu-toggle ml-4 relative">
//             <button onClick={handleMenuToggle} className="text-orange-400">
//               <span className="text-2xl">•••</span>
//             </button>
//             {menuOpen && (
//               <div className="absolute top-8 right-0 bg-orange-400 text-black shadow-lg rounded-lg p-2">
//                 <ul>
//                   <li className="menu-item p-2 cursor-pointer bg-orange-400 hover:bg-gray-100">Add Details</li>
//                   <li className="menu-item p-2 cursor-pointer bg-orange-400 hover:bg-gray-100">Transaction</li>
//                   <li className="menu-item p-2 cursor-pointer bg-orange-400 hover:bg-gray-100">Coins</li>
//                   <li className="menu-item p-2 cursor-pointer bg-orange-400 hover:bg-gray-100">Reports</li>
                 
//                 </ul>
//               </div>
//             )}
//           </div>
          
//           {/* Sun and Moon Icon for Dark/Light Mode */}
//           <button onClick={toggleDarkMode} className="ml-4">
//             {isDarkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
//           </button>
//         </div>
//       </nav>

      // <div className="container mx-auto p-6">
      //   <div className="filter-container mb-4">
      //     <select
      //       value={filterStatus}
      //       onChange={(e) => setFilterStatus(e.target.value)}
      //       className="border p-2 rounded-lg"
      //     >
      //       <option value="all">All</option>
      //       <option value="published">Published</option>
      //       <option value="draft">Draft</option>
      //       <option value="archived">Archived</option>
      //     </select>
      //   </div>

//         <div className="courses-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredCourses.map((course) => (
//             <div className="course-card bg-white p-4 rounded-lg shadow-md" key={course.id}>
//               <h3 className="text-xl font-semibold">{course.title}</h3>
//               <p>Status: {course.status}</p>
//               <p>Enrollments: {course.enrollments}</p>
//               <p>Average Rating: {course.averageRating}</p>
//               <p>Completion Rate: {course.completionRate}%</p>
//               <p>Engagement Trend: {course.engagementTrend}</p>
//               <div className="course-actions mt-4">
//                 <button
//                   onClick={() => handleDeleteCourse(course.id)}
//                   className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md mr-2"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManageCourses;


import React, { useState, useEffect,useRef } from "react";
import { ethers } from "ethers";
import { FaSun, FaMoon, FaChevronDown } from "react-icons/fa";
import { FiUser, FiDollarSign, FiBook, FiGift,FiCopy } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from "../store/themeStore";
import { useWallet } from "../context/WalletProvider";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import axios from "axios";

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

  // const handleDeleteCourse = (id) => {
  //   const confirmDelete = window.confirm("Are you sure you want to delete this course?");
  //   if (confirmDelete) {
  //     setCourses(courses.filter((course) => course.id !== id));
  //   }
  // };

  // const filteredCourses = courses.filter(
  //   (course) => filterStatus === "all" || course.status === filterStatus
  // );

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
        console.log("Token:", token);
      
        // Make the GET request using Axios
        const response = await axios.get("https://edusphere-77qx.onrender.com/admin/get-courses", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      
        // Handle response
        // const rdata = await response.json();
        if(response.status!=200){
          alert(response.error);
        }else{
          // const data = response.json;
          console.log(response)
          alert(response.data.message);
          console.log(response.data.courses);
          setCourses(response.data.courses);
        }
        
      } catch (error) {
        console.error("Failed to fetch courses:", error);
        alert(error.response?.data?.error || "Something went wrong");
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
      console.log("Token:", token);
      console.log(id)
      try {
        const response = await axios.post("https://edusphere-77qx.onrender.com/admin/delete-course",{
          courseid : id
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
                        className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                          walletConnected ? 
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
                              <path d="M10 2a1 1 0 011 1v1.323l3.954.99a1 1 0 01.686.828L15.667 8H17a1 1 0 110 2h-1.333l-.012.082a5 5 0 01-4.245 4.245L11 14.667V17a1 1 0 11-2 0v-2.333l-.082-.012a5 5 0 01-4.245-4.245L4.333 10H3a1 1 0 110-2h1.333l.027-.86a1 1 0 01.686-.827L9 4.323V3a1 1 0 011-1z"/>
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
              className={`text-lg bg-gradient-to-r from-amber-500 to-amber-300 text-black py-2 px-4 rounded-full ${
                walletAddress ? "" : "cursor-not-allowed opacity-50"
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
                  className={`absolute right-0 mt-2 w-64 origin-top-right rounded-xl shadow-xl backdrop-blur-lg ${
                    isDarkMode
                      ? "bg-gray-800/95 border border-gray-700"
                      : "bg-white/95 border border-amber-100"
                  } z-50`}
                >
                  <div className="p-2 space-y-1">
                    <Link
                      to={walletAddress ? "/signup" : "#"}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                        walletAddress
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
        < div className={`filter-container mb-4  ${
              isDarkMode ? "text-gray-200 " : "text-gray-200 "}`}>
          {/* <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border p-2 rounded-lg"
          >
            <option value="all">All</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select> */}
        
            <FaChevronDown className={`absolute right-3 top-3 transition-colors duration-300 ${
              isDarkMode ? "text-gray-400" : "text-gray-300"
            }`} />
        
        
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <div
              key={course._id}
              className={`animate-fade-in-up p-6 rounded-xl transition-all duration-300 ${
                isDarkMode 
                  ? "bg-gray-800 hover:bg-gray-700 text-white" 
                  : "bg-white hover:bg-gray-50 text-black"
              } shadow-lg transform hover:-translate-y-1`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              
<img src={"https://gateway.pinata.cloud/ipfs/"+course.course_image} alt={course.title}/>
<h3 className="text-xl font-bold mb-4">{course.title}</h3>
<h3 className="text-small mb-4">{course.description.slice(0,100)+"..."}</h3>
    {/* <div className="space-y-2">
      <div className="flex items-center">
        <span className={`inline-block w-2 h-2 rounded-full mr-2 ${
          course.status === 'published' ? 'bg-green-500' :
          course.status === 'draft' ? 'bg-yellow-500' : 'bg-gray-500'
        }`} /> */}
        {/* <span className="text-sm">Status: {course.status}</span> */}
      {/* </div>
      <p className="text-sm">Enrollments: {course.enrollments}</p>
      <p className="text-sm">Rating: {course.averageRating}/5</p>
      <p className="text-sm">Completion: {course.completionRate}%</p>
      <p className="text-sm">Engagement: {course.engagementTrend}</p>
    </div> */}
              {/* Course content */}
              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => handleDeleteCourse(course._id)}
                  className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                    isDarkMode 
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