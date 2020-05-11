import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ImageDetail = ({ title, image }) => {
  console.log("image :>> ", image);
  return (
    <View>
      <Text style={styles.textStyle}>Image Detail {title}</Text>
      <Image source={image} />
    </View>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
  },
});
export default ImageDetail;
