import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Button } from "react-native-elements";
import { Context as AuthContext } from "../context/AuthContext";

const AccountButton = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  const token = useContext(AuthContext);
  return token.state.token ? (
    <>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </>
  ) : (
    <>
      <Spacer>
        <Button
          title="Go to Signup"
          onPress={() => navigation.navigate("Signup")}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({});

export default AccountButton;
