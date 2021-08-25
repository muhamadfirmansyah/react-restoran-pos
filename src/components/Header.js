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