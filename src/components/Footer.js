import React, {useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


const Footer = () => {
    const {isLightTheme,light,dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <footer style={{background: theme.hbg,color: theme.htxt}}>
            <h4>Footer Component</h4>
        </footer>
     );
}
 
export default Footer;