import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Cardcategoria(props) {
  return (
    <View style={styles.cardcate}>
        <Text numberOfLines={1} ellipsizeMode="tail"> {props.categoria.descricao} </Text>
    </View> 
  );
}

const styles = StyleSheet.create({
  cardcate: {
    height: 'auto',
    marginTop: 15,
    marginRight: 20,
    marginBottom: 15,
    padding: 10,
    backgroundColor: 'orange',
    textAlign: 'center',
    borderRadius: 10,
  },
});

export default Cardcategoria;