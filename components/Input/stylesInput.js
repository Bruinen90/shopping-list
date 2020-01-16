import styled from "styled-components";

import { TextInput } from "react-native";

export const MyInput = styled(TextInput)`
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.sizes.radius};
`;
