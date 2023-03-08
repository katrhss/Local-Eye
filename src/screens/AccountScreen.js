import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Header from "../shared/header";

const AccountScreen = ({ navigation }) => {
  return (
    <View style={{ marginTop: 50}}>
      <Text>Account Screen</Text>
      <Button title="Go to Signup" onPress={() => navigation.navigate("Signup")} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
