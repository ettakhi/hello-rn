import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({ navigation: { navigate } }) => {
  return (
    <View>
      <Text style={styles.textOne}>Hello there</Text>
      <Button title='Go to List Demo' onPress={() => navigate("List")} />
      <Button title='Go to Image Demo' onPress={() => navigate("Image")} />
      <Button title='Go to Colors' onPress={() => navigate("Color")} />
    </View>
  );
};

const styles = StyleSheet.create({
  textOne: {
    fontSize: 25,
  },
  textTwo: {
    fontSize: 20,
  },
});

export default HomeScreen;
