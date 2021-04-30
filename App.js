/*import React from 'react';
import { View } from 'react-native';
import Titulo from './src/components/Titulo';
import Busca from './src/components/Busca';
import Resultado from './src/components/Resultado';
import Navigation from './src/routes/PaginaInicial';


export default function App() {
  return (
    <View>
      <Titulo />
      <Busca />
      <Resultado />
    </View>
  );
}*/

import React from 'react';
//import Home from './src/routes/PaginaInicial';
import AppNavigation from './src/routes/PaginaInicial';
//import { AppLoading } from 'expo';

export default function App() {
  return (
    <AppNavigation />
  );
}