import React from "react";
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
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={require("../../assets/img/perfil.jpg")}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 20 }}>Nome do Usuário : </Text>
            <Text style={{ fontSize: 20 }}>Email : </Text>
          </View>
        </View>
        <View style={styles.acao}>
          <TouchableOpacity style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 20 }}>Alterar Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 20 }}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.baixo}>
        <Text style={{ fontSize: 20 }}>Produtos Cadastrados</Text>
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
  baixo:{
    backgroundColor: 'white',
    height: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  acao: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
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
    height: 'auto',
    width: "100%",
    padding: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
