import React from "react";

import * as Styled from "./stylesProductsList";

const ProductsList = ({ list, itemPressed }) => {
  return (
    <Styled.Wrapper>
      <Styled.Header>Lista zakupów</Styled.Header>
      <Styled.List>
        {list.map(product => (
          <Styled.ProductBox
            key={product.name}
            onPress={itemPressed.bind(this, product.name)}
          >
            <Styled.ProductText>{product.name}</Styled.ProductText>
          </Styled.ProductBox>
        ))}
      </Styled.List>
    </Styled.Wrapper>
  );
};

export default ProductsList;
