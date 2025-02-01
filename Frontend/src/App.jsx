import React, { useState, useEffect } from "react";
import { WalletProvider } from "./context/WalletProvider.jsx";
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Edusphere from './components/Edusphere.jsx';
import RoleSelection from './components/role-selection.jsx';
import { ThemeProvider, useTheme } from './components/Themecontext.jsx';
import EduSphere1 from './components/studenthome.jsx';
import EduSphere2 from './components/educatorhome.jsx';
import Courses from './components/courses.jsx';
import CourseDetailsPage from './components/coursedetails.jsx';
import CreateCourse from './components/createcourses.jsx';
import Managecourse from './components/managecourses.jsx';
import Redeem from './components/redeem.jsx';
import Transaction from './components/transaction.jsx';
import Contest from './components/contest.jsx';
import SignUp from './components/signup.jsx';
import ThemeToggle from './components/themetoggle.jsx';
import MyLearning from './components/mylearning.jsx';
import CourseDetails from './components/coursedetails1.jsx';
import HowItWorks from './components/howitworks.jsx';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const ProtectedRoute = ({ element }) => {
  const [walletAddress, setWalletAddress] = useState(localStorage.getItem("walletAddress"));
  const location = useLocation();
  

  useEffect(() => {
    const savedWallet = localStorage.getItem("walletAddress");
    setWalletAddress(savedWallet);
  }, [location]);

  return walletAddress ? element : <Navigate to="/role-selection" replace />;
};

const App = () => {
  return (
    <ThemeProvider>
      <WalletProvider>
        <Router>
          <Routes>
            {/* Routes accessible to everyone */}
            <Route path="/" element={<Edusphere />} />
            <Route path="/Edusphere" element={<Edusphere />} />
            <Route path="/role-selection" element={<RoleSelection />} />

            {/* Protected routes */}
            <Route path="/studenthome"  element={<EduSphere1 />} />
            <Route path="/educatorhome"  element={<EduSphere2 />} />
            <Route path="/courses"  element={<Courses />}  />
            <Route path="/course/:id" element={<ProtectedRoute element={<CourseDetailsPage />} />} />
            <Route path="/coursedetails" element={<ProtectedRoute element={<CourseDetailsPage />} />} />
            <Route path="/createcourses" element={<ProtectedRoute element={<CreateCourse />} />} />
            <Route path="/managecourses" element={<ProtectedRoute element={<Managecourse />} />} />
            <Route path="/redeem" element={<ProtectedRoute element={<Redeem />} />} />
            <Route path="/transaction" element={<ProtectedRoute element={<Transaction />} />} />
            <Route path="/contest" element={<ProtectedRoute element={<Contest />} />} />
            <Route path="/signup" element={<ProtectedRoute element={<SignUp />} />} />
            <Route path="/themetoggle" element={<ProtectedRoute element={<ThemeToggle />} />} />
            <Route path="/mylearning" element={<ProtectedRoute element={<MyLearning />} />} />
            <Route path="/mylearning/:id" element={<ProtectedRoute element={<CourseDetails />} />} />
            <Route path="/howitworks" element={<ProtectedRoute element={<HowItWorks />} />} />

            {/* Route for the animation */}
            <Route
              path="/animation"
              element={
                <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <DotLottieReact
                    src="https://lottie.host/2fa8ee19-3348-4358-92c0-c3331ca12c20/BbbdUxJoOR.lottie"
                    loop
                    autoplay
                  />
                </div>
              }
            />
          </Routes>
        </Router>
      </WalletProvider>
    </ThemeProvider>
  );
};

const GlobalDarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <button onClick={toggleDarkMode} className="fixed top-4 right-4 z-10 bg-gray-800 text-white p-2 rounded">
      {darkMode ? '🌙 Light Mode' : '☀ Dark Mode'}
    </button>
  );
};

export default App;