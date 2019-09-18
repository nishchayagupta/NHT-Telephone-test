import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
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

  async playSound() {
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

  render() {
    console.log(this.state);
    return (
      <View>
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
          <Button title="Play" onPress={() => this.playSound()} />
        </Card>
        <Card>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                display: "flex",
                fleDirection: "column"
              }}
            >
              <Button
                title="Yes"
                style={{ width: width / 3, margin: 10 }}
                onPress={() => console.log("pressed yes")}
              />
              <Button
                title="No"
                style={{ width: width / 3, margin: 10 }}
                onPress={() => console.log("pressed no")}
              />
            </View>
          </View>
        </Card>
      </View>
    );
  }
}
