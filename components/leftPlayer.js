import { Audio } from "expo-av";
import * as AudioFiles from "./audioSelector";

// Play audio file
export const playLeftSound = async audioTrack => {
  const soundObject = new Audio.Sound();
  try {
    await soundObject.loadAsync(AudioFiles.audioSelector(audioTrack));
    setTimeout(() => {
      soundObject.playAsync();
      console.log("play the sound");
    }, 2000);

    //   this.setState({ soundFlag: 1 });
    //   if (this.state.currentEar == "left") {
    //     var leftCount = this.state.leftCounter + 1;
    //     this.setState({ leftCounter: leftCount });
    //   } else if (this.state.currentEar == "right") {
    //     var rightCount = this.state.rightCounter + 1;
    //     console.log("new right count is " + rightCount);
    //     this.setState({ rightCounter: rightCount });
    //   }

    // Your sound is playing!
  } catch (error) {
    console.log("error playing sound due to ", error);
  }
};
