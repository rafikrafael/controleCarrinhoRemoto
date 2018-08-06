import { setSocketIOConnected } from '../index/IndexActions';

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

  socket.on('disconnect', () => {
    dispatch(setSocketIOConnected(false));
  })

}