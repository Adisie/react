
import React from 'react';
import { Routes,Route,Outlet } from 'react-router-dom';
import SideBar from './skills/SideBar';
import GraphicDesign from './skills/GraphicDesign';
import WebDevelopment from './skills/WebDevelopment';
import DataEncoding from './skills/DataEncoding';



class Skills extends React.Component {
    render(){
        return (
            <div className='skills-container'>
                <SideBar className='side-bar' />
                <Routes>
                    <Route index element={<WebDevelopment />} />
                    <Route path='web-development' element={<WebDevelopment />} />
                    <Route path='graphic-design' element={<GraphicDesign />} />
                    <Route path='data-encoding' element={<DataEncoding />} />
                </Routes>
            </div>
        )
    }
}

export default Skills;