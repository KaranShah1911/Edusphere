// import React from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// const StudentHome = () => {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Welcome to the Student Home Page</h1>
//       <div
//         style={{
//           width: "100%",
//           height: "400px",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <DotLottieReact
//           src="https://lottie.host/2fa8ee19-3348-4358-92c0-c3331ca12c20/BbbdUxJoOR.lottie"
//           loop
//           autoplay
//         />
//       </div>
//       <div style={{ padding: "20px" }}>
//         <div
//           style={{
//             width: "100%",
//             height: "400px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         ></div>

//         <DotLottieReact
//           src="https://lottie.host/35b0410c-5260-4043-982f-3abc2d505971/DgMX7iJaVi.lottie"
//           loop
//           autoplay
//         />
//       </div>

//       <div style={{ padding: "20px" }}>
//         <div
//           style={{
//             width: "100%",
//             height: "400px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         ></div>
      
//     <DotLottieReact
//       src="https://lottie.host/5603972b-ac23-48b5-84d9-19ac7ed462a3/FIokjQbPsW.lottie"
//       loop
//       autoplay
//     />
//    </div>

//    <div style={{ padding: "20px" }}>
//         <div
//           style={{
//             width: "100%",
//             height: "400px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         ></div>

   
//     <DotLottieReact
//       src="https://lottie.host/c35cafd9-47c8-40d1-b8da-b1ec5f438ce8/BOkx6yNfDC.lottie"
//       loop
//       autoplay
//     />
//     </div>
   
   



      
//     </div>
//   );
// };

// export default StudentHome;

// import React, { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
// import { Sun, Moon } from 'lucide-react';

// const EduSphere = () => {
//   const navigate = useNavigate();
//   const [isVisible, setIsVisible] = useState({});
//   const [darkMode, setDarkMode] = useState(false);
//   const [typedText, setTypedText] = useState('');
//   const textToType = "Someone aced their exams without studying... Click on get started to unleash yourself";

//   useEffect(() => {
//     let currentIndex = 0;
//     const typingInterval = setInterval(() => {
//       if (currentIndex <= textToType.length) {
//         setTypedText(textToType.slice(0, currentIndex));
//         currentIndex++;
//       } else {
//         clearInterval(typingInterval);
//       }
//     }, 50);

//     return () => clearInterval(typingInterval);
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach(entry => {
//           setIsVisible(prev => ({
//             ...prev,
//             [entry.target.id]: entry.isIntersecting
//           }));
//         });
//       },
//       { threshold: 0.1 }
//     );

//     document.querySelectorAll('.animate-on-scroll').forEach(section => {
//       observer.observe(section);
//     });

//     return () => observer.disconnect();
//   }, []);

//   const handleGetStarted = () => {
//     navigate('/role-selection');
//   };

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <div className={overflow-x-hidden ${darkMode ? 'dark bg-gray-900' : 'bg-white'}}>
      
//       <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         darkMode 
//           ? 'bg-gray-900/90 backdrop-blur-md border-b border-gold/20' 
//           : 'bg-blue-900/90 backdrop-blur-md'
//       }`}>
//         <div className="container mx-auto px-4">
//           <div className="flex justify-center items-center py-4">
//             <nav className="flex items-center gap-8">
//               <div className="flex items-center transform hover:scale-105 transition-transform duration-300">
//                 <img src="././public/images/Edusphere-logo.png" alt="EduSphere Logo" className="w-12 mr-3 animate-spin-slow" />
//                 <span className={text-2xl font-bold ${darkMode ? 'text-gold' : 'text-white'}}>
//                   EduSphere
//                 </span>
//               </div>
              
//               <button 
//                 onClick={handleGetStarted}
//                 className={`px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105 ${
//                   darkMode 
//                     ? 'bg-gold text-gray-900 hover:bg-gold/90' 
//                     : 'bg-white text-blue-900 hover:bg-blue-50'
//                 }`}
//               >
//                 Get Started
//               </button>
              
//               <button
//                 onClick={toggleDarkMode}
//                 className={`p-2 rounded-full transition-all duration-300 ${
//                   darkMode 
//                     ? 'bg-gold/20 text-gold hover:bg-gold/30' 
//                     : 'bg-white/20 text-white hover:bg-white/30'
//                 }`}
//               >
//                 {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//               </button>
//             </nav>
//           </div>
//         </div>
//       </header>

     
//       <section className={`min-h-screen relative flex items-center justify-center perspective-1000 overflow-hidden ${
//         darkMode ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-b from-blue-900 to-blue-700'
//       }`}>
//         <div className={`absolute inset-0 transform -skew-y-6 scale-110 ${
//           darkMode 
//             ? 'bg-gradient-to-b from-gold/10 to-transparent' 
//             : 'bg-gradient-to-b from-blue-800/50 to-transparent'
//         }`} />
//         <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between gap-12">
//           <div className="md:w-1/2 space-y-6 transform translate-y-0 transition-transform duration-1000">
//             <h1 className={text-6xl font-bold space-y-2 ${darkMode ? 'text-gold' : 'text-white'}}>
//               Welcome to{" "}
//               <div className="inline-flex">
//                 {'EDUSPHERE'.split('').map((letter, i) => (
//                   <span 
//                     key={i}
//                     className={`inline-block animate-bounce ${
//                       darkMode ? 'text-gold' : 'text-white'
//                     }`}
//                     style={{ animationDelay: ${i * 0.1}s }}
//                   >
//                     {letter}
//                   </span>
//                 ))}
//               </div>
//             </h1>
//             <p className={`text-xl leading-relaxed ${
//               darkMode ? 'text-gold' : 'text-blue-100'
//             }`}>
//               {typedText}
//               <span className="animate-blink">|</span>
//             </p>
//           </div>
//           <div className="md:w-1/2 transform hover:rotate-y-12 transition-transform duration-500">
//             <img 
//               src="/images/educator.jpg" 
//               alt="Education" 
//               className={`rounded-lg shadow-2xl transition-all duration-500 ${
//                 darkMode 
//                   ? 'hover:shadow-gold/30' 
//                   : 'hover:shadow-blue-500/50'
//               }`}
//             />
//           </div>
//         </div>
//       </section>

     
//       <section className={py-20 ${darkMode ? 'bg-gray-900' : 'bg-white'}}>
//         <h2 className={`text-3xl font-bold text-center mb-16 ${
//           darkMode ? 'text-gold' : 'text-blue-900'
//         }`}>
//           Our Features
//         </h2>
//         <div className="container mx-auto px-4">
//           {[
//             {
//               id: 'feature1',
//               title: 'Learn More About Courses',
//               description: 'Explore our diverse range of courses designed to enhance your skills.',
//               image: '/images/educator.jpg',
//               direction: 'left'
//             },
//             {
//               id: 'feature2',
//               title: 'Safe and Secure Platform',
//               description: 'Your data is protected with state-of-the-art security measures.',
//               image: '/images/educator.jpg',
//               direction: 'right'
//             },
//             {
//               id: 'feature3',
//               title: 'Transparent Transactions',
//               description: 'All transactions are recorded securely on the blockchain.',
//               image: '/images/educator.jpg',
//               direction: 'left'
//             }
//           ].map((feature, index) => (
//             <div
//               key={feature.id}
//               id={feature.id}
//               className={`animate-on-scroll flex flex-col md:flex-row items-center gap-12 mb-20 ${
//                 index % 2 ? 'md:flex-row-reverse' : ''
//               }`}
//             >
//               <div className={`md:w-1/2 transform transition-all duration-1000 ${
//                 isVisible[feature.id] 
//                   ? 'translate-x-0 opacity-100' 
//                   : feature.direction === 'left' 
//                     ? '-translate-x-full opacity-0' 
//                     : 'translate-x-full opacity-0'
//               }`}>
//                 <h3 className={`text-3xl font-bold mb-4 ${
//                   darkMode ? 'text-gold' : 'text-blue-900'
//                 }`}>{feature.title}</h3>
//                 <p className={darkMode ? 'text-gray-300' : 'text-blue-700'}>{feature.description}</p>
//               </div>
//               <div className={`md:w-1/2 transform transition-all duration-1000 ${
//                 isVisible[feature.id] 
//                   ? 'translate-y-0 opacity-100' 
//                   : 'translate-y-24 opacity-0'
//               }`}>
//                 <img 
//                   src={feature.image} 
//                   alt={feature.title}
//                   className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

      // {/* Team Section */}
      // <section className={py-20 ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}}>
      //   <h2 className={`text-3xl font-bold text-center mb-16 ${
      //     darkMode ? 'text-gold' : 'text-blue-900'
      //   }`}>
      //     Meet Our Team
      //   </h2>
      //   <div className="container mx-auto px-4">
      //     {[
      //       { 
      //         name: 'Karan Shah', 
      //         role: 'Founder & CEO',
      //         description: 'A visionary leader with over 10 years of experience in EdTech. Karan brings innovative ideas and strategic direction to EduSphere.',
      //         direction: 'left'
      //       },
      //       { 
      //         name: 'Kavya Shah', 
      //         role: 'Technical Lead',
      //         description: 'Expert in blockchain technology and secure systems. Kavya ensures our platform remains cutting-edge and reliable.',
      //         direction: 'right'
      //       },
      //       { 
      //         name: 'Harsh Pimple', 
      //         role: 'Design Director',
      //         description: 'Award-winning UX designer focused on creating intuitive and engaging learning experiences for our users.',
      //         direction: 'left'
      //       },
      //       { 
      //         name: 'Darshit Shah', 
      //         role: 'Product Manager',
      //         description: 'Passionate about educational innovation, Darshit drives our product strategy and user-centered development approach.',
      //         direction: 'right'
      //       }
      //     ].map((member, index) => (
      //       <div 
      //         key={member.name}
      //         id={team-${index}}
      //         className="animate-on-scroll mb-16 last:mb-0"
      //       >
      //         <div className={`flex flex-col md:flex-row items-center gap-8 ${
      //           index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
      //         }`}>
      //           {/* Image Container with 3D hover effect */}
      //           <div className={`md:w-1/2 transform transition-all duration-1000 perspective group ${
      //             isVisible[team-${index}] 
      //               ? 'translate-x-0 opacity-100' 
      //               : member.direction === 'left'
      //                 ? '-translate-x-full opacity-0'
      //                 : 'translate-x-full opacity-0'
      //           }`}>
      //             <div className="relative h-96 transform transition-transform duration-500 group-hover:scale-105">
      //               <img 
      //                 src="/images/educator.jpg" 
      //                 alt={member.name}
      //                 className="w-full h-full object-cover rounded-lg shadow-xl"
      //               />
      //               <div className={`absolute inset-0 rounded-lg ${
      //                 darkMode 
      //                   ? 'bg-gold/0 group-hover:bg-gold/20' 
      //                   : 'bg-blue-900/0 group-hover:bg-blue-900/20'
      //               } transition-all duration-300`} />
      //             </div>
      //           </div>

      //           {/* Content Container with staggered fade-in */}
      //           <div className={`md:w-1/2 space-y-4 transform transition-all duration-1000 ${
      //             isVisible[team-${index}]
      //               ? 'translate-y-0 opacity-100'
      //               : 'translate-y-24 opacity-0'
      //           }`}
      //           style={{ transitionDelay: ${index * 0.2}s }}
      //           >
      //             <div className={`p-6 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-xl ${
      //               darkMode ? 'bg-gray-900' : 'bg-white'
      //             }`}>
      //               <h3 className={`text-2xl font-bold mb-2 ${
      //                 darkMode ? 'text-gold' : 'text-blue-900'
      //               }`}>{member.name}</h3>
      //               <p className={`font-medium mb-4 ${
      //                 darkMode ? 'text-gold/80' : 'text-blue-600'
      //               }`}>{member.role}</p>
      //               <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{member.description}</p>
                    
      //               {/* Social Links with hover effects */}
      //               <div className="mt-6 flex gap-4">
      //                 <a href="#" className={`transform hover:scale-110 transition-all duration-300 ${
      //                   darkMode ? 'text-gold hover:text-gold/70' : 'text-blue-500 hover:text-blue-700'
      //                 }`}>
      //                   LinkedIn
      //                 </a>
      //                 <a href="#" className={`transform hover:scale-110 transition-all duration-300 ${
      //                   darkMode ? 'text-gold hover:text-gold/70' : 'text-blue-500 hover:text-blue-700'
      //                 }`}>
      //                   Twitter
      //                 </a>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     ))}
      //   </div>
      // </section>

//       {/* Footer */}
//       <footer className={`py-10 ${
//         darkMode ? 'bg-gray-900 text-gold' : 'bg-blue-900 text-white'
//       }`}>
//         <div className="container mx-auto px-4 text-center">
//           <div className="flex justify-center space-x-10 mb-6">
//             <a href="#" className={`transition-colors duration-300 ${
//               darkMode ? 'hover:text-gold/70' : 'hover:text-blue-300'
//             }`}>About</a>
//             <a href="#" className={`transition-colors duration-300 ${
//               darkMode ? 'hover:text-gold/70' : 'hover:text-blue-300'
//             }`}>Privacy Policy</a>
//             <a href="#" className={`transition-colors duration-300 ${
//               darkMode ? 'hover:text-gold/70' : 'hover:text-blue-300'
//             }`}>Terms of Service</a>
//           </div>
//           <p className="text-sm opacity-75">&copy; 2025 EduSphere. All Rights Reserved.</p>
//         </div>
//       </footer>

//       <style>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0); }
//           50% { transform: translateY(-10px); }
//         }

//         @keyframes spin-slow {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }

//         @keyframes blink {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0; }
//         }

//         :root {
//           --color-gold: #FFD700;
//         }

//         .dark {
//           --color-gold: #FFD700;
//         }

//         .animate-float {
//           animation: float 3s ease-in-out infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }

//         .animate-blink {
//           animation: blink 1s step-end infinite;
//         }

//         .text-gold {
//           color: var(--color-gold);
//         }

//         .bg-gold {
//           background-color: var(--color-gold);
//         }

//         .perspective-1000 {
//           perspective: 1000px;
//         }

//         .transform-style-3d {
//           transform-style: preserve-3d;
//         }

//         .backface-hidden {
//           backface-visibility: hidden;
//         }

//         .rotate-y-180 {
//           transform: rotateY(180deg);
//         }
//       `}</style>
//     </div>
//   );
// };

// export default EduSphere;


//home page
// import React from 'react';
// import { useNavigate } from "react-router-dom"; // Import useNavigate hook

// const EduSphere = () => {
                        
//   const navigate = useNavigate(); // Hook for navigation

//   // Click handler for the Get Started button
//   const handleGetStarted = () => {
//     navigate('/role-selection'); // Redirect to the login page
//   };

//   return (
//     <>
//       <style>
//         {`
//           /* General Styles */
//           @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

//           body {
//             margin: 0;
//             padding: 0;
//             font-family: 'Orbitron', sans-serif;
//             background-color: #111;
//             color: #fff;
//             overflow-x: hidden;
//           }
//           a {
//             text-decoration: none;
//           }
//           h1, h2, h3, h4, h5, h6, p {
//             margin: 0;
//             padding: 0;
//           }

//           /* Header */
//           header {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
//             padding: 20px 50px;
//             background-color: #111;
//             border-bottom: 1px solid #222;
//             position: fixed;
//             width: 96%;
//             top: 0;
//             z-index: 1000;
//           }
//           .logo {
//             display: flex;
//             align-items: center;
//           }
//           .logo img {
//             width: 70px;
//             margin-right: 10px;
//           }
//           .logo span {
//             font-size: 24px;
//             font-weight: bold;
//             color:#f90;
//           }
//           nav {
//             display: flex;
//             align-items: center;
//             gap: 20px;
            
//           }
//             nav button{
//             padding: 10px 20px;
//             background-color: #f90;
//             border-radius: 30px;
            
//             .nav-options {
//             margin-left: -20px; /* Adjust to move to the left */
//             }



//             }
//             nav button:hover {
//             background-color: #ffae42;
//           }
            
            
//           nav a {
//             color: #f90;
//             font-size: 16px;
//             transition: color 0.3s;
//           }
//           nav a:hover {
//             color: #f90;
//           }
//           .button {
//             padding: 10px 20px;
//             background-color: #f90;
//             color: #000;
//             border: none;
//             border-radius: 5px;
//             cursor: pointer;
//             transition: background-color 0.3s;
//           }
//           .button:hover {
//             background-color: #ffae42;
//           }

//           /* Hero Section */
//           .hero {
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: flex-start;
//             text-align: center;
//             padding-top: 80px;
//             height: 100vh;
//             background: url('images/home hero image.avif') no-repeat center center;
//             position: relative;
//             overflow: hidden;
//             margin-top: 80px;
//             animation: fadeInImage 2s ease-out forwards;
//             background-size:cover ;
//           }
//           .hero-overlay {
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background-color: rgba(0, 0, 0, 0.6);
//             z-index: 1;
//           }
//           .hero-content {
//             position: relative;
//             z-index: 2;
//             opacity: 0;
//             transform: translateY(50px);
//             animation: fadeInContent 1.5s ease-out 2s forwards;
//           }
//           .hero-title {
//             font-size: 64px;
//             font-weight: bold;
//             color: #f90;
//             margin-bottom: 20px;
//           }

//           /* Stats Section */
//           .stats {
//             display: flex;
//             justify-content: center;
//             gap: 100px;
//             position: relative;
//             z-index: 2;
//             margin-top: 20px;
//           }
//           .stat-box {
//             background-color: rgba(51, 51, 51, 0.8);
//             padding: 20px;
//             border-radius: 10px;
//             text-align: center;
//             color: #fff;
//             width: 250px;
//             font-size: 24px;
//             transition: background-color 0.3s ease-in-out;
//           }
//           .stat-box:hover {
//             background-color: #f90;
//           }

//           /* Box Styling */
//           .container {
//             display: flex;
//             justify-content: space-between;
//             padding: 100px;
//             position: absolute;
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             z-index: 3;
//             gap: 150px;
//           }

//           .card {
//             width: 200px;
//             height: 200px;
//             padding: 20px;
//             background-color: rgba(51, 51, 51, 0.8);
//             color: #f90;
//             border-radius: 20px;
//             text-align: center;
//             margin-top: 200px;
//             cursor: pointer;
//             position: relative;
//             transform-style: preserve-3d;
//             transition: transform 0.6s ease-in-out;
//             box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
//           }

//           /* Card Front and Back Styling */
//           .card .front,
//           .card .back {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             backface-visibility: hidden;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             border-radius: 10px;
//             padding: 5px;
//           }

//           .card .front {
//             background-color: rgba(51, 51, 51, 0.8);
//             color: #f90;
//           }

//           .card .back {
//             background-color: #333;
//             color: #f90;
//             transform: rotateY(180deg);
//             text-align: left;
//             padding: 20px;
//           }

//           /* Hover Effect to flip the card */
//           .card:hover {
//             transform: rotateY(180deg);
//           }

//           .card:hover .front {
//             visibility: hidden;
//           }

//           .card:hover .back {
//             visibility: visible;
//           }

        

//           /* Animations */
//           @keyframes fadeInImage {
//             from {
//               opacity: 0;
//               transform: scale(1.1);
//             }
//             to {
//               opacity: 1;
//               transform: scale(1);
//             }
//           }

//           @keyframes fadeInContent {
//             from {
//               opacity: 0;
//               transform: translateY(50px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//         `}
//       </style>

//       {/* Header */}
//       <header className="flex justify-between items-center py-5 px-10 bg-black border-b-2 border-gray-900 fixed w-screen top-0 z-50">
//         <div className="flex items-center">
//           <img src="images/Edusphere logo.png" alt="EduSphere Logo" className="w-16 mr-4" />
//           <span className="text-2xl font-bold text-custom-orange">EduSphere</span>
//         </div>
//         <nav className="flex items-center gap-5">
//           <button className="px-6 py-2 bg-#f90 rounded-lg text-black hover:bg-#f90-800" onClick={handleGetStarted}>
//             Get Started
//           </button>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <section className="hero relative flex flex-col items-center justify-center text-center h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('images/home hero image.avif')" }}>
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
//         <div className="z-10">
//         <h1 className="text-6xl font-bold text-custom-orange">Welcome to EduSphere</h1>

//         </div>
//       </section>

//       {/* Statistics Section */}
//       <section className="flex justify-center gap-20 mt-10 z-10">
//   <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg text-white text-center w-80 hover:bg-[#f90] hover:text-black transition duration-300">
//     <h3 className="text-xl font-bold">Courses</h3>
//     <p className="text-3xl font-bold">762k+</p>
//   </div>
//   <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg text-white text-center w-80 hover:bg-[#f90] hover:text-black transition duration-300">
//     <h3 className="text-xl font-bold">Students</h3>
//     <p className="text-3xl font-bold">300k+</p>
//   </div>
//   <div className="bg-gray-800 bg-opacity-80 p-6 rounded-lg text-white text-center w-80 hover:bg-[#f90] hover:text-black transition duration-300">
//     <h3 className="text-xl font-bold">17+ Years</h3>
//     <p className="text-xl">Educational Excellence</p>
//   </div>
// </section>


// {/* Container for the boxes */}
// <div className="container flex justify-between items-center p-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-24 z-20">
//   {/* Info Boxes */}
//   <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
//     <div className="front">
//       <h3 className="text-2xl font-bold">Learn More About Courses</h3>
//     </div>
//     <div className="back absolute top-0 right-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
//       <p className="text-lg text-center">Explore our diverse range of courses designed to enhance your skills. We offer courses in various domains like Computer Science, Data Science, and more! Our platform aims to provide quality education with the best resources available for all students at every level of expertise.</p>
//     </div>
//   </div>

//   <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
//     <div className="front">
//       <h3 className="text-2xl font-bold">Safe and Secure Platform</h3>
//     </div>
//     <div className="back absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
//       <p className="text-lg text-center">Your data is safe with us! We use the latest encryption technologies to ensure that your learning materials and information are protected at all times. We maintain strict security protocols to safeguard your privacy and educational data across all aspects of the platform.</p>
//     </div>
//   </div>

//   <div className="card w-[350px] h-[350px] p-6 bg-gray-800 rounded-lg text-yellow-900 text-center cursor-pointer perspective relative group transition-all duration-300 ease-out">
//     <div className="front">
//       <h3 className="text-2xl font-bold">Transparent Transactions</h3>
//     </div>
//     <div className="back absolute top-0 left-0 w-full h-full bg-gray-800 rounded-lg text-yellow-900 text-left p-6 flex items-center justify-center overflow-auto group-hover:w-[350px] group-hover:h-[350px] group-hover:text-sm">
//       <p className="text-lg text-left">We believe in full transparency. All transactions on our platform are recorded on the blockchain, ensuring security and accountability for all users. This decentralized approach allows us to offer transparent of every transaction made on the platform.</p>
//     </div>
//   </div>
// </div>



//       {/* Footer */}
//         {/* Footer */}
//         <footer className="bg-black text-white text-center py-10 mt-auto w-full z-50">
//         <div className="flex justify-center space-x-10">
//           <a href="#" className="text-custom-orange hover:text-yellow-800">About</a>
//           <a href="#" className="text-custom-orange hover:text-yellow-800">Privacy Policy</a>
//           <a href="#" className="text-custom-orange hover:text-yellow-800">Terms of Service</a>
//         </div>
//         <div className="mt-5">
//           <p className="text-sm">&copy; 2025 EduSphere. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default EduSphere;
