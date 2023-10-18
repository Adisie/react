import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './skills/SideBar'

import '../assets/css/skills.css'


class Skills extends React.Component {
    render(){
        return (
            <div className='skills-components'>
                <SideBar />
                <Outlet />
            </div>
        )
    }
}

export default Skills