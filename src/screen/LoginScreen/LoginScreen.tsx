import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '@eLearning/components/Login/Login'
import { useTheme } from '@rneui/themed'

const LoginScreen = () => {
  const {theme} = useTheme()
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: theme.colors.background}}>
      <Login />
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})