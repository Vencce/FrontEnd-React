import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import { css } from '../../assets/css/Css';
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';

export default function Principal({navigation}){
    
    return (
        <ScrollView>
            <View style={[css.container, css.containerTop]}>
                <MenuAreaRestrita title='Principal' navigation={navigation} />

                <View style={[css.prin_head]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Descrição')}>
                        <Image style={css.img} source={require('../../assets/img/mesa.jpg')}/>
                        <Text style={css.text_img}>R$20.000,00</Text>
                    </TouchableOpacity>
                </View>
        
                <View style={[css.prin_head]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Descrição_preta')}>
                        <Image style={css.img} source={require('../../assets/img/mesa_preta.jpg')}/>
                        <Text style={css.text_img}>R$15.000,00</Text>
                    </TouchableOpacity>
                </View>

                <View style={[css.prin_head]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Descrição_preta')}>
                        <Image style={css.img} source={require('../../assets/img/mesa_preta.jpg')}/>
                        <Text style={css.text_img}>R$15.000,00</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}