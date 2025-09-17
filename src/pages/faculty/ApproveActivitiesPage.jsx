import { useState } from 'react';
import Header from '/src/components/layout/Header.jsx';
import PendingActivityItem from '/src/components/faculty/PendingActivityItem.jsx';

// Mock data for pending activities
const initialPendingActivities = [
  { id: 'act001', studentName: 'Jane Doe', title: 'AI & Machine Learning Workshop', date: '2025-09-10' },
  { id: 'act002', studentName: 'John Smith', title: 'National Hackathon 2025', date: '2025-09-05' },
  { id: 'act003', studentName: 'Peter Jones', title: 'React Basics Certification', date: '2025-08-15' },
];

export default function ApproveActivitiesPage() {
  const [activities, setActivities] = useState(initialPendingActivities);

  const handleApprove = (activityId) => {
    alert(`Approved activity ${activityId}`);
    // In a real app, you'd filter out the approved item:
    // setActivities(prev => prev.filter(act => act.id !== activityId));
  };

  const handleReject = (activityId) => {
    alert(`Rejected activity ${activityId}`);
    // In a real app, you'd filter out the rejected item:
    // setActivities(prev => prev.filter(act => act.id !== activityId));
  };

  return (
    <>
      <Header studentName="Dr. Alan Grant" />
      <main className="p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Approve Activities</h2>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <div className="space-y-4">
            {activities.length > 0 ? (
              activities.map(activity => (
                <PendingActivityItem 
                  key={activity.id}
                  activity={activity}
                  onApprove={() => handleApprove(activity.id)}
                  onReject={() => handleReject(activity.id)}
                />
              ))
            ) : (
              <p className="text-center text-gray-500 py-8">No pending approvals.</p>
            )}
          </div>
        </div>
      </main>
    </>
  );
}