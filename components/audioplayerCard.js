import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";
import {
  Card,
  ListItem,
  Button,
  Icon,
  Divider,
  Input
} from "react-native-elements";
import { Audio } from "expo-av";
import EarSelect from "./earSelection";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const audioFiles = [
  128,
  152,
  154,
  161,
  181,
  182,
  185,
  193,
  194,
  199,
  213,
  216,
  281,
  233,
  243,
  254,
  256,
  261,
  294,
  295,
  296,
  313,
  318,
  321,
  322,
  324,
  342,
  343,
  345,
  346,
  353,
  362,
  383,
  384,
  393,
  398,
  436,
  439,
  441,
  452,
  453,
  454,
  464,
  483,
  534,
  556,
  568,
  593,
  599,
  639,
  649,
  658,
  823,
  825,
  828,
  833,
  854,
  856,
  862,
  891,
  916,
  929,
  942,
  989
];

//TODO: Add dynamic change of Audio files using assets
export default class AudioplayerCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: [],
      right: [],
      currentEar: "",
      overlayActivate: false,
      currentTrack: "",
      currentLevel: 2,
      textValue: "",
      counter: 0,
      correctResponses: 0
    };

    this.handleTextInput = this.handleTextInput.bind(this);
  }
  componentDidMount() {
    Leftvisited = [];
    while (Leftvisited.length < 30) {
      randNumber = Math.floor(Math.random() * 64);
      if (Leftvisited.includes(audioFiles[randNumber])) {
        continue;
      } else {
        Leftvisited.push(audioFiles[randNumber]);
      }
    }
    this.setState({ left: Leftvisited });

    RightVisited = [];
    while (RightVisited.length < 30) {
      randNumber = Math.floor(Math.random() * 64);
      if (
        Leftvisited.includes(audioFiles[randNumber]) ||
        RightVisited.includes(audioFiles[randNumber])
      ) {
        continue;
      } else {
        RightVisited.push(audioFiles[randNumber]);
      }
    }
    this.setState({ right: RightVisited });
  }

  reset() {
    this.setState({ currentEar: "" });
    this.setState({ overlayActivate: false });
    this.setState({ textValue: "" });
    this.setState({ currentTrack: "" });
    this.setState({ currentLevel: 1 });
    this.setState({ counter: 0 });
    this.setState({ correctResponses: 0 });
  }

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

  playAudio() {
    if (
      this.state.currentEar === "right" &&
      this.state.currentEar.length !== 0
    ) {
      var array = [...this.state.right]; // make a separate copy of the array
      const currentVal = array[0];
      const newArray = array.slice(1, 0).concat(array.slice(1, array.length));
      this.setState({ counter: this.state.counter + 1 });
      if (newArray.length === 0) {
        this.setState({ currentEar: "left" });
        this.setState({ counter: 0 });
      }
      this.setState({ currentTrack: currentVal });
      this.setState({ right: newArray });
    } else if (
      this.state.currentEar === "left" &&
      this.state.currentEar.length !== 0
    ) {
      var array = [...this.state.left]; // make a separate copy of the array
      const currentVal = array[0];
      const newArray = array.slice(1, 0).concat(array.slice(1, array.length));
      this.setState({ counter: this.state.counter + 1 });
      if (newArray.length === 0) {
        this.setState({ currentEar: "right" });
        this.setState({ counter: 0 });
      }
      this.setState({ currentTrack: currentVal });
      this.setState({ left: newArray });
    } else {
      console.log("please select an ear");
    }
  }

  handleOverlay = (OverlayValue, earPreference) => {
    this.setState({ overlayActivate: OverlayValue });
    this.setState({ currentEar: earPreference });
  };

  selectLeftAudio() {
    this.setState({ overlayActivate: true });
    var array = [...this.state.left]; // make a separate copy of the array
    const currentVal = array[0];
    const newArray = array.slice(1, 0).concat(array.slice(1, array.length));
    this.setState({ value: currentVal });
    this.setState({ left: newArray });
  }

  displaySelectEarButton() {
    if (this.state.currentEar === "") {
      return (
        <View>
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Select Ear" onPress={() => this.selectLeftAudio()} />
        </View>
      );
    } else {
      return <View style={{ height: 10 }} />;
    }
  }

  displayPlayAudioButton() {
    if (this.state.currentEar === "") {
      return (
        <View>
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button
            title="Play Audio"
            onPress={() => this.playAudio()}
            disabled={true}
          />
        </View>
      );
    } else if (this.state.currentEar !== "") {
      return (
        <View>
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Play Audio" onPress={() => this.playAudio()} />
        </View>
      );
    }
  }

  handleTextInput(event) {
    this.setState({ textValue: event.nativeEvent.text });
  }

  verifyRegister() {
    if (this.state.textValue == this.state.currentTrack) {
      console.log(this.state.textValue, "matches", this.state.currentTrack);
      if (this.state.currentLevel < 11) {
        var currentLevel = this.state.currentLevel + 1;
      } else {
        var currentLevel = this.state.currentLevel;
      }
      this.setState({ correctResponses: this.state.correctResponses + 1 });
      this.setState({ currentLevel: currentLevel });
      this.playAudio();
    } else {
      console.log(
        this.state.textValue,
        "doesn't match",
        this.state.currentTrack
      );

      if (this.state.currentLevel > 1) {
        var currentLevel = this.state.currentLevel - 1;
      } else {
        var currentLevel = this.state.currentLevel;
      }
      this.setState({ currentLevel: currentLevel });
      this.playAudio();
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ overflow: "scroll" }}>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
          }}
        >
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Restart Test" onPress={() => this.reset()} />
          <View style={{ height: 10 }} />

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center"
            }}
          >
            <Image
              source={require("../assets/audio.png")}
              style={{ height: 210, width: 210 }}
            />
          </View>
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button
            title="Play Noise-Level 1"
            onPress={() => this.playSound_1()}
          />
          {this.displaySelectEarButton()}
          {/*  */}
          <EarSelect
            visible={this.state.overlayActivate}
            onValueChange={this.handleOverlay}
          />

          {/*  */}

          {this.displayPlayAudioButton()}
          <View style={{ height: 10 }} />

          <Input
            placeholder="Enter number"
            value={this.state.textValue}
            onChange={this.handleTextInput}
          />
          <View style={{ height: 10 }} />
          <Button title="Register" onPress={() => this.verifyRegister()} />

          {/*  */}
          <View style={{ height: 10 }} />
          <Text
            style={{
              alignContent: "center",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            {this.state.currentEar} : {this.state.currentTrack}_{this.state.currentLevel}
          </Text>

          <Text
            style={{
              alignContent: "center",
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold"
            }}
          >
            {this.state.currentEar} : {this.state.counter} and correct responses
            : {this.state.correctResponses}
          </Text>
        </Card>
        {/*  */}
      </KeyboardAvoidingView>
    );
  }
}
