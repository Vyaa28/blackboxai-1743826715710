import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function NavMenu() {
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold flex items-center">
          <i className="fas fa-eye mr-2"></i>
          EyeClinic Pro
        </Link>
        <div className="space-x-4">
          <Link to="/patient" className="hover:bg-blue-500 px-3 py-2 rounded">
            <i className="fas fa-user mr-1"></i> Patient
          </Link>
          <Link to="/book" className="hover:bg-blue-500 px-3 py-2 rounded">
            <i className="fas fa-calendar-check mr-1"></i> Book
          </Link>
          {isAuthenticated ? (
            <>
              <Link to="/staff" className="hover:bg-blue-500 px-3 py-2 rounded">
                <i className="fas fa-user-md mr-1"></i> Staff
              </Link>
              <button 
                onClick={logout}
                className="hover:bg-blue-500 px-3 py-2 rounded"
              >
                <i className="fas fa-sign-out-alt mr-1"></i> Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="hover:bg-blue-500 px-3 py-2 rounded">
              <i className="fas fa-sign-in-alt mr-1"></i> Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}