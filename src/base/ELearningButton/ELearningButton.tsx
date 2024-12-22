import React, { ReactNode } from "react";
import {
    StyleSheet,
    ActivityIndicator,
    StyleProp,
    ViewStyle,
    TextStyle,
    Pressable,
    View,
} from "react-native";
import ELearningText, { Preset } from "../ELearningText/ELearningText";
import { useTheme } from "@rneui/themed";
import { color } from "@eLearning/theme/color";
import { MODE } from "@eLearning/types/types";

interface ILoadingButtonProps {
    textPresets?: Preset;
    textSize?: number;
    label: string;
    style?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    handlePress: () => void;
    isLoading: boolean;
    icon?: ReactNode;
    iconStyle?: StyleProp<ViewStyle>
    buttonBackgroundColor?: string;
}

const ELearningLoadingButton: React.FC<ILoadingButtonProps> = ({
    label,
    style,
    textStyle,
    handlePress,
    textPresets = "regular",
    textSize = 18,
    isLoading,
    icon,
    iconStyle,
    buttonBackgroundColor
}) => {
    const { theme } = useTheme();    

    const backgroundColor = buttonBackgroundColor || (theme.mode === MODE.DARK ? color.forestGreen : color.deepGreenHover);


    return (
        <Pressable
            style={[
                styles.button,
                style,
                isLoading && styles.loadingButton,
                { backgroundColor },
            ]}
            onPress={handlePress}
            disabled={isLoading}
        >
            {isLoading ? (
                <ActivityIndicator color={color.whisperWhite} />
            ) : (

                <View style={styles.content}>
                    {icon && <View style={[styles.iconContainer, iconStyle]}>{icon}</View>}
                    <ELearningText
                        style={[textStyle]}
                        text={label}
                        preset={textPresets}
                        size={textSize}
                    />
                </View>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    loadingButton: {
        paddingVertical: 23,
    },
    iconContainer: {
        marginRight: 16,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
});

export default ELearningLoadingButton;
