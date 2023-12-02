 import React from 'react';
 import { View, Text } from "react-native";
 import { css } from '../../assets/css/Css';
 import { createContext, useContext, useState } from "react";
 import MenuAreaRestrita from '../../assets/components/MenuAreaRestrita';

 export default function Favoritos({navigation}){
    
     return (
         <View style={[css.container, css.containerTop]}>
             <MenuAreaRestrita title='Favoritos' navigation={navigation} />
             <Text style={{fontSize: 50}}>Seus Favoritos</Text>
         </View>
     );
 }
