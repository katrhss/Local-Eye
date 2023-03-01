import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import Header from "../shared/header";

const screens = {
  Home: {
    screen: HomeScreen,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  Account: {
    screen: AccountScreen,
    navigationOptions: {
      title: "Account",
      headerTitleAlign: "center",
    },
  },
};

const navigator = createStackNavigator(screens);

export default createAppContainer(navigator);
