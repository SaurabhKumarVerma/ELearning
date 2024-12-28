import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CourseDetail from '@eLearning/components/CourseDetail/CourseDetail'
import { useSafeAreaInsets, withSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from '@rneui/themed';
import { observer } from 'mobx-react';

const CourseDetailScreen = () => {
        const {theme} = useTheme()
  return (
    <View style={{backgroundColor:  theme.colors.background, flex: 1,}}>
      <CourseDetail />
    </View>
  )
}

export default (observer(CourseDetailScreen))

const styles = StyleSheet.create({})