import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const PlaceDetailsScreen = ({ navigation }) => {
  const places = navigation.getParam("places");
  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text style={styles.name}>{places.name}</Text>
      </View>
      <View>
        <Image style={styles.image} source={places.image} />
      </View>
      <View>
        <Text style={styles.text}>{places.text}</Text>
      </View>
    </View>
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
    width: "90%",
    borderRadius: 20,
    height: 260,
    // width: 360,
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
    alignSelf: "center",
  },
});

export default PlaceDetailsScreen;
