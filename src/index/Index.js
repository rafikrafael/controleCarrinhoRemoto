import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Input, Button, Card, CardSection } from '../components/common';


import { 
  indexInputChange,
  doConnectSocketIO
  } from './IndexActions';

class Index extends Component {

  constructor(props) {
    super(props);
  }

  doConnectSocketIO() {
    if (this.props.ipCarrinho != '') {
      this.props.doConnectSocketIO(this.props.ipCarrinho);
    }
  }

  render() {
    const { ipCarrinho, indexInputChange, isSocketConnected } = this.props;
    
    return(
      <Card 
        style={styles.containerStyle}
        >
        <CardSection>
          <Input
            value={ipCarrinho}
            label='Ip do Carrinho:'
            placeholder='Ex: http://10.0.0.49:8080'
            onChangeText={value => indexInputChange({ prop: 'ipCarrinho', value })}
            />
        </CardSection>
        <CardSection>
        <Text>
          {isSocketConnected ? 'Conectado' : 'Desconectado'}
        </Text>
        </CardSection>
        <CardSection>
        <Button
          onPress={this.doConnectSocketIO.bind(this)}>
          {isSocketConnected ? 'Desconectar' : 'Conectar'}
        </Button>
        </CardSection>
        <CardSection>
        <Button
          enabled={isSocketConnected}
          onPress={() => Actions.controleCarrinho()}>
          Controle
        </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  containerStyle: {
      // flex: 1,
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10
  }
};

const mapStateToProps = (state) => {
  const { ipCarrinho, isSocketConnected } = state.index;
  return ({
    ipCarrinho, 
    isSocketConnected
  });
}

const mapDispatchToProps = dispatch => bindActionCreators({
  indexInputChange,
  doConnectSocketIO
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Index);