import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import FacultyDashboard from './pages/faculty/FacultyDashboard.jsx';
import InstituteDashboard from './pages/institute/InstituteDashboard.jsx';
import ConfirmationModal from './components/ui/ConfirmationModal.jsx';

const PlaceholderPage = ({ title }) => (
    <AppLayout><div className="p-8"><h1 className="text-3xl font-bold">{title}</h1><p>This page is under construction.</p></div></AppLayout>
);

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

  const handleLogin = (userType) => setAuth({ isLoggedIn: true, userType });
  const handleLogout = () => {
    setAuth({ isLoggedIn: false, userType: null });
    setIsLogoutModalOpen(false);
    navigate('/login');
  };
  
  useEffect(() => {
    if (auth.isLoggedIn) navigate(getDashboardPath(auth.userType));
  }, [auth, navigate]);

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        
        {/* Student Routes */}
        <Route path="/student/dashboard" element={auth.isLoggedIn ? <AppLayout userType="student" onLogoutClick={() => setIsLogoutModalOpen(true)}><StudentDashboard /></AppLayout> : <Navigate to="/login" />} />
        {/* The "/student/my-courses" route has been removed. */}
        <Route path="/student/achievements" element={auth.isLoggedIn ? <PlaceholderPage title="Achievements" /> : <Navigate to="/login" />} />
        <Route path="/student/documents" element={auth.isLoggedIn ? <PlaceholderPage title="My Documents" /> : <Navigate to="/login" />} />
        <Route path="/student/portfolio" element={auth.isLoggedIn ? <PlaceholderPage title="Generate Portfolio" /> : <Navigate to="/login" />} />

        {/* Faculty & Institute Routes */}
        <Route path="/faculty/dashboard" element={auth.isLoggedIn ? <AppLayout userType="faculty" onLogoutClick={() => setIsLogoutModalOpen(true)}><FacultyDashboard /></AppLayout> : <Navigate to="/login" />} />
        <Route path="/faculty/approve-activities" element={auth.isLoggedIn ? <PlaceholderPage title="Approve Activities" /> : <Navigate to="/login" />} />
        <Route path="/institute/dashboard" element={auth.isLoggedIn ? <AppLayout userType="institute" onLogoutClick={() => setIsLogoutModalOpen(true)}><InstituteDashboard /></AppLayout> : <Navigate to="/login" />} />
        
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
      <ConfirmationModal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)} onConfirm={handleLogout} title="Confirm Logout" message="Are you sure you want to log out?" />
    </>
  );
}

export default App;