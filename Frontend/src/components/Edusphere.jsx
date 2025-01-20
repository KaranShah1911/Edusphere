import React from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const EduSphere = () => {
                        
  const navigate = useNavigate(); // Hook for navigation

  // Click handler for the Get Started button
  const handleGetStarted = () => {
    navigate('/role-selection'); // Redirect to the login page
  };

  return (
    <>
      <style>
        {`
          /* General Styles */
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

          body {
            margin: 0;
            padding: 0;
            font-family: 'Orbitron', sans-serif;
            background-color: #111;
            color: #fff;
            overflow-x: hidden;
          }
          a {
            text-decoration: none;
          }
          h1, h2, h3, h4, h5, h6, p {
            margin: 0;
            padding: 0;
          }

          /* Header */
          header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 50px;
            background-color: #111;
            border-bottom: 1px solid #222;
            position: fixed;
            width: 96%;
            top: 0;
            z-index: 1000;
          }
          .logo {
            display: flex;
            align-items: center;
          }
          .logo img {
            width: 70px;
            margin-right: 10px;
          }
          .logo span {
            font-size: 24px;
            font-weight: bold;
            color:#f90;
          }
          nav {
            display: flex;
            align-items: center;
            gap: 20px;
            
          }
            nav button{
            padding: 10px 20px;
            background-color: #f90;
            border-radius: 30px;
            
            .nav-options {
            margin-left: -20px; /* Adjust to move to the left */
            }



            }
            nav button:hover {
            background-color: #ffae42;
          }
            
            
          nav a {
            color: #f90;
            font-size: 16px;
            transition: color 0.3s;
          }
          nav a:hover {
            color: #f90;
          }
          .button {
            padding: 10px 20px;
            background-color: #f90;
            color: #000;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }
          .button:hover {
            background-color: #ffae42;
          }

          /* Hero Section */
          .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            text-align: center;
            padding-top: 80px;
            height: 100vh;
            background: url('images/home hero image.avif') no-repeat center center;
            position: relative;
            overflow: hidden;
            margin-top: 80px;
            animation: fadeInImage 2s ease-out forwards;
            background-size:cover ;
          }
          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 1;
          }
          .hero-content {
            position: relative;
            z-index: 2;
            opacity: 0;
            transform: translateY(50px);
            animation: fadeInContent 1.5s ease-out 2s forwards;
          }
          .hero-title {
            font-size: 64px;
            font-weight: bold;
            color: #f90;
            margin-bottom: 20px;
          }

          /* Stats Section */
          .stats {
            display: flex;
            justify-content: center;
            gap: 100px;
            position: relative;
            z-index: 2;
            margin-top: 20px;
          }
          .stat-box {
            background-color: rgba(51, 51, 51, 0.8);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            color: #fff;
            width: 250px;
            font-size: 24px;
            transition: background-color 0.3s ease-in-out;
          }
          .stat-box:hover {
            background-color: #f90;
          }

          /* Box Styling */
          .container {
            display: flex;
            justify-content: space-between;
            padding: 100px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 3;
            gap: 150px;
          }

          .card {
            width: 200px;
            height: 200px;
            padding: 20px;
            background-color: rgba(51, 51, 51, 0.8);
            color: #f90;
            border-radius: 20px;
            text-align: center;
            margin-top: 200px;
            cursor: pointer;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.6s ease-in-out;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
          }

          /* Card Front and Back Styling */
          .card .front,
          .card .back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            padding: 5px;
          }

          .card .front {
            background-color: rgba(51, 51, 51, 0.8);
            color: #f90;
          }

          .card .back {
            background-color: #333;
            color: #f90;
            transform: rotateY(180deg);
            text-align: left;
            padding: 20px;
          }

          /* Hover Effect to flip the card */
          .card:hover {
            transform: rotateY(180deg);
          }

          .card:hover .front {
            visibility: hidden;
          }

          .card:hover .back {
            visibility: visible;
          }

        

          /* Animations */
          @keyframes fadeInImage {
            from {
              opacity: 0;
              transform: scale(1.1);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes fadeInContent {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      {/* Header */}
      <header className="flex justify-between items-center py-5 px-10 bg-black border-b-2 border-gray-900 fixed w-screen top-0 z-50">
        <div className="flex items-center">
          <img src="images/Edusphere logo.png" alt="EduSphere Logo" className="w-16 mr-4" />
          <span className="text-2xl font-bold text-custom-orange">EduSphere</span>
        </div>
        <nav className="flex items-center gap-5">
          <button className="px-6 py-2 bg-#f90 rounded-lg text-black hover:bg-#f90-800" onClick={handleGetStarted}>
            Get Started
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('images/home hero image.avif')" }}>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="z-10">
        <h1 className="text-6xl font-bold text-custom-orange">Welcome to EduSphere</h1>

        </div>
      </section>

      {/* Statistics Section */}
      <section className="flex justify-center gap-20 mt-10 z-10">
  <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg text-white text-center w-80 hover:bg-[#f90] hover:text-black transition duration-300">
    <h3 className="text-xl font-bold">Courses</h3>
    <p className="text-3xl font-bold">762k+</p>
  </div>
  <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg text-white text-center w-80 hover:bg-[#f90] hover:text-black transition duration-300">
    <h3 className="text-xl font-bold">Students</h3>
    <p className="text-3xl font-bold">300k+</p>
  </div>
  <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg text-white text-center w-80 hover:bg-[#f90] hover:text-black transition duration-300">
    <h3 className="text-xl font-bold">17+ Years</h3>
    <p className="text-xl">Educational Excellence</p>
  </div>
</section>


{/* Container for the boxes */}
<div className="container flex justify-between items-center p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-24 z-20">
  {/* Info Boxes */}
  <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
    <div className="front">
      <h3 className="text-2xl font-bold">Learn More About Courses</h3>
    </div>
    <div className="back absolute top-0 right-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
      <p className="text-lg text-center">Explore our diverse range of courses designed to enhance your skills. We offer courses in various domains like Computer Science, Data Science, and more! Our platform aims to provide quality education with the best resources available for all students at every level of expertise.</p>
    </div>
  </div>

  <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
    <div className="front">
      <h3 className="text-2xl font-bold">Safe and Secure Platform</h3>
    </div>
    <div className="back absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
      <p className="text-lg text-center">Your data is safe with us! We use the latest encryption technologies to ensure that your learning materials and information are protected at all times. We maintain strict security protocols to safeguard your privacy and educational data across all aspects of the platform.</p>
    </div>
  </div>

  <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
    <div className="front">
      <h3 className="text-2xl font-bold">Transparent Transactions</h3>
    </div>
    <div className="back absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
      <p className="text-lg text-left">We believe in full transparency. All transactions on our platform are recorded on the blockchain, ensuring security and accountability for all users. This decentralized approach allows us to offer transparent of every transaction made on the platform.</p>
    </div>
  </div>
</div>



      {/* Footer */}
        {/* Footer */}
        <footer className="bg-black text-white text-center py-10 mt-auto w-full z-50">
        <div className="flex justify-center space-x-10">
          <a href="#" className="text-custom-orange hover:text-yellow-800">About</a>
          <a href="#" className="text-custom-orange hover:text-yellow-800">Privacy Policy</a>
          <a href="#" className="text-custom-orange hover:text-yellow-800">Terms of Service</a>
        </div>
        <div className="mt-5">
          <p className="text-sm">&copy; 2025 EduSphere. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default EduSphere;