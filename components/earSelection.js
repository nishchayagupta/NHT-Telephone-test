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
        <Overlay isVisible={this.props.visible} height={100}>
          <Text>Select Ear</Text>
          <Button title="Left" onPress={() => this.close("left")} />
          <Button title="Right" onPress={() => this.close("right")} />
        </Overlay>
      </View>
    );
  }
}
