import React from 'react';
import reactLogo from '../../assets/react.svg';
import styled from 'styled-components';
import {SlideContent} from "../../styles/styledComponents";

const Image = styled.img`
    width: 40%;
`;

const Introduction = () => (
    <SlideContent>
        <h1>Brukerstyrt design med </h1>
        <Image alt='react' src={reactLogo} />
    </SlideContent>
);

export default Introduction;
