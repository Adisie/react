import React from 'react';
import profile_image from "./assets/tewodiros1.jpg"

import "./css/index.css";

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <header>
                    <a href='' className='site-logo'>highland</a>
                    <nav className='navigation'>
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>Experience</a></li>
                            <li><a href=''>Skills</a></li>
                            <li><a href=''>Contact</a></li>
                        </ul>
                        <img src={profile_image} className='user-profile-img' />
                    </nav>
                </header>
            </div>
        )
    }
}


export default App;