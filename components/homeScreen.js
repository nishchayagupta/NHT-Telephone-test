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
import { Audio } from "expo-av";
import * as Constants from "./constants";
const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth = Dimensions.get("window").width;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      left: [],
      right: []
    };
    this.returnButton = this.returnButton.bind(this);
  }

  // This method will select 20 files randomly for each ear and add it to the state variables left and right
  componentDidMount() {
    Leftvisited = [];
    //randomly selecting 30 files for the left ear
    while (Leftvisited.length < 30) {
      randNumber = Math.floor(Math.random() * 64);
      if (Leftvisited.includes(Constants.audioFiles[randNumber])) {
        continue;
      } else {
        Leftvisited.push(Constants.audioFiles[randNumber]);
      }
    }
    //setting state variable left according to the audio files selected
    this.setState({ left: Leftvisited });

    RightVisited = [];
    //randomly selecting 30 files for the right ear which haven't been used for the left ear
    while (RightVisited.length < 30) {
      randNumber = Math.floor(Math.random() * 64);
      if (
        Leftvisited.includes(Constants.audioFiles[randNumber]) ||
        RightVisited.includes(Constants.audioFiles[randNumber])
      ) {
        continue;
      } else {
        RightVisited.push(Constants.audioFiles[randNumber]);
      }
    }
    // setting state variable right according to the 30 files selected
    this.setState({ right: RightVisited });
  }

  // Play audio file
  async playSound_1() {
    var filePath = this.state.value;
    const soundObject = new Audio.Sound();
    try {
      console.log("in the playsound method");
      await soundObject.loadAsync(require("../916_1.wav"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log("error playing sound due to ", error);
    }
  }

  // This method would append the text value entered by the user into the top text show area
  appendState = num => {
    this.setState({ inputText: this.state.inputText + num });
  };

  //This method would remove the last character from the string entered in the top text area
  backspace = () => {
    this.setState({ inputText: this.state.inputText.slice(0, -1) });
  };

  // This function would return blank views in order to maintain spacing between components in the final render function.
  // The function intakes the num argument as the num of space views and val argument in order to assign a unique key to
  // each view which is an important aspect for react components
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

  // This function returns a button component according to the num argument passed to it. This button would be titled
  // same as the argument passed and would also work as a button (i.e. append the value clicked to the top text section)
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

  // This function would reset all the states and take the test to its initial state
  reset() {
    this.setState({ currentEar: "" });
    this.setState({ overlayActivate: false });
    this.setState({ inputValue: "" });
    this.setState({ currentTrack: "" });
    this.setState({ currentLevel: 2 });
    this.setState({ counter: 0 });
    this.setState({ correctResponses: 0 });
    this.componentDidMount();
  }

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
        <View style={styles.ButtonViewStyle}>
          {this.returnButton(" ")}
          {this.returnButton("0")}
          {this.returnButton("Back")}
        </View>
        {this.spaceView(2, "numpad3")}
        <Button
          title="Play Audio"
          onPress={() => {
            this.playSound_1();
          }}
          style={{ margin: 30 }}
          raised
        />
        <SpaceView />
        <Button
          title="delete"
          onPress={() => {
            this.backspace();
          }}
          style={{ margin: 30 }}
          raised
        />
        <SpaceView />
        <Button
          title="Verify"
          onPress={() => {
            this.backspace();
          }}
          style={{ margin: 30 }}
          raised
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
