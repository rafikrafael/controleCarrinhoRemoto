import React, { Component } from 'react';
import { View, Text, Platform, StyleSheet } from 'react-native';

import { Button } from '../common';

class Index extends Component {

  render() {
    const { 
      actionFoward, 
      actionBackward,
      actionLeftFoward,
      actionRightFoward,
      actionLeftBackward,
      actionRightBackward,
      actionStopAll,
      actionLeft,
      actionRight
      } = this.props;
    console.log(this.props);
    
    return(
        <View style = {{ height: '50%', flexDirection: 'column' }}>
          <View style = { styles.MainContainer }>
            <View style={{
                flex: 1,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
              <Button onPress={() => actionLeftFoward()}>Esquerda Frente</Button>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
              <Button onPress={actionFoward}>Frente</Button>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
              <Button onPress={actionRightFoward}>Direita Frente</Button>
            </View>
          </View>
          <View style = { styles.MainContainer }>
            <View style={{
                flex: 1,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
              <Button onPress={actionLeft}>Esquerda</Button>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
              <Button onPress={actionStopAll}>Forçar Parada</Button>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
              <Button onPress={actionRight}>Direita</Button>
            </View>
          </View>
          <View style = { styles.MainContainer }>
            <View style={{
                flex: 1,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
              <Button onPress={actionLeftBackward}>Esquerda Ré</Button>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
              <Button onPress={actionBackward}>Ré</Button>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'center', 
                alignItems: 'center'
              }}>
              <Button onPress={actionRightBackward}>Direita Ré</Button>
            </View>
          </View>
        </View>
    );
  }
}
 
const styles = StyleSheet.create(
{
    MainContainer:
    {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 0//( Platform.OS === 'ios' ) ? 20 : 0
    }
});

export default Index;