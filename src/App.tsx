import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import LoginSeeker from './pages/LoginSeeker';
import LoginOwner from './pages/LoginOwner';
import SignupSeeker from './pages/SignupSeeker';
import SignupOwner from './pages/SignupOwner';
import RentPage from './pages/RentPage';
import OwnerDashboard from './pages/OwnerDashboard';
import AboutPage from './pages/AboutPage';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/login/seeker" element={<LoginSeeker />} />
              <Route path="/login/owner" element={<LoginOwner />} />
              <Route path="/signup/seeker" element={<SignupSeeker />} />
              <Route path="/signup/owner" element={<SignupOwner />} />
              <Route path="/rent" element={<RentPage />} />
              <Route path="/dashboard" element={<OwnerDashboard />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </motion.div>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;