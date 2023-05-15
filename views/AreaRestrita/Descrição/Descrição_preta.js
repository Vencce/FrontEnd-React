import React from 'react';
import { View, Image, Text } from "react-native";
import { css } from '../../../assets/css/Css';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Descrição_preta({navigation}){
    
    return (
        <View style={css.area_desc}>
            <View>
                <Image style={css.img_desc} source={require('../../../assets/img/mesa_preta.jpg')}/>
                <Icon 
                    style={css.icon_desc} 
                    name='backward' 
                    size={30} 
                    color='#000000' 
                    onPress={() => navigation.navigate('Principal')} 
                />
            </View>
            <View>
                <Text style={css.Descrição}>Mesa de Jantar de Marmore Preta</Text>
                <View style={css.star}>
                    <Text style={css.custo}>R$15.000,00</Text>
                    <Text style={css.nota}>5,0</Text>
                    <Icon name='star' color='#FFD700' size={20}/>
                    <Icon name='star' color='#FFD700' size={20}/>
                    <Icon name='star' color='#FFD700' size={20}/>
                    <Icon name='star' color='#FFD700' size={20}/>
                    <Icon name='star' color='#FFD700' size={20}/>
                </View>
            </View>
            <View style={css.nada}></View>
        </View>
        
    );
}