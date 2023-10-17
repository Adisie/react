
import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';



class SideBar extends React.Component {
    render(){
        return (
                <nav className='side-bar'>
                    <h3>Skill Set</h3>
                    <NavLink to="web-development" className="link">Web Development</NavLink>
                    <NavLink to="graphic-design" className="link">Graphic Design</NavLink>
                    <NavLink to="data-encoding" className="link">Data Encoding</NavLink>
                </nav>
        )
    }
}

export default SideBar;