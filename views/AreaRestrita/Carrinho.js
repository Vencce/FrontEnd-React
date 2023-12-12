import React from 'react';
import { View, Text } from "react-native";
import { css } from '../../assets/css/Css';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';

export default function Carrinho({navigation}){

    return (
        <View style={[css.container, css.containerTop]}>
            <Text style={{fontSize: 40, marginTop: 20}}>Seu Carrinho</Text>
        </View>
    );
}