// // import React, {useState} from 'react';
// // import { useNavigate,Link } from "react-router-dom"; // Import useNavigate hook

// // const EduSphere = () => {

// //   const navigate = useNavigate(); // Hook for navigation
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [darkMode, setDarkMode] = useState(true);
// //   const [walletConnected, setWalletConnected] = useState(false);

// //    // Toggle Dropdown Menu
// //    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

// //    // Toggle Dark/Light Mode
// //    const toggleDarkMode = () => setDarkMode(!darkMode);
  

// //   // Function to handle MetaMask wallet connection
// //   const handleConnectWallet = async () => {
// //     if (window.ethereum) {
// //       try {
// //         await window.ethereum.request({ method: "eth_requestAccounts" });
// //         setWalletConnected(true);
// //         alert("Wallet connected successfully!");
// //       } catch (error) {
// //         alert("Failed to connect wallet. Please try again.");
// //       }
// //     } else {
// //       alert("MetaMask is not installed. Please install MetaMask and try again.");
// //     }
// //   };

  
  

// //   return (
// //     <>
// //       <style>
// //         {`
// //           /* General Styles */
// //           @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

// //           body {
// //             margin: 0;
// //             padding: 0;
// //             font-family: 'Orbitron', sans-serif;
// //             background-color: #111;
// //             color: #fff;
// //             overflow-x: hidden;
// //           }

// //           .dark-mode {
// //             background-color: #111;
// //             color: #fff;
// //           }
// //           .light-mode {
// //             background-color: #fff;
// //             color: #000;
// //           }

// //           a {
// //             text-decoration: none;
// //           }
// //           h1, h2, h3, h4, h5, h6, p {
// //             margin: 0;
// //             padding: 0;
// //           }

// //           /* Header */
// //           header {
// //             display: flex;
// //             justify-content: space-between;
// //             align-items: center;
// //             padding: 20px 50px;
// //             background-color: #111;
// //             border-bottom: 1px solid #222;
// //             position: fixed;
// //             width: 96%;
// //             top: 0;
// //             z-index: 1000;
// //           }
// //           .logo {
// //             display: flex;
// //             align-items: center;
// //           }
// //           .logo img {
// //             width: 70px;
// //             margin-right: 10px;
// //           }
// //           .logo span {
// //             font-size: 24px;
// //             font-weight: bold;
// //             color:#f90;
// //           }
// //           nav {
// //             display: flex;
// //             align-items: center;
// //             gap: 20px;
            
// //           }
// //             nav button{
// //             padding: 10px 20px;
// //             background-color: #f90;
// //             border-radius: 30px;
            
// //             .nav-options {
// //              margin-left: -20px; /* Adjust to move to the left */
// //              }



// //             }
// //              nav button:hover {
// //             background-color: #ffae42;
// //           }
            
            
// //           nav a {
// //             color: #f90;
// //             font-size: 16px;
// //             transition: color 0.3s;
// //           }
// //           nav a:hover {
// //             color: #f90;
// //           }
// //           .button {
// //             padding: 10px 20px;
// //             background-color: #f90;
// //             color: #000;
// //             border: none;
// //             border-radius: 5px;
// //             cursor: pointer;
// //             transition: background-color 0.3s;
// //           }
// //           .button:hover {
// //             background-color: #ffae42;
// //           }

// //           /* Dropdown Menu */
// //           .dropdown {
// //             position: relative;
// //             display: inline-block;
// //           }
// //           .dropdown-button {
// //             width: 40px;
// //             height: 40px;
// //             display: flex;
// //             align-items: center;
// //             justify-content: center;
// //             background-color: #000000;
// //             border-radius: 10%;
// //             cursor: pointer;
// //           }
// //           .dropdown-button:hover {
// //             background-color: #fff;
// //           }
// //           .dropdown-content {
// //             display: ${dropdownOpen ? "flex" : "none"};
// //             flex-direction: column;
// //             position: absolute;
// //             top: 50px;
// //             right: 0;
// //             background-color: #333;
// //             color: #fff;
// //             padding: 15px;
// //             box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
// //             border-radius: 10px;
// //             z-index: 1001;
// //             gap: 10px;
// //           }
// //           .dropdown-content a {
// //             text-decoration: none;
// //             color: #f90;
// //             padding: 8px 12px;
// //             border-radius: 5px;
// //           }
// //           .dropdown-content a:hover {
// //             background-color: #444;
// //           }
// //           .dropdown-content .toggle-switch {
// //             display: flex;
// //             justify-content: space-between;
// //             align-items: center;
// //           }

// //           /* Hero Section */
// //           .hero {
// //             display: flex;
// //             flex-direction: column;
// //             align-items: center;
// //             justify-content: flex-start;
// //             text-align: center;
// //             padding-top: 80px;
// //             height: 100vh;
// //             background: url('images/home hero image.avif') no-repeat center center/cover;
// //             position: relative;
// //             overflow: hidden;
// //             margin-top: 80px;
// //             animation: fadeInImage 2s ease-out forwards;
// //           }
// //           .hero-overlay {
// //             position: absolute;
// //             top: 0;
// //             left: 0;
// //             width: 100%;
// //             height: 100%;
// //             background-color: rgba(0, 0, 0, 0.6);
// //             z-index: 1;
// //           }
// //           .hero-content {
// //             position: relative;
// //             z-index: 2;
// //             opacity: 0;
// //             transform: translateY(50px);
// //             animation: fadeInContent 1.5s ease-out 2s forwards;
// //           }
// //           .hero-title {
// //             font-size: 64px;
// //             font-weight: bold;
// //             color: #f90;
// //             margin-bottom: 20px;
// //           }

// //           /* Stats Section */
// //           .stats {
// //             display: flex;
// //             justify-content: center;
// //             gap: 100px;
// //             position: relative;
// //             z-index: 2;
// //             margin-top: 20px;
// //           }
// //           .stat-box {
// //             background-color: rgba(51, 51, 51, 0.8);
// //             padding: 20px;
// //             border-radius: 10px;
// //             text-align: center;
// //             color: #fff;
// //             width: 250px;
// //             font-size: 24px;
// //             transition: background-color 0.3s ease-in-out;
// //           }
// //           .stat-box:hover {
// //             background-color: #f90;
// //           }

// //           /* Box Styling */
// //           .container {
// //             display: flex;
// //             justify-content: space-between;
// //             padding: 100px;
// //             position: absolute;
// //             top: 50%;
// //             left: 50%;
// //             transform: translate(-50%, -50%);
// //             z-index: 3;
// //             gap: 150px;
// //           }

// //           .card {
// //             width: 200px;
// //             height: 200px;
// //             padding: 20px;
// //             background-color: rgba(51, 51, 51, 0.8);
// //             color: #f90;
// //             border-radius: 20px;
// //             text-align: center;
// //             margin-top: 200px;
// //             cursor: pointer;
// //             position: relative;
// //             transform-style: preserve-3d;
// //             transition: transform 0.6s ease-in-out;
// //             box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
// //           }

// //           /* Card Front and Back Styling */
// //           .card .front,
// //           .card .back {
// //             position: absolute;
// //             width: 100%;
// //             height: 100%;
// //             backface-visibility: hidden;
// //             display: flex;
// //             justify-content: center;
// //             align-items: center;
// //             border-radius: 10px;
// //             padding: 5px;
// //           }

// //           .card .front {
// //             background-color: rgba(51, 51, 51, 0.8);
// //             color: #f90;
// //           }

// //           .card .back {
// //             background-color: #333;
// //             color: #f90;
// //             transform: rotateY(180deg);
// //             text-align: left;
// //             padding: 20px;
// //           }

// //           /* Hover Effect to flip the card */
// //           .card:hover {
// //             transform: rotateY(180deg);
// //           }

// //           .card:hover .front {
// //             visibility: hidden;
// //           }

// //           .card:hover .back {
// //             visibility: visible;
// //           }

// //           /* Footer Styling */
// //           footer {
// //             background-color: #111;
// //             color: #fff;
// //             text-align: center;
// //             padding: 20px;
// //             position: relative;
// //             bottom: 0;
// //             width: 100%;
// //           }
// //           footer a {
// //             color: #f90;
// //             text-decoration: none;
// //             margin: 0 15px;
// //             font-size: 16px;
// //           }
// //           footer a:hover {
// //             color: #ffae42;
// //           }
// //           footer .copyright {
// //             font-size: 14px;
// //             margin-top: 10px;
// //           }

// //           /* Animations */
// //           @keyframes fadeInImage {
// //             from {
// //               opacity: 0;
// //               transform: scale(1.1);
// //             }
// //             to {
// //               opacity: 1;
// //               transform: scale(1);
// //             }
// //           }

// //           @keyframes fadeInContent {
// //             from {
// //               opacity: 0;
// //               transform: translateY(50px);
// //             }
// //             to {
// //               opacity: 1;
// //               transform: translateY(0);
// //             }
// //           }
// //             .disabled {
// //             pointer-events: none;
// //             opacity: 0.5;
// //           }
// //         `}
// //       </style>

// //       {/* Header */}
// //       <header>
// //         <div className="logo">
// //           <img src="images/Edusphere logo.png" alt="EduSphere Logo" />
// //           <span>EduSphere</span>
// //         </div>
// //         <nav>
// //           <nav>
// //                   <a href="#home" className={!walletConnected ? "disabled" : ""}>
// //                       Home
// //                     </a>
// //                     <Link
// //                       to="/createcourses"
// //                       className={!walletConnected ? "disabled" : ""}
// //                     >
// //                       Create Courses
// //                     </Link>
// //                     <Link
// //                       to="/studentsinsights"
// //                       className={!walletConnected ? "disabled" : ""}
// //                     >
// //                       Students Insights
// //                     </Link>
// //                     <Link
// //                       to="/reports"
// //                       className={!walletConnected ? "disabled" : ""}
// //                     >
// //                       Reports
// //                     </Link>
                   
// //                   </nav>
// //                   <button className="button" onClick={handleConnectWallet}>
// //           {walletConnected ? "Wallet Connected" : "Connect Wallet"}
// //         </button>

         
// //         </nav>

// //         {/* Dropdown Menu */}
// //         <div className="dropdown">
// //           <div className="dropdown-button" onClick={toggleDropdown}>
// //             {/* Google Drive-style 9-dot icon */}
// //             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 10px)", gap: "3px" }}>
// //               {Array.from({ length: 9 }).map((_, index) => (
// //                 <div
// //                   key={index}
// //                   style={{
// //                     width: "10px",
// //                     height: "10px",
// //                     backgroundColor: "#f90",
// //                     borderRadius: "50%",
// //                   }}
// //                 ></div>
// //               ))}
// //             </div>
// //           </div>
// //           <div className="dropdown-content">
// //             <Link to="/profile">Profile</Link>
// //             <Link to="/coins">Coins</Link>
// //             <Link to="/managecourses">Manage Courses</Link>
// //             <Link to="/progress">Progress</Link>
// //             <Link to="/certification">Certification</Link>
// //             <div className="toggle-switch">
              
// //               <button className="button" onClick={toggleDarkMode}>
// //                 {darkMode ? "Switch to Light" : "Switch to Dark"}
// //               </button>
              
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <section className="hero">
// //         <div className="hero-overlay"></div>
// //         <div className="hero-content">
// //           <h1 className="hero-title">Welcome to EduSphere</h1>
// //         </div>
// //       </section>

// //       {/* Statistics Section */}
// //       <section className="stats">
// //         <div className="stat-box">
// //           <h3>Courses</h3>
// //           <p>762k+</p>
// //         </div>
// //         <div className="stat-box">
// //           <h3>Students</h3>
// //           <p>300k+</p>
// //         </div>
// //         <div className="stat-box">
// //           <h3>17+ Years</h3>
// //           <p>Educational Excellence</p>
// //         </div>
// //       </section>

// //       {/* Container for the boxes */}
// // <div className="container flex justify-between items-center p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-24 z-20">
// //   {/* Info Boxes */}
// //   <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
// //     <div className="front">
// //       <h3 className="text-2xl font-bold">Learn More About Courses</h3>
// //     </div>
// //     <div className="back absolute top-0 right-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
// //       <p className="text-lg text-center">Explore our diverse range of courses designed to enhance your skills. We offer courses in various domains like Computer Science, Data Science, and more! Our platform aims to provide quality education with the best resources available for all students at every level of expertise.</p>
// //     </div>
// //   </div>

// //   <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
// //     <div className="front">
// //       <h3 className="text-2xl font-bold">Safe and Secure Platform</h3>
// //     </div>
// //     <div className="back absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
// //       <p className="text-lg text-center">Your data is safe with us! We use the latest encryption technologies to ensure that your learning materials and information are protected at all times. We maintain strict security protocols to safeguard your privacy and educational data across all aspects of the platform.</p>
// //     </div>
// //   </div>

// //   <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
// //     <div className="front">
// //       <h3 className="text-2xl font-bold">Transparent Transactions</h3>
// //     </div>
// //     <div className="back absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
// //       <p className="text-lg text-left">We believe in full transparency. All transactions on our platform are recorded on the blockchain, ensuring security and accountability for all users. This decentralized approach allows us to offer transparent of every transaction made on the platform.</p>
// //     </div>
// //   </div>
// // </div>


// //       {/* Footer */}
// //       <footer>
// //         <div>
// //           <a href="#">About</a>
// //           <a href="#">Privacy Policy</a>
// //           <a href="#">Terms of Service</a>
// //         </div>
// //         <div className="copyright">
// //           <p>&copy; 2025 EduSphere. All Rights Reserved.</p>
// //         </div>
// //       </footer>
// //     </>
// //   );
// // };

// // export default EduSphere;

// import React, { useState, useEffect, useRef } from "react";
// import { useTheme } from "next-themes";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { Link } from "react-router-dom";

// const Edusphere = () => {
  // const [walletAddress, setWalletAddress] = useState("");
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const { theme, setTheme } = useTheme();
    // const isDarkMode = useThemeStore((state) => state.isDarkMode);
  // const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);

  // const dropdownRef = useRef(null);

  // // Connect wallet to MetaMask
  // const connectWallet = async () => {
  //   if (window.ethereum) {
  //     try {
  //       const accounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       const address = accounts[0];
  //       setWalletAddress(address);

  //       // Save the wallet address to local storage
  //       localStorage.setItem("walletAddress", address);
  //     } catch (error) {
  //       console.error("Error connecting wallet:", error);
  //     }
  //   } else {
  //     alert("MetaMask is not installed. Please install it to connect your wallet.");
  //   }
  // };

  // // Disconnect wallet
  // const disconnectWallet = () => {
  //   localStorage.removeItem("walletAddress");
  //   setWalletAddress("");
  // };

  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };

  // const handleClickOutside = (event) => {
  //   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //     setDropdownOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  // useEffect(() => {
  //   const savedWalletAddress = localStorage.getItem("walletAddress");
  //   if (savedWalletAddress) {
  //     setWalletAddress(savedWalletAddress);
  //   }
  // }, []);

  // useEffect(() => {
  //   if (window.ethereum) {
  //     const handleAccountsChanged = (accounts) => {
  //       if (accounts.length > 0) {
  //         setWalletAddress(accounts[0]);
  //         localStorage.setItem("walletAddress", accounts[0]);
  //       } else {
  //         setWalletAddress("");
  //         localStorage.removeItem("walletAddress");
  //       }
  //     };

  //     window.ethereum.on("accountsChanged", handleAccountsChanged);

  //     return () => {
  //       window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
  //     };
  //   }
  // }, []);

  // const toggleTheme = () => {
  //   setIsDarkMode(!isDarkMode);
  //   setTheme(isDarkMode ? "light" : "dark");
  // };

//   return (
//     <div
//       className={`${
//         isDarkMode
//           ? "bg-gradient-to-r from-black to-gray-700 text-gold"
//           : "bg-gradient-to-r from-yellow-100 to-white text-black"
//       } transition-colors duration-300`}
//     >
//       {/* Navbar Section */}
//       <nav className="flex justify-between items-center p-6">
//         <div className="flex items-center space-x-2">
//           <img
//             src="/images/Edusphere logo.png"
//             alt="Edusphere Logo"
//             className="w-20 h-12"
//           />
//           <h1 className="text-4xl font-bold">Edusphere</h1>
//         </div>
//         <div className="flex items-center space-x-8">
//           <div className="flex space-x-8">
//             <Link to="/Edusphere">
//               <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
//                 Home
//               </button>
//             </Link>
//             <Link to="/createcourses">
//               <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
//                 Create Courses
//               </button>
//             </Link>
//             <Link to="/studentinsight">
//               <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
//                 Student Insight
//               </button>
//             </Link>
//           </div>

//           {/* Wallet Button */}
//           <button
//   className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full"
//   onClick={connectWallet} // Always trigger connectWallet on click
// >
//   {walletAddress ? (
//     `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` // Show address if connected
//   ) : (
//     "Connect Wallet" // Show "Connect Wallet" if not connected
//   )}
// </button>

//           {/* Theme toggle */}
//           <button className="dark-mode-toggle text-3xl" onClick={toggleTheme}>
//             {isDarkMode ? "🌙" : "☀️"}
//           </button>

//           {/* Dropdown Menu */}
//           <div className="relative" ref={dropdownRef}>
//             <button
//               onClick={toggleDropdown}
//               className={`text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full ${
//                 walletAddress ? "" : "cursor-not-allowed opacity-50"
//               }`}
//               disabled={!walletAddress}
//             >
//               ☰
//             </button>
//             {dropdownOpen && walletAddress && (
//               <div
//                 className={`absolute right-0 mt-2 w-48 border border-gray-300 rounded-md shadow-lg ${
//                   isDarkMode
//                     ? "bg-gray-800 text-white border-gray-600"
//                     : "bg-white text-black border-gray-300"
//                 }`}
//               >
//                <ul>
//   <Link to="/signup">
//     <li
//       className={`p-2 ${
//         walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
//       }`}
//     >
//       Add Details
//     </li>
//   </Link>
//   <li
//     className={`p-2 ${
//       walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
//     }`}
//   >
//     Coins
//   </li>
//   <Link to="/transaction">
//     <li
//       className={`p-2 ${
//         walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
//       }`}
//     >
//       Transaction
//     </li>
//   </Link>
//   <Link to="/managecourses">
//     <li
//       className={`p-2 ${
//         walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
//       }`}
//     >
//       Manage Courses
//     </li>
//   </Link>
//   <Link to="/redeem">
//     <li
//       className={`p-2 ${
//         walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
//       }`}
//     >
//       Redeem
//     </li>
//   </Link>
// </ul>

//               </div>
//             )}
//           </div>
//         </div>
//       </nav>
//       <div className="border-b-4 border-gold"></div>

//       {/* Main Content Section */}
//       <div className="container mx-auto py-14">
//         <div className="flex justify-between items-center">
//           <div className="w-1/2">
//             <DotLottieReact
            //  src="https://lottie.host/63360050-ad99-4d7b-af74-93e7d716903c/ntk07VkOVF.lottie"
//               loop
//               autoplay
//               className="w-full h-[500px] flex justify-center"
//             />
//           </div>
//           <div className="w-1/2">
//             <h2 className="relative text-6xl font-bold">Welcome to Edusphere</h2>
//             <p className="mt-9 text-xl">
//               Edusphere is a platform for educators and students powered by
//               blockchain technology.
//             </p>
//             <p className="mt-4">
//               Revolutionizing the way we learn and teach by giving users full
//               control over their education data.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 text-white py-4 mt-12">
//         <div className="flex justify-center items-center space-x-6">
//           <button className="text-yellow-600">About Us</button>
//           <span className="text-yellow-600">|</span>
//           <button className="text-yellow-600">Contact Us</button>
//           <span className="text-yellow-600">|</span>
//           <p className="text-yellow-600">&copy; 2025 Edusphere. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Edusphere;

import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import { FiUser, FiDollarSign, FiBook, FiGift } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
import { useThemeStore } from "../store/themeStore";

const Edusphere = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
    const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);

  const dropdownRef = useRef(null);

  // Connect wallet to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        setWalletAddress(address);
        localStorage.setItem("walletAddress", address);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to connect your wallet.");
    }
  };

  const disconnectWallet = () => {
    localStorage.removeItem("walletAddress");
    setWalletAddress("");
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
    const savedWalletAddress = localStorage.getItem("walletAddress");
    if (savedWalletAddress) {
      setWalletAddress(savedWalletAddress);
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          localStorage.setItem("walletAddress", accounts[0]);
        } else {
          setWalletAddress("");
          localStorage.removeItem("walletAddress");
        }
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      };
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div
      className={`${
        isDarkMode
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
            <Link to="/Edusphere" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
                             Home
                             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                           </Link>
                           <Link to="/createcourses" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
                             Create Courses
                             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                           </Link>
                           <Link to="/contest" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
                             Student Insights
                             <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                           </Link>
          </div>

          {/* Wallet Button */}
          <button
            className="text-lg bg-gradient-to-r from-amber-500 to-amber-300 text-black py-2 px-4 rounded-full"
            onClick={connectWallet}
          >
            {walletAddress ? (
              `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
            ) : (
              "Connect Wallet"
            )}
          </button>

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
                      to="/managecourses"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                    >
                      <FiBook className="text-amber-500" />
                      <span>Manage Courses</span>
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
              src="https://lottie.host/63360050-ad99-4d7b-af74-93e7d716903c/ntk07VkOVF.lottie"
              loop
              autoplay
              className="w-full h-[500px] flex justify-center"
            />
          </div>
          <div className="lg:w-1/2 space-y-8 animate-fade-in-up delay-100">
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent leading-tight">
              Revolutionizing Education with Blockchain
            </h2>
            <p className="text-xl text-gray-600 dark:text-amber-100/80 leading-relaxed">
              Empower your learning journey with decentralized education. Take control of your academic credentials, 
              earn rewards for your achievements, and access a world of knowledge powered by Web3 technology.
            </p>
           <div className="flex space-x-4">
                         <Link to="/createcourses" className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-amber-500/30 transition-all duration-300">
                           Create Courses
                         </Link>
                         <button className="px-8 py-4 rounded-full border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 transition-colors duration-300 font-semibold">
                           How It Works
                         </button>
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

export default Edusphere;





// src="https://lottie.host/63360050-ad99-4d7b-af74-93e7d716903c/ntk07VkOVF.lottie"





