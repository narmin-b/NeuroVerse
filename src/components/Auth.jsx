import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import api from '../services/api.js';

function Auth({ onLogin }) {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    firstName: '',
    lastName: '',
    role: 'student',
    classCode: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError(t('auth.passwordsNoMatch'));
      return;
    }

    try {
      if (isLogin) {
        const { token, user } = await api.login(formData.username, formData.password);
        console.log('Auth component received:', { token: token ? 'present' : 'missing', user });
        if (token && user) {
          const session = { ...user, isAuthenticated: true };
          console.log('Final session object:', session);
          localStorage.setItem('currentUser', JSON.stringify(session));
          onLogin(session);
          navigate(user.role === 'student' ? '/lessons' : '/reports');
        } else {
          setError(t('auth.invalidCredentials'));
        }
      } else {
        const { token, user } = await api.register({
          username: formData.username,
          password: formData.password,
          email: formData.email,
          firstName: formData.firstName,
          lastName: formData.lastName,
          role: formData.role,
          classCode: formData.role === 'student' ? formData.classCode : null
        });
        if (user) {
          const session = { ...user, isAuthenticated: true };
          localStorage.setItem('currentUser', JSON.stringify(session));
          onLogin(session);
          navigate(user.role === 'student' ? '/lessons' : '/reports');
        }
      }
    } catch (err) {
      console.error('Auth error:', err);
      
      let msg = t('auth.invalidCredentials');
      
      // Handle different error formats
      if (err?.data?.detail) {
        if (Array.isArray(err.data.detail)) {
          // Handle validation errors array
          msg = err.data.detail.map(error => {
            if (typeof error === 'string') return error;
            if (typeof error === 'object' && error !== null) {
              return error.msg || error.message || error.detail || 'Validation error';
            }
            return 'Validation error';
          }).join(', ');
        } else if (typeof err.data.detail === 'string') {
          msg = err.data.detail;
        } else if (typeof err.data.detail === 'object' && err.data.detail !== null) {
          msg = JSON.stringify(err.data.detail);
        }
      } else if (err?.message) {
        // Ensure message is a string
        if (typeof err.message === 'string') {
          msg = err.message;
        } else if (typeof err.message === 'object') {
          msg = JSON.stringify(err.message);
        } else {
          msg = String(err.message);
        }
      } else if (err?.toString) {
        msg = err.toString();
      }
      
      // Final safety check - ensure msg is always a string
      if (typeof msg !== 'string') {
        msg = String(msg);
      }
      
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{isLogin ? t('auth.signInTitle') : t('auth.signUpTitle')}</h2>
          <p className="mt-2 text-sm text-gray-600">{isLogin ? t('auth.welcomeBack') : t('auth.joinToday')}</p>
        </div>

        <div className="bg-white py-8 px-6 shadow-xl rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">{t('auth.username')}</label>
              <input
                id="username"
                name="username"
                type="text"
                required
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Email (only for registration) */}
            {!isLogin && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('auth.email')}</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}

            {/* Role Selection (only for registration) */}
            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-gray-700">{t('auth.iam')}</label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input
                      id="role-student"
                      name="role"
                      type="radio"
                      value="student"
                      checked={formData.role === 'student'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="role-student" className="ml-2 block text-sm text-gray-900">
                      {t('auth.student')}
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="role-teacher"
                      name="role"
                      type="radio"
                      value="teacher"
                      checked={formData.role === 'teacher'}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
                    />
                    <label htmlFor="role-teacher" className="ml-2 block text-sm text-gray-900">
                      {t('auth.teacher')}
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* First Name (only for registration) */}
            {!isLogin && (
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t('auth.firstName')}</label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}

            {/* Last Name (only for registration) */}
            {!isLogin && (
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t('auth.lastName')}</label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}

            {/* Class Code (required for students only) */}
            {!isLogin && formData.role === 'student' && (
              <div>
                <label htmlFor="classCode" className="block text-sm font-medium text-gray-700">{t('auth.classCode')}</label>
                <input
                  id="classCode"
                  name="classCode"
                  type="text"
                  required
                  value={formData.classCode}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 uppercase tracking-widest"
                />
              </div>
            )}

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">{t('auth.password')}</label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={formData.password}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            {/* Confirm Password (only for registration) */}
            {!isLogin && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">{t('auth.confirmPassword')}</label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-2 rounded">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLogin ? t('auth.signIn') : t('auth.signUp')}
              </button>
            </div>

            {/* Toggle Login/Register */}
            <div className="text-center">
              <button
                type="button"
                    onClick={() => {
                      setIsLogin(!isLogin);
                      setError('');
                      setFormData({ username: '', password: '', confirmPassword: '', email: '', firstName: '', lastName: '', role: 'student', classCode: '' });
                    }}
                className="text-indigo-600 hover:text-indigo-500 text-sm"
              >
                {isLogin ? t('auth.toggleToSignUp') : t('auth.toggleToSignIn')}
              </button>
            </div>

            {/* Demo Credentials */}
            <div className="text-center text-xs text-gray-500 bg-gray-50 p-3 rounded">
              <p className="font-semibold mb-1">{t('auth.demoCredentialsTitle')}</p>
              <p>{t('auth.studentsDemo')}</p>
              <p>{t('auth.teachersDemo')}</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth; 