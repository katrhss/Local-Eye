import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import MapView, { Marker, Callout, PROVIDER_GOOGLE } from "react-native-maps";

const Map = ({ latitude, longitude, name }) => {
  if (latitude !== 0 && longitude !== 0) {
    return (
      <MapView
        provider={PROVIDER_GOOGLE}
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
  } else {
    return <View></View>;
  }
};

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

export default Map;

//const [pinText, setPinText] = useState();
