import React, { useState } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

import Details from "../components/Details";
import SubmitButton from "../components/SubmitButton";

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <Details navigation={navigation} />
      <SubmitButton navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  // list: {
  //   flex: 1,
  //   flexDirection: "row",
  //   padding: 10,
  //   justifyContent: "center",
  //   backgroundColor: "#C0C6CD",
  //   borderRadius: 25,
  //   marginHorizontal: 8,
  //   height: 260,
  // },
  // places: {
  //   fontSize: 22,
  //   marginLeft: 8,
  // },
  // image: {
  //   height: "100%",
  //   width: "98%",
  //   borderRadius: 20,
  // },
});

export default HomeScreen;
