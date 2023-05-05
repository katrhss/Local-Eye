import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Switch } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { MaterialIcons } from "@expo/vector-icons";

const SettingsScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const [checked, setChecked] = useState(null);

  useEffect(() => {
    const loadButtonState = async () => {
      try {
        const rememberme = await AsyncStorage.getItem("rememberme");
        if (rememberme !== null) {
          const savedState = JSON.parse(rememberme);
          setChecked(savedState);
        }
      } catch (err) {}
    };
    loadButtonState();
  }, []);

  const RememberMe = async (value) => {
    console.log(value);
    if (value) {
      await AsyncStorage.setItem("token", state.token);
      await AsyncStorage.setItem("rememberme", JSON.stringify(value));
      setChecked(value);
    } else {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.setItem("rememberme", JSON.stringify(null));
      setChecked(value);
    }
  };

  return (
    <View>
      <Text style={styles.category}>Γενικα</Text>
      <View style={styles.line}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <MaterialIcons name="restore" size={28} color="#008e9d" />
          <Text style={styles.setting}>{"   "}Να με θυμάσαι</Text>
        </View>
        <Switch
          trackColor={{ true: "#008e9d", false: "grey" }}
          thumbColor="#008e9d"
          value={checked}
          onValueChange={(value) => {
            setChecked(value);
            RememberMe(value);
          }}
        />
      </View>
    </View>
  );
};

SettingsScreen.navigationOptions = {
  headerTitle: "Ρυθμίσεις",
};

const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    justifyContent: "space-between",

    // alignItems: "center",
    paddingHorizontal: 10,
    marginHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 0,
    borderRadius: 14,
    backgroundColor: "white",
  },
  setting: {
    fontSize: 16,
  },
  category: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: 19,
    fontWeight: "bold",
    color: "#008e9d",
  },
});

export default withNavigation(SettingsScreen);
