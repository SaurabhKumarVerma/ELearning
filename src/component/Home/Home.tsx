import { Appearance, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme, useThemeMode } from '@rneui/themed';
import ELearningImage from '@eLearning/base/ELearningImage/ELearningImage';
import { Onboarding } from '../Onborading/Onboarding';

const Home = () => {
    const theme = useTheme()
    const toggleDarkMode = () => {
      Appearance.getColorScheme() === 'dark' ?  Appearance.setColorScheme('light') :    Appearance.setColorScheme('dark')
    }
    
  return (
    <><Onboarding /></>
  )
}

export default Home

const styles = StyleSheet.create({})