import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { useTheme } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { ESCREEN } from "@eLearning/types/screenName";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningHeader from "@eLearning/base/ELearningHeader/ELearningHeader";
import { useStore } from "@eLearning/store/StoreContext";
import { ICourse } from "@eLearning/models/courses.model";
import ELearningCourseCard from "@eLearning/base/ELearningCourseCard/ELearningCourseCard";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { Divider } from "@rneui/base";
import { observer } from "mobx-react";
import { BOTTOM_BAR_HEIGHT } from "@eLearning/constant/constant";

const Home = () => {
  const { top } = useSafeAreaInsets();
  const { navigate } = useNavigation();


  const navigateToDetailScreen = (id: string) => {
    navigate(ESCREEN.COURSE_DETAIL, {
      courseId: id
    })
  }
  const { courseStore } = useStore();

  useEffect(() => {
    courseStore.getCourseList();
  }, []);

  const renderItem = ({ item }: { item: ICourse }) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetailScreen(item.id)}>
        <ELearningCourseCard
        courseImage={item?.pic}
        title={item?.title}
        author={item?.instructor.name}
        price={item?.org_price}
        courseDescription={item?.desc_text}
        courseRating={item?.rating}
        navigateToDetail={navigateToDetailScreen}
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

  if (courseStore.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size={"small"} />
      </View>
    );
  }

  const footerComponent = () => {
    return(
      <View style={{marginBottom: '24%', height: BOTTOM_BAR_HEIGHT}}/>
    )
  }

  return (
    <View style={{ top: top, flex: 1 }}>
      <View style={{ marginHorizontal: 12, marginVertical: 4 }}>
        <ELearningHeader
          showLeftIcon={false}
          headerText="Home"
          headerContainerStyle={{
            flexDirection: "row",
            alignSelf: "center",
            marginBottom: 12,
          }}
          textStyle={{ fontSize: 18 }}
          textPreset="semiBold"
        />
        <Divider />
      </View>
      <FlatList
        data={courseStore.courseList}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={emptyComponent}
        ListFooterComponent={footerComponent}
        style={{flex: 1}}
      />
    </View>
  );
};

export default observer(Home);

const styles = StyleSheet.create({});
