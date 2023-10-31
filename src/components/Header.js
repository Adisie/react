
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


const Header = () => {
    const {isLightTheme,light,dark,themeToggler} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;

    return ( 
        <header style={{background: theme.hbg,color: theme.ht}}>
            <h3 className="site-logo">highland</h3>
            <h4 style={{color: theme.ht}}>Note App</h4>
            <button style={{color: theme.ht, borderColor: theme.ht}} onClick={themeToggler}>Switch Theme</button>
        </header>
     );
}
 
export default Header;