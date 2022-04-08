const Boton = ({downloadFile, id}) =>
{
    const textos = ["Bacteriologia", "Virologia", "TBC", "Bioquimica", "Micologia", "Parasitologia"]

    return (
        <>
            <button className="btn btn-outline-danger m-1 border-3" onClick={() => downloadFile(id)}>
                <div className="fw-bolder">{textos[id]}</div>
                </button>
        </>
    )   
}

const Botonera = ({downloadFile}) => {

    const idsRow1 = [0,1,2,3,4,5];    

    return (
    <div className="row text-center">        
        <div className="fw-bolder"> Haga click para Descargar un protocolo</div>
        <div className="col col-12 col-md-12">                    
                {idsRow1.map( (id, index) => <Boton key={index+100} downloadFile={downloadFile} id={id}></Boton>)}        
        </div>        
    </div>
    );
  };
  
  export default Botonera;