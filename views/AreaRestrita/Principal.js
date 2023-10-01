import React from 'react';
import MoveisHead from '../Principal_imagens/MoveisHead';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()

export default function Principal(){
    
    return (
        <Stack.Navigator initialRouteName="MoveisHead">
               <Stack.Screen
                    name="MoveisHead"
                    component={MoveisHead}
                    options={{ headerShown: false }}
               />
        </Stack.Navigator>
    );
}