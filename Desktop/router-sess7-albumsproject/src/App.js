import logo from './logo.svg';
import './App.css';
import Albums from './Albums.js';
import Photos from './Photos.js';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path = "/" element={<Albums/>} />
      <Route path = "/photos/:id" element={<Photos/>} />
    </Routes>
  );
}

export default App;
