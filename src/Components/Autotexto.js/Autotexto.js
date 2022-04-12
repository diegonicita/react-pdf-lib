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
          <div>Sala: {sala}</div>
          <div>{objData.cama}</div>
          <div> Nombre: {objData.nombre}</div>
          <div> DNI: {objData.dni}</div>
          <div> FN: {objData.fnacimiento}</div>
          <div> Edad: {objData.edad} años</div>
          <div> Antecedentes: {objData.antecedentes}</div>
          <div> Consulta por: {objData.sintomas}</div>
          <div> Duracion: {objData.duracion}</div>
        </div>      
    </>
  );
};

export default Autotexto;
