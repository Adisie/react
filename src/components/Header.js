import React from 'react'
import { NavLink } from 'react-router-dom'
import user_profile_img from '../assets/images/mili-3.jpg'

import '../assets/css/header.css'

class Header extends React.Component {
    render(){
        return (
            <header>
                <NavLink to="/" className="site-logo">highland</NavLink>
                <nav className='navigation'>
                    <NavLink to="/" className="link">Home</NavLink>
                    <NavLink to="skills" className="link">Skills</NavLink>
                    <NavLink to="experience" className="link">Experience</NavLink>
                    <img className='user-profile-img' src={user_profile_img} />
                </nav>
            </header>
        )
    }
}

export default Header