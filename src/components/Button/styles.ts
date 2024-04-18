import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: ${props => props.theme.colors.primary};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: bold;
  color: ${props => props.theme.colors.white};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(props => ({
  color: props.theme.colors.white,
  size: RFValue(32),
}))``;
