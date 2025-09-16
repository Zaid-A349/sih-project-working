import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout.jsx';
import LoginPage from './pages/LoginPage.jsx';
import StudentDashboard from './pages/student/StudentDashboard.jsx';
import FacultyDashboard from './pages/faculty/FacultyDashboard.jsx';
import InstituteDashboard from './pages/institute/InstituteDashboard.jsx';

function App() {
  // In a real app, this would be dynamic, e.g., from a user context
  const auth = {
    isLoggedIn: true,
    userType: 'student' // Change this to 'faculty' or 'institute' to see other dashboards
  };
  
  const getDashboardPath = (userType) => {
    switch (userType) {
      case 'faculty': return '/faculty/dashboard';
      case 'institute': return '/institute/dashboard';
      default: return '/student/dashboard';
    }
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        
        {/* Protected Routes Wrapped in Layout */}
        <Route 
          path="/student/dashboard" 
          element={auth.isLoggedIn ? <AppLayout userType="student"><StudentDashboard /></AppLayout> : <Navigate to="/login" />} 
        />
        <Route 
          path="/faculty/dashboard" 
          element={auth.isLoggedIn ? <AppLayout userType="faculty"><FacultyDashboard /></AppLayout> : <Navigate to="/login" />} 
        />
        <Route 
          path="/institute/dashboard" 
          element={auth.isLoggedIn ? <AppLayout userType="institute"><InstituteDashboard /></AppLayout> : <Navigate to="/login" />} 
        />

        {/* Default redirect based on login status and user type */}
        <Route 
          path="/" 
          element={<Navigate to={auth.isLoggedIn ? getDashboardPath(auth.userType) : "/login"} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;