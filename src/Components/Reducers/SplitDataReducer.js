function reduceFiliatorios(state, action) {
    const split = action.data.texto.split("\n");
    return {
      ...state,
      filiatorios: action.data.texto,
      fSplit: split,
    };
  }

function reduceSala(state, action) {    
    return {
      ...state,
      sala: action.data.sala
    };
  }
  
function reducer(state, action) {
    let newState;  
    switch (action.type) {
      case "init":
        newState = reduceFiliatorios(state, action);
        return newState;
      case "changeFiliatorios":
        newState = reduceFiliatorios(state, action);
        // console.log(newState);
        return newState;
      case "changeSala":
          newState = reduceSala(state, action);      
          return newState;
      default:
        throw new Error(`${action.type} is not a valid action`);
    }
  }

  export default reducer