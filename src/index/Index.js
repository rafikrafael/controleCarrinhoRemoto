import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';

import SocketIOClient from '../lib/communication/SocketIOClient';

import ControlButtons from '../components/controlButtons/controlButtons';
import { Input } from '../components/common/';

import { 
  comandoFrenteReto, 
  comandoReversoReto,
  comandoFrenteDireita,
  comandoFrenteEsquerda,
  comandoReversoDireita,
  comandoReversoEsquerda,
  comandoParadoTotal,
  comandoEsquerda,
  comandoDireita
  } from './IndexActions';

class Index extends Component {

  componentWillMount() {
    SocketIOClient.getInstance().connect('http://10.0.0.49:8080')
  }

  render() {
    return(
      <View>
        <Input
          placeholder='IP do Carrinho:'
          />
        <ControlButtons
          actionFoward={comandoFrenteReto}
          actionBackward={comandoReversoReto}
          actionRightFoward={comandoFrenteDireita}
          actionLeftFoward={comandoFrenteEsquerda}
          actionRightBackward={comandoReversoDireita}
          actionLeftBackward={comandoReversoEsquerda}
          actionStopAll={comandoParadoTotal}
          actionLeft={comandoEsquerda}
          actionRight={comandoDireita}
          />
      </View>
    );
  }
}

const mapStateToProps = () => {
  return (
    {}
  );
}

const mapDispatchToProps = dispatch => bindActionCreators({
  comandoFrenteReto, 
  comandoReversoReto,
  comandoFrenteDireita,
  comandoFrenteEsquerda,
  comandoReversoDireita,
  comandoReversoEsquerda,
  comandoParadoTotal,
  comandoEsquerda,
  comandoDireita
  }, dispatch);

export default connect(null, mapDispatchToProps)(Index);