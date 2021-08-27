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
            <CounterStyle onClick={inc}>+</CounterStyle>
        )
    } else {
        return (
            <CounterStyle onClick={dec}>-</CounterStyle>
        )
    }
}

export default Counter;