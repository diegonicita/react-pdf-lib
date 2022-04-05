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

  useEffect(() => {
    if (isLoading) {
      const myFetch = async () => await loadPDF("https://diego-test-server.herokuapp.com/bacterio", fSplit); 
      myFetch();      
      setIsLoading(false);
    }
  }, [isLoading]);

  // Descarga el pdf luego de hacer click
  const downloadFile = () => {
    if (isLoading == false) setIsLoading(true);
  };

  return (
    <>
      <InputData filiatorios={filiatorios} dispatch={dispatch} />
      <div className="container text-left pb-4">
        <button onClick={() => downloadFile()}>Bacteriologia</button>
      </div>
      <Autotexto split={fSplit} />
    </>
  );
}

export default App;
