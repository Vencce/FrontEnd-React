import React from 'react';
import { View } from "react-native";
import { css } from '../../assets/css/Css';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';

export default function Carrinho({navigation}){

    return (
        <View style={[css.container, css.containerTop]}>
            <MenuAreaRestrita title='Carrinho' navigation={navigation} />
        </View>
    );
}