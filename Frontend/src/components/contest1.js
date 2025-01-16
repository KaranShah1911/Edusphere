import React, { Component } from 'react';
import Slider from "react-slick";
import PropTypes from 'prop-types';
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for light and dark mode

class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: [],
      loading: true,
      theme: 'light', // State for theme
    };
    document.title = "Coding Contests - Codeforces";
  }

  async componentDidMount() {
    let url = `https://codeforces.com/api/contest.list?gym=true/contest`;
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      const filteredContests = parsedData.result.filter(
        contest => contest.phase === "BEFORE" || contest.phase === "CODING"
      );
      this.setState({ contests: filteredContests, loading: false });
    } catch (error) {
      console.error("Failed to fetch contests:", error);
      this.setState({ loading: false });
    }
  }

  toggleTheme = () => {
    this.setState((prevState) => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  render() {
    const { contests, loading, theme } = this.state;

    const isDark = theme === 'dark';
    const themeStyles = isDark ? darkStyles : lightStyles;

    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: 3,
      slidesToScroll: 1,
    };

    return (
      <div className="container" style={{ ...styles.container, ...themeStyles.container }}>
        {/* Toggle Button */}
        <button
          onClick={this.toggleTheme}
          style={styles.toggleButton}
          title={`Switch to ${isDark ? 'Light' : 'Dark'} Mode`}
        >
          {isDark ? <FaSun style={{ color: '#ffeeba' }} /> : <FaMoon style={{ color: '#222' }} />}
        </button>

        <header style={{ ...styles.header, ...themeStyles.header }}>
          <h1>Coding Contests</h1>
        </header>

        {loading && <div className="loading">Loading contests...</div>}

        {!loading && (
          <Slider {...settings}>
            {contests.map((contest) => (
              <div className="card-wrapper" key={contest.id}>
                <div style={{ ...styles.card, ...themeStyles.card }}>
                  <div style={styles.cardBody}>
                    <h5 style={styles.cardTitle}>{contest.name}</h5>
                    <p style={styles.cardText}>
                      <strong>Start Time:</strong> {new Date(contest.startTimeSeconds * 1000).toLocaleString()} <br />
                      <strong>Duration:</strong> {Math.floor(contest.durationSeconds / 3600)}h {Math.floor((contest.durationSeconds % 3600) / 60)}m
                    </p>
                    <p style={styles.cardExtra}>
                      <strong>Type:</strong> {contest.type} <br />
                      <strong>Phase:</strong> {contest.phase}
                    </p>
                    <a
                      href={`https://codeforces.com/contests/${contest.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ ...styles.cardBodyBtn, ...themeStyles.cardBodyBtn }}
                    >
                      View Contest
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}

        <footer style={{ ...styles.footer, ...themeStyles.footer }}>
          <p>&copy; 2025 Codeforces | All rights reserved</p>
        </footer>
      </div>
    );
  }
}

export default Contest;

// Light and Dark Theme Styles
const lightStyles = {
  container: {
    background: '#f9f9f9',
    color: '#222',
  },
  header: {
    color: '#222',
  },
  card: {
    background: '#fff',
  },
  footer: {
    background: '#ddd',
    color: '#222',
  },
  cardBodyBtn: {
    background: '#222',
    color: '#fff',
  },
};

const darkStyles = {
  container: {
    background: '#222',
    color: '#f9f9f9',
  },
  header: {
    color: '#ffeeba',
  },
  card: {
    background: '#333',
  },
  footer: {
    background: '#555',
    color: '#ffeeba',
  },
  cardBodyBtn: {
    background: '#ffeeba',
    color: '#222',
  },
};

const styles = {
  container: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    padding: '40px 20px',
    borderRadius: '15px',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    minHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
  },
  footer: {
    textAlign: 'center',
    padding: '20px',
    marginTop: '40px',
    borderRadius: '10px',
  },
  card: {
    padding: '20px',
    borderRadius: '15px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
  },
  cardBody: {
    textAlign: 'center',
  },
  cardTitle: {
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '10px',
  },
  cardText: {
    marginBottom: '15px',
    fontSize: '1rem',
    lineHeight: '1.5',
  },
  cardExtra: {
    marginTop: '10px',
    fontSize: '0.9rem',
  },
  cardBodyBtn: {
    textDecoration: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontWeight: 'bold',
  },
  toggleButton: {
    position: 'absolute',
    top: '10px',
    right: '20px',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
  },
};

