import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import moment from "moment-timezone";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WeatherItem = ({ title, value, unit }) => {
  return (
    <View style={styles.weatherItem}>
      <Text style={styles.weatherItemContent}>{title}</Text>
      <Text style={styles.weatherItemContent}>
        {value}
        {unit}
      </Text>
    </View>
  );
};

const DateTime = ({ current, timezone, lat, lon }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hour = time.getHours();
      const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
      const minutes = time.getMinutes();
      const ampm = hour >= 12 ? " pm" : " am";

      setTime(
        (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
          ":" +
          (minutes < 10 ? "0" + minutes : minutes) +
          ampm
      );

      setDate(days[day] + ", " + date + " " + months[month]);
    }, 1000);
  }, []);
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.time}>{time}</Text>
        </View>
        <View>
          <Text style={styles.date}>{date}</Text>
        </View>
        <View style={styles.weatherItemContainer}>
          <WeatherItem
            title="Humidity"
            value={current ? current.humidity : ""}
            unit="%"
          />
          <WeatherItem
            title="Pressure"
            value={current ? current.pressure : ""}
            unit="hPA"
          />
          <WeatherItem
            title="Sunrise"
            value={
              current
                ? moment.tz(current.sunrise * 1000, timezone).format("HH:mm")
                : ""
            }
            unit="am"
          />
          <WeatherItem
            title="Sunset"
            value={
              current
                ? moment.tz(current.sunset * 1000, timezone).format("HH:mm")
                : ""
            }
            unit="pm"
          />
        </View>
      </View>
      <View>
        <Text style={styles.timezone}>Kozani/Greece</Text>
        <Text style={styles.latlong}>
          {lat}Ν {lon}Ε
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    fontSize: 45,
    color: "white",
    fontWeight: "100",
  },
  date: {
    fontSize: 25,
    color: "#eee",
    fontWeight: "300",
    marginLeft: 5,
  },
  timezone: {
    textAlign: "right",
    marginRight: 2,
    fontSize: 20,
    color: "white",
  },
  latlong: {
    textAlign: "right",
    marginRight: 2,
    fontSize: 16,
    color: "white",

    fontWeight: "600",
  },
  weatherItemContainer: {
    backgroundColor: "#18181b99",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginLeft: 4,
  },
  weatherItem: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherItemContent: {
    color: "white",
    fontSize: 14,
    fontWeight: "100",
  },
});

export default DateTime;
