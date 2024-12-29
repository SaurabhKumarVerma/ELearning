/**
 * ELearningCircularButton Component
 * 
 * A circular button component designed.This button can be customized
 * with different text, colors, and styles, making it versatile for various use cases within the app.
 * 
 * Props:
 * - @onPress (function): A callback function that is triggered when the button is pressed.
 * - @text (string): The text to be displayed inside the circular button.
 * - @style (StyleProp<ViewStyle>): Optional additional styles for the button container.
 * - @backgroundColor (string): Optional background color for the button. If not provided, the background
 *   @color will be determined based on the current theme (light or dark).
 * - @textColor (string): Optional text color for the button label. If not provided, it defaults to
 *   a predefined color (whisperWhite).
 * The button is styled to be circular with a fixed width and height of 110 units, and it includes
 * shadow effects for a raised appearance. The button's text is centered within the circle, and the
 * component adapts its background color based on the current theme mode (light or dark).
 * 
 * The component utilizes the `useTheme` hook from RNEUI to apply theming, ensuring consistent styling
 * across the application based on the user's selected theme.
 */
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import React from 'react'
import ELearningText from '../ELearningText/ELearningText'
import { useTheme } from '@rneui/themed';
import { color } from '@eLearning/theme/color';
import { MODE } from '@eLearning/types/types';


interface IELearningCircularButton {
    onPress: () => void;
    text: string;
    style?:StyleProp<ViewStyle>;
    backgroundColor?: string;
    textColor?: string;
}
const ELearningCircularButton = (props: IELearningCircularButton) => {
    const {theme} = useTheme()
    const colorTheme = props.backgroundColor || ( theme.mode === MODE.LIGHT ? color.darkForestGreen : color.forestGreen)
    const textColor = props.textColor || color.whisperWhite
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style, {backgroundColor: colorTheme}]}>
            <ELearningText text={props.text} preset='medium' size={16} style={{color: textColor}}/>
        </TouchableOpacity>
    )
}

export default ELearningCircularButton

const styles = StyleSheet.create({
    container: {
        borderRadius: 55,
        width: 110,
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.43,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 20
    }
})