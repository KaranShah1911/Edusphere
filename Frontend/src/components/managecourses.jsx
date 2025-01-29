import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import { FaSun, FaMoon } from "react-icons/fa"; // Importing sun and moon icons
import { useThemeStore } from "../store/themeStore";

const ManageCourses = () => {
    const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "React Basics",
      status: "published",
      enrollments: 120,
      averageRating: 4.5,
      completionRate: 90,
      engagementTrend: "High",
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      status: "draft",
      enrollments: 80,
      averageRating: 4.7,
      completionRate: 85,
      engagementTrend: "Medium",
    },
    {
      id: 3,
      title: "Web Development Bootcamp",
      status: "archived",
      enrollments: 200,
      averageRating: 4.8,
      completionRate: 95,
      engagementTrend: "High",
    },
  ]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [walletAddress, setWalletAddress] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleDeleteCourse = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this course?");
    if (confirmDelete) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const filteredCourses = courses.filter(
    (course) => filterStatus === "all" || course.status === filterStatus
  );

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`manage-courses ${isDarkMode ? "dark" : 'bg-white'} ' bg-black`}>
      <nav className={`navbar flex justify-between items-center p-4 ${isDarkMode ? "bg-gradient-to-r from-black to-indigo-500 text-white" : "bg-gradient-to-r from-black to-indigo-500 text-white"}`}>
        <div className="logo flex items-center">
          <img src="/images/Edusphere logo.png" alt="Edusphere Logo" className="w-16 h-auto mr-2 " />
          <span className="text-4xl text-orange-400">Edusphere</span>
        </div>
        <div className="nav-links flex space-x-3 items-center">
          <a href="/Edusphere" className="hover:text-gray-200 text-orange-400">Home</a>
          <a href="/createcourses" className="hover:text-gray-200 text-orange-400">Create Courses</a>
          <a href="/managecourses" className="hover:text-gray-200 text-orange-400">Manage Courses</a>
          <button
            className="connect-wallet bg-blue-600 hover:bg-blue-700 text-orange-400 px-4 py-2 rounded-full"
            onClick={handleConnectWallet}
          >
            {walletAddress ? `Wallet: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
          </button>
          
          {/* 9 dots menu */}
          <div className="menu-toggle ml-4 relative">
            <button onClick={handleMenuToggle} className="text-orange-400">
              <span className="text-2xl">•••</span>
            </button>
            {menuOpen && (
              <div className="absolute top-8 right-0 bg-orange-400 text-black shadow-lg rounded-lg p-2">
                <ul>
                 <a href="signup"> <li className="menu-item p-2 cursor-pointer bg-orange-400 hover:bg-gray-100">Add Details</li>   </a>
                 <a href="transaction"> <li className="menu-item p-2 cursor-pointer bg-orange-400 hover:bg-gray-100">Transaction</li></a>
                 <a href="coins"> <li className="menu-item p-2 cursor-pointer bg-orange-400 hover:bg-gray-100">Coins</li></a>
                 <a href="Reports"> <li className="menu-item p-2 cursor-pointer bg-orange-400 hover:bg-gray-100">Reports</li></a>
                 
                </ul>
              </div>
            )}
          </div>
          
          {/* Sun and Moon Icon for Dark/Light Mode */}
          <button onClick={toggleDarkMode} className="ml-4">
            {isDarkMode ? <FaMoon size={24} /> : <FaSun size={24} />}
          </button>
        </div>
      </nav>

      <div className="container mx-auto p-6">
        <div className="filter-container mb-4">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border p-2 rounded-lg"
          >
            <option value="all">All</option>
            <option value="published">Published</option>
            <option value="draft">Draft</option>
            <option value="archived">Archived</option>
          </select>
        </div>

        <div className="courses-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div className="course-card bg-blue-900 p-4 rounded-lg shadow-md" key={course.id}>
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p>Status: {course.status}</p>
              <p>Enrollments: {course.enrollments}</p>
              <p>Average Rating: {course.averageRating}</p>
              <p>Completion Rate: {course.completionRate}%</p>
              <p>Engagement Trend: {course.engagementTrend}</p>
              <div className="course-actions mt-4">
                <button
                  onClick={() => handleDeleteCourse(course.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md mr-2"
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
