import io from 'socket.io-client';

/**
 * Classe Singleton para controle da comunicação Socket IO
 */
export default class SocketIOClient {

  static instance = null;

  constructor() {
    this.socket = null;
  }

  static getInstance() {
    if (!SocketIOClient.instance) {
      SocketIOClient.instance = new SocketIOClient();
    }
    return SocketIOClient.instance;
  }

  connect(url) {
    if (this.socket) {
      this.socket.disconnect();
      this.socket.off('connect');
    }
    this.socket = io(url);
    this.socket.connect();
  }

  emit(event, ...args) {
    this.socket.emit(event, args);
  }

  isConnected() {
    return this.socket && this.socket.connected;
  }

}