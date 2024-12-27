import {
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    TextStyle,
    View,
    ViewProps,
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
