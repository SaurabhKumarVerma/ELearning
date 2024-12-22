import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ELearningText from '../ELearningText/ELearningText'
import { useTheme } from '@rneui/themed';
import { color } from '@eLearning/theme/color';
import { MODE } from '@eLearning/types/types';


interface IELearningCircularButton {
    onPress: () => void;
    text: string;
}
const ELearningCircularButton = (props: IELearningCircularButton) => {
    const {theme} = useTheme()
    const colorTheme = theme.mode === MODE.LIGHT ? color.darkForestGreen : color.forestGreen
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.container, {backgroundColor: colorTheme}]}>
            <ELearningText text={props.text} preset='medium' size={16} />
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