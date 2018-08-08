import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { View } from 'react-native';

import ControlButtons from '../components/controlButtons/controlButtons';

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
} from './ControlesActions';

class Controles extends Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ControlButtons
          tempoReenviarComando={this.props.tempoReenviarComando}
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

const mapStateToProps = (state) => {
  const { tempoReenviarComando } = state.controles;
  return ({
    tempoReenviarComando
  });
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
  }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Controles);