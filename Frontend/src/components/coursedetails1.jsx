import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Web3 from 'web3';

const CourseDetails = () => {
  const { state } = useLocation();
  const { course } = state || {};
  const [isPurchased, setIsPurchased] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handlePurchase = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      setIsPurchased(true);
    } catch (error) {
      console.error('MetaMask error', error);
    }
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
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-yellow-100 to-white text-black'} min-h-screen`}>
      {/* Navbar */}
      <nav className={`flex justify-between items-center py-4 px-8 shadow-md ${darkMode ? 'bg-gradient-to-r from-black to-gray-700' : 'bg-gradient-to-r from-yellow-300 to-white text-black'}`}>
        <div className="flex items-center space-x-4">
          <img src="/images/Edusphere logo.png" alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-2xl font-bold ">Edusphere</h1>
        </div>
        <div className="flex items-center space-x-6">
          <a href="/" className=" font-medium hover:text-gray-300 transition-colors duration-300">Home</a>
          <a href="/courses" className=" font-medium hover:text-gray-300 transition-colors duration-300">Courses</a>
          <a href="/contest" className="font-medium hover:text-gray-300 transition-colors duration-300">Contest</a>
          <button className="px-4 py-2 bg-yellow-500  font-medium rounded-md hover:bg-yellow-600 transition-colors duration-300">
            Connect Wallet
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-white text-2xl hover:scale-110 transition-transform duration-300"
          >
            {darkMode ? '🌙' : '☀'}
          </button>
        </div>
      </nav>

      {/* Course Details */}
      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <img
            src={course.image}
            alt={course.name}
            className="w-full rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
          <h1 className="text-3xl font-bold mt-6">{course.name}</h1>
          <p className="mt-4 text-lg">{course.description}</p>
         
        </div>

        {/* Video Section */}
        
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
            <video controls className="rounded-lg shadow-md w-full max-w-md">
              <source src="course-video1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video controls className="rounded-lg shadow-md w-full max-w-md">
              <source src="course-video2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        
      </div>

      {/* Footer */}
      <footer className="text-center py-4 bg-gray-800 text-white mt-12">
        <p>&copy; 2025 Edusphere | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default CourseDetails;
