import SocketIOClient from '../lib/communication/SocketIOClient';

export const comandoFrenteReto = () => {
  SocketIOClient.getInstance().emit('frenteReto');
}

export const comandoFrenteEsquerda = () => {
  SocketIOClient.getInstance().emit('frenteEsquerda');
}

export const comandoFrenteDireita = () => {
  SocketIOClient.getInstance().emit('frenteDireita');
}

export const comandoReversoReto = () => {
  SocketIOClient.getInstance().emit('reversoReto');
}

export const comandoReversoEsquerda = () => {
  SocketIOClient.getInstance().emit('reversoEsquerda');
}

export const comandoReversoDireita = () => {
  SocketIOClient.getInstance().emit('reversoDireita');
}

export const comandoEsquerda = () => {
  SocketIOClient.getInstance().emit('esquerda');
}

export const comandoDireita = () => {
  SocketIOClient.getInstance().emit('direita');  
}

export const comandoParadoTotal = () => {
  SocketIOClient.getInstance().emit('paradoTotal');
}

export const setTempoReenviarComando = (tempo) => {
  console.log('tempo', tempo);
  
  return {
    type: 'SET_TEMPO_REENVIAR_COMANDOS',
    payload: tempo
  }
}