import React from "react";
import { SignInScreen } from "./src/screens/SignInScreen";
import { ThemeProvider } from "./src/theme/Theme";
import { Background } from "./src/components/Background";

export function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <Background>
        <SignInScreen />
      </Background>
    </ThemeProvider>
  );
}
