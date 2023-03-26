import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Octicons } from "@expo/vector-icons";

const HeartPress = () => {
  const [isPressed, setIsPressed] = useState(true);

  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  return (
    <View style={styles.container}>
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
    fontSize: 24,
    color: "red",
  },
  unliked: {
    fontSize: 24,
  },
  container: {
    marginRight: 10,
    marginTop: 12,
    alignSelf: "center",
  },
});

export default HeartPress;
