import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import DateTime from "../components/DateTime";
import WeatherScroll from "../components/WeatherScroll";
const img = require("../../assets/kozani-argyropoulos.jpg");

const WeatherScreen = () => {
  const [data, setData] = useState({});
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <DateTime />
        <WeatherScroll />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
  },
});

export default WeatherScreen;
