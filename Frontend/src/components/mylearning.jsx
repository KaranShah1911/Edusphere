import React, { useState,useRef,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight, FiClock, FiBookOpen } from 'react-icons/fi';

import { MdOutlineLibraryAdd, MdOutlineAccountBalance } from 'react-icons/md';
import { RiCoinsLine } from 'react-icons/ri';
import { BiBook, BiGift } from 'react-icons/bi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define courses
const courses = [
  {
    name: "React for Beginners",
    category: "Web Development",
    image: "/images/react-course.jpg",
    description: "Python And Flask Framework Complete Course, Depth Introduction To Python Programming And Python Web framework Flask.",
    sale_price_usd: 19.99
  },
  {
    name: "Mastering JavaScript",
    category: "Programming",
    image: "/images/js-course.jpg",
    description: "Python And Flask Framework Complete Course, Depth Introduction To Python Programming And Python Web framework Flask.",
    sale_price_usd: 0 // Mark as free/completed
  }
];

const MyLearningPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [account, setAccount] = useState(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
 
  const menuRef = useRef(null);

  const purchasedCourses = courses;// Use the defined courses array

   useEffect(() => {
      if (window.ethereum) {
        setIsMetaMaskInstalled(true);
        loadAccount();
      }
    }, []);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setIsMenuOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  
    const handleAccountsChanged = (accounts) => {
      if (accounts.length === 0) {
        setAccount(null);
      } else {
        setAccount(accounts[0]);
      }
    };
  
    const loadAccount = async () => {
      if (window.ethereum && window.ethereum.selectedAddress) {
        setAccount(window.ethereum.selectedAddress);
      }
    };
  
    const connectWallet = async () => {
      if (isMetaMaskInstalled) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          setAccount(accounts[0]);
        } catch (error) {
          console.error("Error connecting to MetaMask", error);
        }
      } else {
        alert("Please install MetaMask to connect your wallet.");
      }
    };
  
    const disconnectWallet = () => {
      setAccount(null);
      setIsMenuOpen(false);
    };
    const toggleDarkMode = () => setDarkMode(!darkMode);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const filteredCourses = purchasedCourses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVisitCourse = (course) => {
    navigate(`/mylearning/${course.name}`, { state: { course } });
  };

  const DashboardDropdown = () => (
      <div className="relative group" ref={menuRef}>
        <button 
          onClick={() => account && setIsMenuOpen(!isMenuOpen)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
            account 
              ? 'hover:bg-opacity-20 hover:bg-white' 
              : 'opacity-50 cursor-not-allowed'
          }`}
          disabled={!account}
        >
          <span>☰</span>
          <div className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isMenuOpen && (
          <div className={`absolute top-12 right-0 w-64 rounded-xl shadow-2xl p-2 ${
            darkMode ? 
            'bg-gray-800 border border-gray-700' : 
            'bg-white border border-gray-200'
          }`}>
            <Link to="/signup">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-opacity-10 hover:bg-white">
              <MdOutlineLibraryAdd className="text-xl" />
              Add Details
            </button>
            </Link>
            <Link to="/coins">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-opacity-10 hover:bg-white">
              <RiCoinsLine className="text-xl" />
              Coins Transaction
            </button>
            </Link>
            <Link to="/manage courses">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-opacity-10 hover:bg-white">
              <BiBook className="text-xl" />
              Manage Courses
            </button>
            </Link>
            <Link to="/redeem">
            <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-opacity-10 hover:bg-white">
              <BiGift className="text-xl" />
              Redeem
            </button>
            </Link>
          </div>
        )}
      </div>
    );

  const cardVariants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 0.8 }
    }
  };

  return (
    <div className={`min-h-screen transition-all duration-300 py-10 ${
        darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50'
      }`}>
      {/* Navigation Header */}
       <nav className={`flex justify-between items-center px-8 py-4 fixed w-full top-0 left-0 z-50 backdrop-blur-lg ${
              darkMode ? 'bg-black/80 border-b border-gray-800' : 'bg-white/80 border-b border-gray-100'
            }`}>
              <div className="flex items-center gap-4">
                <img src="/images/Edusphere logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-lg" />
                <span className={`text-3xl font-bold bg-gradient-to-r ${
                  darkMode ? 
                  'from-amber-500 to-amber-300' : 
                  'from-amber-700 to-amber-500'
                } bg-clip-text text-transparent`}>
                  Edusphere
                </span>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="flex items-center gap-6">
                 
                <Link to="/Edusphere" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
                                   Home
                                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300 "></span>
                                 </Link>
                                 <Link to="/courses" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
                                   Courses
                                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                                 </Link>
                                 <Link to="/contest" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
                                   Contest
                                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                                 </Link>
                 
                </div>
      
                <div className="flex items-center gap-4">
                  <button
                    onClick={account ? disconnectWallet : connectWallet}
                    className={`px-5 py-2 rounded-full transition-all ${
                      darkMode ?
                      'bg-gradient-to-r from-amber-500 to-amber-300  hover:from-blue-600 hover:to-purple-600 text-white' :
                      'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-blue-600 hover:to-purple-600 text-white'
                    }`}
                  >
                    {account ? `${account.slice(0, 6)}...${account.slice(-4)} ` : 'Connect Wallet'}
                  </button>
      
                  <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-full text-2xl ${
                      darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                    }`}
                  >
                    {darkMode ? '🌙' : '☀️'}
                  </button>
                  <DashboardDropdown />
                </div>
              </div>
            </nav>

      <div className="pt-32 px-8 pb-12 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}
          >
            My Learning
          </motion.h1>
          
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search your courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full px-6 py-3 rounded-xl border ${
                darkMode 
                  ? 'bg-gray-800 border-gray-700 text-white' 
                  : 'bg-white border-gray-200 text-gray-900'
              } pr-12 transition-all`}
            />
            <FiBookOpen className={`absolute right-4 top-3.5 text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              className={`group relative rounded-2xl overflow-hidden shadow-lg ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-sm font-medium ${
                    darkMode ? 'text-purple-400' : 'text-purple-600'
                  }`}>
                    {course.category}
                  </span>
                  <div className="flex items-center gap-2 text-sm">
                    <FiClock className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>12h 45m</span>
                  </div>
                </div>

                <h3 className={`text-lg font-semibold mb-3 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {course.name}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      course.sale_price_usd === 0 ? 'bg-green-500' : 'bg-blue-500'
                    }`} />
                    <span className={`text-sm ${
                      darkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {course.sale_price_usd === 0 ? 'Completed' : 'In Progress'}
                    </span>
                  </div>
                  
                  <button
                    onClick={() => handleVisitCourse(course)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      darkMode
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-purple-100 hover:bg-purple-200 text-purple-700'
                    }`}
                  >
                    Continue
                    <FiChevronRight className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gray-200">
                <div 
                  className="h-full bg-purple-500 transition-all duration-500" 
                  style={{ width: `${Math.random() * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <div className="inline-block p-8 rounded-2xl bg-gradient-to-r from-purple-100 to-blue-100">
              <FiBookOpen className="text-6xl text-purple-600 mx-auto mb-6" />
              <h3 className={`text-2xl font-semibold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                No courses found
              </h3>
              <p className={`mb-6 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Start your learning journey by exploring our courses
              </p>
              <Link
                to="/courses"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Browse Courses
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className={`py-8 text-center ${
        darkMode ? 'bg-gray-900/80' : 'bg-white/80'
      } backdrop-blur-lg border-t ${
        darkMode ? 'border-gray-800' : 'border-gray-100'
      }`}>
        <p className={`text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          © 2025 Edusphere. All rights reserved.<br />
          Empowering learners through blockchain technology
        </p>
      </footer>
    </div>
  );
};

export default MyLearningPage;
