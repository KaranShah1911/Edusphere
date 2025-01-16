import React, { Component } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { FaSun, FaMoon } from "react-icons/fa";

class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: [],
      loading: true,
      darkMode: false, // Toggle state
    };
    document.title = "Coding Contests - Codeforces";
  }

  async componentDidMount() {
    let url = `https://codeforces.com/api/contest.list?gym=true/contest`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      const filteredContests = parsedData.result.filter(
        (contest) => contest.phase === "BEFORE" || contest.phase === "CODING"
      );
      this.setState({ contests: filteredContests, loading: false });
    } catch (error) {
      console.error("Failed to fetch contests:", error);
      this.setState({ loading: false });
    }
  }

  toggleDarkMode = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { contests, loading, darkMode } = this.state;

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    const styles = darkMode ? darkStyles : lightStyles;

    return (
      <div style={styles.container}>
        {/* Top Navigation Bar */}
        <div style={styles.navbar}>
          <img
            src="/images/Edusphere logo.png"
            alt="Edusphere Logo"
            style={styles.logo}
          />
          <span style={styles.edusphereText}>Edusphere</span>
          <div style={styles.navItems}>
            <span style={styles.navItem}>Home</span>
            <span style={styles.navItem}>Courses</span>
            <span style={styles.navItem}>Contest</span>
            <span style={styles.navItem}>Transaction</span>
            <button
              onClick={this.toggleDarkMode}
              style={styles.toggleButton}
            >
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
        </div>

        <header style={styles.header}>
          <h1>Coding Contests</h1>
        </header>

        {loading && <div style={styles.loading}>Loading contests...</div>}

        {!loading && (
          <Slider {...settings}>
            {contests.map((contest) => (
              <div className="card-wrapper" key={contest.id}>
                <div style={styles.card}>
                  <div style={styles.cardBody}>
                    <h5 style={styles.cardTitle}>{contest.name}</h5>
                    <p style={styles.cardText}>
                      <strong>Start Time:</strong>{" "}
                      {new Date(contest.startTimeSeconds * 1000).toLocaleString()}
                      <br />
                      <strong>Duration:</strong>{" "}
                      {Math.floor(contest.durationSeconds / 3600)}h{" "}
                      {Math.floor((contest.durationSeconds % 3600) / 60)}m
                    </p>
                    <p style={styles.cardExtra}>
                      <strong>Type:</strong> {contest.type}
                      <br />
                      <strong>Phase:</strong> {contest.phase}
                    </p>
                    <a
                      href={`https://codeforces.com/contests/${contest.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.cardBodyBtn}
                    >
                      View Contest
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}

        <footer style={styles.footer}>
          <p>&copy; 2025 Edusphere | All rights reserved</p>
        </footer>
      </div>
    );
  }
}

export default Contest;

// Common styles for both dark and light modes
const commonStyles = {
  header: {
    textAlign: "center",
    marginBottom: "120px",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
  },
  footer: {
    textAlign: "center",
    padding: "0px",
    marginTop: "100px",
    borderRadius: "10px",
    position:"fixed",
    left: "0",
    width:"100%",
    
  },
  card: {
    padding: "20px",
    borderRadius: "15px",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
    cursor: "pointer",
    
  },
  cardBody: {
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: "600",
    marginBottom: "10px",
  },
  cardText: {
    marginBottom: "15px",
    fontSize: "1rem",
    lineHeight: "1.5",
  },
  cardBodyBtn: {
    textDecoration: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 20px",
    backgroundColor: "black",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    borderRadius:"5px",
    position: "fixed",
    top: "0",
    left: "0",
    width:"98%",
    zIndex: "100",
    
    
  },
  logo: {
    width: "40px",
    height: "40px",
    marginRight: "10px",
  },
  edusphereText: {
    fontSize: "20px",
    fontWeight: "600",
    color: "#fff",
    marginRight: "70px",
  },
  navItems: {
    display: "flex",
    gap: "15px",
    marginLeft: "auto",
    alignItems: "center",
    
  },
  navItem: {
    fontSize: "18px",
    fontWeight: "500",
    cursor: "pointer",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    
  },
  toggleButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "20px",
    color: "#fff",
    padding: "5px",
  },
};

// Light mode styles
const lightStyles = {
  ...commonStyles,
  container: {
    backgroundImage: 'url("./images/coding image.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "#000",
    padding: "40px 20px",
    borderRadius: "10px",
    minHeight: "90vh",
   
  },
  navbar: {
    ...commonStyles.navbar,
    background: "linear-gradient(to right, #ff512f, #dd2476)", // Light mode navbar color
    
  },
  header: {
    ...commonStyles.header,
    color: "#ffeeba",
    marginTop: "100px",
    
  },
  footer: {
    ...commonStyles.footer,
    background: "linear-gradient(to right, #ff512f, #dd2476)",
    marginTop: "70px",
    

  },
  card: {
    ...commonStyles.card,
    background: "linear-gradient(to bottom, #ffecd2, #fcb69f)",
    color: "#222",
  },
  cardBodyBtn: {
    ...commonStyles.cardBodyBtn,
    background: "linear-gradient(to right, #ff512f, #dd2476)",
    color: "#fff",
  },
};

// Dark mode styles
const darkStyles = {
  ...commonStyles,
  container: {
    backgroundImage: 'url("./images/coding image.jpg")',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    color: "#fff",
    padding: "40px 20px",
    borderRadius: "15px",
    minHeight: "90vh",
  },
  navbar: {
    ...commonStyles.navbar,
    backgroundColor: "#333",
  },
  header: {
    ...commonStyles.header,
    color: "#ccc",
    marginTop: "100px",
  },
  footer: {
    ...commonStyles.footer,
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    marginTop: "70px",
  },
  card: {
    ...commonStyles.card,
    background: "linear-gradient(to bottom, #232526, #414345)",
    color: "#fff",
  },
  cardBodyBtn: {
    ...commonStyles.cardBodyBtn,
    background: "linear-gradient(to right, #1e3c72, #2a5298)",
    color: "#fff",
  },
};
