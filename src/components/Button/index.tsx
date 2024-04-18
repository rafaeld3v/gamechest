import React from "react";
import { useTheme } from "styled-components/native";
import IconsName from "@expo/vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/FontAwesome";
import { RFValue } from "react-native-responsive-fontsize";

import { Container, Title, Content, LoadingIndicator } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  iconName?: React.ComponentProps<typeof IconsName>["name"];
}

export function Button({
  title,
  onPress,
  isLoading = false,
  disabled = false,
  iconName,
}: ButtonProps) {
  const theme = useTheme();

  return (
    <Container onPress={onPress} disabled={isLoading || disabled}>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Content>
          {iconName && (
            <Icon
              name={iconName}
              size={RFValue(20)}
              color={theme.colors.shape}
            />
          )}
          <Title>{title}</Title>
        </Content>
      )}
    </Container>
  );
}
