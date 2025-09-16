import { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import FacultyDashboard from './pages/faculty/FacultyDashboard.jsx';
import InstituteDashboard from './pages/institute/InstituteDashboard.jsx';

function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState({ isLoggedIn: false, userType: null });

  console.log("App rendered. Current Auth State:", auth); // DEBUG LOG

  const getDashboardPath = (userType) => {
    switch (userType) {
      case 'faculty': return '/faculty/dashboard';
      case 'institute': return '/institute/dashboard';
      default: return '/student/dashboard';
    }
  };

  const handleLogin = (userType) => {
    console.log("1. handleLogin called for userType:", userType); // DEBUG LOG
    setAuth({ isLoggedIn: true, userType: userType });
  };
  
  useEffect(() => {
    if (auth.isLoggedIn) {
      const path = getDashboardPath(auth.userType);
      console.log("2. useEffect triggered. Navigating to:", path); // DEBUG LOG
      navigate(path);
    }
  }, [auth, navigate]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
      
      <Route path="/student/dashboard" element={auth.isLoggedIn ? <AppLayout userType="student"><StudentDashboard /></AppLayout> : <Navigate to="/login" />} />
      <Route path="/faculty/dashboard" element={auth.isLoggedIn ? <AppLayout userType="faculty"><FacultyDashboard /></AppLayout> : <Navigate to="/login" />} />
      <Route path="/institute/dashboard" element={auth.isLoggedIn ? <AppLayout userType="institute"><InstituteDashboard /></AppLayout> : <Navigate to="/login" />} />
      
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;