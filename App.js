import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Login, Cadastro } from "./views/Routes/index";
import AreaRestrita from "./views/AreaRestrita/AreaRestrita";
import { RecoilRoot } from "recoil";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            options={{ headerShown: false }}
            component={Login}
          />
          <Stack.Screen
            name="AreaRestrita"
            component={AreaRestrita}
            options={{
              headerShown: false,
              title: "AreaRestrita",
            }}
          />
          <Stack.Screen
            name="Cadastro"
            options={{ headerShown: false }}
            component={Cadastro}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
