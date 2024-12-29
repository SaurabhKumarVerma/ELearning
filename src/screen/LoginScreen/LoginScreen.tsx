import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '@eLearning/components/Login/Login'
import { useTheme } from '@rneui/themed'
import { observer } from 'mobx-react'

const LoginScreen = () => {
  const {theme} = useTheme()
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Login />
    </ScrollView>
  )
}

export default observer(LoginScreen)

const styles = StyleSheet.create({})