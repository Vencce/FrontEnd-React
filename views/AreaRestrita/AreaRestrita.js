import React, {useEffect, useState} from "react";
import { BackHandler, Alert } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { css } from "../../assets/css/Css";
import Icon from 'react-native-vector-icons/FontAwesome';
import Principal from './Principal';
import Favoritos from './Favoritos';
import Carrinho from './Carrinho';
import Usuario from './Usuario';

export default function AreaRestrita({navigation}) {
    
    const [user,setUser]=useState(null);
    const Tab = createMaterialBottomTabNavigator();

    useEffect(() => {
        const backAction = () => {
          Alert.alert('Alerta!', 'Deseja mesmo sair do app?', [
            {
              text: 'Não',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'Sim', onPress: () => {
                navigation.navigate('Home');
                BackHandler.exitApp();
                }
            }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          'hardwareBackPress',
          backAction,
        );

        
    
        return () => backHandler.remove();
      }, []);

    return(
        <Tab.Navigator
            activeColor='white'
            inactiveColor='#df7d0c'
            barStyle={css.area__tab}
            labeled= {false}    
        >
            <Tab.Screen 
                name="Principal"  
                component={Principal}
                options={{
                    tabBarIcon:()=>(
                        <Icon name='home' size={20} color='black' />
                    )
                }}
                
            />
            <Tab.Screen 
                name="Favoritos" 
                component={Favoritos}
                options={{
                    tabBarIcon:()=>(
                        <Icon name='heart' size={20} color='black' />
                    )
                }}
            />
            <Tab.Screen 
                name="Carrinho" 
                component={Carrinho}
                options={{
                    tabBarIcon:()=>(
                        <Icon name='shopping-cart' size={20} color='black' />
                    )
                }}
            />
            <Tab.Screen 
                name="none" 
                component={Usuario}
                options={{
                    tabBarIcon:()=>(
                        <Icon name='user' size={20} color='black' />
                    )
                }}
            />
        </Tab.Navigator>
    )
}