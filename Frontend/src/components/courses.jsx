import React, { useState, useEffect,useRef } from 'react';
import { useNavigate, useLocation ,Link} from 'react-router-dom';
import Web3 from 'web3';
import { FiChevronDown } from 'react-icons/fi';
import { MdOutlineLibraryAdd, MdOutlineAccountBalance } from 'react-icons/md';
import { RiCoinsLine } from 'react-icons/ri';
import { BiBook, BiGift } from 'react-icons/bi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "next-themes";
import { useThemeStore } from "../store/themeStore";

export const courses = [
  {
    name: "Python For Beginners Course In-Depth",
    category: "IT & Software",
    image: "https://img-c.udemycdn.com/course/480x270/3495852_8004.jpg",
    actual_price_usd: 19.99,
    sale_price_usd: 19.99,
    sale_end: "2025-01-10T14:20:00",
    description: "Python For Beginners Course In-Depth, This course is a depth introduction to both fundamental python programming concepts and the Python programming language.",
    url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=20A74E86411E0A67A146",
    clean_url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/"
  },
  {
    name: "Python For Beginners Course In-Depth",
    category: "IT & Software",
    image: "https://img-c.udemycdn.com/course/480x270/3495852_8004.jpg",
    actual_price_usd: 19.99,
    sale_price_usd: 19.99,
    sale_end: "2025-01-10T14:20:00",
    description: "Python For Beginners Course In-Depth, This course is a depth introduction to both fundamental python programming concepts and the Python programming language.",
    url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/?couponCode=20A74E86411E0A67A146",
    clean_url: "https://www.udemy.com/course/python-for-beginners-course-in-depth/"
  },
  {
    name: "100% OFF- Python And Flask Framework Complete Course",
    category: "Flask",
    image: "https://img-c.udemycdn.com/course/480x270/3407178_5bd8_3.jpg",
    actual_price_usd: 24.99,
    sale_price_usd: 24.99,
    sale_end: "2025-01-11T02:46:00",
    description: "Python And Flask Framework Complete Course, Depth Introduction To Python Programming And Python Web framework Flask.",
    url: "https://www.udemy.com/course/flask-framework-complete-course-for-beginners/?couponCode=2FA8E12A82CA9E38B840",
    clean_url: "https://www.udemy.com/course/flask-framework-complete-course-for-beginners/"
  },
  {
    name: "HTML 5 With Quizzes And Python 3 Complete Course 2023",
    category: "IT & Software",
    image: "https://img-c.udemycdn.com/course/480x270/5009916_fc64.jpg",
    actual_price_usd: 74.99,
    sale_price_usd: 74.99,
    sale_end: "2025-01-14T02:31:00",
    description: "Learn HTML5 With HTML 5 Quizzes And Python 3 From the Beginning in HTML 5 And Python Complete Course 2023...",
    url: "https://www.udemy.com/course/html-5-with-quizzes-and-python-3-complete-course-2023/?couponCode=F20BD8C3C7516F1CC0AF",
    clean_url: "https://www.udemy.com/course/html-5-with-quizzes-and-python-3-complete-course-2023/"
  },
  {
    name: "Master the Machine Muse Build Generative AI with ML",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/course/480x270/6085251_5113_6.jpg",
    actual_price_usd: 74.99,
    sale_price_usd: 74.99,
    sale_end: "2025-01-10T18:00:00",
    description: "Unlock the creative potential of artificial intelligence with “Master the Machine Muse: Build Generative AI with ML.”...",
    url: "https://www.udemy.com/course/master-the-machine-muse-build-generative-ai-with-ml/?couponCode=AKHIL_JAN1",
    clean_url: "https://www.udemy.com/course/master-the-machine-muse-build-generative-ai-with-ml/"
  },
  {
    name: "100% OFF- Python Demonstrations For Practice Course",
    category: "Development",
    image: "https://img-c.udemycdn.com/course/480x270/3518698_0aff.jpg",
    actual_price_usd: 19.99,
    sale_price_usd: 19.69,
    sale_end: "2025-01-12T11:43:00",
    description: "Python Demonstrations For Practice Course, This course is a depth introduction to fundamental python programming concepts by demonstrations in Python.",
    url: "https://www.udemy.com/course/python-for-beginners-demonstration-course/?couponCode=CD29D02165FB7D76A1F0",
    clean_url: "https://www.udemy.com/course/python-for-beginners-demonstration-course/"
  },
  {
    name: "Mastering Deep Learning for Generative AI",
    category: "Data Science",
    image: "https://img-c.udemycdn.com/course/480x270/6085269_ee3f_4.jpg",
    actual_price_usd: 64.99,
    sale_price_usd: 0.0,
    sale_end: "2025-01-10T18:00:00",
    description: "Unlock the potential of Generative AI through Deep Learning. ‘Mastering Deep Learning for Generative AI’ is your comprehensive guide to mastering the art of creating AI models that can generate new, original content. This course is designed for anyone looking to take their machine learning skills to the next level by exploring the creative possibilities of AI...",
    url: "https://www.udemy.com/course/mastering-deep-learning-for-generative-ai/?couponCode=AKHIL_JAN2",
    clean_url: "https://www.udemy.com/course/mastering-deep-learning-for-generative-ai/"
  }
];

const CoursesPage = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
    const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [account, setAccount] = useState(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const menuRef = useRef(null);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };



  useEffect(() => {
    if (window.ethereum) {
      setIsMetaMaskInstalled(true);
      loadAccount();
    }
  }, []);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/courses'); 

        if(response.status==500){
          alert(response.error);
        }else{
          console.log(response.message);
          const data = response.courses;
          setCourses(data);
        }
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
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

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVisitCourse = (course) => {
    navigate(`/course/${course.title}`, { state: { course } });
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
        <FiChevronDown className={`transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
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

  return (
    <div className={`min-h-screen transition-all duration-300 py-10 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' : 'bg-gradient-to-br from-blue-50 to-purple-50'
    }`}>
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
           
          <Link to="/studenthome" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
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

      <div className="px-20 pt-32 pb-16 flex justify-center">
        <div className={`relative w-2/5 ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-full shadow-xl transition-all duration-300 focus-within:scale-105`}>
          <input
            type="text"
            className={`w-full px-8 py-4 rounded-full outline-none transition-colors ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
            }`}
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className={`absolute right-4 top-1/2 -translate-y-1/2 text-2xl ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            🔍
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-12 pb-20">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className={`group relative rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-[1.02] ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="relative h-60 overflow-hidden">
              <img 
                src={course.course_iamge} 
                alt={course.title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="absolute inset-0 " />
            </div>
            
            <div className="p-6">
              <h3 className={`text-xl font-bold mb-3 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {course.title}
              </h3>
              
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-sm ${
                  darkMode ?
                  'bg-purple-900/30 text-purple-400' :
                  'bg-purple-100 text-purple-600'
                }`}>
                  {course.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-lg font-bold ${
                    darkMode ? 'text-green-400' : 'text-green-600'
                  }`}>
                    ${course.sale_price_usd}
                  </span>
                </div>
              </div>

              <button
                onClick={() => handleVisitCourse(course)}
                className={`w-full py-3 rounded-lg font-medium transition-all ${
                  darkMode ?
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

export default CoursesPage;

// const courses = [
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
