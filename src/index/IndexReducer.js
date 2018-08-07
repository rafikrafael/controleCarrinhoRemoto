const INITIAL_STATE = {ipCarrinho: 'http://:8080', isSocketConnected: false};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { ...state, [action.payload.prop]: action.payload.value };
    case 'STATUS_SOCKETIO_CONNECTION':
      return { ...state, isSocketConnected: action.payload};
    default:
      return state;
  }
}