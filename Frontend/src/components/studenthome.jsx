import React, { useState,useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useTheme } from "next-themes";
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);}

const Edusphere = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div
      className={`${
        isDarkMode ? "bg-black text-gold" : "bg-white text-black"
      } transition-colors duration-300`}
    >
      {/* Navbar Section */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center space-x-2">
          <img src="/images/Edusphere logo.png" alt="Edusphere Logo" className="w-12 h-12" />
          <h1 className="text-4xl font-bold">Edusphere</h1>
        </div>
        <div className="space-x-6">
          <button className="text-lg bg-gradient-to-r from-gold to-gold text-black py-2 px-4 rounded-full">Home</button>
          <button className="text-lg bg-gradient-to-r from-gold to-gold text-black py-2 px-4 rounded-full">About</button>
          <button className="text-lg bg-gradient-to-r from-gold to-gold text-black py-2 px-4 rounded-full">
            Get Started
          </button>
        </div>
        {/* Light/Dark Mode Toggle */}
        <button className="dark-mode-toggle text-3xl" onClick={toggleTheme}>
          {isDarkMode ? '🌙' : '☀️'}
        </button>
      </nav>

      {/* Main Content Section */}
      <div className="container mx-auto py-14">
        <div className="flex justify-between items-center">
          {/* Left Side 3D Animation */}
          <div className="w-0.9">
            <DotLottieReact
              src="https://lottie.host/2fa8ee19-3348-4358-92c0-c3331ca12c20/BbbdUxJoOR.lottie"
              loop
              autoplay
              className="w-full h-[500px]"
            />
          </div>

          {/* Right Side Content */}
          <div className="w-1/2">
            <h2 className="text-6xl font-bold">Welcome to Edusphere</h2>
            <p className="mt-9 text-xl">
              Edusphere is a platform for educators and students powered by blockchain technology.
            </p>
            <p className="mt-4">
              Revolutionizing the way we learn and teach by giving users full control over their education data.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
<footer className="bg-gray-800 text-white py-4">
  <div className="flex justify-center items-center space-x-6">
    <button className="text-yellow-600">About Us</button>
    <span className="text-yellow-600">|</span>
    <button className="text-yellow-600">Contact Us</button>
    <span className="text-yellow-600">|</span>
    <p className="text-yellow-600">&copy; 2025 Edusphere. All Rights Reserved.</p>
  </div>
</footer>


    <div className="about-section mt-20">
  <h2 className="text-4xl font-bold text-center mb-12">About Edusphere</h2>
  <div className="space-y-12">
    {/* Box 1 */}
    <div
      className="flex items-center space-x-8 animate-on-scroll"
      style={{
        animationTimeline: "view()",
        animationRange: "entry 0",
      }}
    >
      {/* Left Side Animation */}
      <div className="w-1/2">
        <DotLottieReact
          src="https://lottie.host/35b0410c-5260-4043-982f-3abc2d505971/DgMX7iJaVi.lottie"
          loop
          autoplay
          className="w-full h-[400px]"
        />
      </div>
      {/* Right Side Content */}
      <div className="w-1/2">
        <h3 className="text-3xl font-semibold mb-4">Empowering Education</h3>
        <p className="text-lg">
          Explore our diverse range of courses designed to enhance your skills. We offer courses in various domains like Computer Science, Data Science, and more! Our platform aims to provide quality education with the best resources for all students at every level of expertise.
        </p>
      </div>
    </div>

    {/* Box 2 */}
    <div
      className="flex items-center space-x-8 animate-on-scroll"
      style={{
        animationTimeline: "view()",
        animationRange: "entry 0",
      }}
    >
      {/* Left Side Animation */}
      <div className="w-1/2">
        <DotLottieReact
          src="https://lottie.host/5603972b-ac23-48b5-84d9-19ac7ed462a3/FIokjQbPsW.lottie"
          loop
          autoplay
          className="w-full h-[400px]"
        />
      </div>
      {/* Right Side Content */}
      <div className="w-1/2">
        <h3 className="text-3xl font-semibold mb-4">Your Data, Your Control</h3>
        <p className="text-lg">
          Your data is safe with us! We use the latest encryption technologies to ensure that your learning materials and information are protected at all times. We maintain strict security protocols to safeguard your privacy.
        </p>
      </div>
    </div>

    {/* Box 3 */}
    <div
      className="flex items-center space-x-8 animate-on-scroll"
      style={{
        animationTimeline: "view()",
        animationRange: "entry 0",
      }}
    >
      {/* Left Side Animation */}
      <div className="w-1/2">
        <DotLottieReact
          src="https://lottie.host/c35cafd9-47c8-40d1-b8da-b1ec5f438ce8/BOkx6yNfDC.lottie"
          loop
          autoplay
          className="w-full h-[400px]"
        />
      </div>
      {/* Right Side Content */}
      <div className="w-1/2">
        <h3 className="text-3xl font-semibold mb-4">Transparent Transactions</h3>
        <p className="text-lg">
          All transactions on our platform are recorded on the blockchain, ensuring security and accountability for all users. This decentralized approach allows us to offer transparency for every transaction made on the platform.
        </p>
      </div>
    </div>
  </div>
</div>


      {/* Contact Section */}
      <div className="contact-section mt-20">
        <h2 className="text-3xl font-bold text-center">Contact Us</h2>
        <div className="flex justify-between items-center mt-8">
          {/* Contact Cards */}


          <div className="contact-card p-6 w-1/4 border-2 rounded-lg shadow-md">
  <img
    src="/images/educator.jpg" // Replace with the actual image source
    alt="Profile"
    className="w-full h-40 object-cover rounded-lg"
  />
  <div className="mt-4">
    <h3 className="text-xl font-bold">Karan Shah</h3>
    <p className="text-md font-semibold">College: VJTI</p>
    <p className="text-md">Branch: Computer Engineering</p>
    <p className="text-md">Specialization: Backend ,Blockchain Development</p>
  </div>
</div>

          <div className="contact-card p-6 w-1/4 border-2 rounded-lg shadow-md">
  <img
    src="/images/educator.jpg" // Replace with the actual image source
    alt="Profile"
    className="w-full h-40 object-cover rounded-lg"
  />
  <div className="mt-4">
    <h3 className="text-xl font-bold">Darshit Shah</h3>
    <p className="text-md font-semibold">College:VJTI</p>
    <p className="text-md">Branch: Computer Engineering</p>
    <p className="text-md">Specialization: Backend ,Blockchain Development</p>
  </div>
</div>

<div className="contact-card p-6 w-1/4 border-2 rounded-lg shadow-md">
  <img
    src="/images/educator.jpg" // Replace with the actual image source
    alt="Profile"
    className="w-full h-40 object-cover rounded-lg"
  />
  <div className="mt-4">
    <h3 className="text-xl font-bold">Harsh Pimple</h3>
    <p className="text-md font-semibold">College: VJTI</p>
    <p className="text-md">Branch: Computer Engineering</p>
    <p className="text-md">Specialization: Frontend , Blockchain Development</p>
  </div>
</div>


          <div className="contact-card p-6 w-1/4 border-2 rounded-lg shadow-md">
  <img
    src="/images/educator.jpg" // Replace with the actual image source
    alt="Profile"
    className="w-full h-40 object-cover rounded-lg"
  />
  <div className="mt-4">
    <h3 className="text-xl font-bold">Kavya Shah</h3>
    <p className="text-md font-semibold">College: VJTI</p>
    <p className="text-md">Branch: Computer Engineering</p>
    <p className="text-md">Specialization: Blockchain Development</p>
  </div>
</div>

          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default Edusphere;
