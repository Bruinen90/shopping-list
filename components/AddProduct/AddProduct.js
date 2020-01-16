import React, { useState } from "react";

// Styles
import * as Styled from "./stylesAddProduct";

// Components
import Input from "../Input/Input";
import Button from "../Button/Button";

// Icons
import { Ionicons } from "@expo/vector-icons";

const AddProduct = ({ clickAdd }) => {
  const [textInput, setTextInput] = useState("");

  const handleAddProduct = () => {
    clickAdd(textInput);
    setTextInput("");
  };
  return (
    <Styled.Wrapper>
      <Input
        style={{ marginVertical: 10, minWidth: 150, height: 40, padding: 8 }}
        value={textInput}
        onChangeText={setTextInput}
      />
      <Button
        style={{ height: 40, marginLeft: 10 }}
        icon={<Ionicons name="md-add" size={18} color="white" />}
        onPress={handleAddProduct}
      >
        Dodaj
      </Button>
    </Styled.Wrapper>
  );
};

export default AddProduct;
