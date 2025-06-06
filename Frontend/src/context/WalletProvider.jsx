import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(document.cookie
    .split("; ")
    .find((row) => row.startsWith("walletAddress=")).split("=")[1] || null);
  const [walletConnected, setWalletConnected] = useState(!walletAddress);

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration
    document.cookie = ` ${name}=${value};expires=${expires.toUTCString()};path=/;`;
  };

  // Connect wallet function
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          const account = accounts[0];
          setCookie('walletAddress', accounts[0], 1);
          setWalletAddress(accounts[0]);
          setWalletConnected(true);

          const role = localStorage.getItem("role");
          if (role === "educator") {
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
          else {
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
          setCookie("walletAddress", accounts[0] , 1);
        } else {
          setWalletAddress(null);
          setWalletConnected(false);
          cookie.removeItem("walletAddress"); 
        }
      });

      return () => {
        window.ethereum.removeListener("accountsChanged", () => { });
      };
    }
  }, []);

  // Disconnect wallet function
  const disconnectWallet = () => {
    setWalletAddress(null);
    setWalletConnected(false);
    cookie.removeItem("walletAddress");
  };

  return (
    <WalletContext.Provider value={{ walletAddress, walletConnected, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext);