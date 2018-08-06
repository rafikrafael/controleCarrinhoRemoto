import io from 'socket.io-client';

/**
 * Classe Singleton para controle da comunicação Socket IO
 */
export default class SocketIOClient {

  static instance = null;

  constructor() {
    this.socket = null;
    this.configureListeners = null;
  }

  static getInstance() {
    if (!SocketIOClient.instance) {
      SocketIOClient.instance = new SocketIOClient();
    }
    return SocketIOClient.instance;
  }

  connect(url, configureListeners) {
    if (this.socket) {
      this.socket.disconnect();
      this.socket.off('connect');
    }
    this.socket = io.connect(url);
    // this.socket.connect(url);
    this.socket.removeAllListeners();
    if (configureListeners) {
      configureListeners(this.socket);
    }
  }

  disconnect() {
    if (this.socket && this.socket.connected) {
      this.socket.removeAllListeners();
      this.socket.disconnect();
    }
  }

  emit(event, ...args) {
    if (this.socket) {
      this.socket.emit(event, args);
    }
  }

  isConnected() {
    return this.socket && this.socket.connected;
  }

  setListeners(value) {
    this.configureListeners = value;
  }

}