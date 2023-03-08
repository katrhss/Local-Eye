import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator, HeaderBackButton } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import Header from "../shared/header";
import PlaceDetailsScreen from "../screens/PlaceDetailsScreen";
import CreatePlaceScreen from "../screens/CreatePlaceScreen";
import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/SigninScreen";

/*
const navigator = createStackNavigator({
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
});
*/

const navigator = createStackNavigator({
  mainScreens: {
    screen: createMaterialBottomTabNavigator({
      Home: HomeScreen,
      PlaceDetails: PlaceDetailsScreen,
      CreatePlace: CreatePlaceScreen,
      // TODO: Change PlaceDetails to Spotify and CreatePlace to Favorites
    }),
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },

  Account: AccountScreen,
  Signup: SignupScreen,
  Signin: {
    screen: SigninScreen,
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => (
        <HeaderBackButton onPress={() => navigation.navigate("Account")} />
      ),
    }),
  },
});

export default createAppContainer(navigator);

/*
{
        screen: HomeScreen,
        navigationOptions: ({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} />
          }
        },
      },





const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Signup: SignupScreen,
    Signin: SigninScreen
  }),
  mainFlow: createMaterialBottomTabNavigator({
    placeListFlow: createStackNavigator({
      Home: HomeScreen,
      PlaceDetails: PlaceDetailsScreen
    })
    CreatePlace: CreatePlaceScreen
    Account: AccountScreen
  })
})

*/
