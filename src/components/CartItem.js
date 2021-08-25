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

const CartItem = ({ item }) => {

    const [ count, setCount ] = useState(1)

    return (
        <Cart>
            <ItemName>
                { item.name }
            </ItemName>
            <CounterContainer>
                <Counter inc />
                    <CounterTotal>{count}</CounterTotal>
                <Counter />
            </CounterContainer>
            <Price>
                { item.price }
            </Price>
        </Cart>
    )
}

export default CartItem;