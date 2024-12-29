/**
 * ELearningListingCard Component
 * 
 * This component is designed to display a card that showcases an 
 * course. It presents essential information about the course, including 
 * the course image, title, author, and price, in a visually appealing 
 * format using the Card component from RNEUI.
 * 
 * Props:
 * - @courseImage (string): The URL or source of the course image to be displayed.
 * - @courseTitle (string): The title of the course, which will be shown prominently.
 * - @author (string): The name of the author or instructor of the course.
 * - @price (string): The price of the course, which will be displayed to the user.
 * 
 * Functionality:
 * - The component uses a Card layout to encapsulate the course information, 
 *   providing a clean and organized presentation.
 * - The course image is rendered using the `ELearningImage` component, which 
 *   handles image loading and display.
 * - The course title, author, and price are displayed using the `ELearningText` 
 *   component, allowing for consistent typography and styling.
 * - The layout is structured using a flexbox to arrange the image and text 
 *   side by side, ensuring a responsive design.
 */
import { StyleSheet, View } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import ELearningImage from "../ELearningImage/ELearningImage";
import ELearningText from "../ELearningText/ELearningText";
import { color } from "@eLearning/theme/color";

interface IELearningListingCard {
    courseImage: string;
    courseTitle: string;
    author: string;
    price: string;
}

const ELearningListingCard = (props: IELearningListingCard) => {
    return (
        <Card
            containerStyle={styles.container}
        >
            <View style={{ flexDirection: "row" }}>
                <ELearningImage
                    imageData={{
                        source:props.courseImage,
                        style: { aspectRatio: 1.6, borderRadius: 6 },
                    }}
                />

                <View style={styles.textContainer}>
                    <ELearningText
                        style={{ width: "90%" }}
                        numberOfLines={2}
                        text={props.courseTitle}
                        size={16}
                        preset="medium"
                    />
                    <ELearningText
                        text={props.author}
                        numberOfLines={1}
                        size={10}
                        preset="medium"
                        style={{ color: color.gray }}
                    />
                    <ELearningText text={props.price} size={14} preset="medium" />
                </View>
            </View>
        </Card>
    );
};

export default ELearningListingCard;

const styles = StyleSheet.create({
    container:{
        borderRadius: 16,
        overflow: "hidden",
        padding: 8,
    },
    textContainer:{ 
        width: "80%", 
        paddingHorizontal: 20 
    }
});
