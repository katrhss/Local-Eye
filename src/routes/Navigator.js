import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
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

/*
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: Signup Screen,
    Signin: Signin Screen
  }),
  mainFlow
})

*/