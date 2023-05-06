import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { PageScrollView } from "pagescrollview";

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  return (
    <PageScrollView>
      <View style={styles.container}>
        <NavigationEvents onWillFocus={clearErrorMessage} />
        <AuthForm
          headerText="Δημιουργία Λογαριασμού"
          errorMessage={state.errorMessage}
          submitButtonText="Δημιουργία"
          onSubmit={signup}
          signup
        />

        <NavLink
          routeName="Signin"
          text="Έχετε ήδη λογαριασμό? Συνδεθείτε εδώ!"
          guestText="Δεν θέλετε να συνδεθείτε? Συνεχίστε ως Επισκέπτης."
          guestRoute="Home"
        />
      </View>
    </PageScrollView>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});

export default SignupScreen;
