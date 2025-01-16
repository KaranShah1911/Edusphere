import React, {useState} from 'react';
import { useNavigate,Link } from "react-router-dom"; // Import useNavigate hook

const EduSphere = () => {

  const navigate = useNavigate(); // Hook for navigation
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

   // Toggle Dropdown Menu
   const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

   // Toggle Dark/Light Mode
   const toggleDarkMode = () => setDarkMode(!darkMode);
  

  // Function to handle MetaMask wallet connection
  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        alert("Wallet connected successfully!");
      } catch (error) {
        alert("Failed to connect wallet. Please try again.");
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask and try again.");
    }
  };

  // Function to navigate to Educator Sign Up
  const handleEducatorSignUp = () => {
    navigate("/signup"); // Navigate to the Educator Sign Up page
  };

  // Function to navigate to Student Sign Up
  const handleStudentSignUp = () => {
    navigate("/signup"); // Navigate to the Student Sign Up page
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
          .dropdown-button:hover {
            background-color: #fff;
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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            text-align: center;
            padding-top: 80px;
            height: 100vh;
            background: url('images/home hero image.avif') no-repeat center center/cover;
            position: relative;
            overflow: hidden;
            margin-top: 80px;
            animation: fadeInImage 2s ease-out forwards;
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
      <header>
        <div className="logo">
          <img src="images/Edusphere logo.png" alt="EduSphere Logo" />
          <span>EduSphere</span>
        </div>
        <nav>
          <a href="#home">Home</a>
          
          
          <Link to="/courses">Courses</Link>
          <Link to="/contest">Contest</Link>
          <Link to="/contest">Transactions</Link>

         
        </nav>

        {/* Dropdown Menu */}
        <div className="dropdown">
          <div className="dropdown-button" onClick={toggleDropdown}>
            {/* Google Drive-style 9-dot icon */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 10px)", gap: "3px" }}>
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: "10px",
                    height: "10px",
                    backgroundColor: "#f90",
                    borderRadius: "50%",
                  }}
                ></div>
              ))}
            </div>
          </div>
          <div className="dropdown-content">
            <Link to="/profile">Profile</Link>
            <Link to="/coins">Coins</Link>
            <Link to="/my-courses">My Courses</Link>
            <Link to="/progress">Progress</Link>
            <Link to="/certification">Certification</Link>
            <div className="toggle-switch">
              
              <button className="button" onClick={toggleDarkMode}>
                {darkMode ? "Switch to Light" : "Switch to Dark"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to EduSphere</h1>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats">
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
      </section>

      {/* Container for the boxes */}
      <div className="container">
        {/* Info Boxes */}
        <div className="card">
          <div className="front">
            <h3>Learn More About Courses</h3>
          </div>
          <div className="back">
            <p>Explore our diverse range of courses designed to enhance your skills. We offer courses in various domains like Computer Science, Data Science, and more!</p>
          </div>
        </div>

        <div className="card">
          <div className="front">
            <h3>Safe and Secure Platform</h3>
          </div>
          <div className="back">
            <p>Your data is safe with us! We use the latest encryption technologies to ensure that your learning materials and information are protected at all times.</p>
          </div>
        </div>

        <div className="card">
          <div className="front">
            <h3>Transparent Transactions</h3>
          </div>
          <div className="back">
            <p>We believe in full transparency. All transactions on our platform are recorded on the blockchain, ensuring security and accountability for all users.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div>
          <a href="#">About</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>
        <div className="copyright">
          <p>&copy; 2025 EduSphere. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default EduSphere;
