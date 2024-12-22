import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import ELearningText from '../ELearningText/ELearningText';
import { color } from '@eLearning/theme/color';
import { useTheme } from '@rneui/themed';
import { MODE } from '@eLearning/types/types';

interface IELearningAuthHeader {
    onClose: () => void
    onCtaClick: () => void
    ctaText: string
}

const ELearningAuthHeader = (props: IELearningAuthHeader) => {
    const {theme} = useTheme()
    const iconColor = theme.mode === MODE.DARK ? color.whisperWhite : color.blackForestGreen
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.onClose}>
        <Entypo name="cross" size={24} color={iconColor} />
        </TouchableOpacity>
     
      <TouchableOpacity onPress={props.onCtaClick}>
        <ELearningText text={props.ctaText} preset='semiBold' size={16} style={styles.textColor}/>
      </TouchableOpacity>
    </View>
  )
}

export default ELearningAuthHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textColor: {
        color: color.forestGreen
    }
})