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
    this.returnButton = this.returnButton.bind(this);
  }

  appendState = num => {
    this.setState({ inputText: this.state.inputText + num });
  };

  backspace = () => {
    this.setState({ inputText: this.state.inputText.slice(0, -1) });
  };

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

  returnButton = num => {
    return (
      <Button
        title={num}
        onPress={() => {
          this.appendState(num);
        }}
        style={styles.ButtonStyle}
      />
    );
  };

  render() {
    return (
      <View id="MainView" style={styles.MainView}>
        {this.spaceView(4, "main")}
        <Text style={{ textAlign: "center", fontSize: 40, height: 40 }}>
          {this.state.inputText}
        </Text>
        {this.spaceView(3, "numpad")}
        <View style={styles.ButtonViewStyle}>
          {this.returnButton("1")}
          {this.returnButton("2")}
          {this.returnButton("3")}
        </View>
        {this.spaceView(2, "numpad1")}
        <View style={styles.ButtonViewStyle}>
          {this.returnButton("4")}
          {this.returnButton("5")}
          {this.returnButton("6")}
        </View>
        {this.spaceView(2, "numpad2")}
        <View style={styles.ButtonViewStyle}>
          {this.returnButton("7")}
          {this.returnButton("8")}
          {this.returnButton("9")}
        </View>
        {this.spaceView(2, "numpad3")}
        <Button
          title="Play Audio"
          onPress={() => {
            this.backspace();
          }}
          style={{ margin: 30 }}
        />
        <SpaceView />
        <Button
          title="delete"
          onPress={() => {
            this.backspace();
          }}
          style={{ margin: 30 }}
        />
        <SpaceView />
        <Button
          title="Verify"
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
  },
  ButtonStyle: {
    height: 50,
    width: 50,
    borderRadius: 20,
    overflow: "hidden"
  },
  ButtonViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 50,
    marginRight: 50,
    height: 60
  }
};
