import { useState } from 'react';
import StudentLoginForm from '../components/forms/StudentLoginForm';
import FacultyLoginForm from '../components/forms/FacultyLoginForm';
import InstituteLoginForm from '../components/forms/InstituteLoginForm';
import { Building2 } from 'lucide-react';

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState('student');
  const [showInstituteLogin, setShowInstituteLogin] = useState(false);

  const handleTabClick = (tab) => {
    setShowInstituteLogin(false);
    setActiveTab(tab);
  };

  const handleInstituteClick = () => {
    setShowInstituteLogin(true);
    setActiveTab(''); // Deactivate student/faculty tabs
  };

  const renderForm = () => {
    if (showInstituteLogin) {
      return <InstituteLoginForm />;
    }
    switch (activeTab) {
      case 'student':
        return <StudentLoginForm />;
      case 'faculty':
        return <FacultyLoginForm />;
      default:
        return <StudentLoginForm />;
    }
  };

  const getTabClass = (tabName) => {
    return `cursor-pointer py-2 px-6 text-center text-lg font-semibold rounded-t-lg transition-all duration-300 ${
      activeTab === tabName
        ? 'bg-white text-indigo-600 border-b-2 border-indigo-600'
        : 'text-gray-200 hover:bg-white/10'
    }`;
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
      {/* Institute Login Button - Top Right */}
      <button
        onClick={handleInstituteClick}
        className={`absolute top-6 right-6 flex items-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-300 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm ${showInstituteLogin ? 'ring-2 ring-white' : ''}`}
      >
        <Building2 size={20} />
        Institute Login
      </button>

      <div className="w-full max-w-md">
        <div className="bg-black/30 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden">
          {/* Tabs */}
          {!showInstituteLogin && (
            <div className="flex bg-white/10">
              <div
                onClick={() => handleTabClick('student')}
                className={getTabClass('student')}
              >
                Student
              </div>
              <div
                onClick={() => handleTabClick('faculty')}
                className={getTabClass('faculty')}
              >
                Faculty
              </div>
            </div>
          )}
          
          {/* Form Area */}
          <div className="p-8 md:p-10">
            {renderForm()}
          </div>
        </div>
      </div>
       <footer className="absolute bottom-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Smart Student Hub. All Rights Reserved.
      </footer>
    </div>
  );
};

export default LoginPage;