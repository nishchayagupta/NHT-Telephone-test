import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayerCard from "./components/audioplayerCard";
import HomeScreen from "./components/homeScreen";
import { Header } from "react-native-elements";

// TODO: overflow scroll to be added
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: "Audiology IU", style: { color: "#fff" } }}
        />
        {/* <PlayerCard fileValue="../916_1.wav" /> */}
        <HomeScreen />
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
