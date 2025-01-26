import React, { Component } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Icons for light and dark mode
import { Link } from 'react-router-dom';

class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: [],
      loading: true,
      theme: 'light', // State for theme
      walletAddress: null, // Placeholder for wallet address
      isWalletConnected: false, // State for wallet connection status
      dropdownOpen: false, // State for dropdown menu
    };
    document.title = 'Coding Contests - Codeforces';
  }

  async componentDidMount() {
    let url = `https://codeforces.com/api/contest.list?gym=true/contest`;

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      const filteredContests = parsedData.result.filter(
        contest => contest.phase === 'BEFORE' || contest.phase === 'CODING'
      );
      this.setState({ contests: filteredContests, loading: false });
    } catch (error) {
      console.error('Failed to fetch contests:', error);
      this.setState({ loading: false });
    }
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      theme: prevState.theme === 'light' ? 'dark' : 'light',
    }));
  };

  connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        if (accounts.length > 0) {
          this.setState({
            walletAddress: accounts[0],
            isWalletConnected: true,
          });
        }
      } catch (error) {
        console.error('Error connecting to MetaMask:', error);
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  disconnectWallet = () => {
    this.setState({
      walletAddress: null,
      isWalletConnected: false,
    });
  };

  toggleDropdown = () => {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

   handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  render() {
    const { contests, loading, theme, walletAddress, isWalletConnected, dropdownOpen } = this.state;

    const isDark = theme === 'dark';
    const themeClasses = isDark ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-800';

    return (
      <div className={`${isDark ? 'bg-gradient-to-r from-black to-gray-700 text-gold' : 'bg-gradient-to-r from-yellow-100 to-yellow-100 text-black'} transition-colors duration-300`}>
        {/* Navbar Section */}
        <nav className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-2">
            <img
              src="/images/Edusphere logo.png"
              alt="Edusphere Logo"
              className="w-20 h-12"
            />
            <h1 className="text-4xl font-bold">Edusphere</h1>
          </div>
          <div className="flex items-center space-x-8">
            <div className="flex space-x-8">
              <Link to="/Edusphere">
                <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
                  Home
                </button>
              </Link>
              <Link to="/courses">
                <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
                  Courses
                </button>
              </Link>
              <Link to="/contest">
                <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
                  Contest
                </button>
              </Link>
            </div>

            {/* Wallet Button or Address */}
            <button
              className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full"
              onClick={isWalletConnected ? this.disconnectWallet : this.connectWallet}
            >
              {isWalletConnected
                ? ` (${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)})`
                : 'Connect Wallet'}
            </button>

            {/* Theme toggle */}
            <button className="text-3xl" onClick={this.toggleTheme}>
              {isDark ? <FaMoon className="text-yellow-300" /> : <FaSun className="text-gray-800" />}
            </button>

            {/* Dropdown Menu */}
            <div className="relative">
              <button
                onClick={this.toggleDropdown}
                className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full"
              >
                ☰
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                  <ul>
                    <li
                      className={`p-2 cursor-pointer ${!isWalletConnected ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                      onClick={() => isWalletConnected && console.log('Add Details')}
                    >
                      Add Details
                    </li>
                    <li
                      className={`p-2 cursor-pointer ${!isWalletConnected ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                      onClick={() => isWalletConnected && console.log('Coins')}
                    >
                      Coins
                    </li>
                    <li
                      className={`p-2 cursor-pointer ${!isWalletConnected ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                      onClick={() => isWalletConnected && console.log('Manage Courses')}
                    >
                      Manage Courses
                    </li>
                    <li
                      className={`p-2 cursor-pointer ${!isWalletConnected ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-gray-100'}`}
                      onClick={() => isWalletConnected && console.log('Redeem')}
                    >
                      Redeem
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div className="border-b-4 border-gold"></div>

        <div className={`container mx-auto my-1 p-8 rounded-lg shadow-lg ${isDark ? 'bg-gray-700 text-white' : 'bg-gradient-to-r from-yellow-100 to-white text-black'}`}>
          <header className="text-center mb-8">
            <h1 className="text-3xl font-bold">Coding Contests</h1>
          </header>

          {loading && <div className="text-center">Loading contests...</div>}

          {!loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contests.map(contest => (
                <div key={contest.id} className={`rounded-lg p-6 shadow-md ${isDark ? 'bg-gradient-to-r from-gold via-yellow-200 to-black text-black' : 'bg-gradient-to-r from-yellow-200 to-gray-100 text-black'}`}>
                  <div className="text-center">
                    <h5 className="text-xl font-semibold">{contest.name}</h5>
                    <p className="mt-2">
                      <strong>Start Time:</strong> {new Date(contest.startTimeSeconds * 1000).toLocaleString()} <br />
                      <strong>Duration:</strong> {Math.floor(contest.durationSeconds / 3600)}h {Math.floor((contest.durationSeconds % 3600) / 60)}m
                    </p>
                    <p className="mt-2">
                      <strong>Type:</strong> {contest.type} <br />
                      <strong>Phase:</strong> {contest.phase}
                    </p>
                    <a
                      href={`https://codeforces.com/contests/${contest.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-4 inline-block px-4 py-2 rounded ${isDark ? 'bg-blue-500 text-gray-800' : 'bg-blue-500 text-gray-900'}`}
                    >
                      View Contest
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          <footer className={`text-center mt-28 p-4 my-10 rounded-lg w-100% ${isDark ? 'bg-gray-600' : 'bg-gray-200'}`}>
            <p>&copy; 2025 Codeforces | All rights reserved</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Contest;
