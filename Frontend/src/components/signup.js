import React from 'react';
import { useNavigate  } from 'react-router-dom'; // Import useNavigate hook


const LoginPage = () => {
  const navigate = useNavigate();  // Initialize navigate function

  const redirectToLogin = () => {
    navigate('/userlogin');  // Navigate to /userlogin page when called
  };
  
  const handleSignup = (e) => {
    e.preventDefault(); // Prevent the default form submission
    
    // Retrieve role and address
    const role = sessionStorage.getItem("role");
    const address = sessionStorage.getItem("address");

    if (!role || !address) {
      alert("Role or MetaMask address is missing. Please go back and select your role.");
      navigate("/roleselection");
      return;
    }

     // Navigate to the respective home page
     const route = role === "educator" ? "/educatorhome" : "/studenthome";
     navigate(route);
     
  };
  return (
    <div style={styles.body}>
      <header style={styles.header}>
        <img src="/images/Edusphere logo.png" alt="Edusphere Logo" style={styles.logo} />
        Edusphere
      </header>
      <div style={styles.container}>
        {/* Left Side */}
        <div style={styles.left}>
          <img src="/images/sign up image.avif" alt="Futuristic Image" style={styles.leftImage} />
        </div>

        {/* Right Side */}
        <div style={styles.right}>
        <form style={styles.form} onSubmit={handleSignup}>
            <label htmlFor="nickname" style={styles.label}>Nickname</label>
            <input type="text" id="nickname" placeholder="Enter your nickname" style={styles.input} required />

            <label htmlFor="walletId" style={styles.label}>Wallet ID</label>
            <input type="text" value={sessionStorage.getItem("address")} id="walletId" placeholder="Enter your wallet address" style={styles.input} readOnly />

            <label htmlFor="gender" style={styles.label}>Gender</label>
            <select id="gender" style={styles.input} required>
              <option value="" disabled>Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="dob" style={styles.label}>Date of Birth</label>
            <input type="date" id="dob" style={styles.input} required />

            <label htmlFor="password" style={styles.label}>Password</label>
            <input type="password" id="password" placeholder="Enter your password" style={styles.input} required />

            <button type="submit" style={styles.button}>Sign Up</button>

            {/* Use the navigate function here */}
            <div style={styles.already}>
              Already have an account? 
              <span 
                style={styles.link} 
                onClick={redirectToLogin}  // Trigger navigation on click
              >
                Login here
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: "'Arial', sans-serif",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#0f0f0f',
    color: '#fff',
    overflow: 'hidden',
    animation: 'fadeIn 1s ease-in-out', // Smooth fade-in for the page
  },
  header: {
    position: 'absolute',
    top: '20px',
    right: '350px',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#f90',
    textShadow: '0 5px 15px rgba(171, 80, 45, 0.8)',
    animation: 'slideDown 1s ease-out',  // Header slide down with fade effect
  },
  logo: {
    width: '40px',
    height: '40px',
    marginRight: '15px',
    animation: 'zoomIn 1.5s ease-in-out',
  },
  container: {
    display: 'flex',
    width: '80%',
    height: '80%',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.8)',
    overflow: 'hidden',
    animation: 'scaleIn 1s ease-out', // Form scale-in effect
  },
  left: {
    width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.9)',
    animation: 'slideInLeft 1.5s ease',
  },
  leftImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '15px 0 0 15px',
    animation: 'zoomIn 2s ease-in-out',
  },
  right: {
    width: '50%',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    background: 'rgba(0, 0, 0, 0.8)',
    animation: 'slideInRight 1.5s ease',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    animation: 'fadeInUp 1s ease-in-out', // Form fade-in with upward motion
  },
  label: {
    marginBottom: '8px',
    fontSize: '14px',
    color: '#aaa',
  },
  input: {
    marginBottom: '20px',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    background: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    transition: 'transform 0.3s ease, background-color 0.3s ease', // Input focus animation
  },
  inputFocus: {
    transform: 'scale(1.05)', // Scale input on focus
    backgroundColor: '#00f6ff', // Change background color on focus
  },
  button: {
    padding: '3px',
    background: 'linear-gradient(45deg, #00f6ff, #00d4ff)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background 0.3s ease', // Button hover animation
  },
  already: {
    marginTop: '10px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#fff',
  },
  link: {
    color: '#00f6ff',
    textDecoration: 'none',
    transition: 'text-decoration 0.3s',
    cursor: 'pointer',
  },
  '@keyframes slideInLeft': {
    '0%': {
      transform: 'translateX(-100%)',
    },
    '100%': {
      transform: 'translateX(0)',
    },
  },
  '@keyframes slideInRight': {
    '0%': {
      transform: 'translateY(-100%)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
  '@keyframes slideDown': {
    '0%': {
      transform: 'translateY(-100%)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
  '@keyframes zoomIn': {
    '0%': {
      transform: 'scale(0)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
  '@keyframes scaleIn': {
    '0%': {
      transform: 'scale(0.9)',
      opacity: 0,
    },
    '100%': {
      transform: 'scale(1)',
      opacity: 1,
    },
  },
  '@keyframes fadeInUp': {
    '0%': {
      transform: 'translateY(20px)',
      opacity: 0,
    },
    '100%': {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
};

export default LoginPage;
