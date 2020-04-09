import React from 'react';
import './App.css';
import Fridge from './components/fridge/Fridge';
import { NavBar } from './components/nav/NavBar';
import { Context } from './models/Context';
import { Service } from './services/Service';
import FridgeService from './services/FridgeService';

function App() {
  const context = new Context();
  const service: Map<String, Service> = new Map();

  service.set("FridgeService", new FridgeService())
  return (
    <div className="App">
      <NavBar/>
      <Fridge context={context}/>
    </div>
  );
}

export default App;
