import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const exibirDetalhes = () => {
  navigation.navigate('Result')
};

export default function Resultado(props) {

  return (
    <View>
      <TouchableOpacity style={styles.containerStyle} onPress={exibirDetalhes}>
      </TouchableOpacity>
      <View style={styles.viewResult}>
        <Text style={styles.textoParametro}>Login: </Text>
        <Text style={styles.textoValor}>PauloBittencourt</Text>
      </View>
      <View style={styles.viewResult}>
        <Text style={styles.textoParametro}>Localização: </Text>
        <Text style={styles.textoValor}>Rio de Janeiro</Text>
      </View>
    </View>
  );
};


const styles = {
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#e2e2e2',
    borderTopWidth: 1
  },
  imageStyle: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 10,
    alignSelf: 'center'
  },
  textoNome: {
    alignSelf: 'center',
    marginLeft: 10,
    marginBottom: 10,
    marginTop: 0,
  },
  textoParametro: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  textoValor: {
    marginLeft: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  viewResult: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  }
};
