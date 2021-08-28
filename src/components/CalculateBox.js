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