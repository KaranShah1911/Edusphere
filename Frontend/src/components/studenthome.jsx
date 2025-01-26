import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";

const Edusphere = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const dropdownRef = useRef(null);

  // Connect wallet to MetaMask
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const address = accounts[0];
        setWalletAddress(address);

        // Save the wallet address to local storage
        localStorage.setItem("walletAddress", address);
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to connect your wallet.");
    }
  };

  // Disconnect wallet
  const disconnectWallet = () => {
    localStorage.removeItem("walletAddress");
    setWalletAddress("");
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const savedWalletAddress = localStorage.getItem("walletAddress");
    if (savedWalletAddress) {
      setWalletAddress(savedWalletAddress);
    }
  }, []);

  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          localStorage.setItem("walletAddress", accounts[0]);
        } else {
          setWalletAddress("");
          localStorage.removeItem("walletAddress");
        }
      };

      window.ethereum.on("accountsChanged", handleAccountsChanged);

      return () => {
        window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      };
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    setTheme(isDarkMode ? "light" : "dark");
  };

  return (
    <div
      className={`${
        isDarkMode
          ? "bg-gradient-to-r from-black to-gray-700 text-gold"
          : "bg-gradient-to-r from-yellow-100 to-white text-black"
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

          {/* Wallet Button */}
          <button
  className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full"
  onClick={connectWallet} // Always trigger connectWallet on click
>
  {walletAddress ? (
    `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` // Show address if connected
  ) : (
    "Connect Wallet" // Show "Connect Wallet" if not connected
  )}
</button>

          {/* Theme toggle */}
          <button className="dark-mode-toggle text-3xl" onClick={toggleTheme}>
            {isDarkMode ? "🌙" : "☀️"}
          </button>

          {/* Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className={`text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full ${
                walletAddress ? "" : "cursor-not-allowed opacity-50"
              }`}
              disabled={!walletAddress}
            >
              ☰
            </button>
            {dropdownOpen && walletAddress && (
              <div
                className={`absolute right-0 mt-2 w-48 border border-gray-300 rounded-md shadow-lg ${
                  isDarkMode
                    ? "bg-gray-800 text-white border-gray-600"
                    : "bg-white text-black border-gray-300"
                }`}
              >
               <ul>
  <Link to="/signup">
    <li
      className={`p-2 ${
        walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
      }`}
    >
      Add Details
    </li>
  </Link>
  <li
    className={`p-2 ${
      walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
    }`}
  >
    Coins
  </li>
  <Link to="/transaction">
    <li
      className={`p-2 ${
        walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
      }`}
    >
      Transaction
    </li>
  </Link>
  <Link to="/managecourses">
    <li
      className={`p-2 ${
        walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
      }`}
    >
      Manage Courses
    </li>
  </Link>
  <Link to="/redeem">
    <li
      className={`p-2 ${
        walletAddress ? "hover:bg-yellow-400 cursor-pointer" : "cursor-not-allowed opacity-50"
      }`}
    >
      Redeem
    </li>
  </Link>
</ul>

              </div>
            )}
          </div>
        </div>
      </nav>
      <div className="border-b-4 border-gold"></div>

      {/* Main Content Section */}
      <div className="container mx-auto py-14">
        <div className="flex justify-between items-center">
          <div className="w-1/2">
            <DotLottieReact
              src="https://lottie.host/b3d4cb2f-dce5-406a-938f-0ed9f0b58974/k1qWoZHhWD.lottie"
              loop
              autoplay
              className="w-full h-[500px] flex justify-center"
            />
          </div>
          <div className="w-1/2">
            <h2 className="relative text-6xl font-bold">Welcome to Edusphere</h2>
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
