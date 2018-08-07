import SocketIOClient from '../lib/communication/SocketIOClient';
import { configureListeners } from '../SocketIO/configSocketIO'

export const indexInputChange = ({ prop, value }) => {
  return {
    type: 'INPUT_CHANGE',
    payload: { prop, value }
  }
};

export const doConnectSocketIO = (url) => {
  SocketIOClient.getInstance().connect(url, configureListeners);
  return {
    type: 'TRYING_CONNECT_SOCKETIO',
  }
}

export const doDisconnectSocketIO = (url) => {
  SocketIOClient.getInstance().disconnect();
  return {
    type: 'TRYING_DISCONNECT_SOCKETIO',
  }
}

export const setSocketIOConnected = (value) => {
  return {
    type: 'STATUS_SOCKETIO_CONNECTION',
    payload: value
  }
}