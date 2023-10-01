import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { css } from "../assets/css/Css";
import { ImageBackground } from "react-native";

export default function Home({navigation}) {
    return(
        <ImageBackground source={require('../assets/BgTi.jpg')} style={css.container2}>
            <TouchableOpacity onPress={() =>  navigation.navigate('Login')}>
                <Text style={css.home_input}>Login</Text>
            </TouchableOpacity>
        </ImageBackground>
    )
}