import { router, useLocalSearchParams } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { lanches } from "../assets/mockups/lanches";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 223, 204, 1)",
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgba(0, 0, 0, 1)",
  },
  text: {
    fontSize: 16,
  },
  imagem: {
    width: "100%",
    height: "50%",
  }
});

export default function Index() {

  const { id } = useLocalSearchParams();
  let indice = lanches.findIndex((lanches) => lanches.id === Number(id));

  function voltar() {
    router.back();
  }

  return (
    <View
      style={styles.container}
    >
      <Text style={styles.titulo}>{lanches[indice].nome}</Text>
      <Text style={styles.text}>Preço: R$ {lanches[indice].preco?.toFixed(2)}</Text>
      <Image source={{ uri: lanches[indice].image }} style={styles.imagem} />
      <Button
        title="Voltar"
        color="rgba(231, 210, 89, 1)"
        onPress={voltar}
      />
    </View>
  );
}