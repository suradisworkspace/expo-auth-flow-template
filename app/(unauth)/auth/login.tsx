import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
const Login = () => {
  const router = useRouter()
  const goToLoginForm = () => {
    router.navigate('/auth/login-form')
  }
  return (
    <>
      <Stack.Screen options={{ title: 'welcome to login' }} />
      <View>
        <Text>Login</Text>
        <Button title="go to login-form" onPress={goToLoginForm} />
      </View>
    </>
  )
}

export default Login

const styles = StyleSheet.create({})
