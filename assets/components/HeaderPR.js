import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HeaderPR(){

    return (
        <View style={css.area__menu}>
            <TouchableOpacity>
                <Icon name="home" size={20} color="#999" />
            </TouchableOpacity>
        </View>
    );
}