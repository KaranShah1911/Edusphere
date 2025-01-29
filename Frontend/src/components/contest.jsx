import React, { Component, createRef } from 'react';
import { FaSun, FaMoon, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

class DropdownMenu extends Component {
  constructor(props) {
    super(props);
    this.dropdownRef = createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (this.dropdownRef.current && !this.dropdownRef.current.contains(event.target)) {
      this.props.onClose();
    }
  };

  render() {
    const { isOpen, isDark, isWalletConnected } = this.props;
    
    if (!isOpen) return null;

    return (
      <div 
        ref={this.dropdownRef}
        className={`absolute right-0 mt-2 w-48 rounded-md shadow-xl ${
          isDark 
            ? 'bg-gray-800 border border-gray-700' 
            : 'bg-white border border-gray-200'
        }`}
      >
        <ul className="p-2 space-y-1">
          <DropdownItem
            label="Add Details"
            isDark={isDark}
            disabled={!isWalletConnected}
            onClick={() => console.log('Add Details')}
          />
          <DropdownItem
            label="Coins"
            isDark={isDark}
            disabled={!isWalletConnected}
            onClick={() => console.log('Coins')}
          />
          <DropdownItem
            label="Manage Courses"
            isDark={isDark}
            disabled={!isWalletConnected}
            onClick={() => console.log('Manage Courses')}
          />
          <DropdownItem
            label="Redeem"
            isDark={isDark}
            disabled={!isWalletConnected}
            onClick={() => console.log('Redeem')}
          />
        </ul>
      </div>
    );
  }
}

const DropdownItem = ({ label, isDark, disabled, onClick }) => (
  <li
    onClick={!disabled ? onClick : null}
    className={`p-2 rounded-md transition-colors cursor-pointer ${
      disabled 
        ? `${isDark ? 'text-gray-500' : 'text-gray-400'} cursor-not-allowed`
        : `${isDark ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-amber-50 text-gray-700'}`
    }`}
  >
    {label}
  </li>
);

class Contest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contests: [],
      loading: true,
      theme: 'light',
      walletAddress: null,
      isWalletConnected: false,
      dropdownOpen: false,
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

  render() {
    const { contests, loading, theme, walletAddress, isWalletConnected, dropdownOpen } = this.state;
    const isDark = theme === 'dark';

    const cardVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      hover: { scale: 1.02, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }
    };

    let wallet_address = localStorage.getItem('walletAddress');    

    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gradient-to-br from-yellow-50 to-amber-100'}`}>
        <nav className={`fixed w-full top-0 z-50 backdrop-blur-lg ${isDark ? 'bg-gray-900/80 border-b border-gray-700' : 'bg-white/80 border-b border-amber-100'}`}>
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <img
                src="/images/Edusphere logo.png"
                alt="Edusphere Logo"
                className="w-24 h-14 transition-transform hover:scale-105"
              />
              <h1 className={`text-3xl font-bold ${isDark ? 'text-amber-400' : 'text-gray-800'}`}>Edusphere</h1>
            </div>

            <div className="flex items-center space-x-6">
              <div className="hidden lg:flex space-x-6">
                <NavButton to="/studenthome" isDark={isDark}>Home</NavButton>
                <NavButton to="/courses" isDark={isDark}>Courses</NavButton>
                <NavButton to="/contest" isDark={isDark} active>Contest</NavButton>
              </div>

              <WalletButton
                wallet_address={wallet_address}
                isConnected={isWalletConnected}
                address={walletAddress}
                onClick={isWalletConnected ? this.disconnectWallet : this.connectWallet}
                isDark={isDark}
              />

              <button
                onClick={this.toggleTheme}
                className={`p-3 rounded-full transition-all ${isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-amber-100 hover:bg-amber-200'}`}
              >
                {isDark ? (
                  <FaMoon className="text-2xl text-amber-400" />
                ) : (
                  <FaSun className="text-2xl text-amber-600" />
                )}
              </button>

              <div className="relative">
                <button
                  onClick={this.toggleDropdown}
                  className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full"
                >
                  ☰
                </button>
                <DropdownMenu 
                  isOpen={dropdownOpen} 
                  isDark={isDark} 
                  onClose={() => this.setState({ dropdownOpen: false })}
                  isWalletConnected={isWalletConnected}
                />
              </div>
            </div>
          </div>
        </nav>

        <div className="container mx-auto pt-32 pb-12 px-4">
          <motion.header 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className={`text-5xl font-bold mb-4 ${isDark ? 'text-amber-400' : 'text-gray-800'}`}>
              Upcoming Contests
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              Challenge yourself with these coding competitions
            </p>
          </motion.header>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <FaSpinner className="animate-spin text-4xl text-amber-500" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {contests.map(contest => (
                  <motion.div
                    key={contest.id}
                    variants={cardVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    className={`rounded-2xl p-6 transition-all ${isDark ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
                  >
                    <div className="flex flex-col h-full">
                      <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-amber-400' : 'text-gray-800'}`}>
                        {contest.name}
                      </h3>
                      
                      <div className={`flex-1 space-y-3 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        <div className="flex items-center space-x-2">
                          <ClockIcon isDark={isDark} />
                          <span>
                            {new Date(contest.startTimeSeconds * 1000).toLocaleString()}
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <DurationIcon isDark={isDark} />
                          <span>
                            {Math.floor(contest.durationSeconds / 3600)}h {Math.floor((contest.durationSeconds % 3600) / 60)}m
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <TypeIcon isDark={isDark} />
                          <span className="capitalize">{contest.type.toLowerCase()}</span>
                        </div>
                      </div>

                      <a
                        href={`https://codeforces.com/contests/${contest.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-6 inline-block w-full text-center py-3 rounded-xl font-semibold transition-colors ${
                          isDark 
                            ? 'bg-amber-500 hover:bg-amber-600 text-gray-900'
                            : 'bg-amber-400 hover:bg-amber-500 text-gray-800'
                        }`}
                      >
                        Participate Now
                      </a>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>

        <footer className={`mt-24 py-8 ${isDark ? 'bg-gray-800' : 'bg-amber-100'}`}>
          <div className="container mx-auto text-center">
            <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              © 2025 Edusphere. All rights reserved. Crafted with ❤️ for coders.
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

// Helper components
const NavButton = ({ to, children, isDark, active }) => (
  <Link
    to={to}
    className={`px-4 py-2 rounded-full transition-all font-medium ${
      active 
        ? (isDark ? 'bg-amber-500 text-gray-900' : 'bg-amber-400 text-gray-800')
        : (isDark ? 'hover:bg-gray-700 text-gray-300' : 'hover:bg-amber-200 text-gray-600')
    }`}
  >
    {children}
  </Link>
);

const WalletButton = ({ isConnected, wallet_address, address, onClick, isDark }) => (
  <button
    onClick={onClick}
    className={`px-6 py-2 rounded-full transition-all font-medium flex items-center space-x-2 ${
      isConnected
        ? (isDark ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-500 hover:bg-emerald-600')
        : (isDark ? 'bg-gray-700 hover:bg-gray-600' : 'bg-amber-200 hover:bg-amber-300')
    } ${isDark ? 'text-gray-100' : 'text-gray-800'}`}
  >
    {isConnected || wallet_address ? (
      <>
        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
        <span>{`${wallet_address.slice(0, 6)}...${wallet_address.slice(-4)}`}</span>
      </>
    ) : 'Connect Wallet'}
  </button>
);

const ClockIcon = ({ isDark }) => (
  <svg className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const DurationIcon = ({ isDark }) => (
  <svg className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const TypeIcon = ({ isDark }) => (
  <svg className={`w-5 h-5 ${isDark ? 'text-amber-400' : 'text-amber-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
);

export default Contest;


// constructor(props) {
//   super(props);
//   this.state = {
//     contests: [],
//     loading: true,
//     theme: 'light', // State for theme
//     walletAddress: null, // Placeholder for wallet address
//     isWalletConnected: false, // State for wallet connection status
//     dropdownOpen: false, // State for dropdown menu
//   };
//   document.title = 'Coding Contests - Codeforces';
// }

// async componentDidMount() {
//   let url = `https://codeforces.com/api/contest.list?gym=true/contest`;

//   try {
//     let data = await fetch(url);
//     let parsedData = await data.json();
//     const filteredContests = parsedData.result.filter(
//       contest => contest.phase === 'BEFORE' || contest.phase === 'CODING'
//     );
//     this.setState({ contests: filteredContests, loading: false });
//   } catch (error) {
//     console.error('Failed to fetch contests:', error);
//     this.setState({ loading: false });
//   }
// }

// toggleTheme = () => {
//   this.setState(prevState => ({
//     theme: prevState.theme === 'light' ? 'dark' : 'light',
//   }));
// };

// connectWallet = async () => {
//   if (window.ethereum) {
//     try {
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       if (accounts.length > 0) {
//         this.setState({
//           walletAddress: accounts[0],
//           isWalletConnected: true,
//         });
//       }
//     } catch (error) {
//       console.error('Error connecting to MetaMask:', error);
//     }
//   } else {
//     alert('Please install MetaMask!');
//   }
// };

// disconnectWallet = () => {
//   this.setState({
//     walletAddress: null,
//     isWalletConnected: false,
//   });
// };

// toggleDropdown = () => {
//   this.setState(prevState => ({
//     dropdownOpen: !prevState.dropdownOpen,
//   }));
// };

//  handleClickOutside = (event) => {
//   if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//     setDropdownOpen(false);
//   }
// };

