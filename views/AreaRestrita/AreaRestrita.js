import React, {useEffect, useState} from "react";
import { BackHandler, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
    
    useEffect(()=>{
        async function getUser(){
            let response=await AsyncStorage.getItem('userData');
            let json=JSON.parse(response);
            setUser(json.name);
        }
        getUser();
    },[]);

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
            activeColor='#fff'
            inactiveColor='#544E4E'
            barStyle={css.area__tab}
        >
            <Tab.Screen 
                name="Principal" 
                component={Principal} 
                options={{
                    tabBarIcon:()=>(
                        <Icon name='home' size={20} color='#544E4E' />
                    )
                }}
            />
            <Tab.Screen 
                name="Favoritos" 
                component={Favoritos}
                options={{
                    tabBarIcon:()=>(
                        <Icon name='heart' size={20} color='#544E4E' />
                    )
                }}
            />
            <Tab.Screen 
                name="Carrinho" 
                component={Carrinho}
                options={{
                    tabBarIcon:()=>(
                        <Icon name='shopping-cart' size={20} color='#544E4E' />
                    )
                }}
            />
            <Tab.Screen 
                name="Usuario" 
                component={Usuario}
                options={{
                    tabBarIcon:()=>(
                        <Icon name='user' size={20} color='#544E4E' />
                    )
                }}
            />
        </Tab.Navigator>
    )
}