import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { useEffect, useReducer, useState } from "react";
import Autotexto from "./Components/Autotexto.js/Autotexto";
import InputData from "./Components/InputData/InputData";
import InputSala from "./Components/InputData/InputSala";
import reducer from "./Components/Reducers/SplitDataReducer";
import loadPDF from "./Helpers/PDFHelper/PDFHelper";
import MyNavbar from "./Components/MyNavBar/MyNavBar";
import Botonera from "./Components/Botonera/Botonera";
import imagen from "./Assets/Images/spinner.gif";
// import Protocolos from "./Components/Protocolos/Protocolos";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";

const initialValues = { 
  filiatorios: "Cama 1\nJuan Perez\n2233445\n11-22-33\n45\nEPOC\nDisnea\n7 dias", 
  sala: "32",   
  }
initialValues.fSplit = initialValues.filiatorios.split("\n");

function App() {
  // filiatorios => valor del textarea
  // fSplit => (valor del textarea).split("\n")
  const [{ filiatorios, sala, fSplit }, dispatch] = useReducer(reducer, initialValues);

  // isLoading => flag durante el fetching de los archivos PDF del servidor
  const [isLoading, setIsLoading] = useState(false);
  const [studyId, setStudyId] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const myFetch = async () => await loadPDF(studyId, fSplit, sala);
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
      <Routes>
          <Route
            path="/"
            element={<Home />}
            />
          <Route
            path="/protocolos"
            element={<div className="container">
              <div className="row p-2">
              <div className="col col-md-12">
              <form>
                <div className="form-group">
                  <InputSala sala={sala} dispatch={dispatch} />
                  <InputData filiatorios={filiatorios} dispatch={dispatch} />
                </div>
              </form>
              </div>
            </div>
            <div>
              <Botonera downloadFile={downloadFile}/>
              <div className={isLoading?"text-center":"text-center d-none"}>
                <img width="45px" src={imagen} alt="imagen descargando"></img>
              </div>
            </div>
            <div className="row p-2">
              <Autotexto split={fSplit} sala={sala}/>
            </div>
          </div>}
            />
      </Routes>      
      </div>          
    </>
  );
}

export default App;
