import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, Divider } from "@rneui/base";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "@eLearning/constant/constant";
import ELearningImage from "../ELearningImage/ELearningImage";
import ELearningText from "../ELearningText/ELearningText";
import { color } from "@eLearning/theme/color";
import ELearningLoadingButton from "../ELearningButton/ELearningButton";
import { AirbnbRating, useTheme } from "@rneui/themed";


interface IELearningCourseCard {
    id?: string;
    pic?: string;
    title: string;
}

const ELearningCourseCard = () => {
    const { theme } = useTheme();
    return (
        <Card
            containerStyle={{
                padding: 0,
                width: SCREEN_WIDTH * 0.43,
                borderRadius: 16,
                overflow: "hidden",
                backgroundColor: theme.colors.background,
                zIndex: 1
            }}
        >
            <ELearningImage
                imageData={{
                    source:
                        "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                    style: { aspectRatio: 1.8 },
                }}
            />
            <View style={{ marginTop: 4, marginHorizontal: 6 }}>
                <ELearningText
                    numberOfLines={1}
                    text="Marketing sadnaskndlaskdn jndjasnlaksd ndasklndlksd "
                    preset="semiBold"
                    size={16}
                />
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginRight: 10
                    }}
                >
                    <ELearningText
                        numberOfLines={1}
                        text="By"
                        preset="regular"
                        size={12}
                        style={{ color: color.smokyGray, marginVertical: 2, width: "60%" }}
                    />
                    <AirbnbRating
                        defaultRating={4.5}
                        size={10}
                        showRating={false}
                        count={5}
                        isDisabled={true}
                    />
                </View>
            </View>
            <Divider />
            <View style={{ marginHorizontal: 6, marginTop: 4 }}>
                <ELearningText
                    numberOfLines={3}
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"
                />
            </View>
            <Divider style={{ marginTop: 4 }} />
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginHorizontal: 6,
                    paddingVertical: 8,
                }}
            >
                <ELearningText
                    numberOfLines={1}
                    preset="semiBold"
                    size={12}
                    text="233.00"
                    style={{marginLeft: 4}}
                />
                <ELearningLoadingButton
                    style={{ borderRadius: 8, zIndex: 1, paddingVertical: 6 }}
                    isLoading={false}
                    label="Details"
                    textStyle={{ color: color.whisperWhite }}
                    handlePress={() => console.log("Hello")}
                />
            </View>
        </Card>
    );
};

export default ELearningCourseCard;

const styles = StyleSheet.create({});
