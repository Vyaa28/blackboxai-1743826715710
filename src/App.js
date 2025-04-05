import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Home from './pages/Home';
import PatientDashboard from './pages/PatientDashboard';
import AppointmentForm from './pages/AppointmentForm';
import StaffDashboard from './pages/StaffDashboard';
import Login from './pages/Login';
import NotFound from './pages/404';
import NavMenu from './components/NavMenu';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50">
          <NavMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/patient" element={<PatientDashboard />} />
            <Route path="/book" element={<AppointmentForm />} />
            <Route path="/staff" element={<StaffDashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;