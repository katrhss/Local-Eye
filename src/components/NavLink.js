import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, text, routeName, guestText, guestRoute }) => {
  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Spacer>
          <Text style={styles.link}>{text} </Text>
        </Spacer>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(guestRoute)}>
        <Spacer>
          <Text style={styles.guest}>{guestText}</Text>
        </Spacer>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
  guest: {
    color: "gray",
  },
});

export default withNavigation(NavLink);
