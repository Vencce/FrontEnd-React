import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, View, ScrollView } from "react-native";
import Card from "../Cards/Card";
import MovelService from "../../seeders/services/moveis.js"

export default function MoveisHead() {
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
        <View>
          <View>
            {Moveis.map((Movel) => (
              <Card key={Movel.id} movel={Movel} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}