import React from "react";
import { NavLink } from "react-router-dom";
import cos from '../../assets/images/cos.jpg'

import {BsFillFileCodeFill} from 'react-icons/bs'
import {IoLogoDesignernews} from 'react-icons/io'
import {BsFillHddNetworkFill} from 'react-icons/bs'


class SideBar extends React.Component {
    render(){
        return (
            <div className="skill-side-bar">
                <h3>Skill Set</h3>
                <img className="cos-img" src={cos} />
                <ul>
                    <li>
                        <NavLink to='programming' className='link'><BsFillFileCodeFill />Programming</NavLink>
                    </li>
                    <li>
                        <NavLink to='design' className='link'><IoLogoDesignernews />Design</NavLink>
                    </li>
                    <li>
                        <NavLink to='networking' className='link'><BsFillHddNetworkFill />Networking</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default SideBar