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
          headerText="Συνδεθείτε στον λογαριασμό σας"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Σύνδεση"
        />
        <NavLink
          text="Δεν έχετε λογαριασμό? Φτιάξτε έναν εδώ!"
          routeName="Signup"
          guestText="Δεν θέλετε να συνδεθείτε? Συνεχίστε ως Επισκέπτης."
          // guestText="Don't want to sign in? Continue as a Guest."
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
