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
              <Link
                to="/"
                className={`group relative text-lg font-medium ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } hover:text-amber-500 transition-colors`}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                className={`group relative text-lg font-medium ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } hover:text-amber-500 transition-colors`}
                onClick={() => {
                  const element = document.getElementById("features");
                  if (element) {
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
                style={{ cursor: "pointer" }}
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
              </Link>

              <Link
                to="/role-selection"
                className={`group relative text-lg font-medium ${
                  isDarkMode ? "text-white" : "text-gray-900"
                } hover:text-amber-500 transition-colors`}
              >
                Get Started
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
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
        <div className="border-b-4 border-amber-300"></div>

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
              <p
                className={`text-xl mb-8 opacity-90 ${
                  isDarkMode ? "text-gray-300" : "text-gray-900"
                }`}
              >
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
        <section id="features" className="py-24">
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
                  <p
                    className={`text-xl opacity-90 leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-900"
                    }`}
                  >
                    {section.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
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
                        <p
                          className={
                            isDarkMode ? "text-gray-800" : "text-gray-600"
                          }
                        >
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
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  Revolutionizing education through blockchain technology
                </p>
              </div>
              <div className="flex space-x-12">
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  {["About", "Features", "Team", "Contact"].map((item) => (
                    <motion.a
                      whileHover={{ x: 5 }}
                      className={`block ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                      } hover:text-amber-500 transition-colors`}
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