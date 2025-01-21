import React, { useState } from 'react';
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate hook


const EduSphere = () => {

  const navigate = useNavigate(); // Hook for navigation
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [walletConnected, setWalletConnected] = useState(false);

  // Toggle Dropdown Menu
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Toggle Dark/Light Mode
  const toggleDarkMode = () => setDarkMode(!darkMode);


  // Function to handle MetaMask wallet connection
  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        setWalletConnected(true);
        alert("Wallet connected successfully!");
      } catch (error) {
        alert("Failed to connect wallet. Please try again.");
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
    }
  };

  // Function to navigate to Educator Sign Up




  return (
    <>
      <style>
        {`
          /* General Styles */
          @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

          body {
            margin: 0;
            padding: 0;
            font-family: "sans-serif";
            background-color: #111;
            color: #fff;
            overflow-x: hidden;
          }

          .dark-mode {
            background-color: #111;
            color: #fff;
          }
          .light-mode {
            background-color: #fff;
            color: #000;
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
            padding: 20px 15px;
            background-color: #111;
            border-bottom: 1px solid #222;
            border-radius : 50px;
            position: fixed;
            width: 90%;
            top: 15px;
            left:50%;
            transform: translateX(-50%);
            z-index: 10;
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
            // font-size: 24px;
            font-weight: bold;
            color:#f90;
          }
          nav {
            display: flex;
            align-items: center;
            font-size : 20px;
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
            background-color: #ffae55;
          }

          /* Dropdown Menu */
          .dropdown {
            position: relative;
            display: inline-block;
          }
          .dropdown-button {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #000000;
            border-radius: 10%;
            cursor: pointer;
          }
          .dropdown-content {
            display: ${dropdownOpen ? "flex" : "none"};
            flex-direction: column;
            position: absolute;
            top: 50px;
            right: 0;
            background-color: #333;
            color: #fff;
            padding: 15px;
            box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            z-index: 1001;
            gap: 10px;
          }
          .dropdown-content a {
            text-decoration: none;
            color: #f90;
            padding: 8px 12px;
            border-radius: 5px;
          }
          .dropdown-content a:hover {
            background-color: #444;
          }
          .dropdown-content .toggle-switch {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          /* Hero Section */
          .hero {
            text-align: center;
            width:100vw;
            height: 100vh;
            background-color: blue;
            position: relative;
            // overflow: hidden;
            // animation: fadeInImage 2s ease-out forwards;
            border:1px solid black;
        }
          .hero-title { 
            position: absolute;
            top: 20%;
            left:50%;
            z-index: 2;
            opacity: 0;
            transform: translateX(-50%);
            width : 70%;
            animation: fadeInContent 1.5s ease-out 1s forwards;
            font-size: 64px;
            font-weight: bold;
            color: #f90;
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

          /* Footer Styling */
          footer {
            background-color: #111;
            color: #fff;
            text-align: center;
            padding: 20px;
            position: relative;
            bottom: 0;
            width: 100%;
          }
          footer a {
            color: #f90;
            text-decoration: none;
            margin: 0 15px;
            font-size: 16px;
          }
          footer a:hover {
            color: #ffae42;
          }
          footer .copyright {
            font-size: 14px;
            margin-top: 10px;
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
    transform: translateX(-50%); /* Keep the transform here */
  }
  to {
    opacity: 1;
    transform: translateX(-50%); /* And here */
  }
}
        .disabled {
            pointer-events: none;
            opacity: 0.5;
          }
        `}
      </style>

      {/* Header */}
      <header>
        <div className="logo">
          <img src="images/Edusphere logo.png" alt="EduSphere Logo" />
          <span className="text-4xl">EduSphere</span>
        </div>
        <nav>
          <div className='flex gap-8'>
          <a href="/studenthome"
          // className={!walletConnected ? "disabled" : ""}
          className="text-2xl"
          >
            Home
          </a>
          <Link
            to="/courses"
          // className={!walletConnected ? "disabled" : ""}
          className="text-2xl"
          >
            Courses
          </Link>
          <Link
            to="/contest"
          // className={!walletConnected ? "disabled" : ""}
          className="text-2xl"
          >
            Contest
          </Link>
          {/* <Link
            to="/transactions"
            className={!walletConnected ? "disabled" : ""}
          >
            Transactions
          </Link> */}
          </div>
        
          <button className="button" onClick={handleConnectWallet}>
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </button>
          {/* Dropdown Menu */}
          <div className="dropdown">
            <div
              className={`dropdown-button ${!walletConnected ? 'disabled' : ''}`}
              onClick={walletConnected ? toggleDropdown : null} // Ensure click doesn't trigger when disabled
            >
              {/* Replace 9-dot icon with a person image */}
              <img
                src="/images/student.jpg"
                alt="Profile"
                style={{
                  width: "100px", // Set width of the image
                  height: "50px", // Set height of the image
                  borderRadius: "50%", // Make the image circular
                  objectFit: "cover", // Ensure the image covers the area without distortion
                  cursor: walletConnected ? "pointer" : "not-allowed", // Change cursor to indicate disabled state
                }}
              />
            </div>
            {/* </div> */}

            <div className="dropdown-content">
              <Link to="/add-details">Add Details</Link>
              {/* <Link to="/coins">Coins</Link> */}
              <Link to="/my-learning">My Learning</Link>
              <Link to="/transaction-history">Transactions</Link>
              <Link to="/redeem">Redeem</Link>
              {/* <Link to="/progress">Progress</Link> */}
              {/* <Link to="/certification">Certification</Link> */}
            </div>
          </div>
          <div className="toggle-switch">
            <button className="button" onClick={toggleDarkMode}>
              {darkMode ? "Light" : "Dark"}
            </button>
          </div>
        </nav>
      </header >

      {/* Hero Section */}
      < section className="hero" >
        <div className='border-2 border-red-500 w-full h-4/5 absolute bottom-0 p-0 flex'>
                <p className='w-3/5 border-red-900 border-2 h-full text-5xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur sit porro ipsam ratione asperiores culpa inventore impedit laboriosam natus aliquam quae atque in, praesentium fuga vero id error dolorem saepe cum sunt nostrum? Sit rerum quam earum officia sequi temporibus.</p>
                <div className='w-2/5 h-full flex justify-center items-center'>
                  <img src="/images/student.jpg" alt="" className='w-3/6 h-3/6'/>
                </div>
        </div>
        
      </section >

      {/* Statistics Section */}
      {/* < section className="stats" >
        <div className="stat-box">
          <h3>Courses</h3>
          <p>762k+</p>
        </div>
        <div className="stat-box">
          <h3>Students</h3>
          <p>300k+</p>
        </div>
        <div className="stat-box">
          <h3>17+ Years</h3>
          <p>Educational Excellence</p>
        </div>
      </section > */}

      {/* Container for the boxes */}
      {/* < div className="container flex justify-between items-center p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-24 z-20" >
        
        < div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out" >
          <div className="front">
            <h3 className="text-2xl font-bold">Learn More About Courses</h3>
          </div>
          <div className="back absolute top-0 right-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
            <p className="text-lg text-center">Explore our diverse range of courses designed to enhance your skills. We offer courses in various domains like Computer Science, Data Science, and more! Our platform aims to provide quality education with the best resources available for all students at every level of expertise.</p>
          </div>
        </div >

        <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
          <div className="front">
            <h3 className="text-2xl font-bold">Safe and Secure Platform</h3>
          </div>
          <div className="back absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
            <p className="text-lg text-center">Your data is safe with us! We use the latest encryption technologies to ensure that your learning materials and information are protected at all times. We maintain strict security protocols to safeguard your privacy and educational data across all aspects of the platform.</p>
          </div>
        </div>

        <div className="card w-[4000px] h-[400px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
          <div className="front">
            <h3 className="text-2xl font-bold">Transparent Transactions</h3>
          </div>
          <div className="back absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
            <p className="text-lg text-left">We believe in full transparency. All transactions on our platform are recorded on the blockchain, ensuring security and accountability for all users. This decentralized approach allows us to offer transparent of every transaction made on the platform.</p>
          </div>
        </div>
      </div > */}

      {/* Footer */}
      < footer >
        <div>
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="copyright">
          <p>&copy; 2025 EduSphere. All Rights Reserved.</p>
        </div>
      </footer >
    </>
  );
};

export default EduSphere;