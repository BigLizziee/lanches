import { router } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { lanches } from "../assets/mockups/lanches";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(250, 223, 189, 1)",
  },
  list: {
    width: "100%",
  },
  item: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 6,
    padding: 20,
    backgroundColor: "rgba(115, 182, 61, 0.68)",
    borderRadius: 8,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "rgba(0, 0, 0, 1)"
  },
  text: {
    fontSize: 16,
  },
});

export default function Index() {

  function irParaDetalhes(id: number) {
    router.push(`/detalhes?id=${id}`);
  }

  return (
    <View
      style={styles.container}
    >
      <FlatList
        style={styles.list}
        data={lanches}
        renderItem={({ item }) => (<TouchableOpacity
          style={styles.item}
          onPress={() => irParaDetalhes(item.id)}
        >
          <Text style={styles.titulo}>Título: {item.nome}</Text>
          <Text style={styles.text}>Preço: R$ {item.preco?.toFixed(2)}</Text>
        </TouchableOpacity>)}
      />
    </View>
  );
}