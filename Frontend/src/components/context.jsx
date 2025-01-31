"use client";
import React, { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { contractAbi, contractAddress } from "./utils/constants";

export const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const [money, setMoney] = useState("0");
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const connectWallet = async () => {
    setIsLoading(true);
    try {
      if (!window.ethereum) return alert("Please install MetaMask!");
      
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setCurrentAccount(accounts[0]);
      toast.success("Wallet Connected Successfully");
    } catch (error) {
      console.error("Wallet connection failed", error);
      toast.error("Unable to connect the wallet");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchContractDetails = async () => {
    setIsLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      
      const contractOwner = await contract.owner();
      setIsOwner(contractOwner.toLowerCase() === currentAccount.toLowerCase());
      
      const contractMoney = await contract.money();
      setMoney(ethers.utils.formatEther(contractMoney));
    } catch (error) {
      console.error("Error fetching contract details:", error);
      toast.error("Failed to fetch contract details");
    } finally {
      setIsLoading(false);
    }
  };

  const addCourse = async (courseID, imageHash, videoHashes, courseFee) => {
    setIsLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      
      const tx = await contract.addCourse(courseID, imageHash, videoHashes, ethers.utils.parseEther(courseFee), { value: ethers.utils.parseEther("1") });
      await tx.wait();
      toast.success("Course added successfully!");
      fetchContractDetails();
    } catch (error) {
      console.error("Error adding course:", error);
      toast.error("Failed to add course");
    } finally {
      setIsLoading(false);
    }
  };

  const buyCourse = async (courseID, courseFee) => {
    setIsLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      
      const tx = await contract.buyCourse(courseID, { value: ethers.utils.parseEther(courseFee) });
      await tx.wait();
      toast.success("Course purchased successfully!");
    } catch (error) {
      console.error("Transaction failed:", error);
      toast.error("Failed to purchase course");
    } finally {
      setIsLoading(false);
    }
  };

  const redeemCoins = async (coins) => {
    setIsLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      
      const tx = await contract.redeem(coins, currentAccount);
      await tx.wait();
      toast.success("Coins redeemed successfully!");
      fetchContractDetails();
    } catch (error) {
      console.error("Redemption failed:", error);
      toast.error("Failed to redeem coins");
    } finally {
      setIsLoading(false);
    }
  };

  const viewAllCourses = async () => {
    setIsLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(contractAddress, contractAbi, provider);
      
      const allCourses = await contract.viewAllCourses();
      setCourses(allCourses);
    } catch (error) {
      console.error("Error fetching courses:", error);
      toast.error("Failed to fetch courses");
    } finally {
      setIsLoading(false);
    }
  };

  const educatorCourses = async () => {
    setIsLoading(true);
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      
      const myCourses = await contract.viewEducatorCourses();
      setCourses(myCourses);
    } catch (error) {
      console.error("Error fetching educator courses:", error);
      toast.error("Failed to fetch educator courses");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => window.location.reload());
      window.ethereum.on("chainChanged", () => window.location.reload());
    }
    fetchContractDetails();
  }, [currentAccount]);

  return (
    <CourseContext.Provider
      value={{
        connectWallet,
        addCourse,
        buyCourse,
        redeemCoins,
        viewAllCourses,
        educatorCourses,
        currentAccount,
        isOwner,
        money,
        isLoading,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};