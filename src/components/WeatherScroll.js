import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";

import FutureForecast from "./FutureForecast";

const WeatherScroll = () => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollviewContainer}
      style={styles.scrollview}
    >
      <CurrentTemp />
      <FutureForecast />
    </ScrollView>
  );
};

const CurrentTemp = () => {
  const img = { uri: "https://openweathermap.org/img/wn/10d@2x.png" };
  return (
    <View style={styles.curTempContainer}>
      <Image source={img} style={styles.image} />
      <View style={styles.insideCurTempContainer}>
        <Text style={styles.day}>Sunday</Text>
        <Text style={styles.temp}>Night - 28&#176;C</Text>
        <Text style={styles.temp}>Day - 35&#176;C</Text>
      </View>
    </View>
  );
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollview: {
    flex: 0.4,
    // backgroundColor: "red",
    backgroundColor: "#18181bcc",
    // paddingLeft: "10%",
  },
  scrollviewContainer: {
    paddingVertical: "6%",
    // paddingHorizontal: "5%",
    // flex: 1,
    // paddingRight: "20%",
  },
  image: {
    width: 100,
    height: 180,
  },
  curTempContainer: {
    backgroundColor: "red",
    // width: "80%",
    width: SCREEN_WIDTH - 50,
    marginHorizontal: 25,
    // marginRight: 200,
    // marginLeft: 30,
    // flex: 1,
    // backgroundColor: "red",
    justifyContent: "center",
    flexDirection: "row",
    // backgroundColor: "#00000033",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    paddingVertical: 10,
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  insideCurTempContainer: {
    // width: "100%",
    paddingLeft: "24%",
    // marginRight: 10,
    // left: "10%",
  },
});

export default WeatherScroll;
