import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './views/HomePage';
import Navbar from './components/Navbar';
import ErrorPage from './views/ErrorPage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
