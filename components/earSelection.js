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

  close() {
    this.props.onValueChange(false);
  }

  render() {
    return (
      <View>
        <Overlay isVisible={this.props.visible}>
          <Text>Hello from Overlay!</Text>
          <Button title="close" onPress={() => this.close()} />
        </Overlay>
      </View>
    );
  }
}
