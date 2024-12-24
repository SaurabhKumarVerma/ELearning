import { Appearance, StyleSheet, Modal, View } from "react-native";
import React, { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import { color } from "@eLearning/theme/color";
import { MODE } from "@eLearning/types/types";
import { useTheme, Slider } from "@rneui/themed";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SCREEN_WIDTH } from "@eLearning/constant/constant";
import ELearningCircularButton from "@eLearning/base/ELearningCircularButton/ELearningCircularButton";
import { useDebouncedCallback } from "@eLearning/hook/useDebouncedCallback";

const RatingModal = () => {
  const inset = useSafeAreaInsets();
  const { theme } = useTheme();

  const [rating, setRating] = useState<number>(0);
  const emojiList = ["👿", "😕", "😐", "🙂", "😍"];
  const emojiTextList = ["Terrible", "Not Great", "Neutral", "Good", "Amazing"];
  const sliderValue = useSharedValue(0);
  const tempSliderValue = useRef(0);

  const animatedEmojiIndex = useDerivedValue(() => {
    return Math.round(sliderValue.value * (emojiList.length - 1));
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        scale: withSpring(1 + sliderValue.value / 3, { damping: 10, mass: 10 }),
      },
    ],
    paddingBottom: withTiming(1 + sliderValue.value * 10),
  }));

  const onValueChange = (value: number) => {
    tempSliderValue.current = value.toPrecision(1);;
    sliderValue.value = value.toPrecision(1);;
  };

  const onSliderChange = (value:number) => {
    setRating(value.toPrecision(1));
    sliderValue.value = value.toPrecision(1);
  }


  const toggleDarkMode = () => {
    Appearance.getColorScheme() === MODE.DARK
      ? Appearance.setColorScheme(MODE.LIGHT)
      : Appearance.setColorScheme(MODE.DARK);
  };

  const tintColor =
    theme.mode === MODE.LIGHT ? color.tropicalGreen : color.forestGreen;
  const trackTintColor =
    theme.mode === MODE.LIGHT ? color.paleGray : color.darkGreen;

  return (
    <Modal visible={true} transparent>
      <View style={{ flex: 1, marginHorizontal: 18, marginTop: inset.top }}>
        <ELearningAuthHeader onClose={toggleDarkMode} />
        <View style={{ marginTop: 18 }}>
          <ELearningText
            text="How was your session?"
            preset="semiBold"
            size={24}
          />
          <ELearningText
            text="Love it! What was your favorite part?"
            preset="regular"
            size={16}
            style={{ color: color.gray, marginTop: 8 }}
          />
        </View>

        <View style={{marginTop: '20%'}}>
          <Animated.Text style={[styles.emoji, animatedStyle]}>
            {emojiList[animatedEmojiIndex.value]}
          </Animated.Text>
          <Animated.Text style={styles.emojiText}>
            {emojiTextList[animatedEmojiIndex.value]}
          </Animated.Text>
        </View>

        <View style={{ marginTop: 62 }}>
          <Slider
            style={styles.slider}
            value={sliderValue.value * 100}
            onValueChange={(val) => onValueChange(val / 100)}
            onSlidingComplete={(val) => onSliderChange(val / 100)}
            minimumValue={0}
            maximumValue={100}
            step={1}
            thumbTintColor={tintColor}
            minimumTrackTintColor={tintColor}
            allowTouchTrack
            maximumTrackTintColor={trackTintColor}
            thumbStyle={{
              height: 20,
              width: 20,
              backgroundColor: color.whiteSmoke,
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              flex: 1,
              shadowColor: theme.mode === MODE.DARK ? "white" : "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
            thumbProps={{
              children: (
                <View
                  style={{
                    height: 16,
                    width: 16,
                    borderRadius: 10,
                    backgroundColor: color.tropicalGreen,
                    alignSelf: "center",
                  }}
                />
              ),
            }}
          />
        </View>

        <ELearningCircularButton
          text="Continue"
          onPress={() => console.log("Rating:", rating)}
          style={styles.circularButton}
        />
      </View>
    </Modal>
  );
};

export default RatingModal;

const styles = StyleSheet.create({
  emoji: {
    fontSize: 100,
    textAlign: "center",
    marginTop: 80,
  },
  emojiText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
    color: color.gray,
  },
  slider: {
    width: SCREEN_WIDTH * 0.6,
    height: 40,
    alignSelf: "center",
  },
  circularButton: {
    position: "absolute",
    right: 20,
    bottom: 20,
  },
});