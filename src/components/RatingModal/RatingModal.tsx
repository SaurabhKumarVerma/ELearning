import { Appearance, StyleSheet, Modal, View } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import { color } from "@eLearning/theme/color";
import { MODE } from "@eLearning/types/types";
import { useTheme } from "@rneui/themed";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
} from "react-native-reanimated";
import Slider from "@react-native-community/slider";
import { SCREEN_WIDTH } from "@eLearning/constant/constant";
import ELearningCircularButton from "@eLearning/base/ELearningCircularButton/ELearningCircularButton";

const RatingModal = () => {
  const inset = useSafeAreaInsets();
  const { theme } = useTheme();

  const [rating, setRating] = useState(0);
  const emojiList = ["👿", "😕", "😐", "🙂", "😍"];
  const emojiTextList = [
    "Terrible",
    "Not Great",
    "Neutral",
    "Good",
    "Amazing",
  ];
  const sliderValue = useSharedValue(0);

  const animatedEmojiIndex = useDerivedValue(() => {
    return Math.round(sliderValue.value * (emojiList.length - 1));
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(1 + sliderValue.value / 5) }],
  }));

  const onSliderChange = (value) => {
    setRating(value.toFixed(1));
    sliderValue.value = value;
  };

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

        <View>
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
            minimumValue={0}
            maximumValue={1}
            step={0.01}
            value={sliderValue.value}
            onValueChange={onSliderChange}
            minimumTrackTintColor={tintColor}
            maximumTrackTintColor={trackTintColor}
            thumbTintColor={tintColor}
          />
        </View>

        <ELearningCircularButton
          text="Continue"
          onPress={() => console.log("Pressed")}
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
