import React, { Component } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';

import {BsFillMoonFill} from 'react-icons/bs';
import {BsFillSunFill} from 'react-icons/bs';

class ThemeToggler extends Component {
    static contextType = ThemeContext;
    state = { 
        nightMode: false
     } 

    symbolToggler = () =>{
        this.setState({nightMode: !this.state.nightMode})
    }


    render() { 
        const {isLightTheme,light,dark,themeToggler} = this.context;
        const theme = isLightTheme ? light : dark;

        return (
            <button onClick={()=>{
                this.symbolToggler()
                themeToggler()
            }} style={{color: theme.htxt}}>{this.state.nightMode ? <BsFillSunFill /> : <BsFillMoonFill />}</button>
        );
    }
}
 
export default ThemeToggler;