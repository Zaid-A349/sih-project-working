import { Check, X } from 'lucide-react';

export default function PendingActivityItem({ activity, onApprove, onReject }) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
      <div>
        <p className="font-bold text-indigo-700">{activity.title}</p>
        <p className="text-sm text-gray-600">
          Submitted by: <span className="font-semibold">{activity.studentName}</span> on {activity.date}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={onApprove}
          className="p-2 bg-green-100 text-green-700 rounded-full hover:bg-green-200"
          aria-label="Approve"
        >
          <Check size={20} />
        </button>
        <button 
          onClick={onReject}
          className="p-2 bg-red-100 text-red-700 rounded-full hover:bg-red-200"
          aria-label="Reject"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}