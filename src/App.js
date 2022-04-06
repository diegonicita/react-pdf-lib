import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React from "react";
import { useEffect, useReducer, useState } from "react";
import Autotexto from "./Components/Autotexto.js/Autotexto";
import InputData from "./Components/InputData/InputData";
import reducer from "./Components/Reducers/SplitDataReducer";
import loadPDF from "./Components/PDFHelper/PDFHelper";
import MyNavbar from "./Components/MyNavBar/MyNavBar";
import { Nav } from "react-bootstrap";

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
    <div className="container-fluid">      
      <MyNavbar />
      <InputData filiatorios={filiatorios} dispatch={dispatch} />
      <div className="container-fluid text-left pb-2">
        <button className="btn btn-primary m-1" onClick={() => downloadFile(0)}>Bacteriologia</button>
        <button className="btn btn-primary m-1" onClick={() => downloadFile(1)}>Virologia</button>
        <button className="btn btn-primary m-1" onClick={() => downloadFile(2)}>TBC</button>
        <button className="btn btn-primary m-1" onClick={() => downloadFile(3)}>Bioquimica</button>
        <button className="btn btn-primary m-1" onClick={() => downloadFile(4)}>Micologia</button>
        <button className="btn btn-primary m-1" onClick={() => downloadFile(5)}>Parasitologia</button>
      </div>
      <Autotexto split={fSplit} />
    </div>
  );
}

export default App;
