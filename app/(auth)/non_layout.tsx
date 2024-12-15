import { Redirect, useRouter, Stack, Slot, useFocusEffect } from 'expo-router'
import { useAuth, USER_TYPE } from '@/ctx/AuthContext'

const AuthLayout = () => {
  const auth = useAuth()
  const router = useRouter()
  useFocusEffect(() => {
    if (auth.userType !== USER_TYPE.MEMBER) {
      // router.dismiss();
      router.replace('/auth/login')
    }
  })
  // if (auth.userType !== USER_rTYPE.MEMBER) {
  //   return <Redirect href="/login" />;
  // }
  return <Stack />
}

export default AuthLayout
