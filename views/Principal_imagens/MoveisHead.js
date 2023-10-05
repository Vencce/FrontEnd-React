import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView, Text } from "react-native";
import Card from "../Cards/Card";
import MovelService from "../../seeders/services/moveis.js"
import { css } from '../../assets/css/Css'

export default function MoveisHead({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const [Moveis, setMoveis] = useState([]);

  async function BuscarDados() {
    const data = await MovelService.getAllMoveis();
    setMoveis(data);
  }

  useEffect(() => {
    BuscarDados();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ alignItems: "center" }}>
          <Text style={css.PrinMoveis}>Primeiros Móveis</Text>
        </View>
        <View>
          {Moveis.map((Movel) => (
            <Card key={Movel.id} movel={Movel} />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}