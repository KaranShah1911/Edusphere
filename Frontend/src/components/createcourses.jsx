import React, { useState, useEffect } from 'react';

const CreateCourse = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletConnected(true);
        setMenuOpen(false); // Close dropdown after connecting wallet
        console.log("Connected to MetaMask");
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      alert("Please install MetaMask to connect your wallet.");
    }
  };

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Loop through 3 images
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [isDarkMode]);

  return (
    <div className={`create-course ${isDarkMode ? 'dark' : 'bg-gradient-to-r from-purple-600 via-violet-300  to-purple-400'} bg-gradient-to-r from-orange-500 via-orange-400  to-orange-300 text-white transition-all duration-300`}>
      <nav className="navbar bg-opacity-80 p-4 flex justify-between items-center sticky top-0 z-50 shadow-md">
        <div className="logo flex items-center gap-3">
          <img src="/images/Edusphere logo.png" alt="Edusphere Logo" className="w-12" />
          <span className="text-2xl font-semibold text-pink-400">Edusphere</span>
        </div>

        {/* Navbar items (Right side) */}
        <div className="nav-links flex gap-8 ml-auto">
          <a href="#" className="text-lg hover:text-pink-400">Home</a>
          <a href="#" className="text-lg hover:text-pink-400">Create Courses</a>
          <a href="#" className="text-lg hover:text-pink-400">Student Insights</a>
          <button onClick={connectWallet} className={`text-lg bg-pink-400 px-6 py-2 rounded-md hover:bg-pink-500 ${walletConnected ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={walletConnected}>Connect Wallet</button>
        </div>

        {/* Grid icon button */}
        <button className="grid-icon text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          &#x2630;
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className={`menu-options absolute p-4 shadow-lg top-16 right-0 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white'}`}>
            <ul>
              <li><a href="#" className="block p-2 hover:bg-orange-300">Add Details</a></li>
              <li><a href="#" className="block p-2 hover:bg-orange-300">Coins</a></li>
              <li><a href="#" className="block p-2 hover:bg-orange-300">Reports</a></li>
              <li><a href="#" className="block p-2 hover:bg-orange-300">Manage Courses</a></li>
            </ul>
          </div>
        )}

        {/* Dark Mode Toggle */}
        <button className="dark-mode-toggle text-3xl" onClick={toggleDarkMode}>
          {isDarkMode ? '🌙' : '☀️'}
        </button>
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
