import React, { useContext } from 'react';
import styled from 'styled-components';
import BrukerstyrtDesign from './components/BrukerstyrtDesign';
import SlideShow from './components/slideshow/SlideShow';
import './styles/index.css'
import {ThemeContext} from "./context/ThemeContext";

const App = () => {
    const { globalStyle } = useContext(ThemeContext)
    return (
        <AppContainer className="appContainer" theme={globalStyle.theme} font={globalStyle.font}>
            <SlideShow />
            <BrukerstyrtDesign />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    background-color: ${(props) => props.theme.primaryColor};
    h1 {
        color: ${(props) => props.theme.secondaryColor};
        font-size: ${(props) => props.font.header};
    }
    color: ${(props) => props.theme.tertiaryColor};

    p, li, a {
        font-size: ${(props) => props.font.paragraph};
    }
`;

export default App;
