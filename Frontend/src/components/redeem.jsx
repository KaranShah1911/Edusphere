import React, { useState,useEffect } from 'react';

const RedeemPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [account, setAccount] = useState(null);

  // Toggle between dark and light modes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  

  // Handle MetaMask wallet connection
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        alert(`Wallet connected: ${accounts[0]}`);
      } catch (error) {
        console.error("Wallet connection failed:", error);
        alert("Failed to connect wallet. Please try again.");
      }
    } else {
      alert('MetaMask is not installed!');
    }
  };

  // Handle Buy functionality
  const handleBuy = async (coinsRequired, ethers) => {
    if (window.ethereum) {
      try {
        if (!account) {
          alert("Please connect your wallet first!");
          return;
        }

        const transactionParameters = {
          to: account, // Placeholder: Replace with recipient's wallet address
          from: account,
          value: ethersToHex(ethers), // Convert Ether value to Hexadecimal
        };

        await window.ethereum.request({
          method: 'eth_sendTransaction',
          params: [transactionParameters],
        });

        alert(`Transaction successful! You spent ${coinsRequired} coins.`);
      } catch (error) {
        console.error("Transaction failed:", error);
        alert("Transaction failed. Please try again.");
      }
    } else {
      alert('MetaMask is not installed!');
    }
  };

  // Helper function to convert Ether to Hex
  const ethersToHex = (ethers) => {
    const wei = ethers * 1e18; // Convert Ether to Wei
    return `0x${parseInt(wei).toString(16)}`; // Convert Wei to Hex
  };

  const offers = [
    { coinsRequired: 200, ethers: '0.01' },
    { coinsRequired: 500, ethers: '0.025' },
    { coinsRequired: 1000, ethers: '0.05' },
    { coinsRequired: 2000, ethers: '0.1' },
    { coinsRequired: 1500, ethers: '0.075' },
    { coinsRequired: 100, ethers: '0.005' },
    { coinsRequired: 1800, ethers: '0.09' },
    { coinsRequired: 2000, ethers: '0.1' },
    { coinsRequired: 400, ethers: '0.02' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-black' : 'bg-white'}`}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-gold to-black text-white dark:from-gold dark:to-black">
        <div className="flex items-center">
          <img src="/images/Edusphere logo.png" alt="Edusphere Logo" className="w-14 h-10 mr-2" />
          <h1 className="text-2xl font-bold">Edusphere</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="hover:underline  ">Home</a>
          <a href="/courses" className="hover:underline">Courses</a>
          <a href="/contests" className="hover:underline">Contests</a>
          <button
            className="bg-gold text-black px-4 py-2 rounded"
            onClick={connectWallet}
          >
            {account ? "Wallet Connected" : "Connect Wallet"}
          </button>
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Redeem Section */}
      <div className="p-8">
    <h1 className={`text-4xl font-bold text-center mb-6 ${
      darkMode ? 'dark:text-gold' : 'bg-gradient-to-r from-black to-gold text-transparent bg-clip-text'
    }`}>
      Redeem Your Coins
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {offers.map((offer, index) => (
        <div
          key={index}
          className="border border-gold p-4 rounded shadow-lg dark:bg-black dark:text-gold"
        >
          <h2 className={`text-2xl font-semibold ${
            darkMode ? 'dark:text-gold' : 'bg-gradient-to-r from-black to-gold text-transparent bg-clip-text'
          }`}>
            Redeem Offer
          </h2>
          <p className={`mt-2 text-xl ${
            darkMode ? 'dark:text-gold' : 'bg-gradient-to-r from-black to-gold text-transparent bg-clip-text'
          }`}>
            Coins Required: {offer.coinsRequired}
          </p>
          <p className={`mt-2 text-xl${
            darkMode ? 'dark:text-gold' : 'bg-gradient-to-r from-black to-gold text-transparent bg-clip-text'
          }`}>
            You'll Get: {offer.ethers} Ethers
          </p>
          <button
            className="bg-gold text-black px-4 py-2 mt-4 rounded"
            onClick={() => handleBuy(offer.coinsRequired, offer.ethers)}
          >
            Buy
          </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RedeemPage;
