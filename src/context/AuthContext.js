import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
      setUser({ email: 'admin@eyeclinic.com', role: 'admin' });
    }
  }, []);

  const login = (email, password) => {
    // Simple mock authentication
    if (email === 'admin@eyeclinic.com' && password === 'secure123') {
      localStorage.setItem('isAuthenticated', 'true');
      setIsAuthenticated(true);
      setUser({ email, role: 'admin' });
      navigate('/staff');
      return true;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuthenticated(false);
    setUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}