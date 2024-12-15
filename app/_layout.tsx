import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Redirect, Slot, Stack, useRouter, useSegments } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import 'react-native-reanimated'

import { useColorScheme } from '@/hooks/useColorScheme'
import { AuthProvider, useAuth, USER_TYPE } from '@/ctx/AuthContext'
import React from 'react'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

const NavigationRender = () => {
  const segments = useSegments()
  // const router = useRouter()
  const auth = useAuth()
  console.log('segments', segments)
  if ((segments as string[]).includes('(auth)')) {
    if (auth.userType !== USER_TYPE.MEMBER) {
      // router.replace('/auth/login')
      return <Redirect href="/auth/login" />
    }
  }
  return (
    <>
      <Stack />
      <StatusBar style="auto" />
    </>
  )
}

type RootLayoutProps = {
  children: React.JSX.Element
}

export default function RootLayout(props: RootLayoutProps) {
  const colorScheme = useColorScheme()
  const segments = useSegments()
  const auth = useAuth()
  const router = useRouter()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  useEffect(() => {
    console.log('segments', segments)
    if (segments[0] === '(auth)') {
      if (auth.userType !== USER_TYPE.MEMBER) {
        router.replace('/auth/login')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [segments[0]])

  if (!loaded) {
    return null
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(unauth)" />
          <Stack.Screen name="(common)" />
        </Stack>
        <StatusBar style="auto" />
      </AuthProvider>
    </ThemeProvider>
  )
}
