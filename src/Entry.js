import React from 'react';

import App from './App';
import {ThemeProvider} from "./context/ThemeContext";

const Entry = () => {
    return (
        <ThemeProvider>
            <App />
        </ThemeProvider>
    );
};

export default Entry;
