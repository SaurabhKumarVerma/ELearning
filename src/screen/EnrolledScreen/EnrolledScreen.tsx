import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed'
import Enrolled from '@eLearning/components/Enrolled/Enrolled'

const EnrolledScreen = () => {
  const {theme} = useTheme()
  return (
    <View style={{flex: 1, backgroundColor:  theme.colors.background }}>
      <Enrolled />
    </View>
  )
}

export default EnrolledScreen

const styles = StyleSheet.create({})