import { Appearance, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import { EXPERT_TYPE, MODE } from "@eLearning/types/types";
import ExpertItem from "./ExpertItem";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@eLearning/constant/constant";
import ELearningCircularButton from "@eLearning/base/ELearningCircularButton/ELearningCircularButton";
import { color } from "@eLearning/theme/color";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";

const Expert = () => {
  const inset = useSafeAreaInsets();

  const toggleDarkMode = () => {
    Appearance.getColorScheme() === MODE.DARK
      ? Appearance.setColorScheme(MODE.LIGHT)
      : Appearance.setColorScheme(MODE.DARK);
  };

  const renderExpertItems = () => {
    const expertItems = [
      {
        expertLevel: EXPERT_TYPE.BEGINNER,
        ageRange: "10-16",
        topPosition: 110,
      },
      {
        expertLevel: EXPERT_TYPE.INTERMEDIATE,
        ageRange: "10-16",
        topPosition: 62,
      },
      {
        expertLevel: EXPERT_TYPE.EXPERT,
        ageRange: "25-36",
        topPosition: 14,
      },
    ];

    return expertItems.map((item, index) => (
      <ExpertItem
        key={index}
        height={SCREEN_HEIGHT * (0.4 + index * 0.05)}
        width={SCREEN_WIDTH * 0.22}
        iconHeight={SCREEN_HEIGHT * 0.22}
        iconWidth={SCREEN_WIDTH * 0.22}
        expertLevel={item.expertLevel}
        ageRange={item.ageRange}
        style={[styles.expertItem, { top: item.topPosition, left: index * 20 }]}
      />
    ));
  };

  return (
    <ScrollView
      style={[styles.container, { top: inset.top }]}
      showsVerticalScrollIndicator={false}
    >
      <ELearningAuthHeader onClose={toggleDarkMode} />

      <View style={{ marginTop: 18 }}>
        <ELearningText text="Choose your level" preset="semiBold" size={24} />
        <ELearningText
          text="Select your Level"
          preset="regular"
          size={16}
          style={{ marginTop: 8 }}
        />
      </View>

      <View style={styles.renderItem}>{renderExpertItems()}</View>

      <View style={[styles.bottomContainer, { paddingBottom: inset.bottom }]}>
        <ELearningCircularButton
          backgroundColor={color.paleTurquoise}
          textColor={color.tropicalGreen}
          text="skip"
          onPress={toggleDarkMode}
          style={{ width: 62, height: 62 }}
        />
        <ELearningCircularButton text="Continue" onPress={toggleDarkMode} />
      </View>
    </ScrollView>
  );
};

export default Expert;

const styles = StyleSheet.create({
  expertItem: {
    alignContent: "center",
    justifyContent: "center",
  },
  bottomContainer: {
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    zIndex: 10,
    marginTop: "20%",
  },
  container: {
    flex: 1,
    position: "relative",
    marginHorizontal: 18,
  },
  renderItem: {
    flexDirection: "row",
    marginTop: "20%",
    alignSelf: "center",
    marginLeft: "-10%",
  },
});
