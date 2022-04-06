import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { useEffect, useReducer, useState } from "react";
import Autotexto from "./Components/Autotexto.js/Autotexto";
import InputData from "./Components/InputData/InputData";
import reducer from "./Components/Reducers/SplitDataReducer";
import loadPDF from "./Components/PDFHelper/PDFHelper"

function App() {

  // filiatorios => valor del textarea
  // fSplit => (valor del textarea).split("\n")
  const [{ filiatorios, fSplit }, dispatch] = useReducer(reducer, []);    

  // isLoading => flag durante el fetching de los archivos PDF del servidor
  const [isLoading, setIsLoading] = useState(false);  
  const [studyId, setStudyId] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const myFetch = async () => await loadPDF(studyId, fSplit); 
      myFetch();      
      setIsLoading(false);
    }
  }, [isLoading]);

  // Descarga el pdf luego de hacer click
  const downloadFile = (id) => {    
    if (isLoading == false) {
      setStudyId(id);
      setIsLoading(true);
     }

  };

  return (
    <>
      <InputData filiatorios={filiatorios} dispatch={dispatch} />
      <div className="container text-left pb-4">
        <button onClick={() => downloadFile(0)}>Bacteriologia</button>
        <button onClick={() => downloadFile(1)}>Virologia</button>
        <button onClick={() => downloadFile(2)}>TBC</button>
        <button onClick={() => downloadFile(3)}>Bioquimica</button>
        <button onClick={() => downloadFile(4)}>Micologia</button>
        <button onClick={() => downloadFile(5)}>Parasitologia</button>
      </div>
      <Autotexto split={fSplit} />
    </>
  );
}

export default App;
