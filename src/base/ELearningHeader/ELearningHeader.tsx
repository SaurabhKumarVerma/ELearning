import {
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
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

interface IELearningHeader {
    headerText?: string;
    headerContainerStyle?: StyleProp<ViewProps>;
    rightIcon?: React.ReactElement;
    textPreset?: Preset;
    textSize?: number;
}

const ELearningHeader = (props: IELearningHeader) => {
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
        <View style={props.headerContainerStyle ?? styles.headerContainer}>
            <Pressable onPress={onGoBack}>
                <AntDesign name="left" size={24} color={iconColor} />
            </Pressable>

            {props.headerText ? (
                <ELearningText
                    text={props.headerText}
                    preset={props.textPreset ?? "medium"}
                    size={props.textSize ?? 16}
                />
            ) : null}

            {props.rightIcon ? <>{props.rightIcon}</> : null}
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
