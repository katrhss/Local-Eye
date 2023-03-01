import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Navigator from "./src/routes/Navigator";

// const screens = {
//   Home: {
//     screen: HomeScreen,
//   },
// };
// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//   },
//   {
//     initialRouteName: "Home",
//     defaultNavigationOptions: {
//       title: "Main Screen",
//     },
//   }
// );

export default function App() {
  return <Navigator />;
}
