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
    <View>
      <View>
        <View style={styles.account}>
          <Avatar
            size={80}
            rounded
            title="AB"
            containerStyle={styles.avatar}
            //  style={styles.avatar}
          />
          <View style={{ backgroundColor: "red" }}>
            <DisplayUsername />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  account: {
    alignItems: "center",
    margin: 30,

    backgroundColor: "#E5E7E9",
  },
  avatar: {
    backgroundColor: "purple",
    //marginBottom: 30,
  },
});

export default AccountScreen;
