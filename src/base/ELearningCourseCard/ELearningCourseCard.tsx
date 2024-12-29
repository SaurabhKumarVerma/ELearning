/**
 * ELearningCourseCard Component
 * 
 * A card component that displays information about an course. This component is designed
 * to present key details such as the course image, title, author, price, description, and rating,
 * making it easy for users to browse and select courses.
 * 
 * Props:
 * - @id (string, optional): An optional identifier for the course, useful for navigation or tracking.
 * - @courseImage (string): The URL or path to the course image to be displayed at the top of the card.
 * - @title (string): The title of the course, displayed prominently on the card.
 * - @author (string): The name of the course author or instructor.
 * - @price (string): The price of the course, displayed at the bottom of the card.
 * - @courseDescription (string): A brief description of the course content, limited to three lines.
 * - @courseRating (number): The rating of the course, represented as a number (e.g., 4.5 out of 5).
 * - @navigateToDetail (function): A callback function that is triggered when the "Details" button is pressed,
 *   allowing navigation to the course detail page.
 * 
 * The component uses the `useTheme` hook from RNEUI to apply theming, ensuring that the card's background
 * color adapts to the current theme (light or dark). The card also includes dividers for better visual
 * separation of content.
 */
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
    navigateToDetail: (id:string | number) => void
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
