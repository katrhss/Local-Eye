import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, StatusBar } from "react-native";
import HeartPress from "../components/HeartPress";
import Footer from "../components/Footer";

const places = [
  { name: "Place 1" },
  { name: "Place 2" },
  { name: "Place 3" },
  { name: "Place 4" },
  { name: "Place 5" },
];

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={places}
          renderItem={({ item }) => {
            return (
              <View>
                <View style={styles.list}>
                  <HeartPress />
                </View>
                <View>
                  <Text style={styles.places}>{item.name}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 4,
    justifyContent: "flex-end",
    backgroundColor: "#459FE9",
    borderRadius: 25,
    marginHorizontal: 8,
    height: 220,
  },
  places: {
    fontSize: 24,
    marginLeft: 8,
  },
});

export default HomeScreen;
