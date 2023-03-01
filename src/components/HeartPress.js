import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

const HeartPress = () => {
  const [isPressed, setIsPressed] = useState(true);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={{ alignSelf: "center" }}>
      <TouchableOpacity onPress={handlePress}>
        {isPressed ? (
          <Octicons name="heart" style={styles.unliked} />
        ) : (
          <Octicons name="heart-fill" style={styles.liked} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  liked: {
    alignSelf: "center",
    fontSize: 20,
    marginRight: 15,
    color: "red",
  },
  unliked: {
    alignSelf: "center",
    fontSize: 20,
    marginRight: 15,
  },
});

export default HeartPress;
