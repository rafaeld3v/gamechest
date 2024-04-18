import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px 32px;
  gap: 80px;
  background: ${props => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(32)}px;
  font-weight: 500;
  color: ${props => props.theme.colors.shape};
`;

export const Description = styled.Text`
  font-size: ${RFValue(24)}px;
  font-weight: normal;
  color: ${props => props.theme.colors.shape};
`;

export const TitleWrapper = styled.View`
  align-items: center;
  justify-content: space-between;
`;

export const FormWrapper = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
