import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './styles/index.css';
import Home from './components/Home.jsx';
import Features from './components/Features.jsx';
import Benefits from './components/Benefits.jsx';
import Contact from './components/Contact.jsx';
import Lessons from './components/Lessons.jsx';
import Reports from './components/Reports.jsx';
import Auth from './components/Auth.jsx';
import MyLessons from './components/MyLessons.jsx';
import ManageClasses from './components/ManageClasses.jsx';
import logo from './assets/nVerse-logo.png';

function Navbar({ user, onLogout }) {
  const location = useLocation();
  const [showDropdown, setShowDropdown] = useState(false);
  const { t, i18n } = useTranslation();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleLanguage = () => {
    const next = i18n.language === 'tr' ? 'en' : 'tr';
    i18n.changeLanguage(next);
    try { localStorage.setItem('lng', next); } catch (_) {}
  };

  return (
    <nav className="bg-indigo-700 text-white p-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Left side - Logo and Navigation */}
      <div className="flex items-center space-x-8">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="NeuroVerse Logo" className="h-14 w-auto" />
          <h1 className="text-xl font-bold">NeuroVerse</h1>
        </Link>
        
        {/* Navigation Menu */}
        <div className="flex items-center space-x-6">
          <Link 
            to="/" 
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/') 
                ? 'bg-indigo-800 text-white font-medium' 
                : 'hover:text-indigo-200'
            }`}
          >
            {t('nav.home')}
          </Link>
          {user && user.role === 'student' && (
            <Link 
              to="/lessons" 
              className={`px-3 py-2 rounded-md transition-colors ${
                isActive('/lessons') 
                  ? 'bg-indigo-800 text-white font-medium' 
                  : 'hover:text-indigo-200'
              }`}
            >
              {t('nav.lessons')}
            </Link>
          )}
          <Link 
            to="/features" 
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/features') 
                ? 'bg-indigo-800 text-white font-medium' 
                : 'hover:text-indigo-200'
            }`}
          >
            {t('nav.features')}
          </Link>
          <Link 
            to="/benefits" 
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/benefits') 
                ? 'bg-indigo-800 text-white font-medium' 
                : 'hover:text-indigo-200'
            }`}
          >
            {t('nav.benefits')}
          </Link>
          <Link 
            to="/contact" 
            className={`px-3 py-2 rounded-md transition-colors ${
              isActive('/contact') 
                ? 'bg-indigo-800 text-white font-medium' 
                : 'hover:text-indigo-200'
            }`}
          >
            {t('nav.contact')}
          </Link>
        </div>
      </div>

      {/* Right side - User dropdown or Login button */}
      <div className="flex items-center space-x-3">
        <button onClick={toggleLanguage} className="px-3 py-2 rounded-md bg-white text-indigo-700 hover:bg-gray-100 transition-colors text-sm font-medium">
          {i18n.language === 'tr' ? 'EN' : 'TR'}
        </button>
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="font-medium">{t('nav.welcome', { name: user.username })}</span>
              <svg className={`w-4 h-4 transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-2 z-50">
                {user.role === 'student' && (
                                    <Link
                    to={i18n.language === 'tr' ? '/derslerim' : '/my-lessons'}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setShowDropdown(false)}
                  >
                    {t('nav.myLessons')}
                  </Link>
                )}
                {user.role === 'teacher' && (
                  <>
                    <Link
                      to="/reports"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      {t('nav.reports')}
                    </Link>
                    <Link
                      to="/manage-classes"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => setShowDropdown(false)}
                    >
                      {t('nav.manageClasses')}
                    </Link>
                  </>
                )}
                <button
                  onClick={() => {
                    onLogout();
                    setShowDropdown(false);
                  }}
                  className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                >
                  {t('nav.logout')}
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/auth"
            className="flex items-center space-x-2 bg-white text-indigo-700 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors font-medium"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
            </svg>
            <span>{t('nav.login')}</span>
          </Link>
        )}
      </div>
    </nav>
  );
}

function ProtectedRoute({ user, children, requiredRole }) {
  if (!user || !user.isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/" replace />;
  }
  
  return children;
}

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for existing session on app load
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    // No need to navigate - user will stay on current page
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <div className="pt-20">
        <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/benefits" element={<Benefits />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Auth route */}
        <Route 
          path="/auth" 
          element={
            user ? 
              <Navigate to={user.role === 'student' ? '/lessons' : '/reports'} replace /> : 
              <Auth onLogin={handleLogin} />
          } 
        />
        
        {/* Protected routes */}
        <Route 
          path="/my-lessons" 
          element={
            <ProtectedRoute user={user} requiredRole="student">
              <MyLessons />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/derslerim" 
          element={
            <ProtectedRoute user={user} requiredRole="student">
              <MyLessons />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/manage-classes" 
          element={
            <ProtectedRoute user={user} requiredRole="teacher">
              <ManageClasses />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/lessons/*" 
          element={
            <ProtectedRoute user={user} requiredRole="student">
              <Lessons />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/reports/*" 
          element={
            <ProtectedRoute user={user} requiredRole="teacher">
              <Reports />
            </ProtectedRoute>
          } 
        />
        
        {/* Redirect unauthenticated users to auth */}
        <Route path="*" element={<Navigate to="/auth" replace />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;