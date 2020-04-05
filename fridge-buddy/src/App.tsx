import React from 'react';
import './App.css';
import { Fridge } from './components/fridge/Fridge';
import { NavBar } from './components/nav/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Fridge/>
    </div>
  );
}

export default App;
