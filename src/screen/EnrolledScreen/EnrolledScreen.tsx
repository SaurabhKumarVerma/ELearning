import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed'
import Enrolled from '@eLearning/components/Enrolled/Enrolled'
import { observer } from 'mobx-react'

const EnrolledScreen = () => {
  const {theme} = useTheme()
  return (
    <View style={{flex: 1, backgroundColor:  theme.colors.background }}>
      <Enrolled />
    </View>
  )
}

export default observer(EnrolledScreen)

const styles = StyleSheet.create({})