import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Criadores, Descrição, Descrição_preta} from './views/index'
import AreaRestrita from './views/AreaRestrita/AreaRestrita';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{
            title: 'JS Móveis',
            headerStyle:{backgroundColor:'red'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen 
          name="Criadores" 
          component={Criadores}
          options={{
            title: 'Criadores',
            headerStyle:{backgroundColor:'red'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name='AreaRestrita' 
          component={AreaRestrita}
          options={{
            headerShown:false,
            title: 'AreaRestrita',
            headerStyle:{backgroundColor:'red'},
            headerTintColor: 'white',
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen name="Descrição" options={{headerShown:false}} component={Descrição} />
        <Stack.Screen name="Descrição_preta" options={{headerShown:false}} component={Descrição_preta} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
}
