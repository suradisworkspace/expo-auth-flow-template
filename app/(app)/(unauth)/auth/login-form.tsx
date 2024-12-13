import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const LoginFormScreen = () => {
  const router = useRouter();
  const goTo = () => {
    router.navigate("/welcome-more");
  };
  return (
    <View>
      <Text>LoginFormScreen</Text>
      <Button title="back to welcome" onPress={goTo} />
    </View>
  );
};

export default LoginFormScreen;

const styles = StyleSheet.create({});
