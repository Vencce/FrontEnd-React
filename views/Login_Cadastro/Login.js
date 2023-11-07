import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, TextInput, Text, Platform } from 'react-native';
import { css } from "../../assets/css/Css";
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login({navigation}) {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        navigation.navigate('AreaRestrita');
      };
    
    return(
        <KeyboardAvoidingView style={[css.container, css.backcolor]}>

            <View style={css.backimg}>
                <Image style={css.imgJS} source={require('../../assets/JSm.png')} />
            </View>

            <View style={css.input}>
                <View style={css.textinput}>
                    <Icon name='user-circle' size={20} color='grey' />
                    <TextInput 
                        style={css.placeholderLogin} 
                        placeholder='Usuário:'
                        value={username}
                        onChangeText={(username) => setUsername(username)}
                    />
                </View>
                <View style={css.textinput}>
                    <Icon name="lock" size={20} color='grey'/>
                    <TextInput 
                        style={css.placeholderLogin} 
                        placeholder='Senha:'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(password) => setPassword(password)}
                    />
                    <TouchableOpacity style={css.iconeye}>
                        <Icon name="eye" size={20} color='grey' />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity  onPress={handleLogin}>
                    <Text style={css.textinputbtn}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={css.cadastro}>Não tem conta? cadastre-se!</Text>
            </TouchableOpacity>

            <View style={css.nadabranco}></View>    
        </KeyboardAvoidingView>
    );
}