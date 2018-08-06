import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        // um truque do react novo é passar um array de stilos, dessa forma o ultimo sobrescreve as propriedades do anterior
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export { CardSection };
