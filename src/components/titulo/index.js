import React from 'react';
import { View, Text } from 'react-native';

//const image = require('../img/logo2.png');

const Titulo = () => {
    return (
        <View style={styles.containerStyle} >
            <Text style={styles.titleStyle}>Hub Busca</Text>
        </View>
    );
}

const styles = {
    containerStyle: {
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleStyle: {
        fontSize: 32,
        fontWeight: '600',
    },
    imageStyle: {
        height: 200,
        width: 200,
    },
};

export default Titulo;
