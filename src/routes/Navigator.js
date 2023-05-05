import React from "react";
import { View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import AccountScreen from "../screens/AccountScreen";
import Header from "../shared/header";
import PlaceDetailsScreen from "../screens/PlaceDetailsScreen";
import CreatePlaceScreen from "../screens/CreatePlaceScreen";
import SignupScreen from "../screens/SignupScreen";
import SigninScreen from "../screens/SigninScreen";
import LoadingScreen from "../screens/LoadingScreen";
import SettingsScreen from "../screens/SettingsScreen";
import AboutScreen from "../screens/AboutScreen";
import WeatherScreen from "../screens/WeatherScreen";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

const navigator = createStackNavigator({
  Loading: LoadingScreen,
  loginFlow: {
    screen: createStackNavigator({
      Signup: SignupScreen,
      Signin: SigninScreen,
    }),
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
  mainFlow: {
    screen: createMaterialBottomTabNavigator({
      Home: {
        screen: HomeScreen,
        navigationOptions: {
          tabBarIcon: () => (
            <View>
              <Ionicons name="home" size={24} color="#008e9d" />
            </View>
          ),
          tabBarLabel: "Αρχική",
          tabBarOptions: {},
          activeColor: "#008e9d",
          inactiveColor: "black",

          barStyle: { backgroundColor: "white" },
          tabBarStyle: { justifycontent: "space-between" },
        },
      },
      Weather: {
        screen: WeatherScreen,
        navigationOptions: {
          tabBarIcon: () => (
            <View>
              <Ionicons name="partly-sunny" size={24} color="#008e9d" />
            </View>
          ),
          tabBarLabel: "Καιρός",
          activeColor: "#008e9d",
          inactiveColor: "black",
          barStyle: { backgroundColor: "white" },
        },
      },
    }),
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
        headerLeft: () => null,
        barStyle: { backgroundColor: "red" },
        tabStyle: { width: "auto" },
      };
    },
  },
  Account: AccountScreen,
  Create: CreatePlaceScreen,
  Details: {
    screen: PlaceDetailsScreen,
    navigationOptions: {
      headerTitle: "Λεπτομέρειες",
    },
  },
  Settings: SettingsScreen,
  About: AboutScreen,
});

// const navigator = createStackNavigator({
//   mainScreens: {
//     screen: createMaterialBottomTabNavigator({
//       Home: HomeScreen,
//       PlaceDetails: PlaceDetailsScreen,
//       CreatePlace: CreatePlaceScreen,
//       // TODO: Change PlaceDetails to Spotify and CreatePlace to Favorites
//     }),
//     navigationOptions: ({ navigation }) => {
//       return {
//         headerTitle: () => <Header navigation={navigation} />,
//       };
//     },
//   },

//   Account: AccountScreen,
//   Signup: SignupScreen,
//   Signin: {
//     screen: SigninScreen,
//     navigationOptions: ({ navigation }) => ({
//       headerLeft: () => (
//         <HeaderBackButton onPress={() => navigation.navigate("Account")} />
//       ),
//     }),
//   },
// });

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
