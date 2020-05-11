import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/homeScreen";
import InitialScreen from "./components/entryscreen";
import ThankYou from './components/thankYou';
import { createSwitchNavigator, createAppContainer } from "react-navigation";

// TODO: overflow scroll to be added

export const MyNavigator = createSwitchNavigator({
  InitialScreen: InitialScreen,
  HomeScreen: HomeScreen,
  ThankYou: ThankYou
});
export const AppContainer = createAppContainer(MyNavigator);
