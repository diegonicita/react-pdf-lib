import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { useEffect, useReducer, useState } from "react";
import Autotexto from "./Components/Autotexto.js/Autotexto";
import InputData from "./Components/InputData/InputData";
import reducer from "./Components/Reducers/SplitDataReducer";
import loadPDF from "./Components/PDFHelper/PDFHelper";
import MyNavbar from "./Components/MyNavBar/MyNavBar";
import Botonera from "./Components/Botonera/Botonera";
import imagen from "./spinner.gif";

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
      myFetch().then( ()=> {
        setTimeout(() => {
          setIsLoading(false);    
        }, 1000);      
        });
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
      <div className="row">
      <MyNavbar />
      </div>      
      <div className="row p-2">
        <div className="col col-md-12">
          <InputData filiatorios={filiatorios} dispatch={dispatch} />
        </div>
      </div>
      <div>
        <Botonera downloadFile={downloadFile}/>
        <div className={isLoading?"text-center":"text-center d-none"}>
          <img width="45px" src={imagen} alt="imagen descargando"></img>
        </div>
      </div>
      <div className="row p-2">
        <Autotexto split={fSplit} />
      </div>
    </>
  );
}

export default App;
