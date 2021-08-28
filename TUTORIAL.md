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

---

### Membuat Component Menu

```js
// src/components/ListMenu.js

import React, { useState } from 'react';

import styled from 'styled-components';

const Menu = styled.li`
    height: 2rem;
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    position: relative;
    color: ${ props => props.theme.grey };
    cursor: pointer;
    $:not(:last-child) {
        margin-bottom: 0.5rem;
    }
    &:nth-child(2) {
        background: ${ props => props.theme.primary };
        color: ${ props => props.theme.light };
    }
`

const ListMenu = () => {
    const [menu] = useState(["Favourite", "Makanan", "Minuman", "Cemilan"]);

    return (
        <ul>
            { menu.map((item, index) => 
                <Menu key={index}>{item}</Menu>
            ) }
        </ul>
    )
}

export default ListMenu;
```


----


### Membuat Component Compute Box


```js
// src/components/Button.js

import React from 'react';
import styled from 'styled-components';

const MyButton = styled.button`
    height: 1.7rem;
    width: 6rem;
    border: none;
    padding: 0.2rem 0.5rem;
    color: #fff;
    text-align: center;
    cursor: pointer;
    &:focus {
        outlline: none;
    }
`

const PrimaryButton = styled(MyButton)`
    background: ${props => props.theme.primary }
`;

const WarningButton = styled(MyButton)`
background: ${props => props.theme.tertiary }
`

const Button = ({ primary }) => {
    if (primary) {
        return <PrimaryButton>Selesai</PrimaryButton>
    } else {
        return <WarningButton>Cancel</WarningButton>
    }
}


export default Button;
```

```js
// src/components/CalculateBox

import React from 'react';

import styled from 'styled-components';
import Button from './Button';

const Box = styled.div`
    position: fixed;
    bottom: 0;
    width: 20rem;
    height: 8rem;
    box-shadow: 1px 1px 10px 1px #ccc;
    padding: 0.4rem;
    right: 1rem;
`
const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
`

const Pay = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    input[type=number] {
        border: none;
        border-bottom: 1px solid #000;
        font-weight: bold;
        text-align: right;
        &:focus {
            outline: none;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
`

const Change = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const CalculateBox = () => {
    return (
        <Box>
            <Total>
                <h4>Total</h4>
                <b>23000</b>
            </Total>
            <Pay>
                <p>Jumlah Bayar</p>
                <input type="number" />
            </Pay>
            <Change>
                <p>Kembalian</p>
                <p>10000</p>
            </Change>
            <BtnBox>
                <Button />
                <Button primary />
            </BtnBox>
        </Box>
    )
}

export default CalculateBox;
```

---

### Membuat Fungsi Tambah Product ke Cart

```js
// src/store/actions/product.js

export const addCart = id => {
    return {
        type: "ADD_TO_CART",
        payload: id
    }
}
```

---

### Membuat Fungsi Increment, Decrement dan Remove Cart Item

```js
// src/store/actions/product.js

export const addCart = id => {
    return {
        type: "ADD_TO_CART",
        payload: id
    }
}

export const inc = id => {
    return {
        type: "INCREMENT",
        payload: id
    }
}

export const dec = id => {
    return {
        type: "DECREMENT",
        payload: id
    }
}

export const removeCartItem = id => {
    return {
        type: "REMOVE",
        payload: id
    }
}
```

```js
// src/store/reducers/productRedurect.js

import { products } from '../../utils/data'

const initialState = {
    products: products,
    carts: []
}

const productReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case "ADD_TO_CART":
            const itemInCart = state.carts.find(item => item.id === payload);
            const newItemCart = state.products.find(item => item.id === payload);

            if (!itemInCart) {
                return {
                    ...state,
                    carts: [...state.carts, newItemCart],
                }
            } else {
                return state
            }

        case "INCREMENT":
            const originalPrice = state.products.find(item => item.id === payload).price;
            const incCart = state.carts.map(item => {
                if (item.id === payload) {
                    return {
                        ...item,
                        price: item.price + originalPrice
                    }
                } else {
                    return item;
                }
            })

            return {
                ...state,
                carts: incCart
            }

        case "DECREMENT":
            const decPrice = state.products.find(item => item.id === payload).price;
            const decCart = state.carts.map(item => {
                if (item.id === payload) {
                    return {
                        ...item,
                        price: item.price - decPrice
                    }
                } else {
                    return item;
                }
            })

            return {
                ...state,
                carts: decCart
            }

        case "REMOVE":
            return {
                ...state,
                carts: state.carts.filter(item => item.id !== payload)
            }
        default:
            return state;
    }
}

export default productReducer;
```

---


### Membuat Fungsi Kalkulasi Pembayaran

```js
// src/components/CalculateBox.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';
import Button from './Button';

const Box = styled.div`
    position: fixed;
    bottom: 0;
    width: 20rem;
    height: 8rem;
    box-shadow: 1px 1px 10px 1px #ccc;
    padding: 0.4rem;
    right: 1rem;
`
const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
`

const Pay = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    input[type=number] {
        border: none;
        border-bottom: 1px solid #000;
        font-weight: bold;
        text-align: right;
        &:focus {
            outline: none;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
`

const Change = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const CalculateBox = () => {

    const carts = useSelector(state => state.product.carts);
    const total = carts.reduce((totalPrice, current) => totalPrice + current.price, 0);

    const [pay, setPay] = useState(0);
    const [change, setChange] = useState(0);

    const calculate = () => {
        if (pay > total) {
            setChange(pay - total);
        }
    }

    return (
        <Box>
            <Total>
                <h4>Total</h4>
                <b>{total}</b>
            </Total>
            <Pay>
                <p>Jumlah Bayar</p>
                <input type="number" onChange={(e) => setPay(e.target.value)} />
            </Pay>
            <Change>
                <p>Kembalian</p>
                <p>{change}</p>
            </Change>
            <BtnBox>
                <Button />
                <Button primary action={calculate} />
            </BtnBox>
        </Box>
    )
}

export default CalculateBox;
```

---

### Membuat Fungsi Reset Cart Item

```js
// src/components/CalculateBox.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { resetCart } from '../store/actions/product';
import Button from './Button';

const Box = styled.div`
    position: fixed;
    bottom: 0;
    width: 20rem;
    height: 8rem;
    box-shadow: 1px 1px 10px 1px #ccc;
    padding: 0.4rem;
    right: 1rem;
`
const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
`

const Pay = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.4rem;
    input[type=number] {
        border: none;
        border-bottom: 1px solid #000;
        font-weight: bold;
        text-align: right;
        &:focus {
            outline: none;
        }
        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
`

const Change = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.6rem;
`

const BtnBox = styled.div`
    display: flex;
    justify-content: space-between;
`

const CalculateBox = () => {

    const carts = useSelector(state => state.product.carts);
    const total = carts.reduce((totalPrice, current) => totalPrice + current.price, 0);

    const dispatch = useDispatch();

    const [pay, setPay] = useState("");
    const [change, setChange] = useState(0);

    const calculate = () => {
        if (pay >= total) {
            setChange(pay - total);
        }
    }

    const reset = () => {
        dispatch(resetCart())

        setChange(0);
        setPay("");
    }

    return (
        <Box>
            <Total>
                <h4>Total</h4>
                <b>{total}</b>
            </Total>
            <Pay>
                <p>Jumlah Bayar</p>
                <input type="number" onChange={(e) => setPay(e.target.value)} value={pay} />
            </Pay>
            <Change>
                <p>Kembalian</p>
                <p>{change}</p>
            </Change>
            <BtnBox>
                <Button text="Cancel" action={reset} />
                <Button primary action={calculate} text="Selesai" />
            </BtnBox>
        </Box>
    )
}

export default CalculateBox;
```

---

### Membuat Fungsi Mengubah Menu dan Menampilkan Pesan Item Sudah Ada

```js
// src/store/reducers/ProductReducer.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { changeMenu } from '../store/actions/product';

const Menu = styled.li`
    height: 2rem;
    display: flex;
    align-items: center;
    padding-left: 0.3rem;
    position: relative;
    color: ${ props => props.theme.grey };
    cursor: pointer;
    $:not(:last-child) {
        margin-bottom: 0.5rem;
    }
    &.active {
        background: ${ props => props.theme.primary };
        color: ${ props => props.theme.light };
    }
`

const ListMenu = () => {
    const [menu] = useState(["Favourite", "Makanan", "Minuman", "Cemilan"]);

    const dispatch = useDispatch();

    const activeMenu = useSelector(state => state.product.menu);

    const chmenu = (menu) => {
        dispatch(changeMenu(menu));
    }

    return (
        <ul>
            { menu.map((item, index) => 
                <Menu key={index} 
                      className={ activeMenu === item.toLowerCase() ? 'active' : '' }
                      onClick={() => chmenu(item.toLowerCase())}>{item}</Menu>
            ) }
        </ul>
    )
}

export default ListMenu;
```