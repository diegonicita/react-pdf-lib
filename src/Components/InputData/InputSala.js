const InputSala = ({ sala, dispatch }) => {
    return (
      <>
        <label htmlFor="input-sala"> Sala:</label>
        <input          
          id="input-sala"
          className="form-control"
          onChange={(e) =>
            dispatch({
              type: "changeSala",
              data: { sala: e.target.value },
            })
          }
          value={sala}
        ></input>
    </>
    );
  };
  
  export default InputSala;