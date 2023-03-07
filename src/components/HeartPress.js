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
    fontSize: 20,
    color: "red",
  },
  unliked: {
    fontSize: 20,
  },
  container: {
    marginRight: 22,
    marginTop: 12,
    alignSelf: "flex-start",
  },
});

export default HeartPress;
