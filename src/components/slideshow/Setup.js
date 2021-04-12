import React, {useState} from 'react';
import {SlideContent} from "../../styles/styledComponents";
import SyntaxHighlighter from "react-syntax-highlighter";
import {dracula} from "react-syntax-highlighter/dist/cjs/styles/hljs";
import Fade from 'react-reveal/Fade';


const codeSnippetContext = `
// 1. Definer en context 
const MyContext = React.createContext({
    null, 
    () => {}
});
`

const codeSnippetProvider = `
// 2. Definer en provider 
// tilgjengeliggjør contexten for child components  
const App = () => 
    const [theme, updateTheme] = useState("light")
    return (
        <MyContext.Provider value={{theme, updateTheme}}>
            <MyComponent />
            <MyOtherComponent />
        </MyContext.Provider>
    ); 
};
`

const codeSnippetHook = `
// 3. Bruk contexten 
const MyComponent = () => {
    const { theme, updateTheme } = useContext(MyContext)
    return(
        <div>
            <div>{theme}</div>
            <button onClick={() => updateTheme('dark')} >
                Click me!
            </button>
        </div>
    );
}
`

const Setup = () => {
    const [counter, setCounter] = useState(0)
    return (
        <SlideContent onClick={() => setCounter(counter + 1)}>
            <h1>Oppsett </h1>
            <ul>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {codeSnippetContext}
                </SyntaxHighlighter>
                <Fade when={counter > 0}>
                    <SyntaxHighlighter language="javascript" style={dracula}>
                        {codeSnippetProvider}
                    </SyntaxHighlighter>
                </Fade>
                <Fade when={counter > 1}>
                <SyntaxHighlighter language="javascript" style={dracula}>
                    {codeSnippetHook}
                </SyntaxHighlighter>
                </Fade>
            </ul>
        </SlideContent>
    );
}

export default Setup;