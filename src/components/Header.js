import React, { Component } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

class Header extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <header style={{background: theme.hbg,color: theme.htxt}}>
                <h3 className='site-logo'>highland</h3>
                <nav className='navigation'>
                    <ul>
                        <li>Home</li>
                        <li>Products</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    <button style={{borderColor: theme.htxt,color: theme.htxt}}>Switch Theme</button>
                </nav>
            </header>
        );
    }
}
 
export default Header;