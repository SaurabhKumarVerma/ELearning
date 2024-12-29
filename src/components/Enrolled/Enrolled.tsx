/**
 * Enrolled Component
 * 
 * This component displays a list of courses that the user is enrolled in. It utilizes 
 * React Native's FlatList to render the list of enrolled courses, and it integrates 
 * MobX for state management to fetch and display the enrolled courses from the store.
 * 
 * Key Features:
 * - Fetches enrolled course data when the component is focused using `useFocusEffect`.
 * - Displays a header with the title "Enrolled Course".
 * - Renders each course using the `ELearningListingCard` component, which shows the 
 *   course image, title, instructor name, and price.
 * - Provides a touchable interface for each course, allowing users to navigate to 
 *   the course detail screen when a course is pressed.
 * - Displays an empty state with an animation and message when there are no enrolled 
 *   courses.
 * - Includes a footer component to maintain consistent spacing at the bottom of the list.
 */
import {
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useRef } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningListingCard from "@eLearning/base/ELearningListingCard/ELearningListingCard";
import ELearningHeader from "@eLearning/base/ELearningHeader/ELearningHeader";
import { observer } from "mobx-react";
import { useStore } from "@eLearning/store/StoreContext";
import { ICourse } from "@eLearning/models/courses.model";
import { BOTTOM_BAR_HEIGHT } from "@eLearning/constant/constant";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Divider } from "@rneui/themed";
import LottieView from "lottie-react-native";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { ESCREEN } from "@eLearning/types/screenName";

const Enrolled = () => {
  const { top } = useSafeAreaInsets();
  const { enrolledStore } = useStore();
  const { navigate } = useNavigation();
  const animation = useRef<LottieView>(null);

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
      <View style={{flex: 1, alignSelf: 'center'}}>
        <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 200,
          height: 200,
        }}
        source={require('../../../assets/lottie/noData.json')}
      />
      <ELearningText preset="semiBold" style={{textAlign: 'center'}} text={"No Enrolled Course"}/>
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
