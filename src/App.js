import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/DashBoard';
import Signup from './components/Signup';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login></Login>}>
            </Route>
            <Route path="signup" element={<Signup></Signup>}>
            </Route>
            <Route path="dashboard" element={<Dashboard></Dashboard>}>
            </Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

