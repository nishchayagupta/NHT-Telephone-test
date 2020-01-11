import { createStackNavigator } from "react-navigation-stack";
import Initialscreen from "./entryscreen";
import HomeScreen from "./homeScreen";

export const NHTContainer = createStackNavigator({
  Home: {
    screen: Initialscreen
  },
  AudioScreen: {
    screen: HomeScreen
  }
});
