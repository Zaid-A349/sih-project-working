import Header from '../../components/layout/Header';
import { Users, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const facultyData = {
  name: "Dr. Alan Grant",
  students: [
    { id: "S001", name: "John Doe", course: "Computer Science", pending: 2 },
    { id: "S002", name: "Jane Smith", course: "Mechanical Engg.", pending: 0 },
    { id: "S003", name: "Peter Jones", course: "Civil Engg.", pending: 1 },
    { id: "S004", name: "Mary Jane", course: "Computer Science", pending: 0 },
  ],
  approvals: [
      { student: "John Doe", activity: "AI Workshop", date: "2025-09-12" },
      { student: "Peter Jones", activity: "Hackathon 2025", date: "2025-09-10" },
  ]
};

export default function FacultyDashboard() {
  return (
    <>
      <Header studentName={facultyData.name} />
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
                <Users className="text-indigo-500" size={32}/>
                <div>
                    <p className="text-gray-500">Total Students</p>
                    <p className="text-2xl font-bold">{facultyData.students.length}</p>
                </div>
            </div>
            
            <Link to="/faculty/approve-activities" className="block hover:shadow-lg transition-shadow rounded-xl">
              <div className="bg-white p-6 rounded-xl shadow-md h-full flex items-center gap-4">
                  <Clock className="text-orange-500" size={32}/>
                  <div>
                      <p className="text-gray-500">Pending Approvals</p>
                      <p className="text-2xl font-bold">{facultyData.approvals.length}</p>
                  </div>
              </div>
            </Link>

            <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
                <CheckCircle className="text-green-500" size={32}/>
                <div>
                    <p className="text-gray-500">Activities Approved</p>
                    <p className="text-2xl font-bold">42</p>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Student List</h2>
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500">
                  <th className="py-2">Student ID</th><th>Name</th><th>Course</th><th>Pending</th><th></th>
                </tr>
              </thead>
              <tbody>
                {facultyData.students.map(s => (
                  <tr key={s.id} className="border-t">
                    <td className="py-3">{s.id}</td>
                    <td className="font-medium">{s.name}</td>
                    <td>{s.course}</td>
                    <td>
                      <span className={s.pending > 0 ? 'text-orange-500 font-semibold' : 'text-gray-400'}>
                        {s.pending}
                      </span>
                    </td>
                    <td><a href="#" className="text-indigo-600 font-semibold">View</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Approval Queue</h2>
            <ul className="space-y-4">
              {facultyData.approvals.map(a => (
                <li key={a.activity} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-semibold">{a.activity}</p>
                  <p className="text-sm text-gray-600">{a.student} - {a.date}</p>
                  <div className="mt-2 flex gap-2">
                    <button className="text-xs bg-green-500 text-white py-1 px-3 rounded-full hover:bg-green-600">Approve</button>
                    <button className="text-xs bg-red-500 text-white py-1 px-3 rounded-full hover:bg-red-600">Reject</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}