import React, { useState, useEffect } from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import Web3 from 'web3';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const courses = [
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
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [account, setAccount] = useState(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false);
  const navigate = useNavigate();
   const { state } = useLocation();

  useEffect(() => {
    if (window.ethereum) {
      setIsMetaMaskInstalled(true);
      loadAccount();
    }
  }, []);

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
  };

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleVisitCourse = (course) => {
    navigate(`/course/${course.name}`, { state: { course } });
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 py-10 ${darkMode ? 'bg-gradient-to-r from-black to-gray-700 text-white' : 'bg-gradient-to-r from-yellow-100 to-white'}`}>
      <nav className={`flex justify-between items-center p-5 shadow-md fixed w-full top-0 left-0 z-50 ${darkMode ? 'bg-gradient-to-r from-black to-gray-700' : 'bg-gradient-to-r from-yellow-100 to-white'}`}>
        <div className="flex items-center gap-4">
          <img src="/images/Edusphere logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <span className="text-orange-400 text-4xl font-bold">Edusphere</span>
        </div>
        <div className="flex items-center space-x-6">
        <a href="/Edusphere" className=" font-medium hover:text-blue-700 transition-colors duration-300">Home</a>
          <a href="/courses" className=" font-medium hover:text-blue-700 transition-colors duration-300">Courses</a>
          <a href="/contest" className="font-medium  hover:text-blue-700 transition-colors duration-300">Contest</a>

          <button
            onClick={account ? disconnectWallet : connectWallet}
            className="bg-orange-500 text-white px-4 py-2 rounded-md"
          >
            {account ? `${account.slice(0, 6)}...${account.slice(-4)} ` : 'Connect Wallet'}
          </button>

          <button
            onClick={toggleDarkMode}
            className="text-white text-2xl"
          >
            {darkMode ? '🌙' : '☀'}
          </button>
          
        </div>
        
      </nav>


      <div className={`px-20 py-14 flex justify-center ${darkMode ? 'bg-gradient-to-r from-black to-gray-700' : 'bg-gray-100'}`}>
        <input
          type="text"
          className={`w-1/3 p-4 border rounded-full ${darkMode ? 'bg-white text-black border-purple-700' : 'bg-gradient-to-r from-orange-300 via-orange-200 to-orange-100 text-black border-blue-700'}`}
          placeholder="Search for a course..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-0.5">
        {filteredCourses.map((course, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 border-4 border-indigo-500 ${darkMode ? 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700' : 'bg-gradient-to-r from-orange-300 via-orange-200 to-orange-100'}`}
          >
            <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
            <div className="p-5">
              <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
                {course.name}
              </h3>
              <p className="text-black-700">{course.category}</p>
              <p className="mt-3 text-lg font-bold text-blue-400">${course.sale_price_usd}</p>
              <p className="mt-1 text-black-800">Sale ends: {new Date(course.sale_end).toLocaleString()}</p>
              <button
                onClick={() => handleVisitCourse(course)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Visit Course
              </button>
            </div>
          </div>
        ))}
      </div>

      <footer className="text-center py-5 bg-blue-900 text-white">
        <p>Edusphere | 2025 copyright reserved</p>
      </footer>
    </div>
  );
};

export default CoursesPage;
