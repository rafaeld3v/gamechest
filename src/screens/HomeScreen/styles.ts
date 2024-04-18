import styled from "styled-components/native";

export const Box = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
`;

export const Title = styled.Text`
  font-size: 32px;
  color: ${props => props.theme.colors.primary};
`;
