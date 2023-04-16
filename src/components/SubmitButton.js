import React, { useContext } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";

const SubmitButton = ({ navigation }) => {
  const { state } = useContext(AuthContext);

  return state.token != null ? (
    <TouchableOpacity
      style={styles.submit}
      onPress={() => {
        navigation.navigate("Create");
      }}
    >
      <Entypo name="plus" size={44} color="white" />
    </TouchableOpacity>
  ) : null;
};

const styles = StyleSheet.create({
  submit: {
    position: "absolute",
    borderRadius: 100,
    top: "90%",
    left: "80%",
    padding: 7,
    backgroundColor: "#008e9d",
  },
});

export default SubmitButton;
