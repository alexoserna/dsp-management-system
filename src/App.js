import './App.css';
import React from 'react';

import Sidebar from './components/SideBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box } from '@mui/system';

import { Routes, Route, Outlet } from "react-router-dom";
import Account from "./pages/Account";
import Associates from "./pages/Associates";
import DailyLog from "./pages/DailyLog";
import Home from "./pages/Home";
import Reports from "./pages/Reports";
import VanAssignments from "./pages/VanAssignments";
import VanData from "./pages/VanData";
import WeeklyRoster from "./pages/WeeklyRoster";

import theme from './Theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />

        <Box
          sx={{
            marginLeft: 10,
            transtion: 'margin-left 0.3s',
            position: 'relative',
            zIndex: 0,
          }}
        >
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
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
