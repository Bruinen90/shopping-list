import React, { useState } from "react";

import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import { theme } from "./common/theme";

import * as Styled from "./stylesApp";

import AddProduct from "./components/AddProduct/AddProduct";
import ProductsList from "./components/ProductsList/ProductsList";

export default function App() {
  const [productsList, setProductsList] = useState([]);

  const handleAddProdduct = product => {
    setProductsList(prev => [
      ...prev,
      {
        name: product
      }
    ]);
  };

  const handleRemoveProduct = productName => {
    setProductsList(prev =>
      prev.filter(product => product.name !== productName)
    );
  };
  return (
    <ThemeProvider theme={theme}>
      <Styled.Wrapper>
        <AddProduct clickAdd={handleAddProdduct} />
        <ProductsList list={productsList} itemPressed={handleRemoveProduct} />
      </Styled.Wrapper>
    </ThemeProvider>
  );
}
