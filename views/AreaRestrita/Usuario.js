import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Usuario({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={25} color="white" />
        </TouchableOpacity>

        <Text style={{ color: "white", fontSize: 25 }}>Perfil do Usuario</Text>

        <TouchableOpacity>
          <Icon name="gear" size={25} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.perfil}>
        <View>
          <Image
            source={require("../../assets/img/perfil.jpg")}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    height: "auto",
    marginTop: 28,
    flex: 1,
  },
  top: {
    width: "100%",
    height: "auto",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  perfil: {
    backgroundColor: "white",
    height: 1000,
    width: "100%",
    padding: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
