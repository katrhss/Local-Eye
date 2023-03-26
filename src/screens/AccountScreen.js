import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Avatar, Icon } from "react-native-elements";
import SignoutButton from "../components/SignoutButton";
import DisplayUsername from "../components/DisplayUsername";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const AccountScreen = ({ navigation }) => {
  // // TODO: Να γίνει καλύτερο Styling σε Avatar και Username.
  // // TODO: Να μπούν κουμπιά Σχετικά/About us, Ρυθμίσεις με theme και αν γινεται Να με θυμάσαι, με τα αναλογα τους screens και πιο όμορφο log-out. Για το Theme
  // TODO: Μένει ακόμα το ερώτημα για το Theme https://medium.com/simform-engineering/manage-dark-mode-in-react-native-application-2a04ba7e76d0
  // TODO: Να φτιαχτεί το κενό όσο περιμένει για username

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

    // backgroundColor: "#E5E7E9",
  },
  avatarContainer: {
    backgroundColor: "white",
    borderWidth: 6,
    borderColor: "#E5E7E9",
    position: "absolute",
    // paddingRight: 18 ,
    // padding: 5,
    //marginBottom: 30,
  },
  avatar: {
    width: "100%",
    height: "110%",
    // backgroundColor: "red",
    // tintColor: "#E5E7E9",
  },
  username: {
    paddingBottom: 30,

    // backgroundColor: "red",
  },
  content: {
    borderRadius: 15,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 20,
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
    marginLeft: 18,
    marginTop: 70,
    height: 114,
    width: 388,
    borderRadius: 15,
    position: "absolute",
  },
});

export default AccountScreen;
