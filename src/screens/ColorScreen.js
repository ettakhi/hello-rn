import React, { useState } from "react";
import { View, Button, StyleSheet, FlatList } from "react-native";

import ColorComponent from "../components/ColorComponent";
import { randInt } from "../utils";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const addColor = () => {
    const red = randInt(256);
    const blue = randInt(256);
    const green = randInt(256);
    setColors((prev) => [...prev, { red, green, blue }]);
  };

  return (
    <View>
      <Button title='Add Color' onPress={addColor} />
    </View>
  );
};

export default ColorScreen;
