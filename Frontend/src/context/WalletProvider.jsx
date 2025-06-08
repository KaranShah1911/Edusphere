import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const WalletContext = createContext();

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  const savedWalletAddress = document.cookie
    .split("; ")
    .find((row) => row.startsWith("walletAddress="));

  const [walletAddress, setWalletAddress] = useState(savedWalletAddress ? savedWalletAddress.split("=")[1] : null);
  const [walletConnected, setWalletConnected] = useState(walletAddress);

  const setCookie = (name, value, days) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000); // Set expiration
    document.cookie = `${name}=${value}; expires=${expires.toUTCString()}; path=/;`;
  };

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const handlelogin = async (account , navigatetosignup) => {
    const role = localStorage.getItem("role");

    if (role === "educator") {
      try {
        const response = await axios.post(
          'http://localhost:3000/admin/login',
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
          toast.success(response.data.message);

          setCookie('walletAddress', account, 1);
          localStorage.setItem('admin', response.data.data.id);
          setCookie('admin', response.data.token, 1);
        } else {
          throw new Error(response.data.error);
        }
      } catch (error) {
        console.log(error.response);
        setCookie('walletAddress', account, 1);
        if(error.response?.status === 404){
          navigatetosignup();
        }else{
          deleteCookie("walletAddress");
        }
      }

    }
    else {
      try {
        const response = await axios.post(
          'http://localhost:3000/user/login',
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
          toast.success(response.data.message);
          
          setCookie('walletAddress', account, 1);
          localStorage.setItem('user', response.data.data.id);
          setCookie('user', response.data.token, 1);
        } else {
          throw new Error(response.data.error);
        }
      } catch (error) {
        console.log(error.response);
        setCookie('walletAddress', account, 1);
        if(error.response?.status === 404){
          navigatetosignup();
        }else{
          deleteCookie("walletAddress");
        }
      }
    }
  }
  
  // Connect wallet function
  const connectWallet = async (navigatetosignup) => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setWalletAddress(accounts[0]);
          setWalletConnected(true);

          await handlelogin(accounts[0] , navigatetosignup);
          console.log("After login:", document.cookie);

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
          deleteCookie("walletAddress");
          setCookie("walletAddress", accounts[0], 1);
          handlelogin();
        } else {
          setWalletAddress(null);
          setWalletConnected(false);
          deleteCookie("walletAddress");

          const role = localStorage.getItem("role");
          if (role === "educator") {
            localStorage.removeItem("admin");
            deleteCookie("admin");
          } else {
            localStorage.removeItem("user");
            deleteCookie("user");
          }
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
    deleteCookie("walletAddress");
  };

  return (
    <WalletContext.Provider value={{ walletAddress, walletConnected, connectWallet, disconnectWallet }}>
      {children}
    </WalletContext.Provider>
  );
};
