import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, TextInput, Text, Platform } from 'react-native';
import { css } from "../assets/css/Css";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from 'expo-local-authentication';
import config from '../config/config';

export default function Login({navigation})
{
    return(
        <KeyboardAvoidingView style={[css.container, css.backcolor]}>

            <View style={css.backimg}>
                <Image style={css.imgJS} source={require('../assets/JSm.png')} />
            </View>

            <View style={css.input}>
                <TextInput style={css.textinput}  placeholder='Usuário:'/>
                <TextInput style={css.textinput}  placeholder='Senha:'/>
                <TouchableOpacity  onPress={() =>  navigation.navigate('AreaRestrita')}>
                    <Text style={css.textinputbtn}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={css.cadastro}>Não tem conta? cadastre-se!</Text>

            <View style={css.nadabranco}></View>    
        </KeyboardAvoidingView>
    );
}