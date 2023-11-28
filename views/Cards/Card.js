import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function Card(props) {
  return (
    <View style={styles.card}>
      <Image
        style={{ width: "40%", height: "100%", borderRadius: 10 }}
        source={{ uri: props.movel.foto.url }}
        />
      <View>
        <Text style={{ fontSize:25, padding: 10, paddingRight: 40}}>{props.movel.nome}</Text>
        <Text>R${props.movel.preco}</Text>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  card: {
    width: 'auto',
    height: 150,
    borderRadius: 10,
    flexDirection: "row",
    margin: 20,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default Card;
