import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./components/homeScreen";
import { Header } from "react-native-elements";
import InitialScreen from "./components/entryscreen";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

// TODO: overflow scroll to be added

const MyNavigator = createSwitchNavigator({
  InitialScreen: InitialScreen,
  HomeScreen: HomeScreen
});
const AppContainer = createAppContainer(MyNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{
            text: "NHT Application",
            style: { color: "#fff" }
          }}
        />
        <AppContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff"
  }
});
