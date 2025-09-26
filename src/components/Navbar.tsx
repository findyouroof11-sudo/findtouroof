import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Home, Search, User, Building2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import GlassButton from './GlassButton';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const navItems = [
    { path: '/', label: 'HOME', icon: Home },
    { path: '/rent', label: 'FIND HOMES', icon: Search },
    { path: '/about', label: 'MISSION', icon: Building2 },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect backdrop-blur-xl bg-white/10 dark:bg-gray-900/10 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-lime-400" />
            <span className="font-bold text-xl text-gray-900 dark:text-white">
              FINDYOUROOF
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`font-semibold text-sm tracking-wide transition-colors ${
                  location.pathname === path
                    ? 'text-lime-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-lime-400'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to={user.type === 'owner' ? '/dashboard' : '/rent'}>
                  <GlassButton variant="secondary">
                    DASHBOARD
                  </GlassButton>
                </Link>
                <GlassButton onClick={logout} variant="outline">
                  LOGOUT
                </GlassButton>
              </div>
            ) : (
              <>
                <Link to="/login/seeker">
                  <GlassButton variant="outline">LOGIN</GlassButton>
                </Link>
                <Link to="/signup/seeker">
                  <GlassButton>GET STARTED</GlassButton>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-lime-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-effect backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-b border-white/20"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  location.pathname === path
                    ? 'bg-lime-400/10 text-lime-400'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <Icon size={20} />
                <span className="font-semibold">{label}</span>
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              {user ? (
                <div className="space-y-3">
                  <Link
                    to={user.type === 'owner' ? '/dashboard' : '/rent'}
                    onClick={() => setIsOpen(false)}
                  >
                    <GlassButton className="w-full" variant="secondary">
                      DASHBOARD
                    </GlassButton>
                  </Link>
                  <GlassButton onClick={logout} className="w-full" variant="outline">
                    LOGOUT
                  </GlassButton>
                </div>
              ) : (
                <div className="space-y-3">
                  <Link to="/login/seeker" onClick={() => setIsOpen(false)}>
                    <GlassButton className="w-full" variant="outline">LOGIN</GlassButton>
                  </Link>
                  <Link to="/signup/seeker" onClick={() => setIsOpen(false)}>
                    <GlassButton className="w-full">GET STARTED</GlassButton>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;