import React, {useState, useEffect} from 'react';
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';
import { css } from '../../assets/css/Css';


export default function Usuario ({navigation}){
    
    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Usuario' navigation={navigation} />
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text> Login Temporario </Text>
            </TouchableOpacity>
        </View>
    );
}