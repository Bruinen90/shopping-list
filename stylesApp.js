import styled from "styled-components";

import { View } from "react-native";

export const Wrapper = styled(View)`
  background-color: ${props => props.theme.colors.light};
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;
