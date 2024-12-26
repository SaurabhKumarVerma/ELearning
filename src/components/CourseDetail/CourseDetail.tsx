import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
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

const CourseDetail = () => {
    const inset = useSafeAreaInsets();
    const { theme } = useTheme();
    const iconColor =
        theme.mode === MODE.DARK ? color.whisperWhite : color.blackForestGreen;
    const authorNameBackgroundColor =
        theme.mode === MODE.DARK ? color.deepForestGreen : color.tropicalGreen;

    const enrolled = () => {
        return (
            <Pressable>
                <MaterialCommunityIcons
                    name="bookmark-remove"
                    size={24}
                    color="black"
                />
                {/* <MaterialCommunityIcons name="bookmark-plus" size={24} color={iconColor} /> */}
            </Pressable>
        );
    };

    const onFullScreenExit = () => {
        console.log("edddd");
    };

    const text = `
    
    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    
    `;

    return (
        <View style={{ top: inset.top, flex: 1, }}>
            <View style={{ marginHorizontal: 12 }}>
                <ELearningHeader headerText="Course Detail" rightIcon={enrolled()} />
            </View>
            <View style={{ paddingBottom: 0 }}>
                <ELearningVideo
                    onFullScreenExit={onFullScreenExit}
                    videoUrl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    imageUrl="https://picsum.photos/id/1/5000/3333"
                />
            </View>
            <ScrollView
                style={{ marginBottom: '26%', flex: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ marginHorizontal: 12 }}>
                    <View
                        style={styles.container}
                    >
                        <View
                            style={[styles.authorContainer, { backgroundColor: authorNameBackgroundColor }]}
                        >
                            <ELearningText
                                style={{ padding: 10 }}
                                preset="semiBold"
                                text={getFirstAndSecondLetters("Perter Moew")}
                                size={16}
                            />
                        </View>
                        <ELearningText
                            style={{ padding: 10 }}
                            preset="regular"
                            text={"Perter Moew"}
                            size={16}
                        />
                    </View>

                    <View style={{ marginTop: "4%" }}>
                        <ELearningText
                            numberOfLines={2}
                            style={{ padding: 10 }}
                            preset="semiBold"
                            text={
                                "Comic drawing essential for everyone! Comic drawing essential for everyone! Comic drawing essential for everyone!"
                            }
                            size={16}
                        />
                    </View>

                    <View
                        style={styles.detailContainer}
                    >
                        <View style={{ flexDirection: "row", alignItems: "center", }}>
                            <AntDesign name="clockcircleo" size={20} color={color.gray} />
                            <ELearningText
                                style={styles.detailTextStyle}
                                preset="regular"
                                text={"1.hour 30 min"}
                                size={14}
                            />
                        </View>

                        <View style={{  flexDirection: 'row' }}>
                            
                             <EvilIcons name="star" size={20} color={color.gray} />
                            <ELearningText
                                 style={styles.detailTextStyle}
                                preset="regular"
                                 text="4.7"
                                size={14}
                            />
                        </View>
                    </View>

                    <View style={{ marginTop: "2%" }}>
                        <ELearningText
                            preset="light"
                            style={{ textAlign: "justify" }}
                            text={text}
                        />
                    </View>
                </View>
            </ScrollView>
                <ELearningLoadingButton
                    isLoading={false}
                    handlePress={() => console.log("Press Me")}
                    label="Enroll Course"
                    style={[styles.bottonContainer, { bottom: inset.bottom + 10,}]}
                    icon={<MaterialCommunityIcons
                        name="bookmark-remove"
                        size={24}
                        color="black"
                    />}
                />
        </View>
    );
};

export default CourseDetail;

const styles = StyleSheet.create({
    bottonContainer: {
        position: "absolute",
        left: 0,
        right: 0,
        marginHorizontal: 12,
        marginBottom: "5%",
        backgroundColor: "red",
        overflowX: "hidden",
        borderRadius: 24,
    },
    detailContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 6,
        marginTop: "4%",
    },
    detailTextStyle:{ 
        paddingLeft: 10, 
        color: color.gray 
    },
    authorContainer:{
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
    },
    container:{
        flexDirection: "row",
        alignItems: "center",
        marginTop: "4%",
    }
});
