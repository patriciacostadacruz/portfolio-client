import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './views/MainPage';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;