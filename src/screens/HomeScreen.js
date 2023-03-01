import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import HeartPress from "../components/HeartPress";

const places = [
  { name: "Place 1" },
  { name: "Place 2" },
  { name: "Place 3" },
  { name: "Place 4" },
];

const HomeScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FlatList
          data={places}
          renderItem={({ item }) => {
            return (
              <View style={styles.list}>
                <Text style={styles.places}>{item.name}</Text>
                <HeartPress style={styles.like} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: "row",
    paddingVertical: 4,
    borderBottomWidth: 2,
    justifyContent: "space-between",
  },
  places: {
    fontSize: 24,
    marginLeft: 8,
  },
  like: {
    alignSelf: "center",
    fontSize: 20,
    marginRight: 15,
  },
  footer: {
    width: "100%",
    height: 70,
    flex: 0,
    backgroundColor: "#B6B6B6",
    alignSelf: "flex-end",
  },
});

export default HomeScreen;
