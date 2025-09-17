import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import FacultyDashboard from './pages/faculty/FacultyDashboard.jsx';
import InstituteDashboard from './pages/institute/InstituteDashboard.jsx';
import ConfirmationModal from './components/ui/ConfirmationModal.jsx';

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ isLoggedIn: false, userType: null });
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const getDashboardPath = (userType) => {
    switch (userType) {
      case 'faculty': return '/faculty/dashboard';
      case 'institute': return '/institute/dashboard';
      default: return '/student/dashboard';
    }
  };

  const handleLogin = (userType) => {
    setAuth({ isLoggedIn: true, userType: userType });
  };
  
  const handleLogout = () => {
    setAuth({ isLoggedIn: false, userType: null });
    setIsLogoutModalOpen(false);
    navigate('/login');
  };
  
  useEffect(() => {
    if (auth.isLoggedIn) {
      navigate(getDashboardPath(auth.userType));
    }
  }, [auth, navigate]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        
        {/* Main Dashboard Routes */}
        <Route path="/student/dashboard" element={auth.isLoggedIn ? <AppLayout userType="student" onLogoutClick={() => setIsLogoutModalOpen(true)}><StudentDashboard /></AppLayout> : <Navigate to="/login" />} />
        <Route path="/faculty/dashboard" element={auth.isLoggedIn ? <AppLayout userType="faculty" onLogoutClick={() => setIsLogoutModalOpen(true)}><FacultyDashboard /></AppLayout> : <Navigate to="/login" />} />
        <Route path="/institute/dashboard" element={auth.isLoggedIn ? <AppLayout userType="institute" onLogoutClick={() => setIsLogoutModalOpen(true)}><InstituteDashboard /></AppLayout> : <Navigate to="/login" />} />
        
        {/* Default route */}
        <Route path="*" element={<Navigate to={auth.isLoggedIn ? getDashboardPath(auth.userType) : "/login"} />} />
      </Routes>

      <ConfirmationModal 
        isOpen={isLogoutModalOpen}
        onClose={() => setIsLogoutModalOpen(false)}
        onConfirm={handleLogout}
        title="Confirm Logout"
        message="Are you sure you want to log out?"
      />
    </>
  );
}

export default App;