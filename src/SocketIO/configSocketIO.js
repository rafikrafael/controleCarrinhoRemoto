import { setSocketIOConnected } from '../index/IndexActions';
import { setTempoReenviarComando } from '../Controles/ControlesActions';

let dispatch = null;
let getState = null;

export function setDefault(dispatch_, getState_) {
  dispatch = dispatch_;
  getState = getState;
}

export function configureListeners(socket) {
  socket.on('connect', () => {
    dispatch(setSocketIOConnected(true));
  });

  socket.on('timersCarrinho', (timersCarrinho) => {
    const tempo = timersCarrinho.tempoIntervaloReenviarComando || 0;
    dispatch(setTempoReenviarComando(tempo));
  })

  socket.on('disconnect', () => {
    dispatch(setSocketIOConnected(false));
  })

}