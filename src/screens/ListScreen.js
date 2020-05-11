import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const users = [
  { age: 22, name: "hakim" },
  { age: 34, name: "adil" },
  { age: 12, name: "imane" },
  { age: 14, name: "kamal" },
  { age: 43, name: "elon" },
  { age: 23, name: "amine" },
  { age: 53, name: "jad" },
  { age: 22, name: "mark" },
  { age: 45, name: "bill" },
  { age: 33, name: "tom" },
];
const ListScreen = () => {
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <Text style={styles.text}>
          {item.name} - Age {item.age}
        </Text>
      )}
      keyExtractor={({ name }) => name}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    marginVertical: 30,
  },
});

export default ListScreen;
