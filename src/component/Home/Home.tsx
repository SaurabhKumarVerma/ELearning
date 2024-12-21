import { Appearance, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme, useThemeMode } from '@rneui/themed';

const Home = () => {
    const theme = useTheme()
    const toggleDarkMode = () => {
      Appearance.getColorScheme() === 'dark' ?  Appearance.setColorScheme('light') :    Appearance.setColorScheme('dark')
    }
    
  return (
    <Pressable onPress={toggleDarkMode} style={{ marginTop: 100, backgroundColor: theme.theme.colors.background }}>
      <Text>Home</Text>
    </Pressable>
  )
}

export default Home

const styles = StyleSheet.create({})