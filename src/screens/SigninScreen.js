import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";
import { PageScrollView } from "pagescrollview";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <PageScrollView>
      <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sign in"
        />
        <NavLink
          text="Don't have an account? Sign up instead."
          routeName="Signup"
          guestText="Don't want to sign in? Continue as a Guest."
          guestRoute="Home"
        />
      </View>
    </PageScrollView>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;
