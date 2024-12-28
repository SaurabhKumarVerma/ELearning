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
