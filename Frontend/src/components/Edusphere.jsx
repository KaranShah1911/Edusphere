import React, { useState, useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "next-themes";


const Edusphere = () => {

  
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState({});

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  const sections = [
    {
      id: "section1",
      src: "https://lottie.host/35b0410c-5260-4043-982f-3abc2d505971/DgMX7iJaVi.lottie",
      title: "Empowering Educators",
      description: "Revolutionizing the education landscape with blockchain technology.",
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
  }, [sections]);
  

  const contacts = [
    {
      name: "John Doe",
      college: "VJTI",
      branch: "Computer Engineering",
      specialization: "Blockchain Development",
      image: "/images/educator.jpg"
    },
    {
      name: "Jane Smith",
      college: "VJTI",
      branch: "Electrical Engineering",
      specialization: "Renewable Energy",
      image: "/images/educator.jpg"
    },
    {
      name: "Alice Johnson",
      college: "VJTI",
      branch: "Mechanical Engineering",
      specialization: "Robotics",
      image: "/images/educator.jpg"
    },
    {
      name: "Bob Brown",
      college: "VJTI",
      branch: "Civil Engineering",
      specialization: "Structural Engineering",
      image: "/images/educator.jpg"
    }
  ];

  

  

  return (
    <div
      className={`${
        isDarkMode ? "bg-gradient-to-r from-black to-gray-700 text-amber-500" : "bg-gradient-to-r from-yellow-100 to-white text-black"
      } transition-colors duration-300`}
    >
      {/* Navbar Section */}
      <nav className="flex justify-between items-center p-6">
  <div className="flex items-center space-x-2">
    <img
      src="/images/Edusphere logo.png"
      alt="Edusphere Logo"
      className="w-20 h-12"
    />
    <h1 className="text-4xl font-bold bg-clip-text text-">Edusphere</h1>
  </div>
  <div className="flex items-center space-x-8">
    <div className="flex space-x-8">
    
    
        <button className="text-lg bg bg-gradient-to-r from-custom-orange to-yellow-200 text-black py-2 px-4 rounded-full">
          Home
        </button>
      
      
      <button className="text-lg bg-gradient-to-r from-custom-orange to-yellow-200 text-black py-2 px-4 rounded-full">
        About
      </button>

    
    
      <button className="text-lg bg-gradient-to-r from-custom-orange to-yellow-200 text-black py-2 px-4 rounded-full ">
        Get Started
      </button>
     
    </div>
    <button className="dark-mode-toggle text-3xl" onClick={toggleTheme}>
      {isDarkMode ? "🌙" : "☀️"}
    </button>
  </div>
</nav>
<div className="border-b-4 border-gold"></div>

      {/* Main Content Section */}
      <div className="container mx-auto py-14">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <DotLottieReact
              src="https://lottie.host/2fa8ee19-3348-4358-92c0-c3331ca12c20/BbbdUxJoOR.lottie"
              loop
              autoplay
              className="w-full h-[500px] flex justify-center"
            />
          </div>
          <div className="w-1/2">
          <div className="flex justify-left items-center ">
  <h2 className="relative text-6xl font-bold overflow-hidden whitespace-nowrap border-r-2 border-transparent animate-restart-loop">
    <span className="inline-block animate-text-appear overflow-hidden">
      Welcome to Edusphere
    </span>
  </h2>
</div>

            <p className="mt-9 text-xl">
              Edusphere is a platform for educators and students powered by
              blockchain technology.
            </p>
            <p className="mt-4">
              Revolutionizing the way we learn and teach by giving users full
              control over their education data.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about-section mt-20">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="border-b-4 border-gold -mt-9"></div>
        <div className="space-y-12">
          {sections.map((item, index) => (
            <div
              key={item.id}
              id={item.id}
              className={`flex flex-col md:flex-row items-center gap-12 mb-20 ${
                index % 2 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`md:w-1/2 transform transition-all duration-1000 ${
                  isVisible[item.id]
                    ? "translate-x-0 opacity-100"
                    : item.direction === "left"
                    ? "-translate-x-full opacity-0"
                    : "translate-x-full opacity-0"
                }`}
              >
                <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
              <div
                className={`md:w-1/2 transform transition-all duration-1000 ${
                  isVisible[item.id]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-24 opacity-0"
                }`}
              >
                <DotLottieReact
                  src={item.src}
                  loop
                  autoplay
                  className="w-full h-[400px] rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section mt-20">
  <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
  <div className="flex flex-wrap justify-center items-start space-y-8">
    {contacts.map((contact, idx) => (
      <div
        className={`w-full mb-8 flex flex-col lg:flex-row ${
          idx % 2 === 1 ? "lg:flex-row-reverse" : ""
        }`}
        key={idx}
      >
        {/* Image Card */}
        <div className="image-card p-6 w-full lg:w-1/2">
          <img
            src={contact.image}
            alt="Profile"
            className="w-50 h-64 object-cover rounded-lg" // Adjust height as needed
          />
        </div>

        {/* Contact Details Card */}
        <div className="details-card p-8 w-full lg:w-1/2 bg-gradient-to-r from-gold via-yellow-200 to-yellow-200 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800">{contact.name}</h3>
          <p className="text-md font-semibold text-gray-700">College: {contact.college}</p>
          <p className="text-md text-gray-700">Branch: {contact.branch}</p>
          <p className="text-md text-gray-700">Specialization: {contact.specialization}</p>
        </div>
      </div>
    ))}
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
