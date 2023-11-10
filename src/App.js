import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import DashboardUI from './components/DashBoardUI';
import Signup from './components/Signup';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { API_URL } from './constants/Constants';
import axios from 'axios';
import StoredData from './Context/StoredData';
import {useData} from './Context/StoredData';


function App() {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const {isLoggedIn} = useData();

  return (
    <div className="App">
      <StoredData>
        <BrowserRouter>
            <Routes>
              <Route index path="/" element={<Login></Login>}>
              </Route>
              <Route path="signup" element={<Signup></Signup>}>
              </Route>
              <Route path="dashboard" element={<DashboardUI></DashboardUI>}>
              </Route>
            </Routes>
        </BrowserRouter>
      </StoredData>
      {/* <StoredData> */}
      {/* <Login></Login> */}
            {/* {!isLoggedIn && <Login></Login>}
            {isLoggedIn && <DashboardUI></DashboardUI>} */}
      {/* </StoredData> */}
    </div>
  );
}

export default App;

