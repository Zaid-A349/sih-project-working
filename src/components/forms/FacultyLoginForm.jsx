import { User, KeyRound } from 'lucide-react';

const FacultyLoginForm = ({ handleLogin }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    handleLogin('faculty');
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Faculty Login</h2>
      <p className="text-gray-300 text-center mb-8">Access student dashboards and approval panel.</p>
      
      <form className="space-y-6" onSubmit={onFormSubmit}>
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="email" placeholder="Faculty Email" className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow" />
        </div>
        <div className="relative">
          <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow" />
        </div>
        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm text-gray-300">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 bg-gray-800 border-gray-600 rounded focus:ring-indigo-500" />
            <span className="ml-2">Remember me</span>
          </label>
          <a href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">Forgot Password?</a>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default FacultyLoginForm;