import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningListingCard from "@eLearning/base/ELearningListingCard/ELearningListingCard";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import ELearningHeader from "@eLearning/base/ELearningHeader/ELearningHeader";

const Enrolled = () => {
  const { top } = useSafeAreaInsets();
  return (
    <View style={{ top: top }}>
      <View style={{ marginHorizontal: 12, marginVertical: 12 }}>
        <ELearningHeader
          headerText="Course Detail"
          headerContainerStyle={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          textStyle={{ textAlign: "center" }}
        />
      </View>
      <ELearningListingCard />
    </View>
  );
};

export default Enrolled;

const styles = StyleSheet.create({});
