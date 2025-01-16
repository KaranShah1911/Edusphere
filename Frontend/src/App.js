// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "./components/ThemeContext";

// import Login from './components/login';
import RoleSelection from './components/role-selection';
import Home from './components/home';
import Signup from './components/signup';
import UserLogin from './components/userlogin';
import Contest from './components/contest';
import Courses from './components/courses';
import Educator from './components/educatorhome';
import Student from './components/studenthome';
import CreateCourses from './components/createcourses';
import ManageCourses from './components/managecourses';
import RainbowKit from './components/rainbowkit';


const App = () => {
    return (
        <ThemeProvider>
        <Router>
            <Routes>
            <Route path="/" element={<Home />} /> 
                  {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/role-selection" element={<RoleSelection />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/userlogin" element={<UserLogin />} />  
                <Route path="/contest" element={<Contest />} /> 
                <Route path="/courses" element={<Courses />} />
                <Route path="/educatorhome" element={<Educator />} />
                <Route path="/studenthome" element={<Student />} />
                <Route path="/createcourses" element={<CreateCourses />} />
                <Route path="/managecourses" element={<ManageCourses />} />
                <Route path="/rainbowkit" element={<RainbowKit />} />
                

                
               
            </Routes>
        </Router>
        // </ThemeProvider>
    );
};

export default App;
