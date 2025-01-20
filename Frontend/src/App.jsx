import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Edusphere from './components/Edusphere.jsx'; // Import EduSphere component
import RoleSelection from './components/role-selection.jsx'; // Import RoleSelection component
import { ThemeProvider } from './components/Themecontext.jsx';
import EduSphere1 from './components/studenthome.jsx';
import EduSphere2 from './components/educatorhome.jsx';

const App = () => {
  return (
    <ThemeProvider> {/* Wrap ThemeProvider around the entire router */}
      <Router>
        <Routes>
          <Route path="/" element={<Edusphere />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/studenthome" element={<EduSphere1 />} />
          <Route path="/educatorhome" element={<EduSphere2 />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;