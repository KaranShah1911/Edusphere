import React, { useState } from 'react';

const TransactionPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [transactions, setTransactions] = useState([]);

  // Toggle between dark and light modes
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  };

  useEffect(() => {
    const fetchtransactions = async () => {
      try {
        const response = await fetch('http://localhost:3000/user/transaction-history'); 

        if(response.status!==200){
          alert(response.error);
        }else{
          console.log(response.message);
          const data = response.map((txn) => {
            return {
              _id: txn._id,
              course_purchased: txn.course_purchased,
              transaction_address: txn.transaction_address,
              purchase_date: txn.purchase_date,
            };
          });
          setTransactions(data);
        }
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchtransactions();
  }, []);

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
    <div className={`min-h-screen ${darkMode ? 'dark bg-black' : 'bg-white'}`}>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-gold to-black text-white dark:from-black dark:to-gold">
        <div className="flex items-center">
          <img src="/images/Edusphere logo.png" alt="Edusphere Logo" className="w-14 h-10 mr-2" />
          <h1 className="text-2xl font-bold">Edusphere</h1>
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/redeem" className="hover:underline">Redeem</a>
          <a href="/courses" className="hover:underline">Courses</a>
          <button onClick={toggleDarkMode} className="text-xl">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Transaction History Section */}
      <div className="p-8">
        <h1 className={`text-3xl font-bold text-center mb-6 ${
          darkMode ? 'dark:text-gold' : 'bg-gradient-to-r from-black to-gold text-transparent bg-clip-text'
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
