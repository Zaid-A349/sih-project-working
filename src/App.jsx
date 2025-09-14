import LoginPage from './components/LoginPage';
import backgroundImage from './assets/background.jpg';

function App() {
  return (
    <div 
      className="min-h-screen font-sans text-gray-800 bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="min-h-screen bg-black bg-opacity-50">
        <LoginPage />
      </div>
    </div>
  );
}

export default App;