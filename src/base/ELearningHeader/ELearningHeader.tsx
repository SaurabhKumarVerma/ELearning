/**
 * ELearningHeader Component
 * 
 * This component serves as a customizable header.
 * It provides a consistent layout for displaying a title, optional navigation 
 * icons, and additional elements on the right side of the header.
 * 
 * Props:
 * - @headerText (string, optional): The text to be displayed as the header title.
 * - @headerContainerStyle (StyleProp<ViewStyle>, optional): Custom styles to be applied to the header container.
 * - @rightIcon (React.ReactElement, optional): A React element to be displayed on the right side of the header.
 * - @textPreset (Preset, optional): Preset style for the header text, allowing for consistent typography.
 * - @textSize (number, optional): Custom font size for the header text.
 * - @textStyle (StyleProp<TextStyle>, optional): Additional styles to be applied to the header text.
 * - @showLeftIcon (boolean, optional): Determines whether to show the back navigation icon on the left. Defaults to true.
 */
import {
    Pressable,
    StyleProp,
    StyleSheet,
    TextStyle,
    View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "@rneui/themed";
import { MODE } from "@eLearning/types/types";
import { useNavigation } from "@react-navigation/native";
import ELearningText, { Preset } from "../ELearningText/ELearningText";
import { color } from "@eLearning/theme/color";
import { ViewStyle } from "react-native";

interface IELearningHeader {
    headerText?: string;
    headerContainerStyle?: StyleProp<ViewStyle>;
    rightIcon?: React.ReactElement;
    textPreset?: Preset;
    textSize?: number;
    textStyle?: StyleProp<TextStyle>
    showLeftIcon?: boolean
}

const ELearningHeader = ({
    headerText,
    headerContainerStyle,
    rightIcon,
    textPreset,
    textSize,
    textStyle,
    showLeftIcon = true
}: IELearningHeader) => {
    const { theme } = useTheme();
    const navigation = useNavigation();
    const iconColor =
        theme.mode === MODE.DARK ? color.whisperWhite : color.blackForestGreen;

    const onGoBack = () => {
        if (navigation.canGoBack) {
            navigation.goBack();
        }
    };

    return (
        <View style={headerContainerStyle ?? styles.headerContainer}>
            {
                showLeftIcon && (
                    <Pressable onPress={onGoBack}>
                <AntDesign name="left" size={24} color={iconColor} />
            </Pressable>
                )
            }
            

            {headerText ? (
                <ELearningText
                    text={headerText}
                    preset={textPreset ?? "medium"}
                    size={textSize ?? 16}
                    style={textStyle ?? {}}
                />
            ) : null}

            {rightIcon ? <>{rightIcon}</> : <View />}
        </View>
    );
};

export default ELearningHeader;

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
});
