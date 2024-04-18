import React, { useContext, useState } from "react";

import {
  Container,
  Title,
  Description,
  TitleWrapper,
  FormWrapper,
} from "./styles";

import { Button } from "../../components/Button";
import LogoDarkSVG from "../../assets/svgs/logo-dark.svg";
import LogoLightSVG from "../../assets/svgs/logo-light.svg";
import { ThemeContext, ThemeType } from "../../theme/Theme";
import { ActivityIndicator } from "react-native";

export function SignInScreen() {
  const [isLoading, setIsLoading] = useState(false);

  const { theme, toggleTheme } = useContext(ThemeContext);

  function handleButtonPress() {
    setIsLoading(true);
    setTimeout(() => {
      toggleTheme();
      setIsLoading(false);
    }, 2000);
  }

  return (
    <Container>
      {theme === ThemeType.dark ? <LogoDarkSVG /> : <LogoLightSVG />}

      <TitleWrapper>
        <Title>Olá</Title>
        <Description>Faça login na sua conta</Description>
      </TitleWrapper>

      <FormWrapper>
        <Button
          title="Entrar"
          onPress={handleButtonPress}
          isLoading={isLoading}
        />
      </FormWrapper>
    </Container>
  );
}
