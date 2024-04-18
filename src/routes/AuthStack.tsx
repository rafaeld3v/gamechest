import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignInScreen } from "../screens/SignInScreen";
import { useTheme } from "styled-components";

const Stack = createNativeStackNavigator();

export function AuthStack() {
  const { colors } = useTheme();

  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.background,
        headerStyle: {
          backgroundColor: colors.black,
        },
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
}
