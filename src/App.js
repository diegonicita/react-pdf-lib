import logo from './logo.svg';
import './App.css';
import React from 'react';
import {useEffect, useReducer} from "react";


function reduceData(state, action) {
     
  const split = action.data.texto.split("\n");
  return {  
    ...state,  
    filiatorios: action.data.texto, 
    fSplit: split   
  }
}

function reducer(state, action)
{
let newState;

  switch(action.type) 
  {
    case "init":
    newState = reduceData(state, action);
    return newState;
    case "change":
    newState = reduceData(state, action);
    console.log(newState);
    return newState;
    default:
    throw new Error(`${action.type} is not a valid action`);
  }
}


function App() {

const [{filiatorios, fSplit}, dispatch] = useReducer(reducer, []);

 useEffect(
 () => {  

 }, []);


  return (
    <div className="App">
      <header className="App-header">
        <textarea onChange={e=>dispatch({
            type: "change", data: { texto: e.target.value}} )} value={filiatorios}></textarea>        
        {/* {splitFiliatorios&&splitFiliatorios[0]?"Cama" + splitFiliatorios[0]:""} */}
        {/* <div> Datos Filiatorios : {filiatorios} </div> */}
        <h1> Sala 32 Sospecha COVID</h1>
        <div> Fecha: {new Date("").toLocaleString()+""}</div>
        {fSplit&&fSplit[0]?<div>{fSplit[0]}</div>:""}
        {fSplit&&fSplit[1]?<div> Nombre: {fSplit[1]}</div>:""}
        {fSplit&&fSplit[2]?<div> DNI: {fSplit[2]}</div>:""}
        {fSplit&&fSplit[3]?<div> FN: {fSplit[3]}</div>:""}
        {fSplit&&fSplit[4]?<div> Edad: {fSplit[4]} años</div>:""}
        {fSplit&&fSplit[5]?<div> Antecedentes: {fSplit[5]}</div>:""}
        {fSplit&&fSplit[6]?<div> Consulta por: {fSplit[6]}</div>:""}        
        {fSplit&&fSplit[7]?<div> Duracion: {fSplit[7]}</div>:""} 
        
      </header>

      
    </div>
  );
}

export default App;
