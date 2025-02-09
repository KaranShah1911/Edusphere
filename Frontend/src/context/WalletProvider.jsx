import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(localStorage.getItem("walletAddress") || null);
  const [walletConnected, setWalletConnected] = useState(!!walletAddress);

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration
    document.cookie =` ${name}=${value};expires=${expires.toUTCString()};path=/;`;
  };

  // Connect wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          const account = accounts[0];
          localStorage.setItem("walletAddress", accounts[0]);

          setWalletAddress(accounts[0]);
          console.log(account)
          setWalletConnected(true);
          const role = localStorage.getItem("role");
          if(role==="educator"){
            try {
              const response = await axios.post(
                'https://edusphere-77qx.onrender.com/admin/login',
                {
                  wallet_id: account,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
            
              if (response.status === 200) {
                alert(response.data.message);
                console.log(response.data.message);
                localStorage.setItem('admin', response.data.id);
                setCookie('admin', response.data.token, 1);
              } else {
                console.log(response.data.error);
              }
            } catch (error) {
              console.log(error);
            }

          }
          else{
            try {
              const response = await axios.post(
                'https://edusphere-77qx.onrender.com/user/login',
                {
                  wallet_id: account,
                },
                {
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
            
              if (response.status === 200) {
                alert(response.data.message);
                console.log(response.data.message);
                localStorage.setItem('user', response.data.id);
                setCookie('user', response.data.token, 1);
              } else {
                console.log(response.data.error);
              }
            } catch (error) {
              console.log(error);
            }

          }
        }
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
      }
    } else {
      const installMetaMask = confirm("MetaMask is required. Install now?");
      if (installMetaMask) window.open("https://metamask.io/download/", "_blank");
    };
  };

  // Detect account changes
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          localStorage.setItem("walletAddress", accounts[0]);
        } else {
          setWalletAddress(null);
          setWalletConnected(false);
          localStorage.removeItem("walletAddress");
        }
      });

      return () => {
        window.ethereum.removeListener("accountsChanged", () => {});
      };
    }
  }, []);

  // Disconnect wallet function
  const disconnectWallet = () => {
    setWalletAddress(null);
    setWalletConnected(false);
    localStorage.removeItem("walletAddress");  // Clear localStorage
  };

  return (
    <WalletContext.Provider value={{ walletAddress, walletConnected, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);

// import React, { createContext, useState, useEffect, useContext } from "react";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// import { ethers } from "ethers";

// const WalletContext = createContext();

// export const WalletProvider = ({ children }) => {
//   const [walletAddress, setWalletAddress] = useState(localStorage.getItem("walletAddress") || null);
//   const [walletConnected, setWalletConnected] = useState(!!walletAddress);
//   const [walletType, setWalletType] = useState(localStorage.getItem("walletType") || null);

//   let provider;

//   // Function to connect different wallets
//   const connectWallet = async (wallet) => {
//     try {
//       if (wallet === "metamask") {
//         if (window.ethereum) {
//           provider = new ethers.providers.Web3Provider(window.ethereum);
//           const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
//           setWalletData(accounts[0], "metamask");
//         } else {
//           alert("MetaMask is not installed.");
//           window.open("https://metamask.io/download/", "_blank");
//         }
//       } else if (wallet === "walletconnect") {
//         provider = new WalletConnectProvider({ rpc: { 1: "https://mainnet.infura.io/v3/YOUR_INFURA_ID" } });
//         await provider.enable();
//         const web3Provider = new ethers.providers.Web3Provider(provider);
//         const signer = web3Provider.getSigner();
//         setWalletData(await signer.getAddress(), "walletconnect");
//       } else if (wallet === "coinbase") {
//         const coinbaseWallet = new CoinbaseWalletSDK({ appName: "Edusphere" });
//         provider = coinbaseWallet.makeWeb3Provider("https://mainnet.infura.io/v3/YOUR_INFURA_ID", 1);
//         const web3Provider = new ethers.providers.Web3Provider(provider);
//         const signer = web3Provider.getSigner();
//         setWalletData(await signer.getAddress(), "coinbase");
//       }
//     } catch (error) {
//       console.error("Wallet connection failed:", error);
//     }
//   };

//   // Helper function to update state and localStorage
//   const setWalletData = (address, type) => {
//     setWalletAddress(address);
//     setWalletConnected(true);
//     setWalletType(type);
//     localStorage.setItem("walletAddress", address);
//     localStorage.setItem("walletType", type);
//   };

//   // Disconnect wallet
//   const disconnectWallet = () => {
//     setWalletAddress(null);
//     setWalletConnected(false);
//     setWalletType(null);
//     localStorage.removeItem("walletAddress");
//     localStorage.removeItem("walletType");
//   };

//   // Listen for account changes
//   useEffect(() => {
//     if (walletType === "metamask" && window.ethereum) {
//       window.ethereum.on("accountsChanged", (accounts) => {
//         if (accounts.length > 0) {
//           setWalletData(accounts[0], "metamask");
//         } else {
//           disconnectWallet();
//         }
//       });
//     }
//   }, [walletType]);

//   return (
//     <WalletContext.Provider value={{ walletAddress, walletConnected, connectWallet, disconnectWallet }}>
//       {children}
//     </WalletContext.Provider>
//   );
// };

// export const useWallet = () => useContext(WalletContext);

