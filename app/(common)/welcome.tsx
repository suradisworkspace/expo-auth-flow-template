import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router'

const WelcomeScreen = () => {
  const goToMain = () => {
    router.navigate('/main')
  }
  return (
    <>
      <Stack.Screen options={{ title: 'Welcome to mock' }} />
      <View>
        <Text>WelcomeScreen</Text>
        <Button title="go to main" onPress={goToMain} />
      </View>
    </>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({})
