async function connectMetaMask() {
    if (typeof window.ethereum !== 'undefined') {
        try {
            // Request account access from MetaMask
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log(`Connected to account: ${accounts[0]}`);
            
            // After successful connection, redirect to the role selection page
            window.location.href = "role-selection.html";
        } catch (error) {
            console.error('User rejected the request:', error);
            alert('Connection request denied!');
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask to continue.');
    }
}
