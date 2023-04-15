import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Map from "../components/Map";
import Spacer from "../components/Spacer";

const PlaceDetailsScreen = ({ navigation }) => {
  const places = navigation.getParam("places");
  return (
    <ScrollView style={{}}>
      <View>
        <Text style={styles.name}>{places.title}</Text>
      </View>
      <View>
        <Image style={styles.image} source={places.thumbnail} />
      </View>
      <View>
        <Text style={styles.text}>{places.details}</Text>
      </View>
      <Spacer />
      <View style={styles.map}>
        <Map
          latitude={places.cords.latitude}
          longitude={places.cords.longitude}
          name={places.name}
        />
      </View>
      <Spacer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10,
    alignSelf: "center",
    textAlign: "center",
  },
  image: {
    alignSelf: "center",
    height: "100%",
    width: "95%",
    borderRadius: 20,
    height: 260,
  },
  text: {
    marginLeft: 10,
    // marginTop: 10,
    alignSelf: "center",
  },
  map: {
    alignSelf: "center",
    height: "98%",
    width: "98%",
    marginHorizontal: 8,
  },
});

export default PlaceDetailsScreen;
