import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <View style={{ height: "100%", width: "45%" }}>
        <Image style={styles.moveis} source={{ uri: props.movel.foto.url }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: "white",
    height: 200,
    borderRadius: 10,
    flexDirection: "row",
    margin: 20,
    color: "white",
    elevation: 15,
  },
  moveis: {
    resizeMode: "stretch",
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default Card;