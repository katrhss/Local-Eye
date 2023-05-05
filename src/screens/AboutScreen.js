import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from "react-native";
import Spacer from "../components/Spacer";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AboutScreen = () => {
  return (
    <>
      <View style={styles.containerUp}>
        <Text style={styles.text}>Local Eye για Android</Text>
        <Text style={styles.text}>Έκδοση v1.0.0</Text>
        <Spacer />
        <Text style={styles.text}>
          IEEE Student Branch, University of Western Macedonia, Kastoria
        </Text>
        <Text style={styles.text}> © Copyrights 2023</Text>
        <Text style={styles.text}>All rights reserved</Text>
      </View>
      <View style={styles.dots} />
      <View style={styles.containerDown}>
        <Text style={styles.text}> Βρείτε μας στα Social</Text>
        <View style={styles.iconsContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://ieee.cs.uowm.gr");
            }}
          >
            <MaterialCommunityIcons
              name="web"
              size={24}
              color="#008e9d"
              style={styles.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://www.instagram.com/ieeesbkastoria/");
            }}
          >
            <Ionicons
              name="logo-instagram"
              size={24}
              color="#008e9d"
              style={styles.icons}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL("https://github.com/ieeesbkastoria");
            }}
          >
            <Ionicons
              name="logo-github"
              size={24}
              color="#008e9d"
              style={styles.icons}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

AboutScreen.navigationOptions = {
  headerTitle: "Σχετικά",
};

const styles = StyleSheet.create({
  containerUp: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  containerDown: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80,
  },
  iconsContainer: {
    flexDirection: "row",
  },
  icons: {
    marginHorizontal: 14,
    marginVertical: 10,
    // margin: 14,
  },
  text: {
    fontSize: 15,
    fontWeight: "200",
    textAlign: "center",
  },

  dots: {
    marginLeft: 2,
    borderBottomColor: "#008e9d",
    borderBottomWidth: 1,
    borderStyle: "dashed",
  },
});

export default AboutScreen;
