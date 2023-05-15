import React from "react";
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from "react-native";
import { css } from "../assets/css/Css";

export default function Home({navigation}) {

    return(
        <View style={css.container2}>
                <TouchableOpacity onPress={() =>  navigation.navigate('Login')}>
                    <Text style={css.home_input}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Criadores')}>
                    <Text style={css.home_input}>Criadores</Text>
                </TouchableOpacity>
        </View>
    )
}