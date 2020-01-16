import styled from "styled-components";

import { View, Text } from "react-native";

export const Button = styled(View)`
  padding: 10px;
  border-radius: ${props => props.theme.sizes.radius};
  background-color: ${props => props.theme.colors.accept};
  flex-direction: row;
  align-items: center;
`;

export const Label = styled(Text)`
  color: ${props => props.theme.colors.light};
  font-weight: bold;
`;

export const IconCont = styled(View)`
  margin-right: 10px;
`;