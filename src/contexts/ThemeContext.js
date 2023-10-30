import React, { Component, createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: {hbg: '#C9C7C7',htxt: '#181717',bbg: '#E6E3E3',btxt: '#161616'},
        dark: {hbg: '#212020',htxt: '#E3DFDF',bbg: '#464242',btxt: '#F8F5F5'},
     } 
    
    themeToggler = () =>{
        this.setState({isLightTheme: !this.state.isLightTheme})
    }

    render() { 
        return (
            <ThemeContext.Provider value={{...this.state,themeToggler: this.themeToggler}}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}
 
export default ThemeContextProvider;
