import React from "react";
import { Text, View, Image } from 'react-native';
import { css } from "../assets/css/Css";

export default function Criadores() {

    return(
        <View style={[css.criador, css.shadowProp]}>
            <View style={[css.vitor, css.shadowProp]}>
                <Image style={css.img_cria}  source={require('../assets/img/Vitor.jpeg')}/>
                <Text style={css.text_cria}>Vitor Ferreira</Text>
            </View>
            <View style={[css.vitor, css.shadowProp]}>
                <Image style={css.img_cria}  source={require('../assets/img/Victor.jpg')}/>
                <Text style={css.text_cria}>Victor L. da Silva</Text>
            </View>
            <View style={[css.vitor, css.shadowProp]}>
                <Image style={css.img_cria}  source={require('../assets/img/vini.png')}/>
                <Text style={css.text_cria}>Vinicius Unlauf</Text>
            </View>
        </View>
    )
}