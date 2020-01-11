import React, { Component } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { Input, Card, Button } from "react-native-elements";
import SpaceView from "./spaceView";
import { NHTContainer } from "./switchnavigator";

const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth = Dimensions.get("window").width;

export default class Initialscreen extends Component<Props> {
  constructor(props) {
    super(props);
    state = {
      clientID: "",
      testID: ""
    };
    this.handleClientIDChange = this.handleClientIDChange.bind(this);
    this.handleTestIDCHange = this.handleTestIDCHange.bind(this);
  }

  handleClientIDChange(event) {
    this.setState({ clientID: event.nativeEvent.text });
  }

  handleTestIDCHange(event) {
    this.setState({ testID: event.nativeEvent.text });
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
    console.log(NHTContainer);
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
            <Input onChange={this.handleClientIDChange} />
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
            <Input onChange={this.handleTestIDCHange} />
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
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              {" "}Select Ear{" "}
            </Text>
            {this.spaceView(2, "first")}
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <View style={{ padding: 30 }}>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 100,
                    backgroundColor: "#DDDDDD",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ alignSelf: "center" }}>Left Ear</Text>
                </TouchableOpacity>
              </View>
              <View style={{ padding: 30 }}>
                <TouchableOpacity
                  style={{
                    height: 40,
                    width: 100,
                    backgroundColor: "#DDDDDD",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text style={{ alignSelf: "center" }}>Right Ear</Text>
                </TouchableOpacity>
              </View>
            </View>
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
            <TouchableOpacity style={styles.ButtonViewStyle}>
              <Text> Go to Home Screen</Text>
            </TouchableOpacity>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = {
  ButtonViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    marginRight: 40,
    height: 70
  }
};
