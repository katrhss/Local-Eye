import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const accountNavigate = () => {
    navigation.navigate("Account");
  };

  return (
    <View style={styles.header}>
      <Ionicons
        name="person-circle-outline"
        size={38}
        style={styles.icon}
        onPress={accountNavigate}
      />
      <View>
        <Text style={styles.headerText}>Home Screen</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
  },
  icon: {
    position: "absolute",
    left: 360,
    color: "#566573",
  },
});
