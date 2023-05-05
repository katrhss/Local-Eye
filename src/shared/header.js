import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Header({ navigation }) {
  const accountNavigate = () => {
    navigation.navigate("Account");
  };

  return (
    <View style={styles.header}>
      <View>
        <Text style={styles.headerText}>Local Eye</Text>
      </View>
      <Ionicons
        name="person-circle-outline"
        size={38}
        style={styles.icon}
        onPress={accountNavigate}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 1,
    color: "#008e9d",
  },
  icon: {
    color: "#008e9d",
  },
});
