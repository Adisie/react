import React from 'react'
import { NavLink } from 'react-router-dom'
import user_profile_image from '../assets/mili-3.jpg'


class Header extends React.Component {
    activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "rgb(50, 109, 157)" : "rgba(204, 204, 241,.75)",
        }
    }
    render(){
        return (
            <header>
                <NavLink className='site-logo' to='/' >highland</NavLink>
                <nav className='navigation'>
                    <ul>
                        <li>
                            <NavLink className='link' to='/' style={this.activeLinkStyle}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='programming' style={this.activeLinkStyle}>Programming</NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='design' style={this.activeLinkStyle}>Design</NavLink>
                        </li>
                        <li>
                            <NavLink className='link' to='development' style={this.activeLinkStyle}>Development</NavLink>
                        </li>
                    </ul>
                    <img className='user-profile-img' src={user_profile_image} alt=''/>
                </nav>
            </header>
        )
    }
}


export default Header