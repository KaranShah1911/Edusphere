import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { ethers } from "ethers";


const MetaMask = () => {
  const [provider, setProvider] = useState(null);

  const connectProvider = () => {
    const jsonRpcProvider = new ethers.providers.JsonRpcProvider("https://your_rpc_url");
    setProvider(jsonRpcProvider);
  };
};

const RoleSelection = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const connectToMetaMask = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed. Please install it to continue.");
        return null;
      }
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts", []);
      const signer = provider.getSigner();
      const userAddress = await signer.getAddress();
      console.log("Connected MetaMask address:", userAddress);
      return userAddress;
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
      alert("Failed to connect to MetaMask. Please try again.");
      return null;
    }
  };

  const handleRoleSelection = async (role) => {
    const userAddress = await connectToMetaMask();
    if (userAddress) {
      alert(`Connected with MetaMask: ${userAddress}\nRole selected: ${role}`);
      sessionStorage.setItem("role", role);
      sessionStorage.setItem("address", userAddress);
      

      // Navigate to signup, then further redirect based on role
      navigate("/signup", { state: { role } });
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 2 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, delay: 0.75, duration: 5 } },
  };

  return (
    <div
      style={{
        margin: "0",
        fontFamily: "Arial, sans-serif",
        background: theme === "light" ? "linear-gradient(to right,rgb(255,153,0),#404040)" : "linear-gradient(to right,rgb(26, 27, 30), #404040)",
        color: theme === "light" ? "#0c0c0c" : "#fbf8f8",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        padding: "0 1rem",
        overflow: "hidden",
      }}
    >
      {/* Light/Dark Mode Toggle Button */}
      <button
        onClick={toggleTheme}
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          backgroundColor: theme === "light" ? "#f90" : "#333",
          color: theme === "light" ? "#fff" : "#fff",
          padding: "1rem 2.5rem",
          fontSize: "1rem",
          fontWeight: "bold",
          border: "none",
          borderRadius: "50px",
          cursor: "pointer",
        }}
      >
        <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
      </button>

      {/* Logo and Text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "4rem",
          fontWeight: "bold",
          marginBottom: "2rem",
          textShadow: theme === "dark" ? "2px 2px 5px rgba(0, 0, 0, 0.3)" : "none",
          color: theme === "dark" ? "linear-gradient(to right, rgb(0, 0, 0), #404040)" : "rgb(255, 153, 0)",
        }}
      >
        <img
          src="/images/Edusphere logo.png"
          alt="Edusphere Logo"
          style={{
            width: "50px",
            height: "50px",
            marginRight: "1rem",
          }}
        />
        Edusphere
      </div>

      {/* Role Images and Descriptions */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginBottom: "2rem",
        }}
      >
        {/* Educator */}
        <motion.div
          style={{ textAlign: "center", margin: "0 2rem" }}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="/images/educator.jpg"
            alt="Educator"
            style={{
              width: "350px",
              height: "250px",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(255, 153, 0, 0.7)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => handleRoleSelection("Educator")}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
              e.target.style.outline = "5px solid rgba(255, 153, 0, 0.7)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
              e.target.style.outline = "none";
            }}
          />
          <motion.div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "1rem",
              color: "#f9f7f7",
            }}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Educator
          </motion.div>
          <motion.div
            style={{
              fontSize: "1.2rem",
              color: "#f7f5f5",
              maxWidth: "600px",
              lineHeight: "1.6",
              marginTop: "1rem",
            }}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <strong>Share your knowledge</strong>
            <br />
            As an Educator, you can guide students, create content, and foster
            learning in a blockchain-based system.
          </motion.div>
        </motion.div>

        {/* Student */}
        <motion.div
          style={{ textAlign: "center", margin: "0 2rem" }}
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="/images/student.jpg"
            alt="Student"
            style={{
              width: "350px",
              height: "250px",
              borderRadius: "15px",
              boxShadow: "0 4px 8px rgba(255, 153, 0, 0.7)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onClick={() => handleRoleSelection("Student")}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.5)";
              e.target.style.outline = "5px solid rgba(255, 153, 0, 0.7)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.3)";
              e.target.style.outline = "none";
            }}
          />
          <motion.div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              marginTop: "1rem",
              color: "#f9f7f7",
            }}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            Student
          </motion.div>
          <motion.div
            style={{
              fontSize: "1.2rem",
              color: "#f7f5f5",
              maxWidth: "600px",
              lineHeight: "1.6",
              marginTop: "1rem",
            }}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            <strong>Learn and grow</strong>
            <br />
            As a Student, you can access courses, gain new skills, and interact
            with an innovative educational community.
          </motion.div>
        </motion.div>
      </div>

      {/* Role Selection Buttons */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <button
          style={{
            background: "linear-gradient(to right, #ff7e54, #feb47b)",
            color: "#0c0c0c",
            padding: "1rem 2.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 20px rgba(255, 153, 0, 0.7)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
          }}
          onClick={() => handleRoleSelection("educator")}
        >
         I am Educator
        </button>
        <button
          style={{
            background: "linear-gradient(to right, #ff7e54, #feb47b)",
            color: "#0c0c0c",
            padding: "1rem 2.5rem",
            fontSize: "1rem",
            fontWeight: "bold",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 20px rgba(255, 153, 0, 0.7)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";
          }}
          onClick={() => handleRoleSelection("student")}
        >
          I am Student
        </button>
      </div>
    </div>
  );
};

export default RoleSelection;
