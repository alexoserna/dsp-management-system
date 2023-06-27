import './App.css';
import React from 'react';
import Sidebar from './components/SideBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route, Outlet } from "react-router-dom";
import Account from "./pages/Account";
import Associates from "./pages/Associates";
import DailyLog from "./pages/DailyLog";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import VanAssignments from "./pages/VanAssignments";
import VanData from "./pages/VanData";
import WeeklyRoster from "./pages/WeeklyRoster";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Account" element={<Account />} />
        <Route path="Associates" element={<Associates />} />
        <Route path="DailyLog" element={<DailyLog />} />
        <Route path="Reports" element={<Reports />} />
        <Route path="VanAssignments" element={<VanAssignments />} />
        <Route path="VanData" element={<VanData />} />
        <Route path="WeeklyRoster" element={<WeeklyRoster />} />
      </Routes>

      <Sidebar />
      <Outlet />

    </div>
  );
}

export default App;
