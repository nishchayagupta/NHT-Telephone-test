import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView
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

export default class EarSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: props.visible
    };
  }

  close() {
    console.log("in close method");
    this.setState({ isVisible: false });
  }

  render() {
    console.log("selection state" + this.state.isVisible);
    return (
      <View>
        <Overlay isVisible={this.state.isVisible}>
          <Text>Hello from Overlay!</Text>
          <Button title="close" onPress={() => this.close()} />
        </Overlay>
      </View>
    );
  }
}
