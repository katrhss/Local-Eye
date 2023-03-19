import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import trackerApi from "../api/tracker";
import { Context as AuthContext } from "../context/AuthContext";
// TODO: Βαλε το withNavigation για να πάρεις το username και να μπορέσεις να βάλεις το πρώτο γράμμα στο Avatar

const DisplayUsername = () => {
  const [username, setUsername] = useState("");
  const { state } = useContext(AuthContext);
  useEffect(() => {
    trackerApi
      .get("/users", {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      })
      .then((res) => setUsername(res.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <View>
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 28,
    fontWeight: "bold",
  },
});

export default DisplayUsername;
