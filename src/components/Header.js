import React from 'react'
import { NavLink } from 'react-router-dom'
import user_profile_img from '../assets/images/mili-3.jpg'

import '../assets/css/header.css'

class Header extends React.Component {
    activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "rgb(20, 122, 169)" : "rgba(187, 187, 216, 0.916)",
        }
    }
    render(){
        return (
            <header>
                <NavLink to="/" className="site-logo">highland</NavLink>
                <nav className='navigation'>
                    <NavLink to="/" className="link" style={this.activeLinkStyle}>Home</NavLink>
                    <NavLink to="skills" className="link" style={this.activeLinkStyle}>Skills</NavLink>
                    <NavLink to="experience" className="link" style={this.activeLinkStyle}>Experience</NavLink>
                    <img className='user-profile-img' src={user_profile_img} />
                </nav>
            </header>
        )
    }
}

export default Header