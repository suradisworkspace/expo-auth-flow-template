import { Stack, useSegments, Redirect } from "expo-router";

const AppLayout = () => {
  const segments = useSegments();
  console.log("segments", segments);
  if ((segments as string[]).includes("(auth)")) {
    return <Redirect href="/auth/login" />;
  }
  return <Stack />;
};

export default AppLayout;
