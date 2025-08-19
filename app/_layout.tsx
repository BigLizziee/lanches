import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  faixa: {
    backgroundColor: "rgba(58, 122, 49, 1)",
  },
  texto: {
    color: "#000000ff",
  },
});

export default function Layout() {
  return <Stack
    screenOptions={{
      headerStyle: styles.faixa,
      headerTitleStyle: styles.texto,
    }}
  >
    <Stack.Screen name="index" options={{ title: "Lanches da Beth"}} />
    <Stack.Screen name="detalhes" options={{ title: "Detalhes do Post", headerShown:false }} />
    <Stack.Screen name="outra" options={{ title: "Outra Pagina", headerShown:false}} />
    <Stack.Screen name="maisuma" options={{ title: "Mais Uma", headerShown:false }} />

  </Stack>;
}