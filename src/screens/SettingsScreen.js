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
        <MaterialIcons name="restore" size={28} color="black" />
        <Text style={styles.setting}>{"   "}Να με θυμάσαι</Text>
        <Switch
          value={checked}
          onValueChange={(value) => {
            setChecked(value);
            RememberMe(value);
          }}
          style={{ paddingLeft: 200 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: "row",
    alignItems: "center",
    //  justifyContent: "space-between",
    paddingHorizontal: 10,
    marginHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 0,
    borderRadius: 14,
    backgroundColor: "#CCD1D1",
  },
  setting: {
    fontSize: 16,
    fontWeight: "500",
  },
  category: {
    marginHorizontal: 12,
    marginVertical: 6,
    fontSize: 19,
    fontWeight: "bold",
  },
});

export default withNavigation(SettingsScreen);
