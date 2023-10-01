import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Home, Login, Descrição, Descrição_preta, Cadastro} from './views/Routes/index'
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
            headerShown:false,
          }}
        />
        <Stack.Screen name="Login" options={{headerShown:false}} component={Login} />
        <Stack.Screen name="Cadastro" options={{headerShown:false}} component={Cadastro} />
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
