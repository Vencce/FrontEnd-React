 import React from 'react';
 import { View, Text } from "react-native";
 import { css } from '../../assets/css/Css';
 import { createContext, useContext, useState } from "react";


 export default function Favoritos({navigation}){
    
     return (
         <View style={[css.container, css.containerTop]}>
             <Text style={{fontSize: 40}}>Seus Favoritos</Text>
         </View>
     );
 }
