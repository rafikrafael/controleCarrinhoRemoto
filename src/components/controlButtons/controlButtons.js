import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, StyleSheet, ImageBackground } from 'react-native';

class Index extends Component {

  executeAction(action) {
    const tempoReenviarComando = this.props.tempoReenviarComando || 70;
    clearInterval();
    action();
    this.interval = setInterval(() => {
      action();
    }, tempoReenviarComando);
  }

  clearInterval() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

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
    return(
      <View style = {{  
        height: '80%', 
        width: '80%', 
        flexDirection: 'column', 
        justifyContent: 'center',
        alignSelf:'center',
        paddingTop: 10
        }}>
        <View style = { styles.MainContainer }>
          <View style={{
              flex: 1,
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback 
              style={ styles.Button }
              onPressIn={() => this.executeAction(actionLeftFoward)}
              onPressOut={() => this.clearInterval()}>
              <ImageBackground 
                resizeMode="center"
                resizeMethod="scale"
                style={{ 
                height: '100%', width: '100%' }}

                source={require('../../assets/images/if_arrow_up_left.png')}
                />
            </TouchableWithoutFeedback>
          </View>
          <View style={{
              flex: 1,
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback 
              style={ styles.Button }
              onPressIn={() => this.executeAction(actionFoward)}
              onPressOut={() => this.clearInterval()}>
              <ImageBackground 
                resizeMode="center"
                resizeMethod="scale"
                style={{ 
                height: '100%', width: '100%'  }}

                source={require('../../assets/images/if_arrow_up.png')}
                />
            </TouchableWithoutFeedback>
          </View>
          <View style={{
              flex: 1,
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback 
              style={ styles.Button }
              onPressIn={() => this.executeAction(actionRightFoward)}
              onPressOut={() => this.clearInterval()}>
              <ImageBackground 
                resizeMode="center"
                resizeMethod="scale"
                style={{ 
                height: '100%', width: '100%'  }}

                source={require('../../assets/images/if_arrow_up_right.png')}
                />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style = { styles.MainContainer }>
          <View style={{
              flex: 1,
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback 
              style={ styles.Button }
              onPressIn={() => this.executeAction(actionLeft)}
              onPressOut={() => this.clearInterval()}>
              <ImageBackground 
                resizeMode="center"
                resizeMethod="scale"
                style={{ 
                height: '100%', width: '100%'  }}

                source={require('../../assets/images/if_arrow_left.png')}
                />
            </TouchableWithoutFeedback>
          </View>
          <View style={{
              flex: 1,
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback 
              style={ styles.Button }
              onPress={() => actionStopAll()}>
              <ImageBackground 
                resizeMode="center"
                resizeMethod="scale"
                style={{ 
                height: '100%', width: '100%'  }}

                source={require('../../assets/images/if_cancel.png')}
                />
            </TouchableWithoutFeedback>
          </View>
          <View style={{
              flex: 1,
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback 
              style={ styles.Button }
              onPressIn={() => this.executeAction(actionRight)}
              onPressOut={() => this.clearInterval()}>
              <ImageBackground 
                resizeMode="center"
                resizeMethod="scale"
                style={{ 
                height: '100%', width: '100%'  }}

                source={require('../../assets/images/if_arrow_right.png')}
                />
            </TouchableWithoutFeedback>
          </View>
        </View>
        <View style = { styles.MainContainer }>
          <View style={{
              flex: 1,
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback 
              style={ styles.Button }
              onPressIn={() => this.executeAction(actionLeftBackward)}
              onPressOut={() => this.clearInterval()}>
              <ImageBackground 
                resizeMode="center"
                resizeMethod="scale"
                style={{ 
                height: '100%', width: '100%'  }}

                source={require('../../assets/images/if_arrow_down_left.png')}
                />
            </TouchableWithoutFeedback>
          </View>
          <View style={{
              flex: 1,
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback 
              style={ styles.Button }
              onPressIn={() => this.executeAction(actionBackward)}
              onPressOut={() => this.clearInterval()}>
              <ImageBackground 
                resizeMode="center"
                resizeMethod="scale"
                style={{ 
                height: '100%', width: '100%'  }}

                source={require('../../assets/images/if_arrow_down.png')}
                />
            </TouchableWithoutFeedback>
          </View>
          <View style={{
              flex: 1,
              justifyContent: 'center', 
              alignItems: 'center'
            }}>
            <TouchableWithoutFeedback 
              style={ styles.Button }
              onPressIn={() => this.executeAction(actionRightBackward)}
              onPressOut={() => this.clearInterval()}>
              <ImageBackground 
                resizeMode="center"
                resizeMethod="scale"
                style={{ 
                  height: '100%', width: '100%', top: 0, position: 'absolute'
                }}
                source={require('../../assets/images/if_arrow_down_right.png')}
                />
            </TouchableWithoutFeedback>
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
    paddingTop: 0//( Platform.OS === 'ios' ) ? 20 : 0
  },
  Button: {
    flex: 1,
    alignSelf: 'stretch',
  }
});

export default Index;