import {
    ActivityIndicator,
    Platform,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from "react-native";
import React, { useEffect } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ELearningHeader from "@eLearning/base/ELearningHeader/ELearningHeader";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { color } from "@eLearning/theme/color";
import { MODE } from "@eLearning/types/types";
import { useTheme } from "@rneui/themed";
import ELearningVideo from "@eLearning/base/ELearningVideo/ELearningVideo";
import ELearningText from "@eLearning/base/ELearningText/ELearningText";
import { getFirstAndSecondLetters } from "@eLearning/utils/trimWord";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import ELearningLoadingButton from "@eLearning/base/ELearningButton/ELearningButton";
import { useStore } from "@eLearning/store/StoreContext";
import { useRoute } from "@react-navigation/native";
import { observer } from "mobx-react";

const CourseDetail = () => {
    const inset = useSafeAreaInsets();
    const { theme } = useTheme();
    const { courseStore, enrolledStore } = useStore();
    const route = useRoute();

    useEffect(() => {
        courseStore.getCourseDetail(route?.params?.courseId);
    }, []);

    if (courseStore?.isCourseDetailLoading) {
        return <ActivityIndicator size={"large"} />;
    }

    const authorNameBackgroundColor =
        theme.mode === MODE.DARK ? color.deepForestGreen : color.tropicalGreen;

    const enrolledUser = () => {
        courseStore.getStudentEnrolled(route?.params?.courseId);
    };
    
    const enrolled = () => {
        return (
            <TouchableOpacity onPress={() => enrolledUser()}>
<MaterialCommunityIcons
                        name={enrolledStore.enrolledCourseId(route?.params?.courseId) ? "bookmark-plus" :"bookmark-remove"}
                        size={24}
                        color={theme.mode === MODE.DARK ? color.whisperWhite : color.onyx}
                    />
                
            </TouchableOpacity>
        );
    };

    console.log(enrolledStore.enrolledList)

    const onFullScreenExit = () => {
        courseStore.showRatingModel();
    };

    return (
        <View style={{ flex: 1, top: inset.top }}>
            <View style={{ marginHorizontal: 12, marginVertical: 12 }}>
                <ELearningHeader headerText="Course Detail" rightIcon={enrolled()} />
            </View>
            <View style={{ paddingBottom: 0 }}>
                <ELearningVideo
                    onFullScreenExit={onFullScreenExit}
                    videoUrl={courseStore?.courseDetailData[0]?.video_link?.url}
                    imageUrl={courseStore.courseDetailData[0]?.pic}
                />
            </View>
            <ScrollView
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
                alwaysBounceVertical
            >
                <View style={{ marginHorizontal: 12 }}>
                    <View style={styles.container}>
                        <View
                            style={[
                                styles.authorContainer,
                                { backgroundColor: authorNameBackgroundColor },
                            ]}
                        >
                            <ELearningText
                                style={{ padding: 10 }}
                                preset="semiBold"
                                text={getFirstAndSecondLetters(
                                    courseStore?.courseDetailData[0]?.instructor?.name
                                )}
                                size={16}
                            />
                        </View>
                        <ELearningText
                            style={{ paddingHorizontal: 10 }}
                            preset="regular"
                            text={courseStore?.courseDetailData[0]?.instructor?.name}
                            size={16}
                        />
                    </View>

                    <View style={{ marginTop: "4%" }}>
                        <ELearningText
                            numberOfLines={2}
                            style={{ padding: 10 }}
                            preset="semiBold"
                            text={courseStore?.courseDetailData[0]?.title}
                            size={16}
                        />
                    </View>

                    <View style={styles.detailContainer}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <AntDesign name="clockcircleo" size={20} color={color.gray} />
                            <ELearningText
                                style={styles.detailTextStyle}
                                preset="regular"
                                text={courseStore?.courseDetailData[0]?.duration}
                                size={14}
                            />
                        </View>

                        <View style={{ flexDirection: "row" }}>
                            <EvilIcons name="star" size={20} color={color.gray} />
                            <ELearningText
                                style={styles.detailTextStyle}
                                preset="regular"
                                text={courseStore?.courseDetailData[0]?.rating}
                                size={14}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: "2%", paddingBottom: "40%" }}>
                        <ELearningText
                            preset="light"
                            style={styles.descStyle}
                            text={courseStore?.courseDetailData[0]?.desc_text}
                            size={16}
                        />
                    </View>
                </View>
            </ScrollView>

            {
                !enrolledStore.enrolledList.has(route?.params?.courseId) ? (
                    <ELearningLoadingButton
                isLoading={false}
                handlePress={enrolledUser}
                label="Enroll Course"
                style={[styles.bottonContainer, { bottom: inset.bottom + 10 }]}
                icon={
                    <MaterialCommunityIcons
                        name={
                            enrolledStore.enrolledCourseId(route?.params?.courseId)
                                ? "bookmark-plus"
                                : "bookmark-remove"
                        }
                        size={24}
                        color={theme.mode === MODE.DARK ? color.whisperWhite : color.onyx}
                    />
                }
            />
                ) : null
            }
            
        </View>
    );
};

export default observer(CourseDetail);

const styles = StyleSheet.create({
    bottonContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        marginHorizontal: 12,
        marginBottom: Platform.OS === "ios" ? "4%" : "10%",
        backgroundColor: "transparent",
        overflowX: "hidden",
        borderRadius: 24,
    },
    detailContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 6,
        marginTop: "4%",
    },
    detailTextStyle: {
        paddingLeft: 10,
        color: color.gray,
    },
    authorContainer: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: "4%",
    },
    descStyle: {
        textAlign: "justify",
        marginTop: 10,
        justifyContent: "flex-start",
    },
});
