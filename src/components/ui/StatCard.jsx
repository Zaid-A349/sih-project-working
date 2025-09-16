export default function StatCard({ icon, label, value, color }) {
  const colors = {
    purple: 'from-purple-500 to-indigo-600',
    green: 'from-green-500 to-teal-600',
    orange: 'from-amber-500 to-orange-600',
    blue: 'from-sky-500 to-blue-600'
  };

  return (
    <div className={`p-6 rounded-xl bg-gradient-to-br ${colors[color] || colors.purple} text-white shadow-lg hover:shadow-xl transition-shadow`}>
      <div className="flex items-center gap-4">
        <div className="p-3 bg-white/20 rounded-lg">
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium opacity-80">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );
}