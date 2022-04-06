const InputData = ({ filiatorios, dispatch }) => {
  return (
    <div className="container-fluid text-left">
      <h2> Ingresa los datos del paciente: </h2>
      <textarea
        rows="10"
        cols="75"
        onChange={(e) =>
          dispatch({
            type: "change",
            data: { texto: e.target.value },
          })
        }
        value={filiatorios}
      ></textarea>
    </div>
  );
};

export default InputData;
