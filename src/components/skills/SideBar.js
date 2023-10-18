import React from "react";
import { NavLink } from "react-router-dom";
import cos from '../../assets/images/cos.jpg'

import {BsFillFileCodeFill} from 'react-icons/bs'
import {IoLogoDesignernews} from 'react-icons/io'
import {BsFillHddNetworkFill} from 'react-icons/bs'


class SideBar extends React.Component {
    activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "rgb(20, 122, 169)" : "rgba(187, 187, 216, 0.916)",
            borderBottom: isActive ? "2px solid rgb(20, 122, 169)" : "none",
        }
    }
    render(){
        return (
            <div className="skill-side-bar">
                <h3>Skill Set</h3>
                <img className="cos-img" src={cos} />
                <ul>
                    <li>
                        <NavLink to='programming' className='link' style={this.activeLinkStyle}><BsFillFileCodeFill />Programming</NavLink>
                    </li>
                    <li>
                        <NavLink to='design' className='link' style={this.activeLinkStyle}><IoLogoDesignernews />Design</NavLink>
                    </li>
                    <li>
                        <NavLink to='networking' className='link' style={this.activeLinkStyle}><BsFillHddNetworkFill />Networking</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar