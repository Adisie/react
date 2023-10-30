import React, {Component} from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

class Header extends Component { 
    render() { 
        

        return (
            <ThemeContext.Consumer>
                {context=>{
                    const {isLightTheme,light,dark} = context;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <header style={{background: theme.ui,color:theme.syntax}}>
                            <h3>Context API</h3>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </header>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default Header;