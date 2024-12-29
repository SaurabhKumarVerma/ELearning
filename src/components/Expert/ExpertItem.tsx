/**
 * ExpertItem Component
 * 
 * This component represents an individual item in the expert selection interface. 
 * It displays the user's expertise level, associated age range, and an icon 
 * representing the level. The component is styled to adapt to both light and dark 
 * themes based on the current theme mode.
 * 
 * Props:
 * - height (number): The height of the component. Defaults to 40% of the screen height.
 * - width (number): The width of the component. Defaults to 22% of the screen width.
 * - iconHeight (number): The height of the icon displayed within the component. 
 *   Defaults to 22% of the screen height.
 * - iconWidth (number): The width of the icon displayed within the component. 
 *   Defaults to 22% of the screen width.
 * - expertLevel (string): The level of expertise (e.g., Beginner, Intermediate, Expert).
 * - ageRange (string): The age range associated with the expertise level (e.g., "10 - 16").
 * - style (StyleProp<ViewStyle>): Additional styles to apply to the outer container.
 * 
 * Key Features:
 * - Displays the expertise level and age range in a visually appealing manner.
 * - Uses the `ELearningText` component for consistent text styling.
 * - Adapts the background color of the item based on the current theme (light or dark).
 * - Includes a shadow effect for a raised appearance, enhancing the visual hierarchy.
 * - Contains an SVG icon representing the expertise level, enhancing the user interface.
 * 
 * Usage:
 * This component is intended to be used within a list or grid of expert items, 
 * allowing users to select their expertise level in a user-friendly manner.
 */
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@eLearning/constant/constant";
import { color } from "@eLearning/theme/color";
import Level from "../../../assets/svg/level.svg";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { EXPERT_TYPE, MODE } from "@eLearning/types/types";
import { useTheme } from "@rneui/themed";

interface IExpertItem {
  height: number;
  width: number;
  iconHeight: number;
  iconWidth: number;
  expertLevel: string;
  ageRange: string;
  style: StyleProp<ViewStyle>
}

const ExpertItem = ({
  height = SCREEN_HEIGHT * 0.4,
  width = SCREEN_WIDTH * 0.22,
  iconWidth = SCREEN_WIDTH * 0.22,
  iconHeight = SCREEN_HEIGHT * 0.22,
  expertLevel = EXPERT_TYPE.BEGINNER,
  ageRange = '10 - 16',
  style
}: IExpertItem) => {
  const {theme} = useTheme()
  const backgroundColor = theme.mode === MODE.DARK ? color.greenishBlue : color.cadetGray
  return (
    <View style={[{ height, width }, style]}>
      <ELearningText
        text= {expertLevel}
        preset="regular"
        size={12}
        style={{
          color: color.lightGrayishBlue,
          textAlign: "center",
          marginVertical: 10,
        }}
      />
      <View style={[styles.boxContainer, styles.shadow, { borderColor: backgroundColor }]}>
        <View style={[styles.textContainer, {backgroundColor}]}>
          <ELearningText text={ageRange} preset="medium" size={16} />
          <ELearningText
            text="Age"
            preset="regular"
            size={12}
            style={{ color: color.lightGrayishBlue }}
          />
        </View>
        <View style={styles.iconContainer}>
          <Level width={iconWidth} height={iconHeight} />
        </View>
      </View>
    </View>
  );
};

export default ExpertItem;

const styles = StyleSheet.create({
  textContainer: {
    height: 60,
    width: "100%",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  shadow: {
    shadowColor: color.tropicalGreen,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.34,
    shadowRadius: 4,

    elevation: 0,
  },
  boxContainer: {
    flex: 1,
    borderRadius: 22,
    borderWidth: 1,
  },
});
