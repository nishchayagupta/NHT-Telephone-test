import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Divider,
  Input
} from "react-native-elements";
import SpaceView from "./spaceView";

const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth = Dimensions.get("window").width;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: ""
    };
  }

  appendState(num) {
    this.setState({ inputText: this.state.inputText + num });
  }

  backspace() {
    this.setState({ inputText: this.state.inputText.slice(0, -1) });
  }

  render() {
    return (
      <View id="MainView" style={styles.MainView}>
        <SpaceView />
        <Text style={{ textAlign: "center", fontSize: 40, height: 40 }}>
          {this.state.inputText}
        </Text>
        <SpaceView />
        <SpaceView />
        <SpaceView />
        <SpaceView />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 50,
            marginRight: 50
          }}
        >
          <Button
            title="1"
            onPress={() => {
              this.appendState(1);
            }}
          />
          <Button
            title="2"
            onPress={() => {
              this.appendState(2);
            }}
          />
          <Button
            title="3"
            onPress={() => {
              this.appendState(3);
            }}
          />
        </View>
        <SpaceView />
        <SpaceView />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 50,
            marginRight: 50
          }}
        >
          <Button
            title="4"
            onPress={() => {
              this.appendState(4);
            }}
          />
          <Button
            title="5"
            onPress={() => {
              this.appendState(5);
            }}
            raised
          />
          <Button
            title="6"
            onPress={() => {
              this.appendState(6);
            }}
          />
        </View>
        <SpaceView />
        <SpaceView />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginLeft: 50,
            marginRight: 50
          }}
        >
          <Button
            title="7"
            onPress={() => {
              this.appendState(7);
            }}
          />
          <Button
            title="8"
            onPress={() => {
              this.appendState(8);
            }}
          />
          <Button
            title="9"
            onPress={() => {
              this.appendState(9);
            }}
          />
        </View>
        <SpaceView />
        <SpaceView />
        <Button
          title="delete"
          onPress={() => {
            this.backspace();
          }}
          style={{ margin: 30 }}
        />
      </View>
    );
  }
}

const styles = {
  MainView: {
    height: DeviceHeight,
    width: DeviceWidth
  }
};
