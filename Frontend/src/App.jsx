import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edusphere from './components/Edusphere.jsx'; // Import EduSphere component
import RoleSelection from './components/role-selection.jsx'; // Import RoleSelection component
import { ThemeProvider,useTheme } from './components/Themecontext.jsx';
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

import { DotLottieReact } from '@lottiefiles/dotlottie-react';







const App = () => {
  return (
    
    <ThemeProvider> {/* Wrap ThemeProvider around the entire router */}
      <Router>
        <div>
        <Routes>
          <Route path="/" element={<Edusphere />} />
          <Route path="/Edusphere" element={<Edusphere />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/studenthome" element={<EduSphere1 />} />
          <Route path="/educatorhome" element={<EduSphere2 />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetailsPage />} />
          <Route path="/createcourses" element={<CreateCourse />} />
          <Route path="/managecourses" element={<Managecourse />} />
          <Route path="/redeem" element={<Redeem />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/themetoggle" element={<ThemeToggle />} />
            <Route path="/mylearning" element={<MyLearning />} />
            <Route path="/mylearning/:id" element={<CourseDetails />} />
         
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
        </div>
      </Router>
    </ThemeProvider>

            
    
  );
};
const GlobalDarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button onClick={toggleDarkMode} className="fixed top-4 right-4 z-10 bg-gray-800 text-white p-2 rounded">
      {darkMode ? '🌙 Light Mode' : '☀️ Dark Mode'}
    </button>
  );
};

export default App;

