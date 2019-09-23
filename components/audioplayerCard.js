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
import { Audio } from "expo-av";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

//TODO: Add dynamic change of Audio files using assets
export default class AudioplayerCard extends React.Component {
  constructor(props) {
    super(props);
    state = {
      value: ""
    };
  }

  componentDidMount() {
    this.setState({ value: this.props.fileValue });
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

  async playSound_2() {
    var filePath = this.state.value;
    const soundObject = new Audio.Sound();
    try {
      console.log("in the playsound method");
      await soundObject.loadAsync(require("../916_3.wav"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log("error playing sound due to ", error);
    }
  }

  async playSound_3() {
    var filePath = this.state.value;
    const soundObject = new Audio.Sound();
    try {
      console.log("in the playsound method");
      await soundObject.loadAsync(require("../916_5.wav"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log("error playing sound due to ", error);
    }
  }

  async playSound_4() {
    var filePath = this.state.value;
    const soundObject = new Audio.Sound();
    try {
      console.log("in the playsound method");
      await soundObject.loadAsync(require("../916_7.wav"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log("error playing sound due to ", error);
    }
  }

  async playSound_5() {
    var filePath = this.state.value;
    const soundObject = new Audio.Sound();
    try {
      console.log("in the playsound method");
      await soundObject.loadAsync(require("../916_9.wav"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log("error playing sound due to ", error);
    }
  }

  async playSound_6() {
    var filePath = this.state.value;
    const soundObject = new Audio.Sound();
    try {
      console.log("in the playsound method");
      await soundObject.loadAsync(require("../916_11.wav"));
      await soundObject.playAsync();
      // Your sound is playing!
    } catch (error) {
      console.log("error playing sound due to ", error);
    }
  }

  render() {
    console.log(this.state);
    return (
      <ScrollView style={{ overflow: "scroll" }}>
        <Card
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center"
          }}
        >
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
          <Button title="Play" onPress={() => this.playSound_1()} />
          {/* */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Play" onPress={() => this.playSound_2()} />
          {/*  */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Play" onPress={() => this.playSound_3()} />
          {/*  */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Play" onPress={() => this.playSound_4()} />
          {/*  */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Play" onPress={() => this.playSound_5()} />
          {/*  */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Play" onPress={() => this.playSound_6()} />
        </Card>
        {/*  */}
      </ScrollView>
    );
  }
}
