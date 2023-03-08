import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Signin Screen</Text>
      <Button
        title="Sign Up"
        onPress={() => {
          navigation.navigate("Signup");
        }}
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerTitle: "",
  };
};

const styles = StyleSheet.create({});

export default SigninScreen;
