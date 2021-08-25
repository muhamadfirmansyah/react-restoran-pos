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

