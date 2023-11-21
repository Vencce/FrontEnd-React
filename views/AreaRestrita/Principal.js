import React from "react";
import CardProduto from "../Cards/CardProduto";
import Moveis_Prin from "../Principal_imagens/Moveis_Prin";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Principal({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="MoveisHead">
      <Stack.Screen
        name="Moveis_Prin"
        component={Moveis_Prin}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CardProduto"
        component={CardProduto}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
