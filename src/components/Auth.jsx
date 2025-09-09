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
      setError('Şifreler eşleşmiyor');
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
        setError('Geçersiz kullanıcı adı veya şifre');
      }
    } else {
      // Register logic
      const users = role === 'student' ? mockUsers.students : mockUsers.teachers;
      const existingUser = users.find(u => u.username === formData.username);
      
      if (existingUser) {
        setError('Kullanıcı adı zaten mevcut');
        return;
      }

      // If student, require valid class code
      if (role === 'student') {
        const classes = JSON.parse(localStorage.getItem('teacherClasses') || '[]');
        const cls = classes.find(c => (c.code || '').toUpperCase() === (formData.classCode || '').toUpperCase());
        if (!cls) {
          setError('Geçerli bir sınıf kodu giriniz');
          return;
        }
        // Add student to class roster (by username)
        const newStudent = { id: formData.username, name: formData.username, email: formData.email, status: 'active' };
        const updated = classes.map(c => c.id === cls.id ? { ...c, students: [...c.students, newStudent] } : c);
        localStorage.setItem('teacherClasses', JSON.stringify(updated));
        // Track student's class mapping
        try {
          const map = JSON.parse(localStorage.getItem('studentClass') || '{}');
          map[formData.username] = cls.id;
          localStorage.setItem('studentClass', JSON.stringify(map));
        } catch (_) {}
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
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Hesabınıza giriş yapın' : 'Hesabınızı oluşturun'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? 'NeuroVerse\'e tekrar hoş geldiniz' : 'Bugün NeuroVerse\'e katılın'}
          </p>
        </div>

        <div className="bg-white py-8 px-6 shadow-xl rounded-lg">
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Ben bir:
              </label>
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
                  <span className="text-sm">Öğrenci</span>
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
                  <span className="text-sm">Öğretmen</span>
                </label>
              </div>
            </div>

            {/* Username */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Kullanıcı Adı
              </label>
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-posta
                </label>
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
                <label htmlFor="classCode" className="block text-sm font-medium text-gray-700">
                  Sınıf Kodu (Öğretmeninizden alın)
                </label>
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
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Şifre
              </label>
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
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                  Şifreyi Onayla
                </label>
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
                {isLogin ? 'Giriş Yap' : 'Hesap Oluştur'}
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
                {isLogin ? "Hesabınız yok mu? Kayıt olun" : 'Zaten hesabınız var mı? Giriş yapın'}
              </button>
            </div>

            {/* Demo Credentials */}
            <div className="text-center text-xs text-gray-500 bg-gray-50 p-3 rounded">
              <p className="font-semibold mb-1">Demo Giriş Bilgileri:</p>
              <p>Öğrenciler: student1/password123, student2/password123</p>
              <p>Öğretmenler: teacher1/password123, teacher2/password123</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth; 