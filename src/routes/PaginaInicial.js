import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Busca from '../components/Busca';
import Detalhes from '../components/Detalhes';

const Stack = createStackNavigator();
const optionsHome = {
    title: 'Buscar',
    headerStyle: {
        backgroundColor: '#000000'
    },
    headerTintColor: '#FFFFFF'
}
const optionsResult = {
    title: 'Buscar',
    headerStyle: {
        backgroundColor: '#000000'
    },
    headerTintColor: '#FFFFFF'
}

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Busca}
                    options={optionsHome} />
                <Stack.Screen name="Result" component={Detalhes}
                    options={optionsResult} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
