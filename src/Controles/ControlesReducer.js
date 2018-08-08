const INITIAL_STATE = {tempoReenviarComando: 70};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SET_TEMPO_REENVIAR_COMANDOS":
      return { ...state, tempoReenviarComando: action.payload };
    default:
      return state;
  }
}