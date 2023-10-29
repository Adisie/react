import React from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import user_profile_img from '../assets/images/profiles/mili-3.jpg';

const Header = () => {
    const navigate = useNavigate();

    const activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "black" : "rgba(255, 255, 255, 0.896)"
        }
    }

    return (
        <header>
            <NavLink className='site-logo' to='/'>highland</NavLink>
            <nav className='navigation'>
                <ul>
                    <li>
                        <NavLink className='link' to='/' style={activeLinkStyle}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink className='link' to='products' style={activeLinkStyle}>Products</NavLink>
                    </li>
                </ul>
                <img src={user_profile_img} className='user-profile-img' alt='user-profile-img' onClick={()=>navigate('about')}/>
            </nav>
        </header>
    )
}
    

export default Header;