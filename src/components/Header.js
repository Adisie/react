import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from '../contexts/ThemeContext';

import ThemeToggler from './ThemeToggler';

class Header extends Component {
    static contextType = ThemeContext;
    render() { 
        const {isLightTheme,light,dark} = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <header style={{background: theme.hbg,color: theme.htxt}}>
                <NavLink className='site-logo' to='/' style={{color: theme.htxt}}>highland</NavLink>
                <nav className='navigation'>
                    <ul>
                        <li>
                            <NavLink className='link' to='/' style={{color: theme.htxt}}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='products' style={{color: theme.htxt}}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='about' style={{color: theme.htxt}}>About</NavLink>
                        </li>
                    </ul>
                    <ThemeToggler />
                </nav>
            </header>
        );
    }
}
 
export default Header;