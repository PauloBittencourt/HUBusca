import React from 'react';
import { Button, TextInput, SafeAreaView, } from 'react-native';
import Resultado from '../resultado';

const state = { user: '', data: '', loading: false };
const pesquisar = (props) => {
    const username = this.state.user;
    fetch(`https://api.github.com/users/${username}`)
        .then(response => response.json())
        .then(data => {
            console.log(`Data ID: ${data.id}, User: ${data.login}`);
            this.setState({ data, loading: false });
            props.state = state;
        })
        .catch(err => console.log(err));
};
const testar = () => {
    navigation.navigate('Result');
};
export default function Busca({ navigation }) {

    return (
        <SafeAreaView>
            <TextInput
                style={styles.inputBoxStyle}
                placeholder="Nome do Usuário"
                autoCapitalize="none"
                autoCorrect={false}
                value={state.user}
                onChangeText={user => Object.assign(state, { user })}
            />
            <Button title="Buscar" onPress={pesquisar} />
            <Button title="Teste" onPress={() => navigation.navigate('Result')} />
            <Resultado>this.getState()</Resultado>
        </SafeAreaView>
    );
};

const styles = {
    inputBoxStyle: {
        height: 40,
        textAlign: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 30,
        color: '#FFFFFF',
    },
    input: {
        borderWidth: 1,
        borderColor: '#999999',
        backgroundColor: '#EEEEEE',
        color: '#000000',
        height: 40,
        margin: 20,
        padding: 10,
    },
    inputArea: {
        alignSelf: 'stretch',
    },
};
