import React, { useState, useEffect, useRef } from 'react';
import { useLocation, Link, useNavigate} from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Web3 from 'web3';
import { FiUser, FiDollarSign, FiBook, FiGift, FiCopy } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useThemeStore } from "../store/themeStore";
import { useWallet } from "../context/WalletProvider";
import axios from 'axios';
import { contractAbi, contractAddress } from "../utils/constants";
import { useWriteContract, useAccount } from 'wagmi'

const CourseDetails = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { state } = useLocation();
  const { course } = state || {};
  let [isPurchased, setIsPurchased] = useState(false);
  const { walletAddress, walletConnected, connectWallet } = useWallet();
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  const { writeContract, writeContractAsync } = useWriteContract()
  const { address } = useAccount()
  
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


  const handlePurchase = async () => {
    try {
      // const web3 = new Web3(window.ethereum);
      // await window.ethereum.request({ method: 'eth_requestAccounts' });
      // setIsPurchased(true);
      let wei_price = course.course_price * 1e18; 
      isPurchased = true;
      writeContract({
        abi: contractAbi,
        address: contractAddress,
        functionName: 'buyCourse',
        args: [wei_price, course.author_wallet_id],
        value: BigInt(wei_price)
      });
      
      console.log(isPurchased)
    } catch (error) {
      console.error('MetaMask error', error);
    }
    if (isPurchased) {
      console.log(course._id)
      try {
        const cookie = document.cookie
          .split("; ")
          .find((row) => row.startsWith("user="));
        if (!cookie) {
          throw new Error("User is not logged in or registered");
        }

        const token = cookie.split("=")[1];
        console.log("Token:", token);
        const response = await axios.post(
          "http://localhost:4000/user/purchase-course",
          {
            course_id: course._id,
            transaction_id: " "
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            },
          }
        );

        if (response.status !== 200) {
          alert(response.data.error);
        } else {
          alert(response.data.message);
          
        }
      } catch (error) {
        console.error('Error purchasing course:', error);
      }
    } else {
      alert("Course not purchased");
    }
    navigate("/mylearning");
  };

  useEffect(() => {
    if (!course) {
      console.log('No course data available.');
    }
  }, [course]);

  if (!course) {
    return <div className="text-center text-lg">Loading...</div>;
  }

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-yellow-100 to-white text-black'} min-h-screen`}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6">
        <div className="flex items-center space-x-2">

          <img src="/images/Edusphere logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-lg" />



          <h1 className="text-4xl font-bold ">Edusphere</h1>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex space-x-8">
            <Link to="/Edusphere" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
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
                      to="/coins"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                    >
                      <FiDollarSign className="text-amber-500" />
                      <span>Coins</span>
                    </Link>
                    <Link
                      to="/transactions"
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

      {/* Course Details */}
      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={"https://gateway.pinata.cloud/ipfs/" + course.course_image}
            alt={course.title}
            className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl font-bold mt-6">{course.title}</h1>
          <p className="mt-4 text-lg">{course.description}</p>
          <div className="text flex items-center justify-between mb-4">
            {
              course.category.map((category, index) => (
                <span className={`m-auto mt-5 px-3 py-1 rounded-full text-xl ${isDarkMode ?
                    'bg-purple-900/30 text-purple-400' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                  {category}
                </span>
              ))}
          </div>
          <button
            onClick={handlePurchase}
            disabled={isPurchased}
            className={`mt-6 px-6 py-3 rounded-lg text-white font-semibold ${isPurchased
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 transition-colors duration-300'
              }`}
          >
            {isPurchased ? 'Course Purchased' : 'Buy Now'}
          </button>
        </div>

        {/* Video Section */}
        {/* {isPurchased && course.course_video.map((video, index) => (
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            <video controls className="rounded-lg shadow-md w-full max-w-md">
              <source src={"https://gateway.pinata.cloud/ipfs/" + video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))} */}
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-800 text-white mt-12">
        <p>&copy; 2025 Edusphere | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default CourseDetails;