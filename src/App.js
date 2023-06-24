import './App.css';
import React from 'react';
import Sidebar from './components/SideBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2a9461"
    }
  }
});

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div>
        <h1>Testing content</h1>
      </div>
    </div>
  );
}

export default App;
