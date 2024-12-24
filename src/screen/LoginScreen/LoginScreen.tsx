import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from '@eLearning/components/Login/Login'

const LoginScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
      <Login />
    </ScrollView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})