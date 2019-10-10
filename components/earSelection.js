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
  }

  close = earPreference => {
    this.props.onValueChange(false, earPreference);
  };

  render() {
    return (
      <View>
        <Overlay isVisible={this.props.visible} height={200}>
          <Text>Select Ear</Text>
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Left" onPress={() => this.close("left")} />
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Right" onPress={() => this.close("right")} />
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
        </Overlay>
      </View>
    );
  }
}
