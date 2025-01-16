import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const UserLogin = () => {
  const navigate = useNavigate();  // Initialize navigate function

  const redirectToSignUp = () => {
    navigate('/signup');  // Navigate to /signup page when called
  };
  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission
    console.log('Login Button Clicked');
    navigate('/home');  // Navigate to the homepage
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
          <img src="/images/login images.png" alt="Futuristic Image" style={styles.leftImage} />
        </div>

        {/* Right Side */}
        <div style={styles.right}>
          
        <form style={styles.form} onSubmit={handleLogin}>
            <label htmlFor="nickname" style={styles.label}>Nickname</label>
            <input type="text" id="nickname" placeholder="Enter your nickname" style={styles.input} required />

            <label htmlFor="walletId" style={styles.label}>Wallet ID</label>
            <input type="text" id="walletId" placeholder="Enter your wallet address" style={styles.input} required />

            <label htmlFor="password" style={styles.label}>Password</label>
            <input type="password" id="password" placeholder="Enter your password" style={styles.input} required />

            <button type="submit" style={styles.button}>
              Login
            </button>

            

            <div style={styles.already}>
              Don't have an account? 
              <span 
                style={styles.link} 
                onClick={redirectToSignUp}  // Trigger navigation on click
              >
                Sign up here
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
  },
  header: {
    position: 'absolute',
    top: '20px',
    right: '350px',
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#f90',
    textShadow: '0 5px 15px rgba(171, 80, 45, 0.8)',
    animation: 'fadeIn 2s ease-in-out',
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
  h2: {
    marginBottom: '20px',
    fontSize: '28px',
    fontWeight: 'bold',
    textAlign: 'center',
    animation: 'fadeInText 1.5s ease-in-out',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
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
    animation: 'fadeInText 1s ease-out',
  },
  button: {
    padding: '10px',
    background: 'linear-gradient(45deg, #00f6ff, #00d4ff)',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease, background 0.3s ease',
    animation: 'fadeInButton 1s ease-out',
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
};

// Add CSS animations for different elements
const animationStyles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes zoomIn {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
  }

  @keyframes slideInLeft {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  }

  @keyframes slideInRight {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }

  @keyframes fadeInText {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes fadeInButton {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

// Append animation styles to document head
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = animationStyles;
document.head.appendChild(styleSheet);

export default UserLogin;
