import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Helvetica;
`;

const Button = styled.button`
    background-color: white;
    color: black;
    border: 2px solid #201414; 
    border-radius: 40px;
    cursor: pointer;
    outline: none;
    ::-moz-focus-inner { border: 0; }
`;

const App: React.FC = () => {

    const [contador, setContador] = React.useState(0);

    return (
        <Container>
            <h1>Contador</h1>
            <h2>{contador}</h2>
            <Button onClick={() => { setContador(contador => contador + 1) }}>Incrementar contador</Button>
            <Footer />
        </Container>
    );
};

export default App;