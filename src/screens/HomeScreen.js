import React, { useState } from "react";
import { FlatList, Text, View, StyleSheet, Image } from "react-native";
import HeartPress from "../components/HeartPress";
import Footer from "../components/Footer";

const places = [
  {
    name: "Ιστορικό - Λαογραφικό και Φυσικής Ιστορίας Μουσείο",
    image: {
      uri: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/7f/b5/b1/museum.jpg?w=1000&h=-1&s=1",
    },
  },
  {
    name: "Αρχαιολογικό Μουσείο Κοζάνης",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/commons/7/73/Macedonian_Museums-2-Arx_Kozanis-8.jpg",
    },
  },
  {
    name: "Αρχοντικό Γρ. Βούρκα",
    image: {
      uri: "https://lh5.googleusercontent.com/p/AF1QipOPEuKpSAysd7rnm6_fu8bXeFjazqMcF1HYhSg5=w243-h174-n-k-no-nu",
    },
  },
  { name: "Place 4", image: require("../../assets/beach.jpg") },
  { name: "Place 5", image: require("../../assets/beach.jpg") },
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
                  <Image style={styles.image} source={item.image} />
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
    justifyContent: "center",
    backgroundColor: "#C0C6CD",
    borderRadius: 25,
    marginHorizontal: 8,
    height: 260,
  },
  places: {
    fontSize: 22,
    marginLeft: 8,
  },
  image: {
    alignSelf: "center",
    height: "100%",
    width: "98%",
    borderRadius: 20,
  },
});

export default HomeScreen;
