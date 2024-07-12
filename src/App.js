// Import the main CSS file for the application.
import './App.css';
// Import the Navbar component.
import Navbar from './components/Navbar';
// Import the React library.
import React from 'react';

// Define the main App component.
function App() {
  return (
    // Render an h1 element containing the Navbar and MyButton components.
    <h1> 
      <Navbar />
      <MyButton />
    </h1>
  );
}

// Define the MyButton component.
function MyButton() {
  return (
    // Render a button element with the text "I'm a button".
    <button>I'm a button</button>
  );
}

// Export the App component as the default export.
export default App;

