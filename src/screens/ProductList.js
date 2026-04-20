import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function ProductList({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      title: "Lista de Produtos",
      headerTitleAlign: "center",
      headerLeft: () => {
        return <Button title="Logout" />;
      },
      headerRight: () => {
        return <Button title="Grupo" />;
      },
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Produtos...</Text>
      <Text>Produtos...</Text>
      <Text>Produtos...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
});
