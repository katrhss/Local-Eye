import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import HeartPress from "../components/HeartPress";
import { FontAwesome } from '@expo/vector-icons';

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
              <View style={styles.list}>
                <Text style={styles.places}>{item.name}</Text>
                <HeartPress style={styles.like} />
              </View>
            );
          }}
        />
      </View>
      <View style={styles.footer}>
      <View style={styles.homeFooter}>
      <FontAwesome name="home" size={24} color="#F0F0F5" />
      <Text>Home</Text>
      </View>
      </View>
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
  homeFooter:{
    marginTop: 10,
    marginLeft: 25,
    
  }
});

export default HomeScreen;
