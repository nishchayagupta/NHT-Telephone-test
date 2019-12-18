import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Input, Card } from "react-native-elements";
import SpaceView from "./spaceView";

const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth = Dimensions.get("window").width;

export default class Initialscreen extends React.Component {
  constructor(props) {
    super(props);
    state = {
      value: ""
    };
  }

  spaceView = (num, val) => {
    returnDiv = [];
    for (let i = 0; i < num; i++) {
      keyValue = `${val}` + `${i}`;
      returnDiv.push(<SpaceView key={keyValue} />);
    }
    return (
      <View>
        {returnDiv}
      </View>
    );
  };

  render() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          height: DeviceHeight,
          width: DeviceWidth
        }}
      >
        {this.spaceView(3, "first")}
        <Card>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              paddingRight: 10
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {" "}Client ID{" "}
            </Text>
            <Input />
          </View>
        </Card>

        {this.spaceView(1, "first")}
        <Card>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 10,
              paddingRight: 10
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold" }}> Test ID </Text>
            <Input />
          </View>
        </Card>
      </View>
    );
  }
}
