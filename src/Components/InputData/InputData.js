const InputData = ({ filiatorios, dispatch }) => {
  return (
    <div className="container-fluid text-left">
      <h1> Proyecto React/Pdf-lib </h1>
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
