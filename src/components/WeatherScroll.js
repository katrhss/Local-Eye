import React from "react";
import {
  View,
  Image,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";
import moment from "moment-timezone";
import FutureForecast from "./FutureForecast";

const WeatherScroll = ({ weatherData }) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.scrollviewContainer}
      style={styles.scrollview}
    >
      <CurrentTemp
        data={weatherData && weatherData.length > 0 ? weatherData[0] : {}}
      />
      <FutureForecast
        data={weatherData && weatherData.length > 0 ? weatherData : {}}
      />
    </ScrollView>
  );
};

const CurrentTemp = ({ data }) => {
  if (data && data.weather) {
    const img = {
      uri:
        "https://openweathermap.org/img/wn/" + data.weather[0].icon + "@4x.png",
    };
    return (
      <View style={styles.curTempContainer}>
        <Image source={img} style={styles.image} />
        <View style={styles.insideCurTempContainer}>
          <Text style={styles.day}>
            {moment(data.dt * 1000).format("dddd")}
          </Text>
          <Text style={styles.temp}>Lowest - {data.temp.night}&#176;C</Text>
          <Text style={styles.temp}>Highest - {data.temp.day}&#176;C</Text>
        </View>
      </View>
    );
  } else {
    return <View></View>;
  }
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");

const styles = StyleSheet.create({
  scrollview: {
    flex: 0.4,
    backgroundColor: "#18181bcc",
  },
  scrollviewContainer: {
    paddingVertical: "6%",
  },
  image: {
    width: 100,
    height: 180,
    marginLeft: 10,
  },
  curTempContainer: {
    width: SCREEN_WIDTH - 60,
    marginHorizontal: 25,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#00000033",
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
    paddingLeft: "24%",
  },
});

export default WeatherScroll;
