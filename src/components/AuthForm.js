import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

const AuthForm = ({
  headerText,
  errorMessage,
  onSubmit,
  submitButtonText,
  signup,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  return (
    <>
      <Spacer>
        <Text style={styles.headerText}>{headerText}</Text>
      </Spacer>
      {signup ? (
        <Input
          label="Ψευδώνυμο"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          autoCorrect={false}
        />
      ) : null}
      <Spacer />

      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Κωδικός"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />

      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password, username })}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
  },
});

export default AuthForm;
