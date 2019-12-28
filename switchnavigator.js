import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Entryscreen from "./components/entryscreen";
import Homescreen from "./components/homeScreen";

const RootStack = createSwitchNavigator(
  {
    Home: Entryscreen,
    Audioplayer: Homescreen
  },
  {
    initialRouteName: "Home"
  }
);

export const AppContainer = createAppContainer(RootStack);
