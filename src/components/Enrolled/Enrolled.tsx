import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningListingCard from "@eLearning/base/ELearningListingCard/ELearningListingCard";
import ELearningHeader from "@eLearning/base/ELearningHeader/ELearningHeader";
import { observer } from "mobx-react";
import { useStore } from "@eLearning/store/StoreContext";
import { ICourse } from "@eLearning/models/courses.model";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { BOTTOM_BAR_HEIGHT } from "@eLearning/constant/constant";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/themed";

const Enrolled = () => {
  const { top } = useSafeAreaInsets();
  const { enrolledStore } = useStore();
  const { navigate } = useNavigation();

  useEffect(() => { }, []);

  useFocusEffect(
    useCallback(() => {
      enrolledStore.getEnrolledData();
      return () => { };
    }, [])
  );

  const navigateToDetailScreen = (id: string) => {
      navigate(ESCREEN.COURSE_DETAIL, {
        courseId: id
      })
    }

  const renderItem = ({ item }: { item: ICourse }) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetailScreen(item.id)}>
        <ELearningListingCard
          courseImage={item.pic}
          courseTitle={item.title}
          author={item.instructor.name}
          price={item.org_price}
        />
      </TouchableOpacity>
    );
  };

  const emptyComponent = () => {
    return (
      <View>
        <ELearningText text="No Data Found" />
      </View>
    );
  };

  const footerComponent = () => {
    return <View style={{ marginBottom: "24%", height: BOTTOM_BAR_HEIGHT }} />;
  };

  return (
    <View style={{ top: top }}>
      <View style={{ marginHorizontal: 12, marginVertical: 12 }}>
        <ELearningHeader
          showLeftIcon={false}
          headerText="Enrolled Course"
          headerContainerStyle={{
            flexDirection: "row",
            alignSelf: "center",
            marginBottom: 12,
          }}
          textStyle={{ textAlign: "center" }}
        />
      </View>
      <Divider />
      <FlatList
        data={enrolledStore?.enrolledListData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={emptyComponent}
        ListFooterComponent={footerComponent}
      />
    </View>
  );
};

export default observer(Enrolled);

const styles = StyleSheet.create({});
