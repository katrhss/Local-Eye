import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import AccountButton from "../components/AccountButton";
import DisplayUsername from "../components/DisplayUsername";

const AccountScreen = ({ navigation }) => {
  // TODO: Να γίνει καλύτερο Styling σε Avatar και Username.
  return (
    <>
      <View style={styles.container}>
        <View style={styles.avatar}>
          <Avatar
            size={120}
            rounded
            title="U"
            containerStyle={{ backgroundColor: "blue" }}
          />
        </View>
        <View style={styles.username}>
          <DisplayUsername />
        </View>
        // TODO: Να μπούν κουμπιά Σχετικά/About us, Ρυθμίσεις με theme και
        ανγινεται Να με θυμάσαι, με τα αναλογα τους screens και πιο όμορφο
        log-out. // Για το Theme
        https://medium.com/simform-engineering/manage-dark-mode-in-react-native-application-2a04ba7e76d0
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
  container: {
    flex: 1,
    flexDirection: "row",
  },
  username: {
    marginLeft: 5,
    marginTop: 10,
  },
});

export default AccountScreen;
