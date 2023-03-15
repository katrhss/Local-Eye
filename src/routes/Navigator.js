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
import LoadingScreen from "../screens/LoadingScreen";

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
      Home: HomeScreen,
      Spotify: PlaceDetailsScreen,
      Favorites: CreatePlaceScreen,
    }),
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
        headerLeft: () => null,
      };
    },
  },
  Account: AccountScreen,
  Details: PlaceDetailsScreen,
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
