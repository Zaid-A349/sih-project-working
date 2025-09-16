import { LayoutDashboard, Book, Award, Briefcase, LogOut, Users, FileBarChart, Settings } from 'lucide-react';
import { useState } from 'react';
import studentAvatar from '../../assets/student-avatar.png';

const Logo = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L4 12L20 20L36 12L20 4Z" fill="#6366F1"/>
        <path d="M4 28L20 36L36 28V12L20 20V36L4 28V12L12 16" stroke="#C7D2FE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M36 12V28" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 12V28" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

const SidebarLink = ({ icon, text, active, onClick }) => (
  <li
    onClick={onClick}
    className={`relative flex items-center py-3 px-4 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}`}
  >
    {icon}
    <span className="w-52 ml-3">{text}</span>
  </li>
);

const menuConfig = {
  student: {
    links: [
      { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
      { icon: <Book size={20} />, text: "My Courses" },
      { icon: <Award size={20} />, text: "Achievements" },
      { icon: <Briefcase size={20} />, text: "Career Portfolio" },
    ],
    user: { name: "Jane Doe", email: "janedoe@college.edu", avatar: studentAvatar }
  },
  faculty: {
    links: [
      { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
      { icon: <Users size={20} />, text: "My Students" },
      { icon: <Award size={20} />, text: "Approve Activities" },
    ],
    user: { name: "Dr. Alan Grant", email: "agrant@college.edu", avatar: null, initials: "AG" }
  },
  institute: {
    links: [
      { icon: <LayoutDashboard size={20} />, text: "Dashboard" },
      { icon: <FileBarChart size={20} />, text: "Analytics & Reports" },
      { icon: <Users size={20} />, text: "Manage Users" },
      { icon: <Settings size={20} />, text: "System Settings" },
    ],
    user: { name: "Admin", email: "admin@college.edu", avatar: null, initials: "AD" }
  }
};

export default function Sidebar({ userType = 'student' }) {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const config = menuConfig[userType];

  return (
    <aside className="h-screen sticky top-0">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex items-center gap-3">
          <Logo />
          <h1 className="text-2xl font-bold text-indigo-600">SmartHub</h1>
        </div>
        <ul className="flex-1 px-3 mt-4">
          {config.links.map((item) => (
            <SidebarLink 
              key={item.text} 
              icon={item.icon} 
              text={item.text} 
              active={activeItem === item.text}
              onClick={() => setActiveItem(item.text)}
            />
          ))}
        </ul>
        <div className="border-t px-3">
          <SidebarLink icon={<LogOut size={20} />} text="Log Out" />
        </div>
        <div className="border-t flex p-3 items-center">
            {config.user.avatar ? (
              <img src={config.user.avatar} alt="user avatar" className="w-10 h-10 rounded-md object-cover" />
            ) : (
              <div className="w-10 h-10 rounded-md bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                {config.user.initials}
              </div>
            )}
            <div className="flex justify-between items-center w-52 ml-3">
                <div className="leading-4">
                    <h4 className="font-semibold">{config.user.name}</h4>
                    <span className="text-xs text-gray-600">{config.user.email}</span>
                </div>
            </div>
        </div>
      </nav>
    </aside>
  );
}