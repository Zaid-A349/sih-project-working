import { useState } from 'react';
import StudentLoginForm from '../components/forms/StudentLoginForm';
import FacultyLoginForm from '../components/forms/FacultyLoginForm';
import InstituteLoginForm from '../components/forms/InstituteLoginForm';
import { Building2, Users } from 'lucide-react';
import backgroundImage from '../assets/background.jpg';

const LoginPage = ({ handleLogin }) => {
  const [activeTab, setActiveTab] = useState('student');
  const [showInstituteLogin, setShowInstituteLogin] = useState(false);

  const handleTabClick = (tab) => {
    setShowInstituteLogin(false);
    setActiveTab(tab);
  };

  const handleInstituteClick = () => {
    setShowInstituteLogin(true);
    setActiveTab('');
  };

  const renderForm = () => {
    if (showInstituteLogin) return <InstituteLoginForm handleLogin={handleLogin} />;
    switch (activeTab) {
      case 'student': return <StudentLoginForm handleLogin={handleLogin} />;
      case 'faculty': return <FacultyLoginForm handleLogin={handleLogin} />;
      default: return <StudentLoginForm handleLogin={handleLogin} />;
    }
  };

  const getTabClass = (tabName) => `cursor-pointer py-3 px-6 text-center text-lg font-semibold rounded-t-lg transition-all duration-300 ${activeTab === tabName ? 'bg-slate-100 dark:bg-slate-800 text-indigo-600' : 'text-gray-500 dark:text-gray-300 hover:bg-slate-500/10'}`;

  return (
    <div className="min-h-screen bg-cover bg-center font-sans" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="min-h-screen bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center p-4">
        
        {showInstituteLogin ? (
          <button
            onClick={() => handleTabClick('student')}
            className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-300 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm"
          >
            <Users size={20} />
            Student / Faculty Login
          </button>
        ) : (
          <button
            onClick={handleInstituteClick}
            className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-300 bg-white/20 hover:bg-white/30 rounded-lg backdrop-blur-sm"
          >
            <Building2 size={20} />
            Institute Login
          </button>
        )}
        
        <div className="w-full max-w-md">
          <div className="bg-white/10 dark:bg-black/30 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden">
            {!showInstituteLogin && (
              <div className="flex bg-white/5 dark:bg-black/10">
                <div onClick={() => handleTabClick('student')} className={getTabClass('student')}>Student</div>
                {/* Fixed typo below */}
                <div onClick={() => handleTabClick('faculty')} className={getTabClass('faculty')}>Faculty</div>
              </div>
            )}
            <div className="p-8 md:p-10">{renderForm()}</div>
          </div>
        </div>
        <footer className="absolute bottom-4 text-center text-gray-300 text-sm">
          © {new Date().getFullYear()} Smart Student Hub. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;