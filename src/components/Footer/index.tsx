import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
`;

const Footer: React.FC = () => {

    const [date, setDate] = useState<Date>({} as Date);

    useEffect(() => {
        setDate(new Date());
    }, []);

    return (
        <Container>
            <p>{date.toString()}</p>
        </Container>
    );
};

export default Footer;