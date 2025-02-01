import React, { useState, useEffect,useRef } from 'react';
import { useNavigate, useLocation ,Link} from 'react-router-dom';
import Web3 from 'web3';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown,FiCopy } from 'react-icons/fi';
import { FiUser, FiDollarSign, FiBook, FiGift } from "react-icons/fi";
import { MdOutlineLibraryAdd, MdOutlineAccountBalance } from 'react-icons/md';
import { RiCoinsLine } from 'react-icons/ri';
import { BiBook, BiGift } from 'react-icons/bi';
import { useWallet } from "../context/WalletProvider";
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "next-themes";
import { useThemeStore } from "../store/themeStore";

// export const courses = [
//   {
//     name: "Python For Beginners Course In-Depth",
//     category: "IT & Software",
//     image: "https://img-c.udemycdn.com/course/480x270/3495852_8004.jpg",
//     actual_price_usd: 19.99,
//     sale_price_usd: 19.99,
//     sale_end: "2025-01-10T14:20:00",
//     description: "Python For Beginners Course In-Depth, This course is a depth introduction to both fundamental python programming concepts and the Python programming language.",
//     url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=20A74E86411E0A67A146",
//     clean_url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/"
//   },
//   {
//     name: "Python For Beginners Course In-Depth",
//     category: "IT & Software",
//     image: "https://img-c.udemycdn.com/course/480x270/3495852_8004.jpg",
//     actual_price_usd: 19.99,
//     sale_price_usd: 19.99,
//     sale_end: "2025-01-10T14:20:00",
//     description: "Python For Beginners Course In-Depth, This course is a depth introduction to both fundamental python programming concepts and the Python programming language.",
//     url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=20A74E86411E0A67A146",
//     clean_url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/"
//   },
//   {
//     name: "100% OFF- Python And Flask Framework Complete Course",
//     category: "Flask",
//     image: "https://img-c.udemycdn.com/course/480x270/3407178_5bd8_3.jpg",
//     actual_price_usd: 24.99,
//     sale_price_usd: 24.99,
//     sale_end: "2025-01-11T02:46:00",
//     description: "Python And Flask Framework Complete Course, Depth Introduction To Python Programming And Python Web framework Flask.",
//     url: "https://www.udemy.com/course/flask-framework-complete-course-for-beginners/?couponCode=2FA8E12A82CA9E38B840",
//     clean_url: "https://www.udemy.com/course/flask-framework-complete-course-for-beginners/"
//   },
//   {
//     name: "HTML 5 With Quizzes And Python 3 Complete Course 2023",
//     category: "IT & Software",
//     image: "https://img-c.udemycdn.com/course/480x270/5009916_fc64.jpg",
//     actual_price_usd: 74.99,
//     sale_price_usd: 74.99,
//     sale_end: "2025-01-14T02:31:00",
//     description: "Learn HTML5 With HTML 5 Quizzes And Python 3 From the Beginning in HTML 5 And Python Complete Course 2023...",
//     url: "https://www.udemy.com/course/html-5-with-quizzes-and-python-3-complete-course-2023/?couponCode=F20BD8C3C7516F1CC0AF",
//     clean_url: "https://www.udemy.com/course/html-5-with-quizzes-and-python-3-complete-course-2023/"
//   },
//   {
//     name: "Master the Machine Muse Build Generative AI with ML",
//     category: "Data Science",
//     image: "https://img-c.udemycdn.com/course/480x270/6085251_5113_6.jpg",
//     actual_price_usd: 74.99,
//     sale_price_usd: 74.99,
//     sale_end: "2025-01-10T18:00:00",
//     description: "Unlock the creative potential of artificial intelligence with “Master the Machine Muse: Build Generative AI with ML.”...",
//     url: "https://www.udemy.com/course/master-the-machine-muse-build-generative-ai-with-ml/?couponCode=AKHIL_JAN1",
//     clean_url: "https://www.udemy.com/course/master-the-machine-muse-build-generative-ai-with-ml/"
//   },
//   {
//     name: "100% OFF- Python Demonstrations For Practice Course",
//     category: "Development",
//     image: "https://img-c.udemycdn.com/course/480x270/3518698_0aff.jpg",
//     actual_price_usd: 19.99,
//     sale_price_usd: 19.69,
//     sale_end: "2025-01-12T11:43:00",
//     description: "Python Demonstrations For Practice Course, This course is a depth introduction to fundamental python programming concepts by demonstrations in Python.",
//     url: "https://www.udemy.com/course/python-for-beginners-demonstration-course/?couponCode=CD29D02165FB7D76A1F0",
//     clean_url: "https://www.udemy.com/course/python-for-beginners-demonstration-course/"
//   },
//   {
//     name: "Mastering Deep Learning for Generative AI",
//     category: "Data Science",
//     image: "https://img-c.udemycdn.com/course/480x270/6085269_ee3f_4.jpg",
//     actual_price_usd: 64.99,
//     sale_price_usd: 0.0,
//     sale_end: "2025-01-10T18:00:00",
//     description: "Unlock the potential of Generative AI through Deep Learning. ‘Mastering Deep Learning for Generative AI’ is your comprehensive guide to mastering the art of creating AI models that can generate new, original content. This course is designed for anyone looking to take their machine learning skills to the next level by exploring the creative possibilities of AI...",
//     url: "https://www.udemy.com/course/mastering-deep-learning-for-generative-ai/?couponCode=AKHIL_JAN2",
//     clean_url: "https://www.udemy.com/course/mastering-deep-learning-for-generative-ai/"
//   }
// ];

const CoursesPage = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [account, setAccount] = useState(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [courses,setCourses]= useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const menuRef = useRef(null);
  const { walletAddress, walletConnected, connectWallet } = useWallet();
  const { theme, setTheme } = useTheme();


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

  useEffect(() => {
    if (window.ethereum) {
      setIsMetaMaskInstalled(true);
      loadAccount();
    }
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

  

  const disconnectWallet = () => {
    setAccount(null);
    setIsMenuOpen(false);
  };
  const toggleisDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVisitCourse = (course) => {
    navigate(`/course/${course.title}`, { state: { course } });
  };
  
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:4000/courses');
  
        if (response.status !== 200) {
          alert(response.data.error);
        } else {
          const rdata = response.data;
          console.log(rdata.message);
          const data = rdata.courses;
          console.log(data);
          setCourses(data);
        }
      } catch (error) {
        console.error('Failed to fetch courses:', error);
        alert('An error occurred while fetching courses.');
      }
    };
  
    fetchCourses();
  }, []);
 

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gradient-to-r from-black to-gray-700 text-white"
          : "bg-gradient-to-r from-white/90 to-white text-black"
      } transition-colors duration-300`}
    >
      <nav className="flex justify-between items-center p-6">
             <div className="flex items-center space-x-2">
               
                <img src="/images/Edusphere logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-lg" />
                 
                
               
               <h1 className="text-4xl font-bold ">Edusphere</h1>
             </div>
             <div className="flex items-center space-x-8">
               <div className="flex space-x-8">
                 <Link to="/studenthome" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
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
                         isDarkMode ? "bg-gray-800/95 border border-gray-700" : "bg-white/95 border border-amber-100"
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
      <div className="px-20 pt-32 pb-16 flex justify-center">
        <div className={`relative w-2/5 ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-full shadow-xl transition-all duration-300 focus-within:scale-105`}>
          <input
            type="text"
            className={`w-full px-8 py-4 rounded-full outline-none transition-colors ${
              isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-2xl ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            🔍
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 pb-20">
        {filteredCourses.map((course, index) => (
          <div
            key={course._id}
            className={`group relative rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] ${
              isDarkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={"https://gateway.pinata.cloud/ipfs/"+course.course_image} 
                alt={course.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 " />
            </div>
            
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {course.title}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  isDarkMode ?
                  'bg-purple-900/30 text-purple-400' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {course.category}
                </span>
              </div>
                {/* <div className="flex items-center gap-2">
                  <span className={`text-lg font-bold ${
                    isDarkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    ${course.sale_price_usd}
                  </span>
                </div> */}

              <button
                onClick={() => handleVisitCourse(course)}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  isDarkMode ?
                  'bg-purple-600 hover:bg-purple-700 text-white' :
                  'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                }`}
              >
                Visit Course
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className={`py-8 text-center ${
        isDarkMode ? 'bg-gray-900/80' : 'bg-white/80'
      } backdrop-blur-lg border-t ${
        isDarkMode ? 'border-gray-800' : 'border-gray-100'
      }`}>
        <p className={`text-sm ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          © 2025 Edusphere. All rights reserved.<br />
          Empowering learners through blockchain technology
        </p>
      </footer>
    </div>
  );
};

export default CoursesPage;