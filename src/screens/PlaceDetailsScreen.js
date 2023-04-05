import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { withNavigation } from "react-navigation";

const PlaceDetailsScreen = ({ navigation }) => {
  const places = navigation.getParam("places");
  return (
    <>
      <View>
        <Text style={styles.name}>{places.title}</Text>
      </View>
      <View>
        <Image style={styles.image} source={places.thumbnail} />
      </View>
      <View>
        <Text style={styles.text}>{places.details}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  name: {
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    height: 230,
    width: 370,
    borderRadius: 20,
  },
  text: {
    marginLeft: 10,
    marginTop: 10,
    alignSelf: "center",
  },
});

export default PlaceDetailsScreen;
