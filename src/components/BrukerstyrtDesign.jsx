import React, {useContext} from 'react';
import styled from 'styled-components';
import {ThemeContext} from "../context/ThemeContext";
import {themes} from "../utils/themes";
import {getToggledFont} from "../utils/helpers";


const Button = styled.button`
    border: 3px solid ${(props) => props.theme.secondaryColor};
    font-size: 36px;
`;

const BrukerstyrtDesign = () => {
    const { globalStyle, updateGlobalStyle} = useContext(ThemeContext)
    return (
        <div>
            <Button
                className="button"
                theme={globalStyle.theme}
                onClick={() => updateGlobalStyle({...globalStyle, theme: themes.summerTheme})}
            >
                ☀️
            </Button>
            <Button
                className="button"
                theme={globalStyle.theme}
                onClick={() => updateGlobalStyle({...globalStyle, theme: themes.darkTheme})}
            >
                😈
            </Button>
            <Button
                className="button"
                theme={globalStyle.theme}
                onClick={() => updateGlobalStyle({...globalStyle, font: getToggledFont(globalStyle)})}
            >
                👓
            </Button>
        </div>
    );
};


export default BrukerstyrtDesign;
