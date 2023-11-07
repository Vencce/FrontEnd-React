import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import Card from "../Cards/Card";
import Cardcategoria from '../Cards/Card-categoria'
import MovelService from "../../seeders/services/moveis.js"
import CategoiraService from '../../seeders/services/categoria'
import { css } from '../../assets/css/Css'
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function MoveisHead({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const [Moveis, setMoveis] = useState([]);
  
  // async function BuscarDados() {
  //   const data = await MovelService.getAllMoveis();
  //   setMoveis(data);
  // }

  const [Categorias, setCategorias] = useState([]);

  async function BuscarDados() {
    const data = await CategoiraService.getAllCategorias();
    setCategorias(data);
  }

  
  useEffect(() => {
    BuscarDados();
  }, []);

  return (
    <SafeAreaView style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title='Principal' navigation={navigation} />
      <ScrollView>
        <View style={css.wellcome}>
          <Image style={css.imgPrin} source={require('../../assets/Polt-Germany.png')} />
          <View style={css.text_bem}>
            <Text style={{ fontSize: 25, fontWeight: 'bold'}}>Seja Bem-Vindo</Text>
            <Text>Bem Vindo 'nome do usuario'</Text>
            <TouchableOpacity style={css.button_prin}>
              <View style={{ padding: 5}}>Ver mais</View>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView horizontal= {true} style={{ width: 359 }}>
          {Categorias.map((Categoria) => (
            <Cardcategoria key={Categoria.id} categoria={Categoria} />
            ))}
        </ScrollView>
        
        {/* <View>
          {Moveis.map((Movel) => (
            <Card key={Movel.id} movel={Movel} />
            ))}
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}