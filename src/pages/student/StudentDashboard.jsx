import { useState } from 'react';
import Header from '/src/components/layout/Header.jsx';
import StatCard from '/src/components/ui/StatCard.jsx';
import AddActivityModal from '../../components/student/AddActivityModal.jsx'; 
import { BookOpen, Target, CheckCircle, Clock } from 'lucide-react';

const initialStudentData = {
  name: "Jane Doe",
  stats: [
    { id: 1, label: "Total Credits Earned", value: "120", icon: <CheckCircle size={24} />, color: "green" },
    { id: 2, label: "Activities Logged", value: "24", icon: <Target size={24} />, color: "purple" },
    { id: 3, label: "Pending Approvals", value: "3", icon: <Clock size={24} />, color: "orange" },
    { id: 4, label: "Active Courses", value: "5", icon: <BookOpen size={24} />, color: "blue" },
  ],
  recentActivities: [
    { id: 1, type: "Workshop", title: "AI & Machine Learning", status: "Approved", date: "2025-09-10" },
    { id: 2, type: "Seminar", title: "Blockchain Fundamentals", status: "Approved", date: "2025-08-22" },
  ]
};

const ActivityItem = ({ activity }) => {
  const statusClasses = { Approved: 'bg-green-100 text-green-800', Pending: 'bg-yellow-100 text-yellow-800' };
  return (
    <tr className="border-b hover:bg-gray-50">
        <td className="p-4 font-medium text-gray-900">{activity.title}</td>
        <td className="p-4 text-gray-500">{activity.type}</td>
        <td className="p-4 text-gray-500">{activity.date}</td>
        <td className="p-4">
            <span className={`px-2 py-1 text-xs font-semibold rounded-full ${statusClasses[activity.status]}`}>{activity.status}</span>
        </td>
        <td className="p-4 text-right">
            <a href="#" className="font-medium text-indigo-600 hover:underline">View</a>
        </td>
    </tr>
  );
}

export default function StudentDashboard() {
  const [studentData, setStudentData] = useState(initialStudentData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveActivity = (newActivity) => {
    setStudentData(prevData => ({
      ...prevData,
      recentActivities: [newActivity, ...prevData.recentActivities]
    }));
  };

  return (
    <>
      <Header 
        studentName={studentData.name} 
        onAddActivityClick={() => setIsModalOpen(true)}
      />
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {studentData.stats.map(stat => (
            <StatCard key={stat.id} icon={stat.icon} label={stat.label} value={stat.value} color={stat.color} />
          ))}
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                      <th scope="col" className="p-4">Activity Name</th>
                      <th scope="col" className="p-4">Type</th>
                      <th scope="col" className="p-4">Date</th>
                      <th scope="col" className="p-4">Status</th>
                      <th scope="col" className="p-4"><span className="sr-only">Actions</span></th>
                  </tr>
              </thead>
              <tbody>
                {studentData.recentActivities.map(activity => (
                  <ActivityItem key={activity.id} activity={activity} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
      
      <AddActivityModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveActivity}
      />
    </>
  );
}