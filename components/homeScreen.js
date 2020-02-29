import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
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
import SpaceView from "./spaceView";
import { Audio } from "expo-av";
import * as Constants from "./constants";
import EarSelect from "./earSelection";
import Toast, { DURATION } from "react-native-easy-toast";
import * as AudioFiles from "./audioSelector";
import EntryScreen from "./entryscreen";
import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";

const DeviceHeight = Dimensions.get("window").height;
const DeviceWidth = Dimensions.get("window").width;
var fileWriter = [];
export default class HomeScreen extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      left: [],
      right: [],
      currentTrack: "",
      currentLevel: 2,
      inputValue: "",
      leftCounter: 0,
      rightCounter: 0,
      leftCorrectResponses: 0,
      rightCorrectResponses: 0,
      currentEar: "",
      soundFlag: 0,
      leftStatus: false,
      rightStatus: false,
      testContinue: false,
      fileWrite: []
    };
    this.returnButton = this.returnButton.bind(this);
  }

  displaySelectEarButton() {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <SpaceView />
        <Text style={{ fontSize: 20 }}>
          Testing {this.state.currentEar} ear currently and track no is{" "}
          {this.state.currentTrack}_{this.state.currentLevel}
        </Text>
      </View>
    );
  }

  handleOverlay = earPreference => {
    if (earPreference == "left") {
      var array = [...this.state.left]; // make a separate copy of the array
      const currentVal = array[0];
      const newArray = array.slice(1, 0).concat(array.slice(1, array.length));
      currentTrackString =
        this.state.currentTrack + "_" + this.state.currentLevel;
      this.setState({ left: newArray });
      this.setState({ currentTrack: currentVal });
    } else if (earPreference == "right") {
      var array = [...this.state.right]; // make a separate copy of the array
      const currentVal = array[0];
      const newArray = array.slice(1, 0).concat(array.slice(1, array.length));
      currentTrackString =
        this.state.currentTrack + "_" + this.state.currentLevel;
      this.setState({ right: newArray });
      this.setState({ currentTrack: currentVal });
    }
    let str = "First ear selection is " + earPreference;
    fileWriter.push(str);
    this.setState({ currentEar: earPreference });
  };

  leftTrackChange() {
    if (this.state.currentEar == "left") {
      if (this.state.leftCorrectResponses == 0 && this.state.leftCounter > 5) {
        if (this.state.rightStatus == false) {
          var array = [...this.state.right]; // make a separate copy of the array
          const currentVal = array[0];
          const newArray = array
            .slice(1, 0)
            .concat(array.slice(1, array.length));
          this.setState({ currentTrack: currentVal });
          this.setState({ right: newArray });
          this.setState({ currentEar: "right" });
        } else {
          this.setState({ currentTrack: 0 });
          this.setState({ currentEar: "" });
        }
        this.setState({ leftStatus: true });
      } else if (
        this.state.leftCorrectResponses >= 0 &&
        this.state.leftCounter < 30
      ) {
        var array = [...this.state.left];
        const currentVal = array[0];
        const newArray = array.slice(1, 0).concat(array.slice(1, array.length));
        this.setState({ currentTrack: currentVal });
        this.setState({ left: newArray });
      } else {
        if (this.state.rightStatus == false) {
          var array = [...this.state.right]; // make a separate copy of the array
          const currentVal = array[0];
          const newArray = array
            .slice(1, 0)
            .concat(array.slice(1, array.length));
          this.setState({ currentTrack: currentVal });
          this.setState({ right: newArray });
          this.setState({ currentEar: "right" });
        } else {
          this.setState({ currentTrack: 0 });
          this.setState({ currentEar: "" });
        }
        this.setState({ leftStatus: true });
      }
    }
  }

  rightTrackChange() {
    if (this.state.currentEar == "right") {
      if (
        this.state.rightCorrectResponses == 0 &&
        this.state.rightCounter > 5
      ) {
        if (this.state.leftStatus == false) {
          var array = [...this.state.left]; // make a separate copy of the array
          const currentVal = array[0];
          const newArray = array
            .slice(1, 0)
            .concat(array.slice(1, array.length));
          this.setState({ currentTrack: currentVal });
          this.setState({ left: newArray });
          this.setState({ currentEar: "left" });
        } else {
          this.setState({ currentTrack: 0 });
          this.setState({ currentEar: "" });
        }
        this.setState({ rightStatus: true });
      } else if (
        this.state.rightCorrectResponses >= 0 &&
        this.state.rightCounter < 30
      ) {
        var array = [...this.state.right];
        const currentVal = array[0];
        const newArray = array.slice(1, 0).concat(array.slice(1, array.length));
        this.setState({ currentTrack: currentVal });
        this.setState({ right: newArray });
      } else {
        if (this.state.leftStatus == false) {
          var array = [...this.state.left]; // make a separate copy of the array
          const currentVal = array[0];
          const newArray = array
            .slice(1, 0)
            .concat(array.slice(1, array.length));
          this.setState({ currentTrack: currentVal });
          this.setState({ left: newArray });
          this.setState({ currentEar: "left" });
        } else {
          this.setState({ currentTrack: 0 });
          this.setState({ currentEar: "" });
        }
        this.setState({ rightStatus: true });
      }
    }
  }

  async trackChange() {
    console.log(
      "Left counter is " +
        this.state.leftCounter +
        " and left status is " +
        this.state.leftStatus
    );
    console.log(
      "right counter is " +
        this.state.rightCounter +
        " and right status is " +
        this.state.rightStatus
    );
    if (this.state.rightStatus == true && this.state.leftStatus == true) {
      console.log("test complete");
      return;
    }
    if (this.state.currentEar == "left" && this.state.leftStatus == false) {
      await this.leftTrackChange();
    } else if (
      this.state.currentEar == "right" &&
      this.state.rightStatus == false
    ) {
      await this.rightTrackChange();
    }
  }

  async playAudio() {
    currentTrackString =
      this.state.currentTrack + "_" + this.state.currentLevel;
    if (
      this.state.currentEar == "right" &&
      this.state.rightCounter == 0 &&
      this.state.leftStatus == true &&
      this.state.testContinue == false
    ) {
      this.setState({ testContinue: true });
      return;
    }
    if (
      this.state.currentEar == "left" &&
      this.state.leftCounter == 0 &&
      this.state.rightStatus == true &&
      this.state.testContinue == false
    ) {
      this.setState({ testContinue: true });
      return;
    }
    await this.playSound(currentTrackString);
  }
  // This method will select 20 files randomly for each ear and add it to the state variables left and right
  componentWillMount() {
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

  async componentDidMount() {
    console.log("right array" + this.state.right);
    console.log("left array" + this.state.left);
    await this.handleOverlay(this.props.navigation.state.params.selectedEar);
  }

  // Play audio file
  async playSound(audioTrack) {
    var filePath = this.state.value;
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(AudioFiles.audioSelector(audioTrack));
      setTimeout(() => {
        soundObject.playAsync();
        console.log("play the sound");
      }, 2500);

      this.setState({ soundFlag: 1 });
      if (this.state.currentEar == "left") {
        var leftCount = this.state.leftCounter + 1;
        this.setState({ leftCounter: leftCount });
      } else if (this.state.currentEar == "right") {
        var rightCount = this.state.rightCounter + 1;
        console.log("new right count is " + rightCount);
        this.setState({ rightCounter: rightCount });
      }

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
      <TouchableOpacity
        onPress={() => {
          this.appendState(num);
        }}
        style={styles.ButtonStyle}
      >
        <Text style={{ fontSize: 40, fontWeight: "bold" }}>
          {num}
        </Text>
      </TouchableOpacity>
    );
  };

  clear = () => {
    this.setState({ inputText: "" });
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

  async correctResponseChanger() {
    if (this.state.currentEar == "left") {
      await this.setState({
        leftCorrectResponses: this.state.leftCorrectResponses + 1
      });
    } else if (this.state.currentEar == "right") {
      await this.setState({
        rightCorrectResponses: this.state.rightCorrectResponses + 1
      });
    }
  }

  async verifyRegister() {
    if (this.state.inputText == this.state.currentTrack) {
      console.log("match");
      if (this.state.currentLevel < 11) {
        var currentLevel = this.state.currentLevel + 1;
      } else {
        var currentLevel = this.state.currentLevel;
      }
      this.setState({ soundFlag: 0 });
      await this.correctResponseChanger();
      this.setState({ currentLevel: currentLevel });
      this.setState({ inputText: "" });
      await this.trackChange();
      await this.playAudio();
    } else {
      console.log(
        this.state.inputText,
        "doesn't match",
        this.state.currentTrack
      );

      if (this.state.currentLevel > 1) {
        var currentLevel = this.state.currentLevel - 1;
        await this.trackChange();
        await this.playAudio();
      } else {
        var currentLevel = this.state.currentLevel;
        await this.trackChange();
        await this.playAudio();
      }
      this.setState({ currentLevel: currentLevel });
      this.setState({ inputText: "" });
    }
  }

  renderAudioButton() {
    if (this.state.leftCounter == 30 || this.state.rightCounter == 30) {
      console.log(
        "selected ear is " +
          this.state.currentEar +
          " and leftCounter is " +
          this.state.leftCounter +
          " and right counter is " +
          this.state.rightCounter
      );
    }
    if (
      (this.state.currentEar == "left" && this.state.leftCounter == 0) ||
      (this.state.currentEar == "right" && this.state.rightCounter == 0)
    ) {
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.playAudio();
            }}
            style={{ margin: 20 }}
          >
            <Icon
              name="play-circle-outline"
              type="material"
              color="black"
              size={100}
            />
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.verifyRegister();
            }}
            style={{ margin: 20 }}
          >
            <Icon name="done" type="material" color="black" size={100} />
          </TouchableOpacity>
        </View>
      );
    }
  }

  saveFile = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status === "granted") {
      let fileUri = FileSystem.documentDirectory + "text.txt";
      await FileSystem.writeAsStringAsync(
        fileUri,
        "Hello World\n Hello guard",
        {
          encoding: FileSystem.EncodingType.UTF8
        }
      );
      const asset = await MediaLibrary.createAssetAsync(fileUri);
      await MediaLibrary.createAlbumAsync("Download", asset, false);
    }
  };

  render() {
    if (this.state.leftStatus == true && this.state.rightStatus == true) {
      this.saveFile();
      return <EntryScreen />;
    } else {
      return (
        <View id="MainView" style={styles.MainView}>
          {this.displaySelectEarButton()}
          {/* <Text>
          {this.props.navigation.state.params.selectedEar}
        </Text> */}
          {this.spaceView(2, "main")}
          <Toast ref="error" position="top" />
          <Text
            style={{
              textAlign: "center",
              fontSize: 40,
              height: 60
            }}
          >
            {this.state.inputText}
          </Text>
          {this.spaceView(5, "numpad")}
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
            <TouchableOpacity
              onPress={() => {
                this.clear();
              }}
            >
              <Icon name="clear" color="black" size={50} />
            </TouchableOpacity>
            {this.returnButton("0")}
            <TouchableOpacity
              onPress={() => {
                this.backspace();
              }}
            >
              <Icon name="backspace" color="black" size={50} />
            </TouchableOpacity>
          </View>
          {this.spaceView(2, "numpad3")}
          {this.renderAudioButton()}
        </View>
      );
    }
  }
}

const styles = {
  MainView: {
    height: DeviceHeight,
    width: DeviceWidth
  },
  ButtonStyle: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    height: 80,
    width: 80,
    borderRadius: 40
  },
  ButtonViewStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 40,
    marginRight: 40,
    height: 70
  },
  selectEar: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    alignContent: "center",
    justifyContent: "center",
    height: 60,
    width: 60,
    borderRadius: 30
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: "white"
  }
};
