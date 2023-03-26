import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

const SignoutButton = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const token = useContext(AuthContext);
  return token.state.token ? (
    <>
      <TouchableOpacity onPress={signout}>
        <View style={styles.line}>
          <Ionicons name="log-out-outline" size={24} color="red" />
          <Text style={styles.signout}>{"   "}Αποσύνδεση</Text>
        </View>
      </TouchableOpacity>
    </>
  ) : (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Signin");
        }}
      >
        <View style={styles.line}>
          <Ionicons name="log-in-outline" size={24} color="#008e9d" />
          <Text style={styles.signin}>{"   "}Συνδέσου εδώ</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  signout: {
    color: "red",
    fontSize: 17,
    marginVertical: 6,
  },
  signin: {
    fontSize: 18,
    marginVertical: 6,
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 12,
    paddingVertical: 6,
    marginVertical: 2,
    borderWidth: 0,
    borderRadius: 14,
  },
});

export default SignoutButton;
