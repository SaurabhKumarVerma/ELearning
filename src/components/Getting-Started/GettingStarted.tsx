/**
 * GettingStarted Component
 * 
 * This component serves as an introductory screen for users, providing a welcoming 
 * message and guiding them to continue with the application. It features a visually 
 * appealing layout with text, an icon, and a button to proceed.
 * 
 * Key Features:
 * - Utilizes `ScrollView` to allow for vertical scrolling, accommodating various 
 *   screen sizes and ensuring that content is accessible even on smaller devices.
 * - Displays an icon at the top of the screen using the `IconSvg` component.
 * - Presents two lines of text that convey the message "You learn While Sitting at Home", 
 *   with styling that adapts to the current theme (light or dark mode).
 * - Includes a down arrow icon to indicate that there is more content below or to 
 *   suggest scrolling.
 * - Provides a circular button labeled "Continue" that allows users to proceed to the 
 *   next step in the application.
 * - Uses `useSafeAreaInsets` to ensure that the layout respects the device's safe 
 *   area, particularly for devices with notches or rounded corners.
 * 
 * Usage:
 * This component is intended to be used as part of the onboarding process or as an 
 * introductory screen for new users, helping them understand the application's 
 * purpose and encouraging them to continue.
 */
import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import IconSvg from "./IconSvg";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { useTheme } from "@rneui/themed";
import { color } from "@eLearning/theme/color";
import ELearningCircularButton from "@eLearning/base/ELearningCircularButton/ELearningCircularButton";
import { MODE } from "@eLearning/types/types";
import DownArrow from "../../../assets/svg/downArrow.svg";
import { SCREEN_WIDTH } from "@eLearning/constant/constant";

const GettingStarted = () => {
  const inset = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <ScrollView style={{ top: inset.top }}>
      <View style={styles.iconContainer}>
        <IconSvg />
      </View>

      <View style={styles.textContainerStyle}>
        <ELearningText
          preset="semiBold"
          text="You learn"
          size={38}
          style={styles.textStyles}
        />
        <ELearningText
          preset="semiBold"
          text="While Sitting at Home"
          size={38}
          style={{
            ...styles.outline,
            textShadowColor:
              theme.theme.mode === MODE.LIGHT ? color.onyx : color.whisperWhite,
            color:
              theme.theme.mode === MODE.LIGHT ? color.whisperWhite : color.onyx,
          }}
        />
      </View>

      <View style={[styles.downArrowStyle, { bottom: inset.top + 90 }]}>
        <DownArrow />
      </View>

      <View style={styles.continueButtonStyle}>
        <ELearningCircularButton
          onPress={() => console.log("Press")}
          text="Continue"
        />
      </View>
    </ScrollView>
  );
};

export default GettingStarted;

const styles = StyleSheet.create({
  textContainerStyle: {
    marginHorizontal: 16,
  },
  textStyles: {
    marginTop: "16%",
  },
  outline: {
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 2,
    marginTop: "9%",
  },
  iconContainer: {
    alignItems: "center",
    marginTop: "20%",
  },
  downArrowStyle: {
    position: "absolute",
    left: SCREEN_WIDTH * 0.69,
    right: 0,
  },
  continueButtonStyle: {
    alignSelf: "flex-end",
    marginRight: 20,
    marginTop: 30,
  },
});
