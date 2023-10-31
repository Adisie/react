import React, { createContext,useState } from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = props => {
    const [theme,setTheme] = useState({
        isLightTheme: true,
        light: {hbg: 'rgb(158, 158, 158)',cbg: 'rgb(202, 201, 201)',dbg: 'rgb(174, 173, 173)',ht:'rgb(33, 33, 33)',pt: 'rgb(62, 61, 61)'},
        dark: {hbg: 'rgb(33, 33, 33)',cbg: 'rgb(86, 85, 85)',dbg: 'rgb(58, 57, 57)',ht:'rgb(170, 170, 170)',pt: 'rgb(200, 200, 200)'},
    })
    
    const themeToggler = () => {
        setTheme({...theme,isLightTheme: !theme.isLightTheme})
    }
    return ( 
        <ThemeContext.Provider value={{...theme,themeToggler: themeToggler}}>
            {props.children}
        </ThemeContext.Provider>
     );
}
 
export default ThemeContextProvider;
