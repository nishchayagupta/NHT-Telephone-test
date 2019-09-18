import React from "react";
import { StyleSheet, Text, View } from "react-native";
import PlayerCard from "./components/audioplayerCard";
import { Header } from "react-native-elements";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header
          centerComponent={{ text: "Audiology IU", style: { color: "#fff" } }}
        />
        <PlayerCard />
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
