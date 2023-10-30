import { ThemeContext } from "../contexts/ThemeContext";

const ThemeToggler = () =>{
    return (
        <ThemeContext.Consumer>
            {context=>{
                const {toggleTheme} = context;
                return (
                    <button onClick={toggleTheme}>Toggle Theme</button>
                )
            }}
        </ThemeContext.Consumer>
    )
}

export default ThemeToggler;