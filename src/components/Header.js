import React from 'react';
import {NavLink} from 'react-router-dom';
import user_profile_imae from '../assets/images/user/mili-3.jpg';

import {AiFillHome} from 'react-icons/ai';
import {AiFillSetting} from 'react-icons/ai';
import {RiUserSettingsFill} from 'react-icons/ri';
import {AiFillInfoCircle} from 'react-icons/ai';

class Header extends React.Component {
    activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "rgb(8, 120, 172)" : "rgba(206, 206, 238, 0.75)",
            fontStyle: isActive ? "italic" : "normal",
        }
    }
    render() {
        return (
             <header>
                <NavLink to='/' className='site-logo'>highlind</NavLink>
                <nav className='navigation'>
                    <NavLink className='link' to='/' style={this.activeLinkStyle}><AiFillHome className='icon' />Home</NavLink>
                    <NavLink className='link' to='skills' style={this.activeLinkStyle}><AiFillSetting className='icon' />Skills</NavLink>
                    <NavLink className='link' to='experience' style={this.activeLinkStyle}><RiUserSettingsFill className='icon' />Experience</NavLink>
                    <NavLink className='link' to='about' style={this.activeLinkStyle}><AiFillInfoCircle className='icon' />About</NavLink>
                </nav>
                <img className='user-profile-img' src={user_profile_imae} />
             </header>
        );
    }
}


export default Header;