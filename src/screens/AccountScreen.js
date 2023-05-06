import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import SignoutButton from "../components/SignoutButton";
import DisplayUsername from "../components/DisplayUsername";
import { Ionicons } from "@expo/vector-icons";

const AccountScreen = ({ navigation }) => {
  return (
    <View>
      <View>
        <View style={styles.container}></View>
        <View style={styles.account}>
          <Avatar
            size={100}
            rounded
            source={require("../../assets/UserIcon.png")}
            containerStyle={styles.avatarContainer}
            avatarStyle={styles.avatar}
          />
          <View style={styles.username}>
            <DisplayUsername />
          </View>
        </View>
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Settings");
            }}
          >
            <View style={styles.line}>
              <Ionicons name="md-settings-sharp" size={24} color="#008e9d" />
              <Text style={styles.text}>{"   "}Ρυθμίσεις</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("About");
            }}
          >
            <View style={styles.line}>
              <Ionicons name="book" size={24} color="#008e9d" />
              <Text style={styles.text}>{"   "}Σχετικά</Text>
            </View>
          </TouchableOpacity>
          <SignoutButton navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

AccountScreen.navigationOptions = {
  headerTitle: "Λογαριασμός",
};

const styles = StyleSheet.create({
  account: {
    alignItems: "center",
    margin: 20,
    paddingTop: 100,
  },
  avatarContainer: {
    backgroundColor: "white",
    borderWidth: 6,
    borderColor: "#E5E7E9",
    position: "absolute",
  },
  avatar: {
    width: "100%",
    height: "110%",
  },
  username: {
    paddingBottom: 30,
  },
  content: {
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    width: "90%",
    left: "5%",
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
  text: {
    fontSize: 17,
    marginVertical: 6,
  },
  signout: {
    color: "red",
    fontSize: 17,
    marginVertical: 6,
  },
  container: {
    backgroundColor: "white",
    paddingRight: 150,
    left: "5%",
    top: "20%",
    height: "33%",
    width: "90%",

    borderRadius: 15,
    position: "absolute",
  },
});

export default AccountScreen;
