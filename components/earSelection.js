import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Divider,
  Input
} from "react-native-elements";
import { Overlay } from "react-native-elements";

const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth = Dimensions.get("window").width;

export default class EarSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  close = earPreference => {
    this.props.onValueChange(false, earPreference);
  };

  render() {
    return (
      <View>
        <Overlay
          isVisible={this.props.visible}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
          height={DeviceHeight / 4}
          overlayBackgroundColor="#FFFFFF"
        >
          <Icon name="headset" type="material" color="black" size={100} />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                height: 50,
                width: DeviceWidth / 3,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#C5CAE9",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                margin: 10
              }}
              onPress={() => {
                this.close("left");
              }}
            >
              <Text style={{ fontSize: 20 }}>Left</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                height: 50,
                width: DeviceWidth / 3,
                display: "flex",
                flexDirection: "row",
                backgroundColor: "#C5CAE9",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 5,
                margin: 10
              }}
              onPress={() => {
                this.close("right");
              }}
            >
              <Text style={{ fontSize: 20 }}>Right</Text>
            </TouchableOpacity>
          </View>
        </Overlay>
      </View>
    );
  }
}
