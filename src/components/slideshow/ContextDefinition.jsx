import React from 'react';
import {Image, SlideContent} from "../../styles/styledComponents";
import komponenttre from '../../assets/komponenttreet.svg'

const ContextDefinition = () => (
    <SlideContent>
        <h1>React Context</h1>
        <Image src={komponenttre}/>
    </SlideContent>
);

export default ContextDefinition;
