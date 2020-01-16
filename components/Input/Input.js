import React from "react";

import * as Styled from "./stylesInput";

const Input = ({ style, value, onChangeText }) => {
  return <Styled.MyInput style={style} value={value} onChangeText={onChangeText} />;
};

export default Input;
