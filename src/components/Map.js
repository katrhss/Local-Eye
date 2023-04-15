import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";

const Map = ({ latitude, longitude, name }) => {
  return (
    <MapView
      style={[styles.map, { borderWidth: 2, borderColor: "red" }]}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.0013,
        longitudeDelta: 0.0013,
      }}
    >
      <Marker coordinate={{ latitude, longitude }}>
        <Callout>
          <Text>{name}</Text>
        </Callout>
      </Marker>
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

export default Map;

//const [pinText, setPinText] = useState();
