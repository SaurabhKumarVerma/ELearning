import { Appearance, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme, useThemeMode } from '@rneui/themed';
import ELearningImage from '@eLearning/base/ELearningImage/ELearningImage';
import { Onboarding } from '../Onborading/Onboarding';
import GettingStarted from '../Getting-Started/GettingStarted';
import { MODE } from '@eLearning/types/types';
import ELearningCourseCard from '@eLearning/base/ELearningCourseCard/ELearningCourseCard';

const Home = () => {
    const theme = useTheme()
    const toggleDarkMode = () => {
      Appearance.getColorScheme() === MODE.DARK ?  Appearance.setColorScheme(MODE.LIGHT) :    Appearance.setColorScheme(MODE.DARK)
    }
    
  return (
    <Pressable style={{marginTop: 100, flexDirection: 'row'}} onPress={toggleDarkMode}>
      <ELearningCourseCard /> 
      <ELearningCourseCard /> 
      </Pressable>
  )
}

export default Home

const styles = StyleSheet.create({})