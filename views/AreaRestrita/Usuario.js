import React, {useState, useEffect} from 'react';
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';


export default function Usuario ({navigation}){
    
    return (
        <View>
            <MenuAreaRestrita title='Usuario' navigation={navigation} />
        </View>
    );
}