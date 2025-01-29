// import React, { useState, useEffect } from "react";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { useTheme } from "next-themes";
// import { Link } from "react-router-dom";

// const sections = [
//   {
//     id: "section1",
//     src: "https://lottie.host/35b0410c-5260-4043-982f-3abc2d505971/DgMX7iJaVi.lottie",
//     title: "Empowering Educators",
//     description: "Revolutionizing the education landscape with blockchain technology.",
//     direction: "left",
//   },
//   {
//     id: "section2",
//     src: "https://lottie.host/5603972b-ac23-48b5-84d9-19ac7ed462a3/FIokjQbPsW.lottie",
//     title: "Student Ownership",
//     description: "Providing students full control over their educational data.",
//     direction: "right",
//   },
//   {
//     id: "section3",
//     src: "https://lottie.host/c35cafd9-47c8-40d1-b8da-b1ec5f438ce8/BOkx6yNfDC.lottie",
//     title: "Secure & Transparent",
//     description: "Ensuring security and transparency in learning transactions.",
//     direction: "left",
//   },
// ];
//   const Edusphere = () => {

  //     const isDarkMode = useThemeStore((state) => state.isDarkMode);
  // const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
//     const { theme, setTheme } = useTheme();
//     const [isVisible, setIsVisible] = useState({});

//     const toggleTheme = () => {
//       setIsDarkMode(!isDarkMode);
//       setTheme(isDarkMode ? "light" : "dark");
//     };

//   useEffect(() => {
//     const handleScroll = () => {
//       const updatedVisibility = {};
//       sections.forEach((section) => {
//         const element = document.getElementById(section.id);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           updatedVisibility[section.id] =
//             rect.top <= window.innerHeight && rect.bottom >= 0;
//         }
//       });
//       setIsVisible(updatedVisibility);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll(); // Check visibility on page load
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const contacts = [
//     {
//       name: "John Doe",
//       college: "VJTI",
//       branch: "Computer Engineering",
//       specialization: "Blockchain Development",
//       image: "/images/educator.jpg"
//     },
//     {
//       name: "Jane Smith",
//       college: "VJTI",
//       branch: "Electrical Engineering",
//       specialization: "Renewable Energy",
//       image: "/images/educator.jpg"
//     },
//     {
//       name: "Alice Johnson",
//       college: "VJTI",
//       branch: "Mechanical Engineering",
//       specialization: "Robotics",
//       image: "/images/educator.jpg"
//     },
//     {
//       name: "Bob Brown",
//       college: "VJTI",
//       branch: "Civil Engineering",
//       specialization: "Structural Engineering",
//       image: "/images/educator.jpg"
//     }
//   ];

//   return (
//     <div className="overflow-x-hidden">
//     <div
//       className={`${
//         isDarkMode ? "bg-gradient-to-r from-black to-gray-700 text-amber-500" : "bg-gradient-to-r from-yellow-100 to-white text-black"
//       } transition-colors duration-300`}
//     >
//       {/* Navbar Section */}
//       <nav className="flex justify-between items-center p-6">
//   <div className="flex items-center space-x-2">
//     <img
//       src="/images/Edusphere logo.png"
//       alt="Edusphere Logo"
//       className="w-20 h-12"
//     />
//     <h1 className="text-4xl font-bold bg-clip-text text">Edusphere</h1>
//   </div>
//   <div className="flex items-center space-x-8">
//     <div className="flex space-x-8">

//         <button className="text-lg bg bg-gradient-to-r from-custom-orange to-yellow-200 text-black py-2 px-4 rounded-full">
//           Home
//         </button>

//       <button className="text-lg bg-gradient-to-r from-custom-orange to-yellow-200 text-black py-2 px-4 rounded-full"
//        onClick={() => {
//         const element = document.getElementById("features");
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       }}>
//         About
//       </button>

//       <Link to="/role-selection">
//       <button className="text-lg bg-gradient-to-r from-custom-orange to-yellow-200 text-black py-2 px-4 rounded-full ">
//         Get Started
//       </button>
//       </Link>

//     </div>
//     <button className="dark-mode-toggle text-3xl" onClick={toggleTheme}>
//       {isDarkMode ? "🌙" : "☀️"}
//     </button>
//   </div>
// </nav>
// <div className="border-b-4 border-gold"></div>

//       {/* Main Content Section */}
//       <div className="container mx-auto py-14">
//         <div className="flex justify-between items-center">
//           <div className="w-1/2">
//             <DotLottieReact
//               src="https://lottie.host/2fa8ee19-3348-4358-92c0-c3331ca12c20/BbbdUxJoOR.lottie"
//               loop
//               autoplay
//               className="w-full h-[500px] flex justify-center"
//             />
//           </div>
//           <div className="w-1/2">
//           <div className="flex justify-left items-center ">
//   <h2 className="relative text-6xl font-bold overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-restart-loop">
//     <span className="inline-block animate-text-appear overflow-hidden">
//       Welcome to Edusphere
//     </span>
//   </h2>
// </div>

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

//       {/* About Section */}
//       <div id="features" className="about-section mt-20">
//         <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
//         <div className="border-b-4 border-gold mb-9"></div>
//         <div className="space-y-12">
//           {sections.map((item, index) => (
//             <div
//               key={item.id}
//               id={item.id}
//               className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${
//                 index % 2 ? "md:flex-row-reverse" : ""
//               }`}
//             >
//               <div
//                 className={`md:w-1/2 transform transition-all duration-1000 ${
//                   isVisible[item.id]
//                     ? "translate-x-0 opacity-100"
//                     : item.direction === "left"
//                     ? "-translate-x-full opacity-0"
//                     : "translate-x-full opacity-0"
//                 }`}
//               >
//                 <h3 className="text-3xl font-bold mb-4 p-10">{item.title}</h3>
//                 <p className="text-lg p-10">{item.description}</p>
//               </div>
//               <div
//                 className={`md:w-1/2 transform transition-all duration-1000 ${
//                   isVisible[item.id]
//                     ? "translate-y-0 opacity-100"
//                     : "translate-y-24 opacity-0"
//                 }`}
//               >
//                 <DotLottieReact
//                   src={item.src}
//                   loop
//                   autoplay
//                   className="w-full h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="contact-section mt-20 px-6">

//   <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
//   <div className="border-b-4 border-gold mb-9"></div>
//   <div className="flex flex-wrap justify-center items-start space-y-8">
//     {contacts.map((contact, idx) => (
//       <div
//         className={`w-full mb-8 flex flex-col lg:flex-row ${
//           idx % 2 === 1 ? "lg:flex-row-reverse" : ""
//         }`}
//         key={idx}
//       >
//         {/* Image Card */}
//         <div className="image-card p-6 w-full lg:w-1/2">
//           <img
//             src={contact.image}
//             alt="Profile"
//             className="w-50 h-64 object-cover rounded-lg" // Adjust height as needed
//           />
//         </div>

//         {/* Contact Details Card */}
//         <div className="details-card p-8 w-full lg:w-1/2 bg-gradient-to-r from-gold via-yellow-200 to-yellow-200 rounded-lg">
//           <h3 className="text-xl font-bold text-gray-800">{contact.name}</h3>
//           <p className="text-md font-semibold text-gray-700">College: {contact.college}</p>
//           <p className="text-md text-gray-700">Branch: {contact.branch}</p>
//           <p className="text-md text-gray-700">Specialization: {contact.specialization}</p>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

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
//     </div>
//   );
// };

// export default Edusphere;

import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "next-themes";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useThemeStore } from "../store/themeStore";

const sections = [
  {
    id: "section1",
    src: "https://lottie.host/35b0410c-5260-4043-982f-3abc2d505971/DgMX7iJaVi.lottie",
    title: "Empowering Educators",
    description:
      "Revolutionizing the education landscape with blockchain technology.",
    direction: "left",
  },
  {
    id: "section2",
    src: "https://lottie.host/5603972b-ac23-48b5-84d9-19ac7ed462a3/FIokjQbPsW.lottie",
    title: "Student Ownership",
    description: "Providing students full control over their educational data.",
    direction: "right",
  },
  {
    id: "section3",
    src: "https://lottie.host/c35cafd9-47c8-40d1-b8da-b1ec5f438ce8/BOkx6yNfDC.lottie",
    title: "Secure & Transparent",
    description: "Ensuring security and transparency in learning transactions.",
    direction: "left",
  },
];

const Edusphere = () => {
    const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState({});
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  useEffect(() => {
    const handleScroll = () => {
      const updatedVisibility = {};
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          updatedVisibility[section.id] =
            rect.top <= window.innerHeight && rect.bottom >= 0;
        }
      });
      setIsVisible(updatedVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contacts = [
    {
      name: "John Doe",
      college: "VJTI",
      branch: "Computer Engineering",
      specialization: "Blockchain Development",
      image: "/images/educator.jpg",
    },
    {
      name: "Jane Smith",
      college: "VJTI",
      branch: "Electrical Engineering",
      specialization: "Renewable Energy",
      image: "/images/educator.jpg",
    },
    {
      name: "Alice Johnson",
      college: "VJTI",
      branch: "Mechanical Engineering",
      specialization: "Robotics",
      image: "/images/educator.jpg",
    },
    {
      name: "Bob Brown",
      college: "VJTI",
      branch: "Civil Engineering",
      specialization: "Structural Engineering",
      image: "/images/educator.jpg",
    },
  ];

  // ... existing state and effects

  return (
    <div className="overflow-x-hidden">
      <div
        className={`relative min-h-screen ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-50 via-amber-50 to-blue-50"
        } 
        transition-all duration-500`}
      >
        {/* Animated Background Elements */}
        <motion.div
          className="absolute top-20 -left-20 w-72 h-72 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full blur-3xl opacity-30"
          style={{ y: y1 }}
        />
        <motion.div
          className="absolute top-1/2 right-0 w-64 h-64 bg-gradient-to-l from-purple-400 to-blue-300 rounded-full blur-3xl opacity-30"
          style={{ y: y2 }}
        />

        {/* Enhanced Navbar */}
        <nav className="sticky top-0 z-50 backdrop-blur-md border-b border-opacity-10 border-gray-500">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3"
            >
              <img
                src="/images/Edusphere logo.png"
                alt="Logo"
                className="w-20 h-12 rounded-full shadow-lg"
              />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-500 to-yellow-400 bg-clip-text text-transparent">
                Edusphere
              </h1>
            </motion.div>

            <div className="flex items-center gap-6">
              <button className="text-lg bg bg-gradient-to-r from-custom-orange to-yellow-200 text-black py-2 px-4 rounded-full">
                Home
              </button>

              <button
                className="text-lg bg-gradient-to-r from-custom-orange to-yellow-200 text-black py-2 px-4 rounded-full"
                onClick={() => {
                  const element = document.getElementById("features");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                About
              </button>

              <Link to="/role-selection">
                <button className="text-lg bg-gradient-to-r from-custom-orange to-yellow-200 text-black py-2 px-4 rounded-full ">
                  Get Started
                </button>
              </Link>
              <motion.button
                whileHover={{ rotate: 15 }}
                className="text-3xl p-2 rounded-full bg-opacity-20 backdrop-blur-sm"
                onClick={toggleTheme}
              >
                {isDarkMode ? "🌙" : "☀️"}
              </motion.button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-24 pb-36">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 mb-16 lg:mb-0"
            >
              <h1 className="text-6xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-amber-500 to-amber-300 bg-clip-text text-transparent">
                  Revolutionizing
                </span>
                <br />
                <span className="text-4xl text-amber-500">
                  Education Through Blockchain
                </span>
              </h1>
              <p className="text-xl mb-8 opacity-90 text-gray-500">
                Empowering learners and educators with decentralized, secure,
                and transparent educational experiences.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} className="inline-block">
                <Link
                  to="/role-selection"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Start Learning Now
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:w-1/2"
            >
              <DotLottieReact
                src="https://lottie.host/2fa8ee19-3348-4358-92c0-c3331ca12c20/BbbdUxJoOR.lottie"
                loop
                autoplay
                className="w-full h-96 transform hover:scale-105 transition-transform"
              />
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-20">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Why Choose Edusphere?
              </span>
            </h2>

            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col ${
                  index % 2 ? "lg:flex-row-reverse" : "lg:flex-row"
                } 
                  items-center gap-12 mb-36`}
              >
                <div className="lg:w-1/2 relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                  <DotLottieReact
                    src={section.src}
                    loop
                    autoplay
                    className="w-full h-96 rounded-2xl transform group-hover:scale-[1.02] transition-transform"
                  />
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                    {section.title}
                  </h3>
                  <p className="text-xl opacity-90 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-24 bg-opacity-50 backdrop-blur-lg">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-20">
              <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Meet Our Team
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {contacts.map((contact, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -10 }}
                  className={`p-1 rounded-3xl bg-gradient-to-r from-amber-400 to-yellow-300 
                    ${
                      index % 2 ? "md:rotate-1" : "md:-rotate-1"
                    } hover:rotate-0 transition-all`}
                >
                  <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 flex items-center gap-8">
                    <img
                      src={contact.image}
                      alt={contact.name}
                      className="w-32 h-32 rounded-2xl object-cover shadow-lg"
                    />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {contact.name}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">College:</span>{" "}
                          {contact.college}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Branch:</span>{" "}
                          {contact.branch}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          <span className="font-semibold">Specialization:</span>{" "}
                          {contact.specialization}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-opacity-10 border-gray-500">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-4">
                <img
                  src="/images/Edusphere logo.png"
                  alt="Logo"
                  className="w-24 opacity-90"
                />
                <p className="text-gray-500 dark:text-gray-400">
                  Revolutionizing education through blockchain technology
                </p>
              </div>
              <div className="flex space-x-12">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  {["About", "Features", "Team", "Contact"].map((item) => (
                    <motion.a
                      key={item}
                      whileHover={{ x: 5 }}
                      className="block text-gray-500 dark:text-gray-400 hover:text-amber-500 transition-colors"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-opacity-10 text-center text-gray-500 dark:text-gray-400">
              © 2024 Edusphere. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Edusphere;
