import React, { useState } from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";

const FutureForecast = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
      <FutureForecastItem />
    </View>
  );
};

const FutureForecastItem = () => {
  const img = { uri: "https://openweathermap.org/img/wn/10d@2x.png" };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.day}>Mon</Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Night - 28&#176;C</Text>
      <Text style={styles.temp}>Day - 30&#176;C</Text>
    </View>
  );
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  itemContainer: {
    width: SCREEN_WIDTH / 2.5,
    marginRight: 25,
    ////////////////////////////////
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000033",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    padding: 20,
    margin: 5,
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    paddingVertical: 10,
    textAlign: "center",
    padding: 10,
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
});

export default FutureForecast;
