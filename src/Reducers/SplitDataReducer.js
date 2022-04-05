function reduceData(state, action) {
    const split = action.data.texto.split("\n");
    return {
      ...state,
      filiatorios: action.data.texto,
      fSplit: split,
    };
  }
  
function reducer(state, action) {
    let newState;
  
    switch (action.type) {
      case "init":
        newState = reduceData(state, action);
        return newState;
      case "change":
        newState = reduceData(state, action);
        // console.log(newState);
        return newState;
      default:
        throw new Error(`${action.type} is not a valid action`);
    }
  }

  export default reducer