const Autotexto = ({ split, sala }) => {
  const objData = {
    cama: split && split[0] ? split[0] : "",
    nombre: split && split[1] ? split[1] : "",
    dni: split && split[2] ? split[2] : "",
    fnacimiento: split && split[3] ? split[3] : "",
    edad: split && split[4] ? split[4] : "",
    antecedentes: split && split[5] ? split[5] : "",
    sintomas: split && split[6] ? split[6] : "",
    duracion: split && split[7] ? split[7] : "",
  };
  return (
    <>      
        <div className="container-fluid text-left bg-seconday d-100">
          <h4> Vista previa: </h4>
          <span><strong>Sala {sala} - </strong></span>
          <span><strong>{objData.cama}</strong></span>
          <br></br>
          <span> <strong>Nombre:</strong> {objData.nombre}</span>
          <span> <strong>DNI: </strong>{objData.dni}. </span>
          <span> <strong>FN: </strong> {objData.fnacimiento}</span>
          <span> <strong>Edad:</strong> {objData.edad} años</span>
          <div> <strong>Antecedentes:</strong> {objData.antecedentes}</div>
          <div> <strong>Consulta por:</strong> {objData.sintomas}</div>
          <span> <strong>Duracion:</strong> {objData.duracion}</span>
        </div>      
    </>
  );
};

export default Autotexto;
