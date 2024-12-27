import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Card, useTheme } from "@rneui/themed";
import ELearningImage from "../ELearningImage/ELearningImage";
import { SCREEN_WIDTH } from "@eLearning/constant/constant";
import ELearningText from "../ELearningText/ELearningText";
import { color } from "@eLearning/theme/color";

const ELearningListingCard = () => {
    const { theme } = useTheme();
    return (
        <Card
            containerStyle={styles.container}
        >
            <View style={{ flexDirection: "row" }}>
                <ELearningImage
                    imageData={{
                        source:
                            "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg",
                        style: { aspectRatio: 1.6, borderRadius: 6 },
                    }}
                />

                <View style={styles.textContainer}>
                    <ELearningText
                        style={{ width: "90%" }}
                        numberOfLines={2}
                        text="Title kdjbaskjdbkasjbdkjas  jashdasjdlkasj hdkashdnlasdjlas dlahdlkasdjlas asldjaklsjdlkasj ndlkajsdklasjld l dkajsdkajd kladjkajsdk "
                        size={16}
                        preset="medium"
                    />
                    <ELearningText
                        text="Author"
                        numberOfLines={1}
                        size={10}
                        preset="medium"
                        style={{ color: color.gray }}
                    />
                    <ELearningText text="Price" size={14} preset="medium" />
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
