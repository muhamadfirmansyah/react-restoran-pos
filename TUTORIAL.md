1. Install Project
2. Tambah library: `yarn add redux react-redux redux-devtools-extension styled-components`

---

### Styling dengan styled component

Belajar styled-components di (https://styled-componets.org/docs)[https://styled-componets.org/docs]

Install library dengan `yarn add styled-components`

```js
// App.js

import logo from './logo.svg'
import './App.css';

import styled, { ThemeProvider } from 'styled-components'

const theme = {
  primary: 'red',
  secondary: 'blue'
}

const Container = styled.div`
  text-align: center;
`

const Head = styled.h1`
  color: ${props => props.theme.secondary};
`

const Brand = styled.img`
  height: 10vh;
  margin-top: 2rem;
`

const Button = styled.button`
  color: white;
  background: ${props => props.primary ? 'blue' : 'green' };
  padding: 0.5rem 1rem;
  border: none;
  margin: 0 1rem;
`

const TomatoButton = styled(Button)`
  background: tomato;
`

const Wrapper = styled.div`
  background: yellow;
  &.test {
    background: orange;
  }
`

const AnotherButton = styled.button`
  ${props => {
    switch(props.variant) {
      case "primary":
        return "background: blue";
      case "success":
        return "background: green";
      default:
        return "background: grey";
    }
  }}
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Brand src={logo} alt="logo" />
        <Head>Styled component</Head>
        <Button>primary</Button>
        <Button primary>primary</Button>
        <TomatoButton>My Tomato</TomatoButton>
        <Wrapper>biasa</Wrapper>
        <Wrapper className="test">with classname</Wrapper>
        <AnotherButton variant="primary">primary</AnotherButton>
        <AnotherButton variant="success">success</AnotherButton>
        <AnotherButton variant="">grey</AnotherButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;

```

---

### Membuat Component Header

```js
// src/components/Header.js

import React from 'react'

import styled from 'styled-components'

const Head = styled.div`
    height: 8vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #4abad1;
    color: #fff;
`

const Header = () => {
    return (
        <Head>
            <h1>KASIR</h1>
        </Head>
    )
}

export default Header
```

```js
// App.js

import React from 'react';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header/>
    </div>
  )
}

export default App;
```



---

### Menambahkan theme dan layout

```js
// src/styled/theme.js

export const primary   = "#4adad1"
export const secondary = "#f6a420"
export const tertiary  = "#01514a"
export const light     = "#ffffff"
export const dark      = "#000000"
export const grey      = "#bcb3b3"

```

---

### Membuat komponen produk card

```js
// src/components/ProductCard.js

import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 17%;
    height: 12rem;
    cursor: pointer;
`;

const CardImg = styled.img`
    width: 100%;
    height: 50%;
`;

const NamePrice = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ProductCard = ({ item }) => {
    return (
        <Card>
            <CardImg src={item.image.default} alt="Gambar" />
            <NamePrice>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </NamePrice>
        </Card>
    )
}

export default ProductCard;
```

```js
// src/store/reducers/productReducer.js

import { products } from '../../utils/data'

const initialState = {
    products: products,
    carts: []
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        default:
            return state;
    }
}

export default productReducer;
```

---


### Membuat Component Product Item

```js
// src/components/CartItems.js

import React, { useState } from 'react';
import styled from 'styled-components';

import Counter from './Counter'

const Cart = styled.div`
    display: flex;
    width: 95%;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    padding: 0 0.3rem;
    margin: 0.5rem auto;
    background: #fff;
    box-shadow: 1px 1px 10px 1px #ccc;
`

const CounterContainer = styled.div`
    display: flex;
    width: 30%;
    text-align: center;
`

const ItemName = styled.div`
    width: 40%;
    padding-left: 0.5rem;
`

const Price = styled.div`
    width: 30%;
    text-align: center;
`

const CounterTotal = styled.div`
    margin: 0 0.3rem;
`

const CartItem = () => {

    const [ count, setCount ] = useState(1)

    return (
        <Cart>
            <ItemName>
                name
            </ItemName>
            <CounterContainer>
                <Counter inc />
                    <CounterTotal>{count}</CounterTotal>
                <Counter />
            </CounterContainer>
            <Price>
                27000
            </Price>
        </Cart>
    )
}

export default CartItem;
```

```js
// src/components/Counter.js

import React from 'react';

import styled from 'styled-components';

const CounterStyle = styled.div`
    width: 1rem;
    height: 1rem;
    background: ${ props => props.theme.secondary };
    color: #fff;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`

const Counter = ({inc, dec}) => {
    if (inc) {
        return (
            <CounterStyle>+</CounterStyle>
        )
    } else {
        return (
            <CounterStyle>-</CounterStyle>
        )
    }
}

export default Counter;
```