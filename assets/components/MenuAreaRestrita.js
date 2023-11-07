import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { css } from "../css/Css";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MenuAreaRestrita(props){

    async function logout()
    {
        await AsyncStorage.clear();
        props.navigation.navigate('Login');
    }

    return (
        <View style={css.area__menu}>
            <TouchableOpacity style={css.button__home2}>
                <Icon name="bars" size={20} color="#000" />
            </TouchableOpacity>
        
            <Text style={css.area__title}>{props.title}</Text>

            <TouchableOpacity style={css.button__logout} onPress={()=>logout()}>
                <Icon name="sign-out" size={20} color="#000" />
            </TouchableOpacity>
        </View>
    );
}