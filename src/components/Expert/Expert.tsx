/**
 * Expert Component
 * 
 * This component allows users to select their expertise level in a specific domain. 
 * It presents a list of expert levels (Beginner, Intermediate, Expert) along with 
 * corresponding age ranges. The user can choose their level and proceed to the next 
 * step in the application.
 * 
 * Key Features:
 * - Utilizes `ScrollView` to allow vertical scrolling of content, accommodating 
 *   various screen sizes.
 * - Displays a header with a toggle for dark mode using `ELearningAuthHeader`.
 * - Renders a list of expert items using the `ExpertItem` component, which visually 
 *   represents different expertise levels and their associated age ranges.
 * - Each expert item is dynamically positioned based on its index, providing a 
 *   staggered layout.
 * - Includes a bottom container with two circular buttons: one for skipping the 
 *   selection and another for continuing to the next step.
 * - Uses `useSafeAreaInsets` to ensure that the layout respects the device's safe 
 *   area, particularly for devices with notches or rounded corners.
 * 
 * Usage:
 * This component is intended for use in an onboarding or selection process where 
 * users need to specify their expertise level before proceeding further in the 
 * application.
 */
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
        topPosition:  0.15,
      },
      {
        expertLevel: EXPERT_TYPE.INTERMEDIATE,
        ageRange: "10-16",
        topPosition: 0.1,
      },
      {
        expertLevel: EXPERT_TYPE.EXPERT,
        ageRange: "25-36",
        topPosition: 0.05,
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
        style={[styles.expertItem, { top:  SCREEN_HEIGHT *  item.topPosition, left: index * 20 }]}
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
