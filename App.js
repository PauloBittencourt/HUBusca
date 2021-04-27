import React from 'react';
import { View } from 'react-native';
import Titulo from './src/components/Titulo';
import Busca from './src/components/Busca';

export default function App() {
  return (
    <View>
      <Titulo />
      <Busca />
    </View>
  );
}