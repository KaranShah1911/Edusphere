import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(`Connected to account: ${accounts[0]}`);
        navigate("/role-selection");
      } catch (error) {
        console.error("User rejected the request:", error);
        alert("Connection request denied!");
      }
    } else {
      alert("MetaMask is not installed. Please install MetaMask to continue.");
    }
  };

  const styles = {
    body: {
      margin: 0,
      fontFamily: "Arial, sans-serif",
      background: `url('/images/v16_4.png') no-repeat center center fixed`,
      backgroundSize: "cover",
      color: "#0e0d0d",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      height: "100vh",
    },
    imageContainer: {
      width: "90%",
      height: "45%",
      marginBottom: "2rem",
      padding: "1rem 2.5rem",
      borderRadius: "25px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "25px",
    },
    content: {
      textAlign: "center",
      paddingBottom: "2rem",
    },
    logo: {
      fontSize: "4rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    },
    slogan: {
      fontSize: "1.8rem",
      marginBottom: "2rem",
      fontStyle: "bold",
      color: "#0c0c0c",
    },
    button: {
      background: "linear-gradient(to right, #4facfe, #00f2fe)",
      color: "#fff",
      padding: "1rem 2.5rem",
      fontSize: "1.3rem",
      fontWeight: "bold",
      border: "none",
      borderRadius: "25px",
      cursor: "pointer",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    },
  };

  return (
    <div style={styles.body}>
      {/* Image Container with Animation */}
      <motion.div
        style={styles.imageContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <img src="/images/mainpage.jpg" alt="Main Page" style={styles.image} />
      </motion.div>

      {/* Content Section */}
      <motion.div
        style={styles.content}
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          style={styles.logo}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Edusphere
        </motion.div>

        <motion.div
          style={styles.slogan}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          "Empowering Learning, One Blockchain at a Time"
        </motion.div>

        <motion.button
          style={styles.button}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
          }}
          whileTap={{ scale: 0.9 }}
          onClick={connectMetaMask}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Login;
