import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

import DateTime from "../components/DateTime";
import WeatherScroll from "../components/WeatherScroll";
const img = require("../../assets/kozani-argyropoulos.jpg");
const lat = "40.30069";
const lon = "21.78896";
const API_KEY = "d80c03ec2fdcf1b91a1f9c79408f540d";

const WeatherScreen = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    try {
      fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log("Data: " + data);
          setData(data);
        });
    } catch (err) {
      console.log(err.message || err);
    }
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <DateTime
          current={data.current}
          timezone={data.timezone}
          lat={data.lat}
          lon={data.lon}
        />
        <WeatherScroll weatherData={data.daily} />
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
