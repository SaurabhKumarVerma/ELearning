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