const InputData = ({ filiatorios, dispatch }) => {
  return (
    <>
      <h2> Ingresa los datos del paciente: </h2>
      <textarea
        rows="10"
        className="form-control"
        onChange={(e) =>
          dispatch({
            type: "change",
            data: { texto: e.target.value },
          })
        }
        value={filiatorios}
      ></textarea>
  </>
  );
};

export default InputData;
