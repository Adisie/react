import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Home extends Component {
    render() { 
        return (
            <ThemeContext.Consumer>
                {themeContext=>{
                    const {isLightTheme,light,dark} = themeContext;
                    const theme = isLightTheme ? light : dark;
                    return (
                        <div className='content' style={{background: theme.cbg,color: theme.ctxt}}>
                            <h3>Song List</h3>
                            <ul>
                                <li style={{background: theme.hbg,color: theme.htxt}}>Demo Jemeregn</li>
                                <li style={{background: theme.hbg,color: theme.htxt}}>ሻማ ቡሬ</li>
                                <li style={{background: theme.hbg,color: theme.htxt}}>Blinding Light</li>
                            </ul>
                    </div>
                    )
                }}
            </ThemeContext.Consumer>
        );
    }
}
 
export default Home;