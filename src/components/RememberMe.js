import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RememberMe = () => {
  const [checked, setChecked] = useState(false);
  const { state } = useContext(AuthContext);

  const RememberMe = (value) => {
    return value
      ? useEffect(async () => {
          await AsyncStorage.setItem("token", state.token);
        }, [])
      : useEffect(async () => {
          await AsyncStorage.setItem("token", state.token);
        }, []);
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

export default RememberMe;
