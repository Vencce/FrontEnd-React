import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
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

            <View style={css.backimg2}>
                <Image style={css.imgJS} source={require("../../assets/JSm.png")} />
            </View>

            <TouchableOpacity onPress={()=>logout()}>
                <Icon name="sign-out" size={30} color="#000" />
            </TouchableOpacity>
        </View>
    );
}