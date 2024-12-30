/**
 * Home Component
 * 
 * This component serves as the main screen for displaying a list of courses 
 * available to the user. It utilizes a FlatList to render course cards, 
 * allowing users to navigate to detailed views of each course. The component 
 * integrates MobX for state management and handles loading states and empty 
 * data scenarios gracefully.
 * 
 * Key Features:
 * - Displays a header with the title "Home" and a user account icon for 
 *   navigation to the account screen.
 * - Fetches the list of courses from the store when the component mounts using 
 *   the `useEffect` hook.
 * - Renders each course using the `ELearningCourseCard` component, which 
 *   displays course details such as image, title, author, price, description, 
 *   and rating.
 * - Provides a loading indicator while the course data is being fetched.
 * - Displays a message when no courses are available.
 * - Includes a footer component to maintain consistent spacing at the bottom 
 *   of the list.
 * 
 * Usage:
 * This component is intended to be used as the main entry point for users to 
 * explore available courses in the application. It allows users to select a 
 * course to view more details.
 */
import { ActivityIndicator, FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { Avatar, useTheme } from "@rneui/themed";
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
    courseStore.initializeCourses();
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

  const userAccountIcon = () => {
    return (
      <TouchableOpacity onPress={() => navigate(ESCREEN.ACCOUNT_SCREEN)}>
        <Avatar
    size={40}
    rounded
    source={{ uri: "https://randomuser.me/api/portraits/men/34.jpg" }}
  />
      </TouchableOpacity>
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
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 12,
          }}
          textStyle={{ fontSize: 18 }}
          textPreset="semiBold"
          rightIcon={userAccountIcon()}
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
