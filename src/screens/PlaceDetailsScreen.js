import React from "react";
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
        {places.coords ? (
          <Map
            latitude={places.coords.latitude ? places.coords.latitude : 0}
            longitude={places.coords.longitude ? places.coords.longitude : 0}
            name={places.title}
          />
        ) : null}
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
    marginHorizontal: 10,
    marginTop: 14,
    alignSelf: "center",
  },
  map: {
    alignSelf: "center",
    height: "98%",
    width: "98%",
    marginHorizontal: 8,
  },
});

PlaceDetailsScreen.navigationOptions = {
  headerTitle: "Λεπτομέρειες",
};

export default PlaceDetailsScreen;
