import React, { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Link } from "react-router-dom";
import { FiUser, FiDollarSign, FiBook, FiGift,FiCopy } from "react-icons/fi";
import { motion, AnimatePresence } from 'framer-motion';
import { useWallet } from "../context/WalletProvider";
import { useThemeStore } from '../store/themeStore';

const TransactionPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const isDarkMode = useThemeStore((state) => state.isDarkMode);
     const setIsDarkMode = useThemeStore((state) => state.setIsDarkMode);
      const { walletAddress, walletConnected, connectWallet } = useWallet();
      const [transactions, setTransactions] = useState([]);

       const dropdownRef = useRef(null);
      
        const handleWalletClick = () => {
          console.log("Wallet Address:", walletAddress);
        };
      
        const copyToClipboard = () => {
          navigator.clipboard.writeText(walletAddress);
          alert("Wallet address copied to clipboard!");
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
      
      
        
      
        const toggleTheme = () => {
          setIsDarkMode(!isDarkMode);
          setTheme(isDarkMode ? "light" : "dark");
        };

        useEffect(() => {
          const fetchtransactions = async () => {
              try{
                var token = document.cookie.split('; ').find(row => row.startsWith('user=')).split('=')[1];
                console.log(token);
                try{
                  const response = await fetch('http://localhost:3000/user/transaction-history',
                    {
                      method: 'GET',
                      headers: {
                        'Authorization': `Bearer ${token}`,
                        // 'Content-Type': 'application/json',
                        }
                    }
                  ); 
          
                  const rdata = await response.json();
                  if(response.status!==200){
                    alert(rdata.error);
                  }else{
                    console.log(rdata.message);
                    const data = rdata.transaction_history.map((txn) => {
                      return {
                        _id: txn._id,
                        course_purchased: txn.course_purchased,
                        transaction_address: txn.transaction_address,
                        purchase_date: txn.purchase_date,
                      };
                    });
                    setTransactions(data);
                  }
                }catch(error){
                  console.log(error);
                }
              }catch(error){
                alert("User is not logged in or register");
              } 
            };
      
          fetchtransactions();
        }, []);
      

  // Toggle between dark and light modes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  // Mock transaction data
  // const transactions = [
  //   { id: 'TXN001', date: '2025-01-20', item: 'React Course', amount: '0.02 ETH', status: 'Success' },
  //   { id: 'TXN002', date: '2025-01-18', item: 'Blockchain Course', amount: '0.05 ETH', status: 'Success' },
  //   { id: 'TXN003', date: '2025-01-15', item: 'Python Course', amount: '0.03 ETH', status: 'Failed' },
  //   { id: 'TXN004', date: '2025-01-10', item: 'AI Course', amount: '0.04 ETH', status: 'Success' },
  //   { id: 'TXN004', date: '2025-01-10', item: 'AI Course', amount: '0.04 ETH', status: 'Success' },
  //   { id: 'TXN004', date: '2025-01-10', item: 'AI Course', amount: '0.04 ETH', status: 'Success' },
  //   { id: 'TXN003', date: '2025-01-15', item: 'Python Course', amount: '0.03 ETH', status: 'Failed' },
  // ];



  return (
    <div
    className={`${
      isDarkMode
        ? "bg-gradient-to-r from-black to-gray-700 text-gold"
        : "bg-gradient-to-r from-white/80 to-white text-black"
    } transition-colors duration-300`}
  >
      {/* Navbar */}
     <nav className="flex justify-between items-center p-6">
             <div className="flex items-center space-x-2">
               
                <img src="/images/Edusphere logo.png" alt="Logo" className="w-12 h-12 rounded-full shadow-lg" />
                 
                
               
               <h1 className="text-4xl font-bold ">Edusphere</h1>
             </div>
             <div className="flex items-center space-x-8">
               <div className="flex space-x-8">
                 <Link to="/Edusphere" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
                                  Home
                                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                                <Link to="/courses" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
                                  Courses
                                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
                                <Link to="/contest" className="group relative text-lg font-medium hover:text-amber-500 transition-colors">
                                  Contest
                                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 group-hover:w-full transition-all duration-300"></span>
                                </Link>
               </div>
     
               {/* Wallet Button */}
                   <motion.button
                           
                             whileHover={{ scale: 1.05 }}
                             whileTap={{ scale: 0.95 }}
                             className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                               walletConnected ? 
                               'bg-emerald-500/20 text-emerald-400' : 
                               'bg-amber-500 hover:bg-amber-600 text-white'
                             } transition-colors`}
                             onClick={walletConnected ? handleWalletClick : connectWallet}
                           >
                             {walletConnected ? (
                               <>
                                 <span className="hidden sm:inline">
                                   {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                                 </span>
                                 <FiCopy 
                                   className="hover:text-amber-400 transition-colors"
                                   onClick={copyToClipboard}
                                   data-tooltip-id="copy-tooltip"
                                 />
                               </>
                             ) : (
                               <>
                                 <span>Connect Wallet</span>
                                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                   <path d="M10 2a1 1 0 011 1v1.323l3.954.99a1 1 0 01.686.828L15.667 8H17a1 1 0 110 2h-1.333l-.012.082a5 5 0 01-4.245 4.245L11 14.667V17a1 1 0 11-2 0v-2.333l-.082-.012a5 5 0 01-4.245-4.245L4.333 10H3a1 1 0 110-2h1.333l.027-.86a1 1 0 01.686-.827L9 4.323V3a1 1 0 011-1z"/>
                                 </svg>
                               </>
                             )}
                             
                           </motion.button>
                           
     
               {/* Theme toggle */}
               <button className="dark-mode-toggle text-3xl" onClick={toggleTheme}>
                 {isDarkMode ? "🌙" : "☀️"}
               </button>
     
               {/* Dropdown Menu */}
               <div className="relative" ref={dropdownRef}>
                 <button
                   onClick={toggleDropdown}
                   className={`text-lg bg-gradient-to-r from-amber-500 to-amber-300 text-black py-2 px-4 rounded-full ${
                     walletAddress ? "" : "cursor-not-allowed opacity-50"
                   }`}
                   disabled={!walletAddress}
                 >
                   ☰
                 </button>
                 <AnimatePresence>
                   {dropdownOpen && walletAddress && (
                     <motion.div
                       initial={{ opacity: 0, y: -10 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: -10 }}
                       className={`absolute right-0 mt-2 w-64 origin-top-right rounded-xl shadow-xl backdrop-blur-lg ${
                         isDarkMode ? "bg-gray-800/95 border border-gray-700" : "bg-white/95 border border-amber-100"
                       } z-50`}  
                     >
                       <div className="p-2 space-y-1">
                         <Link
                           to="/signup"
                           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                         >
                           <FiUser className="text-amber-500" />
                           <span>Add Details</span>
                         </Link>
                         <Link
                           to="/coins"
                           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                         >
                           <FiDollarSign className="text-amber-500" />
                           <span>Coins</span>
                         </Link>
                         <Link
                           to="/transactions"
                           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                         >
                           <FiDollarSign className="text-amber-500" />
                           <span>Transactions</span>
                         </Link>
                         <Link
                           to="/mylearning"
                           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                         >
                           <FiBook className="text-amber-500" />
                           <span>My Learning</span>
                         </Link>
                         <Link
                           to="/redeem"
                           className="flex items-center space-x-3 p-3 rounded-lg hover:bg-amber-500/10 transition-colors"
                         >
                           <FiGift className="text-amber-500" />
                           <span>Redeem</span>
                         </Link>
                       </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
               </div>
             </div>
           </nav>
           <div className="border-b-4 border-gold"></div>

      {/* Transaction History Section */}
      <div className="p-8">
        <h1 className={`text-3xl font-bold text-center mb-6 ${
          isDarkMode ? 'dark:text-gold' : 'bg-gradient-to-r from-black to-gold text-transparent bg-clip-text'
        }`}>
          Transaction History   
        </h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse border border-gold dark:border-gold">
            <thead>
              <tr className="bg-gradient-to-r from-gold to-black text-white dark:from-black dark:to-gold">
                <th className="p-4 border border-gold dark:border-gold text-yellow-200">Transaction ID</th>
                <th className="p-4 border border-gold dark:border-gold text-gold">Date</th>
                <th className="p-4 border border-gold dark:border-gold text-gold">Item</th>
                <th className="p-4 border border-gold dark:border-gold text-gold">Amount</th>
                
              </tr>
            </thead>
            <tbody>
              {transactions.map((txn, index) => (
                <tr key={index} className="hover:bg-gold/10">
                  <td className="p-4 border border-gold dark:border-gold text-yellow-500">{txn._id}</td>
                  <td className="p-4 border border-gold dark:border-gold text-yellow-500">{txn.course_purchased.title}</td>
                  <td className="p-4 border border-gold dark:border-gold text-yellow-500"><a href={txn.transaction_address}>{txn.transaction_address}</a></td>
                  <td className="p-4 border border-gold dark:border-gold text-yellow-500">{txn.purchase_date}</td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionPage;
