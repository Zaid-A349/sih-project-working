import Sidebar from './Sidebar';

// The layout now accepts and passes down the onLogoutClick function
export default function AppLayout({ children, userType, onLogoutClick }) {
  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      <Sidebar userType={userType} onLogoutClick={onLogoutClick} />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}