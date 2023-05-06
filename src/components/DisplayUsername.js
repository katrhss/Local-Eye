import React, { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import trackerApi from "../api/tracker";
import { Context as AuthContext } from "../context/AuthContext";

const DisplayUsername = () => {
  const [username, setUsername] = useState("Guest");
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

  return state.token && username !== "Guest" ? (
    <View>
      <Text style={styles.username}>{username}</Text>
    </View>
  ) : (
    <View>
      <Text style={styles.username}>Επισκέπτης</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    paddingTop: 5,
    fontSize: 28,
    fontWeight: "500",
  },
});

export default DisplayUsername;
