import React, {useContext } from 'react';

import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';



const Header = () => {
    const {isLightTheme,light,dark,themeToggler} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {isAuthenticated,logOutUser} = useContext(AuthContext);
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
                <button style={{borderColor: theme.htxt,color: theme.htxt}} onClick={themeToggler}>Switch Theme</button>
                <button style={{borderColor: theme.htxt,color: theme.htxt}} onClick={logOutUser}>
                    {isAuthenticated ?  <span>login</span>: <span>logout</span>}
                </button>
            </nav>
        </header>
     );
}
 
export default Header;
 