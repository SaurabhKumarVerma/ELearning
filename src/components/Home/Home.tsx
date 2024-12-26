import { Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed';
import ELearningCourseCard from '@eLearning/base/ELearningCourseCard/ELearningCourseCard';
import { useNavigation } from '@react-navigation/native';
import { ESCREEN } from '@eLearning/types/screenName';

const Home = () => {
    const theme = useTheme()
    const {navigate} = useNavigation()
    const toggleDarkMode = () => {
      navigate(ESCREEN.COURSE_DETAIL)
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