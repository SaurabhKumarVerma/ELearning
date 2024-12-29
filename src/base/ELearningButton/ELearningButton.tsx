
/**
 * ELearningLoadingButton Component
 * 
 * A button component that displays a loading indicator when an action is in progress.
 * Props:
 * - @textPresets (Preset): Optional preset style for the button text. Defaults to "regular".
 * - @textSize (number): Optional size for the button text. Defaults to 18.
 * - @label (string): The text to be displayed on the button.
 * - @style (StyleProp<ViewStyle>): Optional additional styles for the button container.
 * - @textStyle (StyleProp<TextStyle>): Optional additional styles for the button text.
 * - @handlePress (function): A callback function to be called when the button is pressed.
 * - @isLoading (boolean): A flag indicating whether the button is in a loading state. If true, the button
 *   @will display a loading indicator instead of the label.
 * - @icon (ReactNode): Optional icon to be displayed alongside the button label.
 * - @iconStyle (StyleProp<ViewStyle>): Optional additional styles for the icon container.
 * - @buttonBackgroundColor (string): Optional background color for the button. If not provided, the
 *   @background color will be determined based on the current theme (dark or light).
 * 
 * 
 * The button will display the provided label and icon when not loading. When the `isLoading` prop
 * is set to true, the button will show an ActivityIndicator instead of the label, indicating to the
 * user that an action is in progress. The button is also disabled during loading to prevent multiple
 * presses.
 * 
 * The component uses the `useTheme` hook from RNEUI to apply theming, allowing for consistent styling
 * across the application based on the current theme mode (dark or light).
 */

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
                        style={[textStyle ?? styles.default]}
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
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 18,
        alignItems: "center",
        justifyContent: "center",
    },
    loadingButton: {
        paddingVertical: 16,
    },
    iconContainer: {
        marginRight: 16,
    },
    content: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    default: {
        color: color.whisperWhite
    }
});

export default ELearningLoadingButton;
