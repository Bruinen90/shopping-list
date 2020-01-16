import React from "react";
import { TouchableOpacity, View } from "react-native";

import * as Styled from "./stylesButton.js";

const Button = ({ style, children, icon, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Styled.Button style={style}>
      {icon && <Styled.IconCont>{icon}</Styled.IconCont>}
      <Styled.Label>{children}</Styled.Label>
    </Styled.Button>
  </TouchableOpacity>
);

export default Button;
