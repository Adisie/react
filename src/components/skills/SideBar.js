import React from 'react';
import {NavLink} from 'react-router-dom';

import {BsFillFileCodeFill} from 'react-icons/bs';
import {IoLogoDesignernews} from 'react-icons/io';
import {FaEarthAmericas} from 'react-icons/fa6';

import programming from '../../assets/images/informative/computer-service.jpg';
import dats_science from '../../assets/images/informative/data-science-3.jpg';
import development from '../../assets/images/informative/web-design-3.jpg';

class SideBar extends React.Component {
    constructor(){
        super()
        this.state = {
            src: programming,
        }
        this.updateInfoImage = this.updateInfoImage.bind(this)
        this.activeLinkStyle = this.activeLinkStyle.bind(this)
    }

    updateInfoImage(src){
        this.setState(prev=>{
            return {
                src: src
            }
        })
    }
    activeLinkStyle = ({isActive}) => {
        return {
            color: isActive ? "rgb(8, 120, 172)" : "rgba(206, 206, 238, 0.75)",
            fontWeight: isActive ? "bold" : "normal",
        }
    }
    render() {
        return (
             <div className='sidebar-container'>
                <img className='informative-image' src={this.state.src} />
                <ul>
                    <li>
                        <NavLink to='programming' onClick={()=>{
                            this.updateInfoImage(programming)
                        }} className='link' style={this.activeLinkStyle}><BsFillFileCodeFill className='icon'/>Programming</NavLink>  
                    </li>
                    <li>
                        <NavLink to='data-science' onClick={()=>{
                            this.updateInfoImage(dats_science)
                        }} className='link' style={this.activeLinkStyle}><IoLogoDesignernews className='icon'/>Data Science</NavLink>
                    </li>
                    <li>
                        <NavLink to='development' onClick={()=>{
                            this.updateInfoImage(development)
                        }} className='link' style={this.activeLinkStyle}><FaEarthAmericas className='icon'/>Web Development</NavLink>
                    </li>
                </ul>
             </div>
        );
    }
}


export default SideBar;