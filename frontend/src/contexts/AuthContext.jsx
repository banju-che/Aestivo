import { createContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';  // Updated import

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem('access');
    return token ? jwtDecode(token) : null;
  });

  const [authTokens, setAuthTokens] = useState(() => {
    const access = localStorage.getItem('access');
    const refresh = localStorage.getItem('refresh');
    return access && refresh ? { access, refresh } : null;
  });

  const loginUser = async (username, password) => {
    const res = await fetch('http://localhost:8000/api/token/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      const data = await res.json();
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logoutUser = () => {
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
    setAuthTokens(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, authTokens, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
