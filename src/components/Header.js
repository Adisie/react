import React from "react";

import {AiFillHome} from "react-icons/ai";
import {RiAccountCircleFill} from "react-icons/ri";
import {MdGroups2} from "react-icons/md";
import {IoSettings} from "react-icons/io5";

import user_profile_img from "../assets/images/mili-3.jpg";

import "../css/index.css";

class Header extends React.Component {
    render(){
        return (
            <header>
                <a href="" className="site-logo">highland</a>
                <nav className="navigation">
                    <ul>
                        <li><a href=""><AiFillHome className="nav-icons" /> Home</a></li>
                        <li><a href=""><RiAccountCircleFill className="nav-icons" /> Firends</a></li>
                        <li><a href=""><MdGroups2 className="nav-icons" /> Groups</a></li>
                        <li><a href=""><IoSettings className="nav-icons" /> Settings</a></li>
                    </ul>
                </nav>
                <img className="user-profile-img" src={user_profile_img} />
            </header>
        )
    }
}


export default Header;