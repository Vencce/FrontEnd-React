import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, TextInput, Text, Platform } from 'react-native';
import { css } from "../assets/css/Css";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from 'expo-local-authentication';
import config from '../config/config';

export default function Login({navigation})
{
    const [display, setDisplay]=useState('none');
    const [user, setUser]=useState(null);
    const [password, setPassword]=useState(null);
    const [login, setLogin]=useState(false);

    useEffect(()=>{
        vefifyLogin();
    },[]);
    
    useEffect(()=>{
        if(login === true){
            biometric();
        }
    },[login]);

    //verifição de login do user
    async function vefifyLogin(){
        let response=await AsyncStorage.getItem('userData');
        let json=await JSON.parse(response);
        if(json !== null){
            setUser(json.name);
            setPassword(json.password);
            setLogin(true);
        }
    }

    //Envio do formulário de login
    async function sendForm()
    {
        let response=await fetch(`${config.urlRoot}login`,{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: user,
                password: password
            })
        });
        let json=await response.json();
        if(json === 'error'){
            setDisplay('flex');
            setTimeout(()=>{
                setDisplay('none');
            },5000);
        }else{
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('AreaRestrita');
        }
    }

    //Biometria
    async function biometric(){
        let compatible= await LocalAuthentication.hasHardwareAsync();
        if(compatible){
            let biometricRecords = await LocalAuthentication.isEnrolledAsync()
            if(!biometricRecords){
                alert('Biometria não cadastrada')
            }else{
                let result=await LocalAuthentication.authenticateAsync();
                if(result.success){
                    sendForm();
                }else{
                    setUser(null);
                    setPassword(null);
                }
            }
        }
    }

    return(
        <KeyboardAvoidingView style={[css.container, css.darkbg, css.shadowProp]}>
            <View style={css.login__logomarca}>
                <Image source={require('../assets/img/js.png')} />
            </View>

            <View>
                <Text style={css.login__msg(display)}>Usuário ou senha inválidos!</Text>
            </View>

            <View style={[css.login__form, css.shadowProp]}>
                <TextInput style={css.login__input} placeholder='Usuário:' onChangeText={text=>setUser(text)} />
                <TextInput style={css.login__input} placeholder='Senha:' onChangeText={text=>setPassword(text)} secureTextEntry={true} />
                <TouchableOpacity style={css.login__button} onPress={()=>sendForm()}>
                    <Text style={css.login__buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}