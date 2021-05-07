import React from 'react';
import { View } from 'react-native';
import Busca from './busca';
import Titulo from './titulo';

export default function Home() {
    return (
        <View>
            <Titulo />
            <Busca />
        </View>
    );
}