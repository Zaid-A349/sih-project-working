import Sidebar from './Sidebar';

export default function AppLayout({ children, userType }) {
  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      <Sidebar userType={userType} />
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
}