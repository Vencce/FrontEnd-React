import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import Card from "../Cards/Card";
import Cardcategoria from "../Cards/Card-categoria";
import MovelService from "../../seeders/services/moveis.js";
import CategoiraService from "../../seeders/services/categoria";
import { css } from "../../assets/css/Css";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";

export default function MoveisHead({ navigation }) {
  const [Moveis, setMoveis] = useState([]);

  async function BuscarDados2() {
    const data = await MovelService.getAllMoveis();
    setMoveis(data);
  }

  const [Categorias, setCategorias] = useState([]);

  async function BuscarDados() {
    const data = await CategoiraService.getAllCategorias();
    setCategorias(data);
  }

  useEffect(() => {
    BuscarDados2();
  }, []);

  useEffect(() => {
    BuscarDados();
  }, []);


  return (
    <SafeAreaView style={[css.container, css.containerTop]}>
      <MenuAreaRestrita title="Principal" navigation={navigation} />
      <ScrollView>

        <ScrollView horizontal={true} style={{ width: 400, marginLeft: 10 }}>
          {Categorias.map((Categoria) => (
            <Cardcategoria key={Categoria.id} categoria={Categoria} />
          ))}
        </ScrollView>

        <ScrollView>
          <View>
            {Moveis.map((Movel) => (
              <TouchableOpacity
                key={Movel.id}
                onPress={() =>
                  navigation.navigate("CardProduto", { movel: Movel.id })
                }
              >
                <Card key={Movel.id} movel={Movel}></Card>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
