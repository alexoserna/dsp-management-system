import logo from './logo.svg';
import './App.css';
import React from 'react';
import Sidebar from './components/SideBar';

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
