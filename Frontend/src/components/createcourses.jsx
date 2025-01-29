import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiUploadCloud, FiCopy, FiSun, FiMoon, FiMenu, FiAlertCircle } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import { useThemeStore } from '../store/themeStore';

const CreateCourse = () => {

    const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

 

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleWalletClick = () => {
    console.log("Wallet Address:", walletAddress);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 images
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [isDarkMode]);

  

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const formVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
  };

  // Enhanced connect wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        setWalletAddress(accounts[0]);
        setWalletConnected(true);
        setDropdownOpen(false);
        // Add success notification
      } catch (error) {
        // Add error notification
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      // Show modal instead of alert
      const installMetaMask = confirm("MetaMask is required. Would you like to install it?");
      if (installMetaMask) window.open("https://metamask.io/download/", "_blank");
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`min-h-screen ${isDarkMode ? 
        "bg-gray-900 text-gray-100" : 
        "bg-gradient-to-br from-amber-50 to-white text-gray-800"}`}
    >
      {/* Enhanced Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-amber-100/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/images/Edusphere logo.png"
              alt="Edusphere Logo"
              className="w-16 h-12 hover:scale-105 transition-transform"
            />
            <motion.h1 
              className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Edusphere
            </motion.h1>
          </Link>

          <div className="flex items-center gap-6">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              <NavLink to="/courses">Courses</NavLink>
              <NavLink to="/contest">Contest</NavLink>
              <NavLink to="/manage-courses">Manage</NavLink>
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

            {/* Dark Mode Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-amber-100/20"
              onClick={toggleDarkMode}
            >
              {isDarkMode ? (
                <FiSun className="w-6 h-6 text-amber-400" />
              ) : (
                <FiMoon className="w-6 h-6 text-gray-600" />
              )}
            </motion.button>

            {/* Mobile Menu */}
            <div className="relative md:hidden" ref={dropdownRef}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="p-2 rounded-full hover:bg-amber-100/20"
                onClick={toggleDropdown}
              >
                <FiMenu className="w-6 h-6" />
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border dark:border-gray-700"
                  >
                    {/* ... dropdown items ... */}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <motion.div 
        variants={containerVariants}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Carousel */}
          <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"/>
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentIndex}
                src={`/images/createcourses${currentIndex + 1}.png`}
                alt={`Course ${currentIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {[0, 1, 2].map((index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index ? 
                    'bg-amber-400 w-6' : 
                    'bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Course Creation Form */}
          <motion.form 
            variants={formVariants}
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border dark:border-gray-700"
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Create New Course
            </h2>

            <div className="space-y-6">
              {/* Form Fields */}
              <FormField 
                label="Course Title"
                id="title"
                type="text"
                placeholder="Master Web3 Development"
                required
              />

              <FormField 
                label="Description"
                id="description"
                type="textarea"
                placeholder="Comprehensive guide to building decentralized applications..."
              />

              {/* Reward Coins Field */}
              <div className="relative">
                <label className="block text-sm font-medium mb-2">
                  Reward Coins
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="reward-coins"
                    className="w-full pl-12 pr-4 py-3 bg-transparent border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
                    placeholder="500"
                  />
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">EDU</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="space-y-2">
                <label className="block text-sm font-medium">Course Content</label>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="group border-2 border-dashed dark:border-gray-700 rounded-xl p-8 text-center cursor-pointer transition-colors hover:border-amber-400 hover:bg-amber-50/20"
                >
                  <FiUploadCloud className="mx-auto w-8 h-8 text-gray-400 mb-4 group-hover:text-amber-400" />
                  <p className="text-gray-500 group-hover:text-amber-400">
                    Drag & drop files or{' '}
                    <span className="text-amber-500 font-medium">browse</span>
                  </p>
                  <input
                    type="file"
                    multiple
                    className="hidden"
                    onChange={(e) => console.log(e.target.files)}
                  />
                </motion.div>
              </div>

              {/* Form Actions */}
              <div className="flex flex-col gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-medium rounded-lg hover:shadow-lg transition-all"
                  type="submit"
                >
                  Publish Course
                </motion.button>
                
                <button
                  type="button"
                  className="text-amber-500 hover:text-amber-600 font-medium text-sm"
                >
                  Save Draft for Later →
                </button>
              </div>
            </div>
          </motion.form>
        </div>
      </motion.div>

      {/* Tooltips */}
      <Tooltip id="copy-tooltip" place="bottom" content="Copy Address" />
    </motion.div>
  );
};

// Reusable Form Field Component
const FormField = ({ label, id, type = 'text', placeholder, required }) => (
  <div className="space-y-2">
    <label htmlFor={id} className="block text-sm font-medium">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {type === 'textarea' ? (
      <textarea
        id={id}
        rows="4"
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-transparent border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
        required={required}
      />
    ) : (
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-transparent border dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none transition-all"
        required={required}
      />
    )}
  </div>
);

// Reusable NavLink Component
const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="text-gray-600 dark:text-gray-300 hover:text-amber-500 px-3 py-2 rounded-lg transition-colors font-medium relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all group-hover:w-full" />
  </Link>
);

export default CreateCourse;

//   const isDarkMode = useThemeStore((state) => state.isDarkMode);
  // const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [walletConnected, setWalletConnected] = useState(false);
//   const [walletAddress, setWalletAddress] = useState(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const dropdownRef = useRef(null);

//   const toggleDarkMode = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         setWalletAddress(accounts[0]);
//         setWalletConnected(true);
//         setDropdownOpen(false); // Close dropdown after connecting wallet
//         console.log("Connected to MetaMask");
//       } catch (error) {
//         console.error("Error connecting to MetaMask:", error);
//       }
//     } else {
//       alert("Please install MetaMask to connect your wallet.");
//     }
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleClickOutside = (event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       setDropdownOpen(false);
//     }
//   };

//   const handleWalletClick = () => {
//     console.log("Wallet Address:", walletAddress);
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(walletAddress);
//     alert("Wallet address copied to clipboard!");
//   };

//   useEffect(() => {
//     document.body.classList.toggle('dark', isDarkMode);

//     const intervalId = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 images
//     }, 3000); // 3 seconds interval

//     return () => clearInterval(intervalId); // Cleanup the interval on component unmount
//   }, [isDarkMode]);
