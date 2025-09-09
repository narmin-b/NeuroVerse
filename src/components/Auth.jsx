import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Auth({ onLogin }) {
  const { t } = useTranslation();
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    classCode: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Mock user database (in real app, this would be in a backend)
  const mockUsers = JSON.parse(localStorage.getItem('users')) || {
    students: [
      { username: 'student1', password: 'password123', email: 'student1@neuroverse.com', role: 'student' },
      { username: 'student2', password: 'password123', email: 'student2@neuroverse.com', role: 'student' }
    ],
    teachers: [
      { username: 'teacher1', password: 'password123', email: 'teacher1@neuroverse.com', role: 'teacher' },
      { username: 'teacher2', password: 'password123', email: 'teacher2@neuroverse.com', role: 'teacher' }
    ]
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError(t('auth.passwordsNoMatch'));
      return;
    }

    if (isLogin) {
      // Login logic
      const users = role === 'student' ? mockUsers.students : mockUsers.teachers;
      const user = users.find(u => u.username === formData.username && u.password === formData.password);
      
      if (user) {
        const session = { ...user, isAuthenticated: true };
        localStorage.setItem('currentUser', JSON.stringify(session));
        onLogin(session);
        navigate(role === 'student' ? '/lessons' : '/reports');
      } else {
        setError(t('auth.invalidCredentials'));
      }
    } else {
      // Register logic
      const users = role === 'student' ? mockUsers.students : mockUsers.teachers;
      const existingUser = users.find(u => u.username === formData.username);
      
      if (existingUser) {
        setError(t('auth.usernameExists'));
        return;
      }

      // If student, require valid class code
      if (role === 'student') {
        const classes = JSON.parse(localStorage.getItem('teacherClasses') || '[]');
        const cls = classes.find(c => (c.code || '').toUpperCase() === (formData.classCode || '').toUpperCase());
        if (!cls) {
          setError(t('auth.requireClassCode'));
          return;
        }
        // Create a pending join request instead of immediate enrollment
        const allReq = JSON.parse(localStorage.getItem('classJoinRequests') || '{}');
        const arr = Array.isArray(allReq[cls.id]) ? allReq[cls.id] : [];
        if (!arr.find(r => r.username === formData.username)) {
          arr.push({ username: formData.username, email: formData.email, ts: Date.now(), status: 'pending' });
        }
        allReq[cls.id] = arr;
        localStorage.setItem('classJoinRequests', JSON.stringify(allReq));
        const st = JSON.parse(localStorage.getItem('studentJoinStatus') || '{}');
        st[formData.username] = { classId: cls.id, status: 'pending' };
        localStorage.setItem('studentJoinStatus', JSON.stringify(st));
      }

      const newUser = {
        username: formData.username,
        password: formData.password,
        email: formData.email,
        role: role
      };

      users.push(newUser);
      mockUsers[role === 'student' ? 'students' : 'teachers'] = users;
      localStorage.setItem('users', JSON.stringify(mockUsers));

      // Auto-login after registration
      const session = { ...newUser, isAuthenticated: true };
      localStorage.setItem('currentUser', JSON.stringify(session));
      onLogin(session);
      navigate(role === 'student' ? '/lessons' : '/reports');
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
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">{t('auth.iam')}</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={role === 'student'}
                    onChange={(e) => setRole(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">{t('auth.student')}</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="teacher"
                    checked={role === 'teacher'}
                    onChange={(e) => setRole(e.target.value)}
                    className="mr-2"
                  />
                  <span className="text-sm">{t('auth.teacher')}</span>
                </label>
              </div>
            </div>

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

            {/* Class Code (students only, required to join) */}
            {!isLogin && role === 'student' && (
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
                  setFormData({ username: '', password: '', confirmPassword: '', email: '' });
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