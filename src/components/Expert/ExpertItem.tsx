import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
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
