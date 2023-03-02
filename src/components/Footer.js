import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const Footer = () => {
  const [isPressed, setIsPressed] = useState(true);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.footer}>
      <View style={styles.homeFooter}>
        <TouchableOpacity onPress={handlePress}>
          {isPressed ? (
            <FontAwesome
              name="home"
              size={24}
              color="#F0F0F5"
              style={styles.icon}
            />
          ) : (
            <FontAwesome
              name="home"
              size={24}
              color="blue"
              style={styles.icon}
            />
          )}

          <Text style={{ color: "#F0F0F5" }}>Home</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchFooter}>
        <TouchableOpacity>
          <Ionicons
            name="search"
            size={24}
            color="#F0F0F5"
            style={styles.icon}
          />
          <Text style={{ color: "#F0F0F5" }}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.nearbyFooter}>
        <TouchableOpacity>
          <FontAwesome5
            name="map-marker-alt"
            size={24}
            color="#F0F0F5"
            style={{ marginLeft: 10 }}
          />
          <Text style={{ color: "#F0F0F5" }}>Nearby</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    height: 70,
    flex: 0,
    flexDirection: "row",
    backgroundColor: "#182425",
    alignSelf: "flex-end",
    justifyContent: "space-around",
    alignItems: "center",
  },
  icon: {
    marginLeft: 6,
  },
  homeFooter: {
    marginLeft: 5,
  },
  searchFooter: {
    marginLeft: 5,
  },
});

export default Footer;
