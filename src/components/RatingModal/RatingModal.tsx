import { StyleSheet, Modal, View } from "react-native";
import React, { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import { color } from "@eLearning/theme/color";
import { Slider, useTheme } from "@rneui/themed";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useDerivedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { SCREEN_WIDTH } from "@eLearning/constant/constant";
import ELearningCircularButton from "@eLearning/base/ELearningCircularButton/ELearningCircularButton";
import { useStore } from "@eLearning/store/StoreContext";
import { observer } from "mobx-react";
import { MODE } from "@eLearning/types/types";

const RatingModal = () => {
  const inset = useSafeAreaInsets();
  const { courseStore } = useStore();
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
    tempSliderValue.current = value.toPrecision(1);
    sliderValue.value = value.toPrecision(1);
  };

  const onSliderChange = (value: number) => {
    setRating(value.toPrecision(1));
    sliderValue.value = value.toPrecision(1);
  };

  const closeModal = () => {
    courseStore.closedRatingModel();
  };

  const tintColor =
    theme.mode === MODE.DARK ? color.tropicalGreen : color.forestGreen;
  const trackTintColor =
    theme.mode === MODE.DARK ? color.paleGray : color.darkGreen;

  return (
    <Modal
      visible={courseStore.isRatingModalVisible}
      statusBarTranslucent
      animationType="slide"
    >
      <View
        style={{
          flex: 1,
          backgroundColor:
            theme.mode === MODE.DARK ? color.onyx : color.whisperWhite,
        }}
      >
        <View style={{ marginTop: inset.top, marginHorizontal: 18 }}>
          <ELearningAuthHeader onClose={closeModal} />
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
        </View>

        <View style={{ marginTop: "20%" }}>
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
              shadowColor:
                theme.mode === MODE.DARK ? color.whisperWhite : color.onyx,
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
          onPress={() => courseStore.closedRatingModel()}
          style={styles.circularButton}
        />
      </View>
    </Modal>
  );
};

export default observer(RatingModal);

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
