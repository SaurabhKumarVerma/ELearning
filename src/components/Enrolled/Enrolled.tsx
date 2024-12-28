import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningListingCard from "@eLearning/base/ELearningListingCard/ELearningListingCard";
import ELearningAuthHeader from "@eLearning/base/ELearningAuthHeader/ELearningAuthHeader";
import ELearningHeader from "@eLearning/base/ELearningHeader/ELearningHeader";
import { observer } from "mobx-react";
import { useStore } from "@eLearning/store/StoreContext";

const Enrolled = () => {
  const { top } = useSafeAreaInsets();
  const {enrolledStore} = useStore()
  console.log("enrolledStore ==>", enrolledStore);
  
  return (
    <View style={{ top: top }}>
      <View style={{ marginHorizontal: 12, marginVertical: 12 }}>
        <ELearningHeader
          headerText="Enrolled Course"
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

export default observer(Enrolled);

const styles = StyleSheet.create({});
