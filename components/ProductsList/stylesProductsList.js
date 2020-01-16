import styled from "styled-components";

import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export const Wrapper = styled(View)``;

export const Header = styled(Text)``;

export const List = styled(ScrollView)`
  flex-grow: 0;
  height: 300px;
`;

export const ProductBox = styled(TouchableOpacity)`
  margin: 10px 0;
  border: 1px solid ${props => props.theme.colors.dark};
  border-radius: ${props => props.theme.sizes.radius};
  padding: 8px;
`;

export const ProductText = styled(Text)``;
