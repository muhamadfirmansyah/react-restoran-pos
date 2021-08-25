import React from 'react';
import Header from './components/Header';

import styled, { ThemeProvider } from 'styled-components';
import * as theme from './styled/theme'

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 92vh;
`

const MenuContainer = styled.div`
  width: 15%;
  padding: 0.5rem 0;
  padding-right: 0.5rem;
`

const ProductContainer = styled.div`
  width: 60%;
  height: 100%;
  background: ${ props => props.theme.light };
  border-left: 1px solid #f7f7f7;
  border-right: 1px solid #f7f7f7;
  padding: 0.5rem 0;
`

const CartContainer = styled.div`
  width: 25%;
  padding: 0.5rem 0;

`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      <Container>

        <MenuContainer>
          menu
        </MenuContainer>

        <ProductContainer>
          product
        </ProductContainer>

        <CartContainer>
          cart
        </CartContainer>

      </Container>
    </ThemeProvider>
  )
}

export default App;