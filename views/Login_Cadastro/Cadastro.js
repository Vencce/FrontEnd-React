import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, TextInput, Text, Platform } from 'react-native';
import { css } from "../../assets/css/Css";

export default function Login({navigation})
{
    return(
        <KeyboardAvoidingView style={[css.container, css.backcolor]}>

            <View style={css.backimg}>
                <Image style={css.imgJS} source={require('../../assets/JSm.png')} />
            </View>

            <View style={css.input}>
                <TextInput style={css.textinput}  placeholder='Usuário:'/>
                <TextInput style={css.textinput}  placeholder='Senha:'/>
                <TouchableOpacity  onPress={() =>  navigation.navigate('Login')}>
                    <Text style={css.textinputbtn}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={css.cadastro}>Ja tem conta?</Text>
            </TouchableOpacity>

            <View style={css.nadabranco}></View>    
        </KeyboardAvoidingView>
    );
}