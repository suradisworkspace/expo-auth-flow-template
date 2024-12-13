import { useAuth, USER_TYPE } from '@/ctx/AuthContext'
import { Stack, useSegments, Redirect } from 'expo-router'

const AppLayout = () => {
  const segments = useSegments()
  const auth = useAuth()
  console.log('segments', segments)
  if ((segments as string[]).includes('(auth)')) {
    if (auth.userType !== USER_TYPE.MEMBER) {
      return <Redirect href="/auth/login" />
    }
  }
  return <Stack />
}

export default AppLayout
