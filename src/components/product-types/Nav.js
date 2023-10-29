
import { NavLink } from "react-router-dom";

const Nav = () => {
    const activeLinkStyle = ({isActive}) => {
        return {

        }
    }
    return (
        <ul>
            <li>
                <NavLink className='link' to='phones' style={activeLinkStyle}>Phones</NavLink>
            </li>
            <li>
                <NavLink className='link' to='computers' style={activeLinkStyle}>Computers</NavLink>
            </li>
            <li>
                <NavLink className='link' to='tv' style={activeLinkStyle}>TVs</NavLink>
            </li>
        </ul>
    );
}

export default Nav;