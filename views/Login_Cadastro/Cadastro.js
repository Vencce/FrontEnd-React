import React, {useState, useEffect} from "react";
import { KeyboardAvoidingView, View, Image, TouchableOpacity, TextInput, Text, Platform } from 'react-native';
import { css } from "../../assets/css/Css";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Cadastro({navigation})
{
    return(
        <KeyboardAvoidingView style={[css.container, css.backcolor]}>

            <View style={css.backimg}>
                <Image style={css.imgJS} source={require('../../assets/JSm.png')} />
            </View>

            <View style={css.input}>
                <View style={css.textinput}>
                    <Icon name='user-circle' size={20} color='grey' />
                    <TextInput style={css.placeholderLogin} placeholder='Usuário:'/>
                </View>
                <View style={css.textinput}>
                    <Icon name="envelope" size={20} color='grey'/>
                    <TextInput style={css.placeholderLogin} placeholder='Email:'/>
                </View>
                <View style={css.textinput}>
                    <Icon name="lock" size={20} color='grey'/>
                    <TextInput style={css.placeholderLogin} placeholder='Senha:'/>
                    <TouchableOpacity style={css.iconeye}>
                        <Icon name="eye" size={20} color='grey' />
                    </TouchableOpacity>
                </View>

                <TouchableOpacity  onPress={() =>  navigation.navigate('Login')}>
                    <Text style={css.textinputbtn}>Cadastrar</Text>
                </TouchableOpacity>
            </View>

            <View style={css.nadabranco}></View>    
        </KeyboardAvoidingView>
    );
}