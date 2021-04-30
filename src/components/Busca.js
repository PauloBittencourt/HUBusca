import React, { Component } from 'react';
import { Button, TextInput, SafeAreaView } from 'react-native';
import Titulo from './Titulo';


class Busca extends Component {
    constructor(props) {
        super(props);
        this.state = { user: '', data: '', loading: false };
    }

    pesquisar = () => {
        const username = this.state.user;
        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(data => {
                console.log(`Data ID: ${data.id}, User: ${data.login}`);
                // this.setState({ data, loading: false });
            })
            .catch(err => console.log(err));
    };
    testar = ({ navigation }) => {
        //      navigation.navigate('Result');
        console.warn('Teste')
    };
    render() {
        return (
            <SafeAreaView>
                <Titulo />
                <TextInput
                    style={styles.inputBoxStyle}
                    placeholder="Nome do Usuário"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={this.props.user}
                    onChangeText={user => this.setState({ user })}
                />
                <Button title="Buscar" onPress={this.pesquisar} />
                <Button title="Teste" onPress={this.testar} />
            </SafeAreaView>
        );
    }
}

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

export default Busca;