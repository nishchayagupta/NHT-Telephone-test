import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayerCard from "./components/audioplayerCard";
import HomeScreen from "./components/homeScreen";
import { Header } from "react-native-elements";
import InitialScreen from "./components/entryscreen";

// TODO: overflow scroll to be added
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
        {/* <PlayerCard fileValue="../916_1.wav" /> */}
        <InitialScreen />
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
