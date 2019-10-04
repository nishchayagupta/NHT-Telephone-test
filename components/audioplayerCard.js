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

  listRandom() {
    Leftvisited = [];
    while (Leftvisited.length < 30) {
      randNumber = Math.floor(Math.random() * 64);
      if (Leftvisited.includes(audioFiles[randNumber])) {
        continue;
      } else {
        Leftvisited.push(audioFiles[randNumber]);
      }
    }
    console.log("left : " + Leftvisited);

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
    console.log("right : " + RightVisited);
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
          <Button
            title="Play Noise-Level 1"
            onPress={() => this.playSound_1()}
          />
          {/* */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button
            title="Play Noise-Level 3"
            onPress={() => this.playSound_2()}
          />
          {/*  */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button
            title="Play Noise-Level 5"
            onPress={() => this.playSound_3()}
          />
          {/*  */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button
            title="Play Noise-Level 7"
            onPress={() => this.playSound_4()}
          />
          {/*  */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button
            title="Play Noise-Level 9"
            onPress={() => this.playSound_5()}
          />
          {/*  */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button title="Play Noise-Level 11" />

          {/*  */}
          <View style={{ height: 10 }} />
          <Divider style={{ height: 1 }} />
          <View style={{ height: 10 }} />
          <Button
            title="Play Noise-Level 11"
            onPress={() => this.listRandom()}
          />
        </Card>
        {/*  */}
      </ScrollView>
    );
  }
}
