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