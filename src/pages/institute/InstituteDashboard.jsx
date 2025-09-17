import Header from "../../components/layout/Header";
import { BarChart2, Download } from "lucide-react";

const ChartPlaceholder = ({ title }) => (
  <div className="bg-gray-50 border rounded-lg p-4 h-64 flex flex-col">
    <h3 className="font-semibold text-gray-600 mb-2">{title}</h3>
    <div className="flex-1 flex items-center justify-center text-gray-400">
      <BarChart2 size={48} />
      <p className="ml-2">Chart Data Unavailable</p>
    </div>
  </div>
);

export default function InstituteDashboard() {
  return (
    <>
      <Header studentName="Admin" />
      <main className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Total Students</p>
            <p className="text-3xl font-bold">1,250</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Total Faculty</p>
            <p className="text-3xl font-bold">85</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Activities Logged</p>
            <p className="text-3xl font-bold">5,600</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-500">Accreditation Score</p>
            <p className="text-3xl font-bold">3.8/4.0</p>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">
              Institutional Analytics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ChartPlaceholder title="Student Engagement by Department" />
              <ChartPlaceholder title="Activity Types Distribution" />
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-semibold mb-4">Generate Reports</h2>
            <ul className="space-y-3">
              <li>
                <button className="w-full flex items-center gap-2 p-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
                  <Download size={18} /> NAAC Accreditation Report
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 p-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                  <Download size={18} /> NIRF Data Export
                </button>
              </li>
              <li>
                <button className="w-full flex items-center gap-2 p-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
                  <Download size={18} /> Full Student Portfolio Data
                </button>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
