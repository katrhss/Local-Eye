import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import { Button, Avatar, Icon } from "react-native-elements";
import AccountButton from "../components/AccountButton";
import DisplayUsername from "../components/DisplayUsername";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { MaterialIcons } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const AccountScreen = ({ navigation }) => {
  // TODO: Να γίνει καλύτερο Styling σε Avatar και Username.
  // TODO: Να μπούν κουμπιά Σχετικά/About us, Ρυθμίσεις με theme και αν γινεται Να με θυμάσαι, με τα αναλογα τους screens και πιο όμορφο log-out. Για το Theme
  // https://medium.com/simform-engineering/manage-dark-mode-in-react-native-application-2a04ba7e76d0

  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          size={120}
          rounded
          title="U"
          containerStyle={{ backgroundColor: "blue" }}
        />
        <View style={styles.username}>
          <DisplayUsername />
        </View>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Settings");
          }}
        >
          <View style={styles.settings}>
            <Icon name="settings" type="material" size={24} color={"white"} />
            <Text style={{ fontSize: 24, paddingBottom: 2, color: "white" }}>
              {" "}
              Settings
            </Text>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color="white"
              style={{ marginLeft: 245 }}
            />
          </View>
        </TouchableOpacity>
      </View>

      <AccountButton navigation={navigation} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    justifyContent: "flex-end",
  },
  avatar: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 15,
    marginTop: 15,
  },
  username: {
    flex: 1,
    marginLeft: 15,
    marginTop: 28,
  },
  buttons: {
    flex: 1,
  },
  settings: {
    flexDirection: "row",
    borderRadius: 4,
    borderWidth: 1,
    fontSize: 34,
    alignItems: "center",
    marginHorizontal: 14,
    paddingLeft: 10,
    backgroundColor: "blue",
    paddingVertical: 4,
  },
});

export default AccountScreen;
