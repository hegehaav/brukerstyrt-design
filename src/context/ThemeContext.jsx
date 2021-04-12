import React, { useState } from 'react';
import {fonts, themes} from '../utils/themes';

export const ThemeContext = React.createContext({
    globalStyle: null,
    updateGlobalStyle: () => {}
});

export const ThemeProvider = ({ children }) => {
    const [globalStyle, updateGlobalStyle] = useState({
        theme: themes.darkTheme,
        font: fonts.normalFont,
    });

    return (
        <ThemeContext.Provider value={{globalStyle, updateGlobalStyle}}>
            {children}
        </ThemeContext.Provider>
    );
};
