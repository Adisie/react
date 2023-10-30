import React, { Component } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

class Home extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <div style={{background: theme.bbg, color: theme.btxt}}>
                <h3>Home Component</h3>
            </div>
        );
    }
}
 
export default Home;