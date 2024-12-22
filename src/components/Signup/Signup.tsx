import { Appearance, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { MODE } from "@eLearning/types/types";

const Signup = () => {
  const inset = useSafeAreaInsets();
  const toggleDarkMode = () => {
    Appearance.getColorScheme() === MODE.DARK
      ? Appearance.setColorScheme(MODE.LIGHT)
      : Appearance.setColorScheme(MODE.DARK);
  };
  return (
    <ScrollView style={{ flex: 1, top: inset.top, marginHorizontal: 18 }}>
      <View>
        <ELearningAuthHeader
          ctaText="Sign In"
          onClose={toggleDarkMode}
          onCtaClick={function (): void {
            throw new Error("Function not implemented.");
          }}
        />
      </View>

      <View style={styles.titleContainer}>
        <ELearningText
          text="Join E-Learning Community"
          preset="semiBold"
          size={24}
        />
        <ELearningText
          text="Subscribe quickly with us"
          preset="regular"
          size={16}
          style={{ marginTop: 8 }}
        />
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: "center",
    marginTop: "10%",
  },
});
