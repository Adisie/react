import React from "react";
import {Link, NavLink} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import user_profile_image from "../assets/images/mili-3.jpg";

import {AiFillHome} from "react-icons/ai";
import {GiSkills} from "react-icons/gi";
import {SiExercism} from "react-icons/si";
import {BiSolidHelpCircle} from "react-icons/bi";


const Header = () => {
    const navigate = useNavigate()
    const activeLinkStyle = ({isActive}) => {
        return {
            fontWeight: isActive ? "bold" : "norma",
            color: isActive ? "rgb(66, 120, 173)" : "rgba(180, 181, 214, 0.942)"
        }
    }  
    return (
        <header>
            <Link to="/" className="site-logo">highland</Link>
            <nav className="navigation">
                <NavLink to="/" className="link" style={activeLinkStyle}><AiFillHome className="icon" />Home</NavLink>
                <NavLink to="skills" className="link" style={activeLinkStyle}><GiSkills className="icon" />Skills</NavLink>
                <NavLink to="experience" className="link" style={activeLinkStyle}><SiExercism className="icon" />Experience</NavLink>
            </nav>
            <div className="user-profile-help">
                <img className="user-profile-img" src={user_profile_image} />
                <BiSolidHelpCircle className="help-icon" onClick={()=>navigate("help")}/>
            </div>
        </header>
    )
}

export default Header;