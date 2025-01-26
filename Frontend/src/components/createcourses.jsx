import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const CreateCourse = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        setWalletConnected(true);
        setDropdownOpen(false); // Close dropdown after connecting wallet
        console.log("Connected to MetaMask");
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleWalletClick = () => {
    console.log("Wallet Address:", walletAddress);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress);
    alert("Wallet address copied to clipboard!");
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 images
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [isDarkMode]);

  return (
    <div className={`create-course ${isDarkMode ? "bg-gradient-to-r from-black to-gray-700 text-amber-500" : "bg-gradient-to-r from-yellow-200 to-white text-black"} transition-colors duration-300`}>
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
              <button className="text-lg bg-amber-500 text-black py-2 px-4 rounded-full">
                Home
              </button>
            </Link>
            <Link to="/courses">
              <button className="text-lg bg-amber-500 text-black py-2 px-4 rounded-full">
                Courses
              </button>
            </Link>
            <Link to="/contest">
              <button className="text-lg bg-amber-500 text-black py-2 px-4 rounded-full">
                Contest
              </button>
            </Link>
          </div>

          <button
            className="text-lg bg-amber-500 text-black py-2 px-4 rounded-full"
            onClick={walletConnected ? handleWalletClick : connectWallet}
          >
            {walletAddress ? (
              <div>
                {walletAddress.length > 0 ? (
                  <div>
                    {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                  </div>
                ) : null}
              </div>
            ) : (
              "Connect Wallet"
            )}
          </button>

          <button className="dark-mode-toggle text-3xl" onClick={toggleDarkMode}>
            {isDarkMode ? "🌙" : "☀️"}
          </button>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="text-lg bg-amber-500 text-black py-2 px-4 rounded-full"
            >
              ☰
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul>
                  <Link to="/signup" onClick={() => setDropdownOpen(false)}>
                    <li className={`p-2 hover:bg-gray-100 cursor-pointer ${!walletConnected ? 'text-gray-400 cursor-not-allowed' : ''}`} style={{ pointerEvents: walletConnected ? 'auto' : 'none' }}>
                      Add Details
                    </li>
                  </Link>
                  <Link to="/coins" onClick={() => setDropdownOpen(false)}>
                    <li className={`p-2 hover:bg-gray-100 cursor-pointer ${!walletConnected ? 'text-gray-400 cursor-not-allowed' : ''}`} style={{ pointerEvents: walletConnected ? 'auto' : 'none' }}>
                      Coins
                    </li>
                  </Link>
                  <Link to="/transaction" onClick={() => setDropdownOpen(false)}>
                    <li className={`p-2 hover:bg-gray-100 cursor-pointer ${!walletConnected ? 'text-gray-400 cursor-not-allowed' : ''}`} style={{ pointerEvents: walletConnected ? 'auto' : 'none' }}>
                      Transaction
                    </li>
                  </Link>
                  <Link to="/managecourses" onClick={() => setDropdownOpen(false)}>
                    <li className={`p-2 hover:bg-gray-100 cursor-pointer ${!walletConnected ? 'text-gray-400 cursor-not-allowed' : ''}`} style={{ pointerEvents: walletConnected ? 'auto' : 'none' }}>
                      Manage Courses
                    </li>
                  </Link>
                  <Link to="/redeem" onClick={() => setDropdownOpen(false)}>
                    <li className={`p-2 hover:bg-gray-100 cursor-pointer ${!walletConnected ? 'text-gray-400 cursor-not-allowed' : ''}`} style={{ pointerEvents: walletConnected ? 'auto' : 'none' }}>
                      Redeem
                    </li>
                  </Link>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="container flex justify-center items-center gap-8 p-6 mx-auto max-w-screen-xl">
        <div className="image-container relative overflow-hidden rounded-xl shadow-lg w-full md:w-1/2 h-96">
          <div className="image-slider flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src="/images/createcourses.png" alt="Course 1" className="w-full h-full object-cover" />
            <img src="/images/createcourses1.png" alt="Course 2" className="w-full h-full object-cover" />
            <img src="/images/createcourses2.png" alt="Course 3" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="form-container w-full md:w-1/2">
          <h1 className="text-center text-3xl font-semibold mb-6">Create a New Course</h1>
          <form className="bg-white bg-opacity-20 p-6 rounded-lg shadow-lg space-y-6">
            <div className="form-group">
              <label htmlFor="title" className="text-lg">Course Title</label>
              <input type="text" id="title" name="title" placeholder="Enter course title" className="w-full p-3 mt-2 rounded-md bg-gray-800 text-white focus:outline-none" required />
            </div>

            <div className="form-group">
              <label htmlFor="description" className="text-lg">Course Description</label>
              <textarea id="description" name="description" rows="4" placeholder="Enter a brief course description" className="w-full p-3 mt-2 rounded-md bg-gray-800 text-white focus:outline-none"></textarea>
            </div>

            <div className="form-group">
              <label htmlFor="reward-coins" className="text-lg">Reward Coins</label>
              <input type="number" id="reward-coins" name="reward-coins" placeholder="Enter reward coins" className="w-full p-3 mt-2 rounded-md bg-gray-800 text-white focus:outline-none" />
            </div>

            <div className="form-group">
              <label htmlFor="content" className="text-lg">Upload Content</label>
              <input type="file" id="content" name="content" multiple className="w-full p-3 mt-2 rounded-md bg-gray-800 text-white focus:outline-none" />
            </div>

            <div className="form-footer flex justify-between">
              <button type="submit" className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white py-3 px-6 rounded-md hover:bg-pink-500">Publish Course</button>
              <button type="button" className="btn bg-gray-600 text-white py-3 px-6 rounded-md hover:bg-gray-500">Save as Draft</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
