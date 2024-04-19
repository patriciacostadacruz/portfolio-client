import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './views/MainPage';
import Navbar from './components/Navbar';
import NotFound from './views/NotFound';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
