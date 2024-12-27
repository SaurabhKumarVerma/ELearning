import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, Divider } from "@rneui/base";
import ELearningImage from "../ELearningImage/ELearningImage";
import ELearningText from "../ELearningText/ELearningText";
import { color } from "@eLearning/theme/color";
import ELearningLoadingButton from "../ELearningButton/ELearningButton";
import { AirbnbRating, useTheme } from "@rneui/themed";
import { images } from "assets/image";


interface IELearningCourseCard {
    id?: string;
    courseImage: string;
    title: string;
    author: string;
    price: string;
    courseDescription: string
    courseRating: number
    navigateToDetail: () => void
}

const ELearningCourseCard = (props: IELearningCourseCard) => {
    const { theme } = useTheme();
    return (
        <Card
            containerStyle={[styles.container, {backgroundColor: theme.colors.background}]}
        >
            <ELearningImage
                imageData={{
                    source:
                        props.courseImage || images.fallbackImage,
                    style: { aspectRatio: 1.8 },
                }}
            />
            <View style={{ marginTop: 4, marginHorizontal: 6 }}>
                <ELearningText
                    numberOfLines={1}
                    text={props?.title ?? ''}
                    preset="semiBold"
                    size={16}
                />
                <View
                    style={styles.titleContainer}
                >
                    <ELearningText
                        numberOfLines={1}
                        text={props?.author ?? ''}
                        preset="regular"
                        size={12}
                        style={{ color: color.smokyGray, marginVertical: 2, width: "60%" }}
                    />
                    <AirbnbRating
                        defaultRating={props?.courseRating ?? 0}
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
                    text={props?.courseDescription ?? ''}/>
            </View>
            <Divider style={{ marginTop: 4 }} />
            <View
                style={styles.priceContainer}
            >
                <ELearningText
                    numberOfLines={1}
                    preset="semiBold"
                    size={12}
                    text={props?.price ?? ''}
                    style={{marginLeft: 4}}
                />
                <ELearningLoadingButton
                    style={{ borderRadius: 8, zIndex: 1, paddingVertical: 6 }}
                    isLoading={false}
                    label="Details"
                    textStyle={{ color: color.whisperWhite , fontSize: 14}}
                    handlePress={() =>{}}

                />
            </View>
        </Card>
    );
};

export default ELearningCourseCard;

const styles = StyleSheet.create({
    container:{
        padding: 0,
        // width: SCREEN_WIDTH * 0.43,
        borderRadius: 16,
        overflow: "hidden",
        zIndex: 1
    },
    titleContainer:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginRight: 10,
        marginVertical: 6
    },
    priceContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginHorizontal: 6,
        paddingVertical: 8,
    }
});
