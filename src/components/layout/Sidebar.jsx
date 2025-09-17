import {
  LayoutDashboard,
  Book,
  Award,
  Briefcase,
  LogOut,
  Users,
  FileBarChart,
  Settings,
  FileText,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import studentAvatar from "../../assets/student-avatar.png";

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 4L4 12L20 20L36 12L20 4Z" fill="#6366F1" />
    <path
      d="M4 28L20 36L36 28V12L20 20V36L4 28V12L12 16"
      stroke="#C7D2FE"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M36 12V28"
      stroke="#4F46E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 12V28"
      stroke="#4F46E5"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SidebarLink = ({ icon, text, to }) => (
  <li>
    <NavLink
      to={to}
      className={({ isActive }) =>
        `relative flex items-center py-3 px-4 my-1 font-medium rounded-md cursor-pointer transition-colors group ${
          isActive
            ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
            : "hover:bg-indigo-50 text-gray-600"
        }`
      }
    >
      {icon}
      <span className="w-52 ml-3">{text}</span>
    </NavLink>
  </li>
);

const menuConfig = {
  student: {
    links: [
      {
        icon: <LayoutDashboard size={20} />,
        text: "Dashboard",
        path: "/student/dashboard",
      },
      {
        icon: <Book size={20} />,
        text: "My Courses",
        path: "/student/my-courses",
      },
      {
        icon: <Award size={20} />,
        text: "Achievements",
        path: "/student/achievements",
      },
      {
        icon: <FileText size={20} />,
        text: "My Document",
        path: "/student/documents",
      },
      {
        icon: <Briefcase size={20} />,
        text: "Generate Portfolio",
        path: "/student/portfolio",
      },
    ],
    user: {
      name: "Jane Doe",
      email: "janedoe@college.edu",
      avatar: studentAvatar,
    },
  },
  faculty: {
    links: [
      {
        icon: <LayoutDashboard size={20} />,
        text: "Dashboard",
        path: "/faculty/dashboard",
      },
      {
        icon: <Users size={20} />,
        text: "My Students",
        path: "/faculty/students",
      },
      {
        icon: <Award size={20} />,
        text: "Approve Activities",
        path: "/faculty/approve-activities",
      },
    ],
    user: {
      name: "Dr. Alan Grant",
      email: "agrant@college.edu",
      avatar: null,
      initials: "AG",
    },
  },
  institute: {
    links: [
      {
        icon: <LayoutDashboard size={20} />,
        text: "Dashboard",
        path: "/institute/dashboard",
      },
      {
        icon: <FileBarChart size={20} />,
        text: "Analytics & Reports",
        path: "/institute/reports",
      },
      {
        icon: <Users size={20} />,
        text: "Manage Users",
        path: "/institute/users",
      },
      {
        icon: <Settings size={20} />,
        text: "System Settings",
        path: "/institute/settings",
      },
    ],
    user: {
      name: "Admin",
      email: "admin@college.edu",
      avatar: null,
      initials: "AD",
    },
  },
};

export default function Sidebar({ userType = "student", onLogoutClick }) {
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
              to={item.path}
            />
          ))}
        </ul>
        <div className="border-t px-3">
          <li
            onClick={onLogoutClick}
            className="relative flex items-center py-3 px-4 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-gray-600"
          >
            <LogOut size={20} />
            <span className="w-52 ml-3">Log Out</span>
          </li>
        </div>
        <div className="border-t flex p-3 items-center">
          {config.user.avatar ? (
            <img
              src={config.user.avatar}
              alt="user avatar"
              className="w-10 h-10 rounded-md object-cover"
            />
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
