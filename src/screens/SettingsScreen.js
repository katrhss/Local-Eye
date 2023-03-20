import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SettingsScreen = ({ navigation }) => {
  let test;
  useEffect(() => {
    async function test() {
      test = await AsyncStorage.getItem("rememberme");
    }
  }, []);
  const [checked, setChecked] = useState(test);
  const { state } = useContext(AuthContext);

  const RememberMe = async (value) => {
    console.log(value);
    if (value) {
      await AsyncStorage.setItem("token", state.token);
      await AsyncStorage.setItem("rememberme", value);
    } else {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.setItem("rememberme", value);
    }
  };

  return (
    <View>
      <Text>Settings screen</Text>
      <Switch
        value={checked}
        onValueChange={(value) => {
          setChecked(value);
          RememberMe(value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default withNavigation(SettingsScreen);
