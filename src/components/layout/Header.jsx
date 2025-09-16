import { Search, Bell, Plus } from 'lucide-react';

export default function Header({ studentName }) {
  return (
    <header className="bg-white p-4 flex justify-between items-center border-b sticky top-0 z-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, {studentName}!</h1>
        <p className="text-gray-500">Here's what's happening with your profile today.</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search activities..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <Bell size={20} className="text-gray-600" />
          <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <button className="flex items-center gap-2 bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg">
          <Plus size={20} />
          Add Activity
        </button>
      </div>
    </header>
  );
}