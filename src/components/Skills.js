import React from 'react';
import SideBar from './skills/SideBar';
import { Outlet } from 'react-router-dom';


class Skills extends React.Component {
    render() {
        return (
             <div className='skill-component'>
                <SideBar />
                <Outlet />
             </div>
        );
    }
}


export default Skills;