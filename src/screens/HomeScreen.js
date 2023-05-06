import React from "react";
import { StyleSheet } from "react-native";

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

const styles = StyleSheet.create({});

export default HomeScreen;
