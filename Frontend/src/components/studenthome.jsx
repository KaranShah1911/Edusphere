import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import { FiUser, FiDollarSign, FiBook, FiGift, FiCopy } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
import { useWallet } from "../context/WalletProvider";
import { useThemeStore } from "../store/themeStore";

const Studenthome = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const { walletAddress, walletConnected, connectWallet, disconnectWallet } = useWallet();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
  const dropdownRef = useRef(null);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };


  const handleWalletClick = () => {
    console.log("Wallet Address:", walletAddress);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };


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





  return (
    <div
      className={`${isDarkMode
          ? "bg-gradient-to-r from-black to-gray-700 text-gold"
          : "bg-gradient-to-r from-yellow-100 to-white text-black"
        } transition-colors duration-300`}
    >
      {/* Navbar Section */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">

          <img src="/images/Edusphere logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-lg" />



          <h1 className="text-4xl font-bold ">Edusphere</h1>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex space-x-8">
            <Link to="/" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
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
                  {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : ""}
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
                  className={`absolute right-0 mt-2 w-64 origin-top-right rounded-xl shadow-xl backdrop-blur-lg ${isDarkMode ? "bg-gray-800/95 border border-gray-700" : "bg-white/95 border border-amber-100"
                    } z-50`}
                >
                  <div className="p-2 space-y-1">
                    <Link
                      to="/signup"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                    >
                      <FiUser className="text-amber-500" />
                      <span>Add Details</span>
                    </Link>
                    <Link
                      to="/transaction"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                    >
                      <FiDollarSign className="text-amber-500" />
                      <span>Transactions</span>
                    </Link>
                    <Link
                      to="/mylearning"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                    >
                      <FiBook className="text-amber-500" />
                      <span>My Learning</span>
                    </Link>
                    <Link
                      to="/redeem"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                    >
                      <FiGift className="text-amber-500" />
                      <span>Redeem</span>
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </nav>
      <div className="border-b-4 border-gold"></div>

      {/* Main Content Section */}
      <div className="container mx-auto py-14 relative">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <DotLottieReact
              src="https://lottie.host/b3d4cb2f-dce5-406a-938f-0ed9f0b58974/k1qWoZHhWD.lottie"
              loop
              autoplay
              className="w-full h-[500px] flex justify-center"
            />
          </div>
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up delay-100">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent leading-tight">
              Revolutionizing Education with Blockchain
            </h2>
            <p className={`text-xl ${isDarkMode ? "text-white" : "text-black"}  leading-relaxed}`}>
              Empower your learning journey with decentralized education. Take control of your academic credentials,
              earn rewards for your achievements, and access a world of knowledge powered by Web3 technology.
            </p>
            <div className="flex space-x-4">
              <Link to="/courses" className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
                Explore Courses
              </Link>
              <Link to="/howitworks" className="px-8 py-4 rounded-full border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 transition-colors duration-300 font-semibold">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4 mt-12">
        <div className="flex justify-center items-center space-x-6">
          <button className="text-yellow-600">About Us</button>
          <span className="text-yellow-600">|</span>
          <button className="text-yellow-600">Contact Us</button>
          <span className="text-yellow-600">|</span>
          <p className="text-yellow-600">&copy; 2025 Edusphere. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Studenthome;