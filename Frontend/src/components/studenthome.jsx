import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Edusphere = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isWalletClicked, setIsWalletClicked] = useState(false);
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
    // Clear the wallet address from local storage and state
    localStorage.removeItem("walletAddress");
    setWalletAddress("");
  };

  const handleDisconnect = () => {
    disconnectWallet();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  

  const handleClickOutside = (event) => {
    // Ensure that clicks outside the dropdown close it
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

  // Load saved wallet address from local storage on page load
  useEffect(() => {
    const savedWalletAddress = localStorage.getItem("walletAddress");
    if (savedWalletAddress) {
      setWalletAddress(savedWalletAddress);
    }
  }, []);

  // Listen for account changes
  useEffect(() => {
    if (window.ethereum) {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          localStorage.setItem("walletAddress", accounts[0]);
        } else {
          // No accounts available, treat it as a disconnect
          setWalletAddress("");
          localStorage.removeItem("walletAddress");
        }
     
    };
    window.ethereum.on("accountsChanged", handleAccountsChanged);
    window.ethereum.on("disconnect", handleDisconnect);

    return () => {
      window.ethereum.removeListener("accountsChanged", handleAccountsChanged);
      window.ethereum.removeListener("disconnect", handleDisconnect);
    };
  }
}, []);
  

  // Copy wallet address to clipboard
  const copyToClipboard = () => {
    if (walletAddress) {
      navigator.clipboard.writeText(walletAddress).then(() => {
        alert("Wallet address copied to clipboard!");
      });
    }
  };

  // Toggle the view for the wallet address
  const handleWalletClick = () => {
    setIsWalletClicked(!isWalletClicked); // Toggle the state on click
  };

  // Toggle between light and dark themes
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
            <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
              Home
            </button>
            <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
              Courses
            </button>
            <button className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full">
              Contest
            </button>
          </div>

          {/* Wallet Button or Address */}
          <button
            className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full"
            onClick={walletAddress ? handleWalletClick : connectWallet}
          >
            {walletAddress ? (
              <div>
                {/* If wallet is clicked, toggle between full and shortened address */}
                {isWalletClicked ? (
                  <>
                    <span className="text-sm">{walletAddress}</span>
                    <button
                      className="ml-2 text-blue-500"
                      onClick={copyToClipboard}
                    >
                      Copy to Clipboard
                    </button>
                  </>
                ) : (
                  // If not clicked, show shortened address
                  `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
                )}
              </div>
            ) : (
              "Connect Wallet"
            )}
          </button>

          {/* Theme toggle */}
          <button className="dark-mode-toggle text-3xl" onClick={toggleTheme}>
      {isDarkMode ? "🌙" : "☀️"}
    </button>
    <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-lg bg-gradient-to-r from-gold to-yellow-200 text-black py-2 px-4 rounded-full"
            >
              ☰
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Add Details</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Coins</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Transaction</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Manage Courses</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Redeem</li>
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
      src="https://lottie.host/2fa8ee19-3348-4358-92c0-c3331ca12c20/BbbdUxJoOR.lottie"
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





