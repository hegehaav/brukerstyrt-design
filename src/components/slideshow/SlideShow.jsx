import React from 'react';
import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import Introduction from './Introduction';
import Agenda from './Agenda';
import Example from './Example';
import Summary from './Summary';
import {Arrow, Container} from "../../styles/styledComponents";
import Setup from "./Setup";
import ContextDefinition from "./ContextDefinition";

const CarouselUI = ({ position, handleClick, children }) => {
    return (
        <Container>
            {children}
            <Arrow onClick={handleClick} data-position={position- 1}>
                {'👈'}
            </Arrow>
            <Arrow right onClick={handleClick} data-position={position + 1}>
                {'👉'}
            </Arrow>
        </Container>
    );
}
const Carousel = makeCarousel(CarouselUI);

const SlideShow = () => (
    <Carousel defaultWait={1000000}>
        <Slide right>
            <Introduction />
        </Slide>
        <Slide right>
            <Agenda />
        </Slide>
        <Slide right>
            <ContextDefinition />
        </Slide>
        <Slide right>
            <Setup />
        </Slide>
        <Slide right>
            <Example />
        </Slide>
        <Slide right>
            <Summary />
        </Slide>
    </Carousel>
);

export default SlideShow;
