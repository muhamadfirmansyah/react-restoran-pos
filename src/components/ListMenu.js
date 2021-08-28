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