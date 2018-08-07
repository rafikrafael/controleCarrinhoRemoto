import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, autoCapitalize }) => {
  const { inputStyle, labelStyle, containerStyle } = styles;
  return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          autoCapitalize={autoCapitalize}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    height: 40, 
    borderRadius: 3,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: 'rgb(200, 200, 200)',
    fontSize: 16,
    backgroundColor: 'white',
    color: 'black',
  },
  labelStyle: {
    fontSize: 16,
    paddingLeft: 0,
    flexWrap: 'wrap',
    fontWeight: '600',
    flex: 1,
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
};

export { Input };
