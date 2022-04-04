import './App.css';
import React from 'react';
import {useEffect, useReducer, useState} from "react";
import { degrees, PDFDocument, rgb, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';

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
    // console.log(newState);
    return newState;
    default:
    throw new Error(`${action.type} is not a valid action`);
  }
}

function App() {

const [{filiatorios, fSplit}, dispatch] = useReducer(reducer, []);
const [isLoading, setIsLoading] = useState(false);

 useEffect(
 () => {  

if (isLoading)
{
    console.log("Fetching")
    const myFetch2 = async () => 
    {
      const temp = await fetch('https://diego-test-server.herokuapp.com/bacterio');
      const existingPdfBytes = await temp.arrayBuffer();
      console.log(existingPdfBytes);
      const pdfDoc = await PDFDocument.load(existingPdfBytes);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
      const pages = pdfDoc.getPages()
      const firstPage = pages[0];      
      
      const nombre = (texto, x, y, separation_x) => {
        firstPage.setFont(helveticaFont);
        var chars = texto.toUpperCase().split("");
        chars.map((item, index) => {
          firstPage.moveTo(x+index*separation_x, y);
          firstPage.drawText(item, { size: 12 });
        });
      };
    
      const nacimiento = (texto, x, y, separation_x) => {
        firstPage.setFont(helveticaFont);
        var numbers = texto.toUpperCase().split("-");
        numbers.map((item, index) => {
          firstPage.moveTo(x+index*separation_x, y);
          firstPage.drawText(item, { size: 12 });
        });
      };
    
      // Bacterilogia //
      nacimiento("32", 375, 690, 27);
      const splitCama = fSplit[0].split(" ");
      nacimiento(splitCama[1], 500, 690, 27);
      const splitName = fSplit[1].split(" ");
      nombre(splitName[0], 145, 665, 27);
      nombre(splitName[1], 145, 652, 27);
      nacimiento(fSplit[3], 145 + 27, 626, 23);
      nombre(fSplit[2], 410, 626, 18);
      // Draw a string of text diagonally
      
        const data = await pdfDoc.save()      
        setIsLoading(false);
        await setTimeout(() => {
        console.log(data.length);  
        if (data.length > 0)  {
          download(data, "bacteriologia.pdf", "application/pdf");        
        }            
        }, 1000);
    }

  myFetch2();
}
 }, [isLoading]);

 const downloadFile = () =>
 {  
   if (isLoading == false) setIsLoading(true)  
 }

  return (
    <div className="App">
      <header className="App-header">        
        <textarea rows="20" onChange={e=>dispatch({
            type: "change", data: { texto: e.target.value}} )} value={filiatorios}></textarea>        
        <button onClick={()=>downloadFile()}>Download</button>
        {/* {splitFiliatorios&&splitFiliatorios[0]?"Cama" + splitFiliatorios[0]:""} */}
        {/* <div> Datos Filiatorios : {filiatorios} </div> */}
        <h1> Sala 32 Sospecha COVID</h1>
        {/* <div> Fecha: {new Date("").toLocaleString()+""}</div> */}
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
