import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ColorComponent = ({ red = 1, green = 1, blue = 1 }) => {
  return (
    <View>
      <View style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})`, width: 100, height: 100 }} />
    </View>
  );
};

// const styles = StyleSheet.create({
//   imageStyle: {
//     backgroundColor: rgb(),
//   },
// });

export default ColorComponent;
