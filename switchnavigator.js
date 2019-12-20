import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Entryscreen from "./components/entryscreen";
import Homescreen from "./components/homeScreen";
export default createAppContainer(
  createSwitchNavigator(
    {
      Switch1: Entryscreen,
      Switch2: Homescreen
    },
    {
      initialRouteName: "Switch1"
    }
  )
);
