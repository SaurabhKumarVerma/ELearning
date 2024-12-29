import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '@rneui/themed'
import Account from '@eLearning/components/Account/Account'
import { observer } from 'mobx-react'

const AccountScreen = () => {
    const {theme} = useTheme()
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: theme.colors.background}}>
     <Account />
    </ScrollView>
  )
}

export default observer(AccountScreen)

const styles = StyleSheet.create({})