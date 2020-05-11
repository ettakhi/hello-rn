import React from "react";
import { View, Text, StyleSheet } from "react-native";

import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>Image Screen</Text>
      <ImageDetail title='image lwla' image={require(`../../assets/mountain.jpg`)} />
      <ImageDetail title='image tania' image={require(`../../assets/forest.jpg`)} />
      <ImageDetail title='image talta' image={require(`../../assets/beach.jpg`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
});

export default ImageScreen;
