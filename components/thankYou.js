import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SpaceView from "./spaceView";

const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth = Dimensions.get("window").width;

export default class ThankYou extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  render() {
    return (
      <View style={styles.mainView}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          Thank You for helping us
        </Text>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>
          develop the NHT App!
        </Text>
        <SpaceView />
        <SpaceView />
        <SpaceView />
        <Text style={{ fontSize: 20 }}>
          Testing for both ears is now complete
        </Text>
      </View>
    );
  }
}

const styles = {
  mainView: {
    height: DeviceHeight / 1.2,
    width: DeviceWidth,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center"
  }
};
