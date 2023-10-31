import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();


class ThemeContextProvider extends Component {
    state = {  
        isLightTheme: true,
        light: {hbg:'rgb(179, 179, 179)',htxt:'rgb(38, 38, 38)',cbg:'rgb(210, 210, 210)',ctxt:'rgb(93, 92, 92)',fbg:'rgb(179, 179, 179)',ftxt:'rgb(38, 38, 38)'},
        dark: {hbg:'rgb(26, 26, 26)',htxt:'rgb(167, 164, 164)',cbg:'rgb(59, 57, 57)',ctxt:'rgb(212, 210, 210)',fbg:'rgb(26, 26, 26)',ftxt:'rgb(167, 164, 164)'},
    } 
    render() { 
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;