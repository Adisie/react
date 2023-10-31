import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Footer extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <footer style={{background: theme.hbg,color: theme.htxt}}>
                <h4>Footer Component</h4>
            </footer>
        );
    }
}
 
export default Footer;