// Minimal API client for NeuroVerse frontend -> FastAPI backend
// Uses Vite env var VITE_API_URL; defaults to local dev

const API_BASE_URL = (import.meta.env.VITE_API_URL)
  ? import.meta.env.VITE_API_URL
  : 'http://localhost:8000';

function getAuthToken() {
  try {
    const raw = localStorage.getItem('auth');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.accessToken || parsed?.token || null;
  } catch (_) {
    return null;
  }
}

function setAuth(token, user) {
  const payload = { accessToken: token, user };
  localStorage.setItem('auth', JSON.stringify(payload));
  if (user) localStorage.setItem('currentUser', JSON.stringify({ ...user, isAuthenticated: true }));
}

async function request(path, options = {}) {
  const token = getAuthToken();
  const headers = {
    ...(options.headers || {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  // Only add Content-Type for JSON, not for FormData
  if (!(options.body instanceof FormData)) {
    headers['Content-Type'] = 'application/json';
  }

  const res = await fetch(`${API_BASE_URL}${path}`, { ...options, headers });
  const text = await res.text();
  let data;
  try { data = text ? JSON.parse(text) : {}; } catch { data = { raw: text }; }
  if (!res.ok) {
    let message = `${res.status}`;
    
    if (data?.detail) {
      if (Array.isArray(data.detail)) {
        message = data.detail.map(error => {
          if (typeof error === 'string') return error;
          if (typeof error === 'object' && error !== null) {
            return error.msg || error.message || error.detail || 'Validation error';
          }
          return 'Validation error';
        }).join(', ');
      } else if (typeof data.detail === 'string') {
        message = data.detail;
      } else if (typeof data.detail === 'object' && data.detail !== null) {
        message = JSON.stringify(data.detail);
      }
    } else if (data?.message) {
      if (typeof data.message === 'string') {
        message = data.message;
      } else if (typeof data.message === 'object') {
        message = JSON.stringify(data.message);
      } else {
        message = String(data.message);
      }
    }
    
    // Final safety check
    if (typeof message !== 'string') {
      message = String(message);
    }
    
    const error = new Error(message);
    error.status = res.status;
    error.data = data;
    throw error;
  }
  return data;
}

const api = {
  baseUrl: API_BASE_URL,

  async login(username, password) {
    // Backend expects form data, not JSON
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    
    const data = await request('/api/v1/auth/login', {
      method: 'POST',
      headers: {
        // Remove Content-Type to let browser set it with boundary for FormData
      },
      body: formData
    });
    const token = data?.access_token || data?.accessToken || data?.token;
    
    console.log('Login response:', { token: token ? 'present' : 'missing', data });
    
    if (token) {
      setAuth(token, null); // Store token first
      // Get user profile with role information
      try {
        const userProfile = await this.me();
        console.log('User profile from /me:', userProfile);
        setAuth(token, userProfile); // Update with full profile
        return { token, user: userProfile };
      } catch (err) {
        console.error('Could not fetch user profile:', err);
        // If me() fails, still return token for fallback
        return { token, user: null };
      }
    }
    
    return { token: null, user: null };
  },

  async register({ username, password, email, firstName, lastName, role, classCode }) {
    const payload = { 
      username, 
      password, 
      email, 
      first_name: firstName, 
      last_name: lastName, 
      role, 
      class_code: classCode 
    };
    const data = await request('/api/v1/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload)
    });
    
    // Registration returns user data directly, but we still need to login to get token
    // For now, return the user data from registration
    const user = data || { username, email, role };
    return { token: null, user };
  },

  async me() {
    return request('/api/v1/users/me', { method: 'GET' });
  }
};

export default api;
