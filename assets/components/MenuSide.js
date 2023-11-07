import React, {useEffect, useState} from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Cadastro, Login } from "../../views/Routes";
import 'react-native-gesture-handler';


export default function MenuSide({navigation}) {
    
    const Drawer = createDrawerNavigator();

    return(
        <Drawer.Navigator>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Cadastro" component={Cadastro} />
        </Drawer.Navigator>
    )
}