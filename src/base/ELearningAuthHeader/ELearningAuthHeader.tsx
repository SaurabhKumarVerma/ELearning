import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import ELearningText from '../ELearningText/ELearningText';
import { color } from '@eLearning/theme/color';
import { useTheme } from '@rneui/themed';
import { MODE } from '@eLearning/types/types';

// Interface defining the props for the ELearningAuthHeader component
interface IELearningAuthHeader {
  onClose: () => void; // Callback function to be executed when the close button is pressed
  onCtaClick?: () => void; // Optional callback function for the call-to-action button
  ctaText?: string; // Optional text to be displayed on the call-to-action button
}

const ELearningAuthHeader = (props: IELearningAuthHeader) => {
  // Retrieve the current theme context using the useTheme hook
    const {theme} = useTheme()
    // Determine the color of the icon based on the current theme mode (dark or light)
    const iconColor = theme.mode === MODE.DARK ? color.whisperWhite : color.blackForestGreen;

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={props.onClose}>
        <Entypo name="cross" size={24} color={iconColor} />
        </TouchableOpacity>
        {
                // Conditionally render the call-to-action button if ctaText is provided
                props.ctaText ? (
                    <TouchableOpacity onPress={props.onCtaClick}>
                        {/* ELearningText component to display the call-to-action text */}
                        <ELearningText 
                            text={props.ctaText} 
                            preset='semiBold' 
                            size={16} 
                            style={styles.textColor} 
                        />
                    </TouchableOpacity>
                ) : null // If no ctaText is provided, render nothing
            }
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