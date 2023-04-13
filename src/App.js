import './App.css';
import Navbar from './components/Navbar';
import React from 'react';

function App() {
  return (
    <h1>
      <Navbar />
      <MyButton />
    </h1>
  );
}

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default App;
