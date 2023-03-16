import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Avatar, getIconType } from "react-native-elements";
import Spacer from "../components/Spacer";
import trackerApi from "../api/tracker";
import AccountButton from "../components/AccountButton";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = ({ navigation }) => {
  const { getUser } = useContext(AuthContext);
  const test = useContext(AuthContext);

  // useEffect(() => {
  //   getUser();
  // }, []);
  console.log(test.state);
  return (
    <>
      <View style={styles.avatar}>
        <Avatar
          size={120}
          rounded
          title="U"
          containerStyle={{ backgroundColor: "blue" }}
        />
        <Text></Text>
      </View>
      <AccountButton navigation={navigation} />
    </>
  );
};
const styles = StyleSheet.create({
  avatar: {
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AccountScreen;
