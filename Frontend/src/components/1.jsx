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

//educator homepage
// import React, {useState} from 'react';
// import { useNavigate,Link } from "react-router-dom"; // Import useNavigate hook

// const EduSphere = () => {

//   const navigate = useNavigate(); // Hook for navigation
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(true);
//   const [walletConnected, setWalletConnected] = useState(false);

//    // Toggle Dropdown Menu
//    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

//    // Toggle Dark/Light Mode
//    const toggleDarkMode = () => setDarkMode(!darkMode);
  

//   // Function to handle MetaMask wallet connection
//   const handleConnectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         await window.ethereum.request({ method: "eth_requestAccounts" });
//         setWalletConnected(true);
//         alert("Wallet connected successfully!");
//       } catch (error) {
//         alert("Failed to connect wallet. Please try again.");
//       }
//     } else {
//       alert("MetaMask is not installed. Please install MetaMask and try again.");
//     }
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

//           .dark-mode {
//             background-color: #111;
//             color: #fff;
//           }
//           .light-mode {
//             background-color: #fff;
//             color: #000;
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
//              margin-left: -20px; /* Adjust to move to the left */
//              }



//             }
//              nav button:hover {
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

//           /* Dropdown Menu */
//           .dropdown {
//             position: relative;
//             display: inline-block;
//           }
//           .dropdown-button {
//             width: 40px;
//             height: 40px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             background-color: #000000;
//             border-radius: 10%;
//             cursor: pointer;
//           }
//           .dropdown-button:hover {
//             background-color: #fff;
//           }
//           .dropdown-content {
//             display: ${dropdownOpen ? "flex" : "none"};
//             flex-direction: column;
//             position: absolute;
//             top: 50px;
//             right: 0;
//             background-color: #333;
//             color: #fff;
//             padding: 15px;
//             box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
//             border-radius: 10px;
//             z-index: 1001;
//             gap: 10px;
//           }
//           .dropdown-content a {
//             text-decoration: none;
//             color: #f90;
//             padding: 8px 12px;
//             border-radius: 5px;
//           }
//           .dropdown-content a:hover {
//             background-color: #444;
//           }
//           .dropdown-content .toggle-switch {
//             display: flex;
//             justify-content: space-between;
//             align-items: center;
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
//             background: url('images/home hero image.avif') no-repeat center center/cover;
//             position: relative;
//             overflow: hidden;
//             margin-top: 80px;
//             animation: fadeInImage 2s ease-out forwards;
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

//           /* Footer Styling */
//           footer {
//             background-color: #111;
//             color: #fff;
//             text-align: center;
//             padding: 20px;
//             position: relative;
//             bottom: 0;
//             width: 100%;
//           }
//           footer a {
//             color: #f90;
//             text-decoration: none;
//             margin: 0 15px;
//             font-size: 16px;
//           }
//           footer a:hover {
//             color: #ffae42;
//           }
//           footer .copyright {
//             font-size: 14px;
//             margin-top: 10px;
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
//             .disabled {
//             pointer-events: none;
//             opacity: 0.5;
//           }
//         `}
//       </style>

//       {/* Header */}
//       <header>
//         <div className="logo">
//           <img src="images/Edusphere logo.png" alt="EduSphere Logo" />
//           <span>EduSphere</span>
//         </div>
//         <nav>
//           <nav>
//                   <a href="#home" className={!walletConnected ? "disabled" : ""}>
//                       Home
//                     </a>
//                     <Link
//                       to="/createcourses"
//                       className={!walletConnected ? "disabled" : ""}
//                     >
//                       Create Courses
//                     </Link>
//                     <Link
//                       to="/studentsinsights"
//                       className={!walletConnected ? "disabled" : ""}
//                     >
//                       Students Insights
//                     </Link>
//                     <Link
//                       to="/reports"
//                       className={!walletConnected ? "disabled" : ""}
//                     >
//                       Reports
//                     </Link>
                   
//                   </nav>
//                   <button className="button" onClick={handleConnectWallet}>
//           {walletConnected ? "Wallet Connected" : "Connect Wallet"}
//         </button>

         
//         </nav>

//         {/* Dropdown Menu */}
//         <div className="dropdown">
//           <div className="dropdown-button" onClick={toggleDropdown}>
//             {/* Google Drive-style 9-dot icon */}
//             <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 10px)", gap: "3px" }}>
//               {Array.from({ length: 9 }).map((_, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     width: "10px",
//                     height: "10px",
//                     backgroundColor: "#f90",
//                     borderRadius: "50%",
//                   }}
//                 ></div>
//               ))}
//             </div>
//           </div>
//           <div className="dropdown-content">
//             <Link to="/profile">Profile</Link>
//             <Link to="/coins">Coins</Link>
//             <Link to="/managecourses">Manage Courses</Link>
//             <Link to="/progress">Progress</Link>
//             <Link to="/certification">Certification</Link>
//             <div className="toggle-switch">
              
//               <button className="button" onClick={toggleDarkMode}>
//                 {darkMode ? "Switch to Light" : "Switch to Dark"}
//               </button>
              
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="hero">
//         <div className="hero-overlay"></div>
//         <div className="hero-content">
//           <h1 className="hero-title">Welcome to EduSphere</h1>
//         </div>
//       </section>

//       {/* Statistics Section */}
//       <section className="stats">
//         <div className="stat-box">
//           <h3>Courses</h3>
//           <p>762k+</p>
//         </div>
//         <div className="stat-box">
//           <h3>Students</h3>
//           <p>300k+</p>
//         </div>
//         <div className="stat-box">
//           <h3>17+ Years</h3>
//           <p>Educational Excellence</p>
//         </div>
//       </section>

//       {/* Container for the boxes */}
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
//       <footer>
//         <div>
//           <a href="#">About</a>
//           <a href="#">Privacy Policy</a>
//           <a href="#">Terms of Service</a>
//         </div>
//         <div className="copyright">
//           <p>&copy; 2025 EduSphere. All Rights Reserved.</p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default EduSphere;


//contest
// import React, { Component } from 'react';
// import Slider from "react-slick";
// import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for light and dark mode
// import { Link } from "react-router-dom";

// class Contest extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contests: [],
//       loading: true,
//       theme: 'light', // State for theme
//       walletAddress: null, // Placeholder for wallet address
//       isWalletClicked: false, // State for wallet click
//       dropdownOpen: false, // State for dropdown menu
//     };
//     document.title = "Coding Contests - Codeforces";
//   }

//   async componentDidMount() {
//     let url = `https://codeforces.com/api/contest.list?gym=true/contest`;

//     try {
//       let data = await fetch(url);
//       let parsedData = await data.json();
//       const filteredContests = parsedData.result.filter(
//         contest => contest.phase === "BEFORE" || contest.phase === "CODING"
//       );
//       this.setState({ contests: filteredContests, loading: false });
//     } catch (error) {
//       console.error("Failed to fetch contests:", error);
//       this.setState({ loading: false });
//     }
//   }

//   toggleTheme = () => {
//     this.setState((prevState) => ({
//       theme: prevState.theme === 'light' ? 'dark' : 'light',
//     }));
//   };

//   connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//         this.setState({ walletAddress: accounts[0] });
//       } catch (error) {
//         console.error("Failed to connect wallet:", error);
//       }
//     } else {
//       alert("MetaMask is not installed. Please install MetaMask to connect your wallet.");
//     }
//   };

//   toggleDropdown = () => {
//     this.setState((prevState) => ({
//       dropdownOpen: !prevState.dropdownOpen,
//     }));
//   };

//   render() {
//     const { contests, loading, theme, walletAddress, dropdownOpen } = this.state;

//     const isDark = theme === 'dark';
//     const themeClasses = isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800';

//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 1000,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       slidesToShow: 3, // Show 3 contests at a time
//       slidesToScroll: 1,
//     };

//     const isWalletConnected = !!walletAddress;

//     return (
//       <div className={`${isDark ? "bg-gradient-to-r from-black to-gray-700 text-gold" : "bg-gradient-to-r from-yellow-100 to-yellow-100 text-black"} transition-colors duration-300`}>
//         {/* Navbar Section */}
//         <nav className="flex justify-between items-center p-6">
//           <div className="flex items-center space-x-2">
//             <img
//               src="/images/Edusphere logo.png"
//               alt="Edusphere Logo"
//               className="w-20 h-12"
//             />
//             <h1 className="text-4xl font-bold">Edusphere</h1>
//           </div>
//           <div className="flex items-center space-x-8">
//             <div className="flex space-x-8">
//               <Link to="/Edusphere">
//                 <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
//                   Home
//                 </button>
//               </Link>
//               <Link to="/courses">
//                 <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
//                   Courses
//                 </button>
//               </Link>
//               <Link to="/contest">
//                 <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
//                   Contest
//                 </button>
//               </Link>
//             </div>

//             {/* Wallet Button or Address */}
//             <button
//               className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full"
//               onClick={this.connectWallet}
//             >
//               {isWalletConnected
//                 ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
//                 : "Connect Wallet"}
//             </button>

//             {/* Theme toggle */}
//             <button className="text-3xl" onClick={this.toggleTheme}>
//               {isDark ? <FaMoon className="text-yellow-300" /> : <FaSun className="text-gray-800" />}
//             </button>

//             {/* Dropdown Menu */}
//             <div className="relative">
//               <button
//                 onClick={this.toggleDropdown}
//                 className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full"
//               >
//                 ☰
//               </button>

//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
//                   <ul>
//                     <li
//                       className={`p-2 cursor-pointer ${!isWalletConnected ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
//                       onClick={() => isWalletConnected && console.log("Add Details")}
//                     >
//                       Add Details
//                     </li>
//                     <li
//                       className={`p-2 cursor-pointer ${!isWalletConnected ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
//                       onClick={() => isWalletConnected && console.log("Coins")}
//                     >
//                       Coins
//                     </li>
//                     <li
//                       className={`p-2 cursor-pointer ${!isWalletConnected ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
//                       onClick={() => isWalletConnected && console.log("Manage Courses")}
//                     >
//                       Manage Courses
//                     </li>
//                     <li
//                       className={`p-2 cursor-pointer ${!isWalletConnected ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
//                       onClick={() => isWalletConnected && console.log("Redeem")}
//                     >
//                       Redeem
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>
//         </nav>
//         <div className="border-b-4 border-gold"></div>

//         <div className={`container mx-auto my-1 p-8 rounded-lg shadow-lg ${isDark ? 'bg-gray-700 text-white' : 'bg-gradient-to-r from-yellow-100 to-white text-black'}`}>
//           <header className="text-center mb-8">
//             <h1 className="text-3xl font-bold">Coding Contests</h1>
//           </header>

//           {loading && <div className="text-center">Loading contests...</div>}

//           {!loading && (
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {contests.map((contest) => (
//                 <div key={contest.id} className={`rounded-lg p-6 shadow-md ${isDark ? 'bg-gradient-to-r from-gold via-yellow-200 to-black text-black' : 'bg-gradient-to-r from-yellow-200 to-gray-100 text-black'}`}>
//                   <div className="text-center">
//                     <h5 className="text-xl font-semibold">{contest.name}</h5>
//                     <p className="mt-2">
//                       <strong>Start Time:</strong> {new Date(contest.startTimeSeconds * 1000).toLocaleString()} <br />
//                       <strong>Duration:</strong> {Math.floor(contest.durationSeconds / 3600)}h {Math.floor((contest.durationSeconds % 3600) / 60)}m
//                     </p>
//                     <p className="mt-2">
//                       <strong>Type:</strong> {contest.type} <br />
//                       <strong>Phase:</strong> {contest.phase}
//                     </p>
//                     <a
//                       href={`https://codeforces.com/contests/${contest.id}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`mt-4 inline-block px-4 py-2 rounded ${isDark ? 'bg-blue-500 text-gray-800' : 'bg-blue-500 text-gray-900'}`}
//                     >
//                       View Contest
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           <footer className={`text-center mt-28 p-4 my-10 rounded-lg w-100% ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}>
//             <p>&copy; 2025 Codeforces | All rights reserved</p>
//           </footer>
//         </div>
//       </div>
//     );
//   }
// }

// export default Contest;






// import React, { useState, useEffect, useRef } from "react";
// import { useTheme } from "next-themes";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { Link } from "react-router-dom";
// import { 
//   FiSun, FiMoon, FiX, FiUser, FiDollarSign, 
//   FiBook, FiGift, FiSettings, FiCopy 
// } from "react-icons/fi";
// import { TbCoin } from "react-icons/tb";
// import { Tooltip } from 'react-tooltip';
// import { motion, AnimatePresence } from 'framer-motion';

// const Edusphere = () => {
//   // 1. First declare all hooks
//   const { theme, setTheme } = useTheme();
//   const [walletAddress, setWalletAddress] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [walletConnected, setWalletConnected] = useState(false);
//   const dropdownRef = useRef(null);
//   const [mounted, setMounted] = useState(false);

//   // 2. Then use effects
//   useEffect(() => {
//     setMounted(true);
    
//     const checkConnectedWallet = async () => {
//       if (typeof window.ethereum !== 'undefined') {
//         try {
//           const accounts = await window.ethereum.request({ 
//             method: 'eth_accounts' 
//           });
//           if (accounts.length > 0) {
//             setWalletAddress(accounts[0]);
//             setWalletConnected(true);
//           }
//         } catch (error) {
//           console.error("Error checking accounts:", error);
//         }
//       }
//     };
    
//     checkConnectedWallet();
//   }, []);

//   // 3. Then conditional return
//   if (!mounted) return null;

//   // 4. Then derived state
//   const isDarkMode = theme === "dark";

//   // Handle account changes
//   useEffect(() => {
//     if (window.ethereum) {
//       const handleAccountsChanged = (accounts) => {
//         if (accounts.length === 0) {
//           // Disconnected
//           setWalletConnected(false);
//           setWalletAddress("");
//         } else {
//           // Account changed
//           setWalletAddress(accounts[0]);
//           setWalletConnected(true);
//         }
//       };

//       window.ethereum.on('accountsChanged', handleAccountsChanged);
//       return () => {
//         window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
//       };
//     }
//   }, []);

//   const connectWallet = async () => {
//     if (window.ethereum) {
//       try {
//         const accounts = await window.ethereum.request({ 
//           method: 'eth_requestAccounts' 
//         });
//         setWalletAddress(accounts[0]);
//         setWalletConnected(true);
//         setDropdownOpen(false);
//       } catch (error) {
//         console.error("Error connecting to MetaMask:", error);
//       }
//     } else {
//       const installMetaMask = confirm("MetaMask is required. Would you like to install it?");
//       if (installMetaMask) window.open("https://metamask.io/download/", "_blank");
//     }
//   };

//   const copyToClipboard = () => {
//     navigator.clipboard.writeText(walletAddress);
//     alert("Wallet address copied to clipboard!");
//   };

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [dropdownRef]); // This is fine
  

//   const toggleTheme = () => setTheme(isDarkMode ? "light" : "dark");

//   return (
//     <div className={`min-h-screen flex flex-col ${isDarkMode ? 
//       "bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100" : 
//       "bg-gradient-to-br from-amber-50 to-amber-100 text-gray-900"
//     }`}>
//       {/* Navbar */}
//       <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-amber-200/30 shadow-lg">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <Link 
//               to="/Edusphere" 
//               className="flex items-center space-x-4 hover:scale-105 transition-transform"
//             >
//               <img
//                 src="/images/Edusphere logo.png"
//                 alt="Edusphere Logo"
//                 className="w-24 h-14 object-contain"
//               />
//               <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
//                 Edusphere
//               </h1>
//             </Link>

//             <div className="hidden lg:flex items-center space-x-6">
//               <nav className="flex space-x-6">
//                 <Link 
//                   to="/Edusphere" 
//                   className="group relative text-lg font-medium hover:text-amber-500 transition-colors"
//                 >
//                   Home
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//                 </Link>
//                 <Link 
//                   to="/courses" 
//                   className="group relative text-lg font-medium hover:text-amber-500 transition-colors"
//                 >
//                   Courses
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//                 </Link>
//                 <Link 
//                   to="/contest" 
//                   className="group relative text-lg font-medium hover:text-amber-500 transition-colors"
//                 >
//                   Contest
//                   <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
//                 </Link>
//               </nav>
//             </div>

//             <div className="flex items-center space-x-4">
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`flex items-center gap-2 px-4 py-2 rounded-full ${
//                   walletConnected 
//                     ? 'bg-emerald-500/20 text-emerald-400' 
//                     : 'bg-amber-500 hover:bg-amber-600 text-white'
//                 } transition-colors`}
//                 onClick={walletConnected ? undefined : connectWallet}
//               >
//                 {walletConnected ? (
//                   <>
//                     <span className="hidden sm:inline">
//                       {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
//                     </span>
//                     <FiCopy 
//                       className="hover:text-amber-400 transition-colors ml-2"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         copyToClipboard();
//                       }}
//                       data-tooltip-id="copy-tooltip"
//                     />
//                   </>
//                 ) : (
//                   <>
//                     <span>Connect Wallet</span>
//                     <TbCoin className="ml-2" />
//                   </>
//                 )}
//               </motion.button>

//               <button
//                 onClick={toggleTheme}
//                 className="p-2 rounded-full bg-amber-100/10 hover:bg-amber-500/20 transition-colors"
//               >
                
//                 {isDarkMode ? (
//                   <FiMoon className="w-6 h-6 text-amber-400" />
//                 ) : (
//                   <FiSun className="w-6 h-6 text-amber-600" />
//                 )}
//               </button>

//                   <div className="relative" ref={dropdownRef}>
//                 <button
//                   onClick={() => walletConnected && setDropdownOpen(!dropdownOpen)}
//                   className={`p-2 rounded-full transition-colors ${
//                     walletConnected 
//                       ? "bg-amber-100/10 hover:bg-amber-500/20 cursor-pointer"
//                       : "opacity-50 cursor-not-allowed"
//                   }`}
//                   disabled={!walletConnected}
//                 >
//                     ☰
                 
//                 </button>

//                 <AnimatePresence>
//                 {dropdownOpen && walletConnected && (
//                     <motion.div
//                       initial={{ opacity: 0, y: -10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       className={`absolute right-0 mt-2 w-64 origin-top-right rounded-xl shadow-xl backdrop-blur-lg ${
//                         isDarkMode 
//                           ? "bg-gray-800/95 border border-gray-700" 
//                           : "bg-white/95 border border-amber-100"
//                       }`}
//                     >
//                       <div className="p-2 space-y-1">
//                         <Link 
//                           to="/profile" 
//                           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
//                         >
//                           <FiUser className="text-amber-500" />
//                           <span>Profile</span>
//                         </Link>
//                         <button className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors w-full">
//                           <TbCoin className="text-amber-500" />
//                           <span>Coins</span>
//                           <span className="ml-auto px-2 py-1 bg-amber-500/10 text-amber-600 rounded-full text-sm">
//                             120
//                           </span>
//                         </button>
//                         <Link 
//                           to="/transactions" 
//                           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
//                         >
//                           <FiDollarSign className="text-amber-500" />
//                           <span>Transactions</span>
//                         </Link>
//                         <Link 
//                           to="/courses" 
//                           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
//                         >
//                           <FiBook className="text-amber-500" />
//                           <span>My Courses</span>
//                         </Link>
//                         <Link 
//                           to="/redeem" 
//                           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
//                         >
//                           <FiGift className="text-amber-500" />
//                           <span>Redeem</span>
//                         </Link>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Main Content */}
//       <main className="flex-1 container mx-auto px-6 py-16">
//         <div className="flex flex-col lg:flex-row items-center justify-between">
//           <div className="lg:w-1/2 mb-12 lg:mb-0">
//             <DotLottieReact
//               src="https://lottie.host/b3d4cb2f-dce5-406a-938f-0ed9f0b58974/k1qWoZHhWD.lottie"
//               loop
//               autoplay
//               className="w-full max-w-2xl"
//             />
//           </div>

//           <div className="lg:w-1/2 space-y-8">
//             <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent leading-tight">
//               Revolutionizing Education with Blockchain
//             </h2>
//             <p className={`text-xl ${isDarkMode ? "text-amber-100/80" : "text-gray-600"} leading-relaxed`}>
//               Empower your learning journey with decentralized education. 
//               Take control of your academic credentials and earn rewards 
//               through Web3 technology.
//             </p>
//             <div className="flex space-x-4">
//               <Link 
//                 to="/courses" 
//                 className="bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-600 hover:to-amber-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-amber-500/30 transition-all duration-300"
//               >
//                 Explore Courses
//               </Link>
//               <button className="px-8 py-4 rounded-full border-2 border-amber-500 text-amber-500 hover:bg-amber-500/10 transition-colors duration-300 font-semibold">
//                 How It Works
//               </button>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="border-t border-amber-500/20 mt-24">
//         <div className="container mx-auto px-6 py-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="flex items-center space-x-4 mb-4 md:mb-0">
//               <img
//                 src="/images/Edusphere logo.png"
//                 alt="Edusphere Logo"
//                 className="w-16 h-10 opacity-80"
//               />
//               <p className={`${isDarkMode ? "text-amber-100/80" : "text-gray-500"}`}>
//                 © 2025 Edusphere. All rights reserved.
//               </p>
//             </div>
//             <div className="flex space-x-8">
//               <button className={`${isDarkMode ? "text-amber-100/80" : "text-gray-500"} hover:text-amber-500 transition-colors`}>
//                 Privacy Policy
//               </button>
//               <button className={`${isDarkMode ? "text-amber-100/80" : "text-gray-500"} hover:text-amber-500 transition-colors`}>
//                 Terms of Service
//               </button>
//               <button className={`${isDarkMode ? "text-amber-100/80" : "text-gray-500"} hover:text-amber-500 transition-colors`}>
//                 Contact Us
//               </button>
//             </div>
//           </div>
//         </div>
//       </footer>

//       <Tooltip id="copy-tooltip" place="bottom" content="Copy address" />

//     </div>
//   );
// };

// export default Edusphere;
