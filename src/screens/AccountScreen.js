import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = ({ navigation }) => {
  const { signout, isSignedIn } = useContext(AuthContext);
  console.log(isSignedIn);
  return (
    <>
      <Text>Account Screen</Text>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </>
  );
};
const styles = StyleSheet.create({});

export default AccountScreen;

/*

<Button
        title="Go to Signup"
        onPress={() => navigation.navigate("Signup")}
      />



    
      return ( token ? <>
        <Text>Account Screen</Text>
        <Spacer>
          <Button title="Sign Out" onPress={signout} />
        </Spacer>
      </> : <>
      <Text>Account Screen</Text>
      <Spacer>
      <Button
      title="Go to Signup"
      onPress={() => navigation.navigate("Signup")}
    />
      </Spacer>
    </>)
*/
