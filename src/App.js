import React from 'react';

import user_profile_image from './assets/mili-3.jpg';

import "./css/app.css";

class App extends React.Component {
    render(){
        return (
            <div className='container'>
                <header>
                    <a href='' className='site-logo'>highland</a>
                    <nav className='navigation'>
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>Skills</a></li>
                            <li><a href=''>Experience</a></li>
                            <li><a href=''>Contact</a></li>
                        </ul>
                        <img src={user_profile_image} className='user-profile-img' />
                    </nav>
                </header>
            </div>
        )
    }
}


export default App;