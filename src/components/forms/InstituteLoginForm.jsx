import { Building2, KeyRound } from 'lucide-react';

const InstituteLoginForm = ({ handleLogin }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    handleLogin('institute');
  };

  return (
    <div className="animate-fade-in">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Institute Login</h2>
      <p className="text-gray-300 text-center mb-8">Manage your institution's digital ecosystem.</p>
      
      <form className="space-y-6" onSubmit={onFormSubmit}>
        <div className="relative">
          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="email" placeholder="Institute Admin Email" className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow" />
        </div>
        <div className="relative">
          <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input type="password" placeholder="Password" className="w-full pl-10 pr-4 py-3 bg-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-shadow" />
        </div>
        <div className="flex items-center justify-end">
          <a href="#" className="text-sm font-medium text-indigo-400 hover:text-indigo-300">Forgot Password?</a>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105"
        >
          Access Portal
        </button>
        <p className="text-center text-gray-300 text-sm pt-4">
          Don't have an institutional account?{' '}
          <a href="#" className="font-semibold text-indigo-400 hover:underline">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default InstituteLoginForm;