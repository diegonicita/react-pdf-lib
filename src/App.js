import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useState, useEffect} from "react";

function App() {

const [filiatorios, setFiliatorios] = useState(false);

// useEffect(
// () => {
  

// }, [filiatorios]);


  return (
    <div className="App">
      <header className="App-header">
        <textarea onChange={e=>setFiliatorios(e.target.value)} value={filiatorios}></textarea>
        <p> Datos Filiatorios {filiatorios} </p>
      </header>

      
    </div>
  );
}

export default App;
