import React from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import moment from "moment-timezone";

const FutureForecast = ({ data }) => {
  return (
    <View style={{ flexDirection: "row" }}>
      {data && data.length > 0 ? (
        data.map(
          (data, idx) =>
            idx !== 0 && <FutureForecastItem key={idx} forecastItem={data} />
        )
      ) : (
        <View></View>
      )}
    </View>
  );
};

const FutureForecastItem = ({ forecastItem }) => {
  const img = {
    uri:
      "https://openweathermap.org/img/wn/" +
      forecastItem.weather[0].icon +
      "@4x.png",
  };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.day}>
        {moment(forecastItem.dt * 1000).format("ddd")}
      </Text>
      <Image source={img} style={styles.image} />
      <Text style={styles.temp}>Lowest - {forecastItem.temp.night}&#176;C</Text>
      <Text style={styles.temp}>Highest - {forecastItem.temp.day}&#176;C</Text>
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
    fontSize: 14,
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
    padding: 20,
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
});

export default FutureForecast;
